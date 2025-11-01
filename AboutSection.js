import React from "react";
import "../style/AboutSection.css";

const AboutSection = () => {
  const concepts = [
    {
      id: 1,
      title: "Forward Process",
      text: "An image is gradually corrupted by adding Gaussian noise step-by-step until it becomes pure noise. This helps the model understand how data is destroyed.",
      img: "/diffusion-forward.jpg",
      color: "#e3f2fd",
      textAlign: "justify"
    },
    {
      id: 2,
      title: "Reverse Denoising",
      text: "The model learns to reverse the noise-adding process — denoising random pixels into a structured, realistic image.",
      img: "/diffusion-denoise.jpg",
      color: "#e8f5e9",
      textAlign: "justify"

    },
    {
      id: 3,
      title: "Applications",
      text: "Diffusion models power inpainting, super-resolution, and text-to-image generation like Stable Diffusion and DALL·E.",
      img: "/diffusion-apps.jpeg",
      color: "#fff8e1",
      textAlign: "justify"

    },
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold gradient-text mb-3">What Are Diffusion Models?</h2>
          <p className="text-light fs-5">
            Diffusion Models are a breakthrough in generative AI that create or restore
            images by learning how to remove noise step-by-step.
          </p>
        </div>

        {/* Info Row */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img
              src="/diffusion-process.webp"
              alt="Diffusion Process"
              className="img-fluid rounded-4 shadow-lg border border-light"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0 text-light">
            <h4 className="fw-semibold mb-3">How It Works</h4>
            <p className="fs-5">
              A diffusion model starts with noise and gradually transforms it into a
              coherent image — using deep neural networks that have learned to reverse
              the noise process.
            </p>
          </div>
        </div>

        {/* Core Concepts */}
        <div className="text-center mb-4">
          <h3 className="fw-bold gradient-text">Core Concepts</h3>
        </div>

        <div className="row g-4">
          {concepts.map((concept) => (
            <div className="col-md-4" key={concept.id}>
              <div
                className="card border-0 shadow-lg h-100 concept-card"
                style={{ backgroundColor: concept.color,textAlign: concept.textAlign }}
              >
                <img
                  src={concept.img}
                  alt={concept.title}
                  className="card-img-top rounded-top-4"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark text-center">
                    {concept.title}
                  </h5>
                  <p className="card-text text-muted">{concept.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-5 text-center">
          <h4 className="fw-bold gradient-text mb-3">Why It Matters for Inpainting?</h4>
          <p className="text-light fs-5">
            Diffusion-based inpainting produces results that are context-aware, visually
            seamless, and more natural than traditional patch-based methods.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
