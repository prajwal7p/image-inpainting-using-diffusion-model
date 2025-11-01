import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-center text-light py-4">
      <div className="container">
        <p className="mb-2 small fw-light text-secondary">
          © {new Date().getFullYear()} <span className="text-gradient">All Rights Reserved</span>
        </p>
        <p className="mb-0 text-muted">
          Built with  <span className="text-info">Diffusion Models</span> & <span className="text-warning">Deeplearning</span>
        </p>
      </div>
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
