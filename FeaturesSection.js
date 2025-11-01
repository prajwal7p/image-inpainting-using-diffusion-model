import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/FeaturesSection.css";

const features = [
  {
    title: "Smart Restoration",
    text: "Fills missing or damaged regions using context-aware deep learning.",
  },
  {
    title: "Diffusion-Based Generation",
    text: "Recreates intricate textures and lighting through denoising diffusion.",
  },
  {
    title: "Stable Diffusion Integration",
    text: "Leverages state-of-the-art diffusion models for photo-real precision.",
  },
  {
    title: "Mask-Aware Editing",
    text: "Edit only what you want with high control and seamless blending.",
  },
  {
    title: "GPU Acceleration",
    text: "Optimized for fast inference using CUDA and PyTorch.",
  },
  {
    title: "Intuitive Interface",
    text: "Modern and responsive UI for smooth workflow across devices.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section text-center">
      <div className="container py-5">
        <h2 className="fw-bold text-gradient mb-5">Key Features</h2>
        <div className="row g-4 justify-content-center">
          {features.map((feature, i) => (
            <div className="col-md-4 col-sm-6" key={i}>
              <div className="feature-card p-4 rounded-4 shadow-lg h-100">
                <h5 className="fw-bold text-light mb-2">{feature.title}</h5>
                <p className="text-secondary">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
