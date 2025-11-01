import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section text-center text-light">
      <div className="container py-5">
        <h2 className="fw-bold text-gradient mb-3">Get in Touch</h2>
        <p className="lead text-secondary mb-4">
          Curious about diffusion-based inpainting or want to collaborate?
          <br /> We’d love to hear from you.
        </p>

        <div className="contact-card mx-auto p-4 rounded-4 shadow-lg">
          <p className="mb-3">
            Reach us directly at{" "}
            <a
              href="mailto:22b12@gmail.com"
              className="text-info fw-semibold text-decoration-none"
            >
              22b12@sdmit.in
            </a>
          </p>
          <a
            href="mailto:22b12@gmail.com"
            className="btn btn-info btn-lg px-4 fw-bold shadow-sm"
          >
            Contact Us
          </a>
        </div>
        <h3 style={{marginTop:"50px"}}>For More Queries Please Goto Contact Page</h3>
        <p>Happy to Help</p>
      </div>
    </section>
  );
};

export default ContactSection;
