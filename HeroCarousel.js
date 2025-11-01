import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/HeroCarousel.css";
import { Link } from "react-router-dom";
const HeroCarousel = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center justify-content-center">
      <div className="animated-bg"></div>
      <div className="floating-lights">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-content text-center text-light p-5 rounded-4 shadow-lg bg-dark bg-opacity-50">
        <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
          Diffusion <span className="text-info">Inpainting</span> Platform
        </h1>
        <p className="lead typing-text mb-4">
            Restore and enhance images seamlessly using cutting-edge models.
        </p>
        
        <div className="mt-3">
          <a href="#features" className="btn btn-primary btn-lg mx-2 shadow-sm">
            Explore Features
          </a>
          <Link 
            to="/inpaint" 
            className="btn btn-outline-light btn-lg mx-2 shadow-sm text-decoration-none"
        >
            Try Inpainting
        </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
