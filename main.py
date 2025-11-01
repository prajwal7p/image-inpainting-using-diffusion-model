from flask import Flask, request, jsonify, send_file
from diffusers import StableDiffusionInpaintPipeline
from segment_anything import sam_model_registry, SamPredictor
from PIL import Image
import torch
import numpy as np
import io
import gc
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# -------------------- CONFIG -------------------- #
device = "cuda" if torch.cuda.is_available() else "cpu"
torch.backends.cudnn.benchmark = True  # Optimizes conv layers
print(f"Using device: {device}")

# -------------------- MODEL LOADING -------------------- #
sam_checkpoint = "E:/Sam_Model/Backend/sam_vit_b_01ec64.pth"
model_type = "vit_b"

print("Loading SAM model...")
sam = sam_model_registry[model_type](checkpoint=sam_checkpoint).to(device)
sam.eval()
predictor = SamPredictor(sam)

print("Loading Stable Diffusion Inpainting pipeline...")
pipe = StableDiffusionInpaintPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-inpainting",
    revision="fp16" if torch.cuda.is_available() else "main",
    torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32,
)
pipe.to(device)
pipe.enable_attention_slicing()  # Reduce VRAM load
pipe.enable_xformers_memory_efficient_attention()  # Needs xformers installed

selected_points = []

# -------------------- HELPERS -------------------- #
def to_base64(img):
    """Convert PIL image to base64."""
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()

def blend_overlay(image, mask, alpha=0.5):
    """Red overlay for mask preview."""
    img = np.array(image).astype(np.float32)
    m = np.array(mask).astype(bool)
    img[m] = img[m] * (1 - alpha) + np.array([255, 0, 0]) * alpha
    return Image.fromarray(img.astype(np.uint8))

# -------------------- ROUTES -------------------- #
@app.route("/generate_mask", methods=["POST"])
def generate_mask():
    """Generate segmentation mask using SAM."""
    data = request.json
    image_data = base64.b64decode(data["image"].split(",")[1])
    image = Image.open(io.BytesIO(image_data)).convert("RGB")
    point = data["point"]
    
    img_arr = np.array(image).astype(np.uint8)
    predictor.set_image(img_arr)

    selected_points.append(point)
    input_points = np.array(selected_points)
    input_labels = np.ones(input_points.shape[0])

    with torch.inference_mode():
        masks, _, _ = predictor.predict(
            point_coords=input_points,
            point_labels=input_labels,
            multimask_output=False,
        )

    mask = (masks[0] * 255).astype(np.uint8)
    mask_img = Image.fromarray(mask)
    overlay = blend_overlay(image, mask_img)

    gc.collect()
    torch.cuda.empty_cache()
    return jsonify({
        "mask": to_base64(mask_img),
        "overlay": to_base64(overlay)
    })

@app.route("/inpaint", methods=["POST"])
def inpaint():
    """Run Stable Diffusion inpainting."""
    data = request.json
    image_data = base64.b64decode(data["image"].split(",")[1])
    mask_data = base64.b64decode(data["mask"].split(",")[1])
    prompt = data.get("prompt", "")
    mode = data.get("mode", "Inpaint Anything")

    image = Image.open(io.BytesIO(image_data)).convert("RGB").resize((512, 512))
    mask = Image.open(io.BytesIO(mask_data)).convert("L").resize((512, 512))

    final_prompt = (
        "background, seamless, natural surface, realistic" if mode.lower().startswith("remove")
        else prompt or "fill missing area realistically with natural texture"
    )

    with torch.inference_mode():
        result = pipe(prompt=final_prompt, image=image, mask_image=mask, guidance_scale=7.5).images[0]

    buf = io.BytesIO()
    result.save(buf, format="PNG")
    buf.seek(0)

    gc.collect()
    torch.cuda.empty_cache()
    return send_file(buf, mimetype="image/png")

@app.route("/reset", methods=["POST"])
def reset():
    selected_points.clear()
    torch.cuda.empty_cache()
    return jsonify({"message": "Reset successful"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
