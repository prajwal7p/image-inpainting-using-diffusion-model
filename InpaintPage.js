import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/InpaintPage.css";


const InpaintInteractive = () => {
  const [image, setImage] = useState(null);
  const [mask, setMask] = useState(null);
  const [overlay, setOverlay] = useState(null);
  const [output, setOutput] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("Inpaint Anything");
  const [info, setInfo] = useState("Upload an image to start.");
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await toBase64(file);
    setImage(base64);
    setInfo("📸 Image uploaded. Click on the image to select areas to mask.");
  };

  const handleImageClick = async (e) => {
    if (!image) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setInfo("🎯 Point selected — generating mask...");

    try {
      const response = await fetch("http://localhost:5000/generate_mask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: image,
          point: [x, y],
        }),
      });

      const data = await response.json();
      setMask(data.mask);
      setOverlay(data.overlay);
      setInfo("🩸 Mask generated — you can click more points or run inpainting.");
    } catch (err) {
      console.error(err);
      setInfo("❌ Failed to generate mask. Check backend.");
    }
  };

  const handleInpaint = async () => {
    if (!image || !mask) {
      setInfo("⚠️ Upload image and generate a mask first!");
      return;
    }

    setLoading(true);
    setInfo("🧠 Inpainting in progress...");

    try {
      const response = await fetch("http://localhost:5000/inpaint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image, mask, prompt, mode }),
      });

      const blob = await response.blob();
      const resultUrl = URL.createObjectURL(blob);
      setOutput(resultUrl);
      setInfo("✅ Inpainting completed!");
    } catch (err) {
      console.error(err);
      setInfo("❌ Inpainting failed. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    await fetch("http://localhost:5000/reset", { method: "POST" });
    setMask(null);
    setOverlay(null);
    setOutput(null);
    setInfo("🔄 Mask and selections reset.");
  };

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar />

      <div className="container text-center flex-grow-1 mt-5 pt-5">
        <h2 className="fw-bold text-info mb-3">🪄 Interactive AI Inpainting</h2>
        <p className="text-muted mb-4">
          Upload an image, click to generate masks, and let AI fill or remove parts intelligently.
        </p>

        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="form-control bg-dark text-light border-secondary"
          />
        </div>

        {/* Show the editable image */}
        {image && (
          <div className="position-relative d-inline-block">
            <img
              src={overlay || image}
              alt="Editable"
              ref={imgRef}
              onClick={handleImageClick}
              className="img-fluid rounded border border-secondary"
              style={{ cursor: "crosshair", maxHeight: "500px" }}
            />
          </div>
        )}

        {/* Controls */}
        <h3
          style={{
            textAlign:"center",
            font:"inherit",
            marginTop:"50px"
          }}
        >Enter Prompt (Optional)</h3>

        <div className="mt-4">
          <input
            type="text"
            className="form-control bg-dark text-light border-secondary mb-3 custom-placeholder"
            placeholder="(e.g., replace with grass)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="btn-group mb-3">
            <button
              className={`btn ${mode === "Inpaint Anything" ? "btn-info" : "btn-outline-info"}`}
              onClick={() => setMode("Inpaint Anything")}
            >
              Inpaint Anything
            </button>
            <button
              className={`btn ${mode === "Remove Anything" ? "btn-warning" : "btn-outline-warning"}`}
              onClick={() => setMode("Remove Anything")}
            >
              Remove Anything
            </button>
          </div>

          <div>
            <button
              onClick={handleInpaint}
              disabled={loading}
              className="btn btn-success me-2"
            >
              {loading ? "Processing..." : "Run Inpainting"}
            </button>
            <button onClick={handleReset} className="btn btn-secondary">
              ♻️ Reset
            </button>
          </div>

          <p className="text-muted small mt-3">{info}</p>
        </div>

        {(image || overlay || output) && (
          <div className="mt-5">
            <h5 className="text-info mb-3">Comparison View</h5>
            <div className="d-flex justify-content-center flex-wrap gap-4">
              {image && (
                <div>
                  <p className="text-muted">Original</p>
                  <img
                    src={image}
                    alt="Original"
                    className="img-fluid rounded border border-secondary shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
              )}
              {overlay && (
                <div>
                  <p className="text-muted">Masked Region</p>
                  <img
                    src={overlay}
                    alt="Masked"
                    className="img-fluid rounded border border-secondary shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
              )}
              {output && (
                <div>
                  <p className="text-muted">Inpainted Output</p>
                  <img
                    src={output}
                    alt="Output"
                    className="img-fluid rounded border border-secondary shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default InpaintInteractive;
