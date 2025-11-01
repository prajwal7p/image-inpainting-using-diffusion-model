import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-5 text-center"
      style={{
        background: "linear-gradient(135deg, #0a0f24 40%, #10172b 100%)",
        color: "#e8e8e8",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        {/* Header */}
        <h2 className="fw-bold mb-4" style={{ color: "#66ccff", marginTop: "30px" }}>
          Get in Touch
        </h2>

        <p className="lead mb-5" style={{ color: "#d6d6d6" }}>
          Have questions about our{" "}
          <span style={{ color: "#5cd4a3" }}>Diffusion Inpainting</span> project?  
          Whether it’s collaboration, feedback, or curiosity — we’d love to hear from you!
        </p>

        {/* Contact Form */}
        <div
          className="col-md-8 mx-auto p-5 rounded-4 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(102, 204, 255, 0.3)",
          }}
        >
          <form>
            {/* Name Field */}
            <div className="mb-3 text-start">
              <label htmlFor="name" className="form-label fw-bold text-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control bg-transparent text-light border border-secondary"
                placeholder="Enter your full name"
                style={{
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              />
            </div>

            {/* Email Field */}
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label fw-bold text-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control bg-transparent text-light border border-secondary"
                placeholder="Enter your email address"
                style={{
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              />
            </div>

            {/* Message Field */}
            <div className="mb-4 text-start">
              <label htmlFor="message" className="form-label fw-bold text-light">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="form-control bg-transparent text-light border border-secondary"
                placeholder="Write your message..."
                style={{
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-lg px-5"
              style={{
                backgroundColor: "#5cd4a3",
                color: "#0a0f24",
                fontWeight: "bold",
                borderRadius: "30px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#66ccff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#5cd4a3")
              }
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-5">
          <p style={{ color: "#d6d6d6" }}>
            <i className="bi bi-envelope-fill me-2 text-info"></i>
            <a
              href="mailto:22b12sdmit.in"
              className="text-decoration-none"
              style={{ color: "#66ccff" }}
            >
              22b12@sdmit.in
            </a>
          </p>
          <p style={{ color: "#d6d6d6" }}>
            <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
            Ujire, India
          </p>
        </div>
      </div>

      {/* Placeholder styling (for better visibility) */}
      <style>
        {`
          ::placeholder {
            color: rgba(255, 255, 255, 0.7) !important;
          }
          textarea::placeholder {
            color: rgba(255, 255, 255, 0.7) !important;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
