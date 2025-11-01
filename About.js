import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/About.css";

const teamMembers = [
  {
    name: "Prajwal Nair",
    role: "Project Lead",
    img: "https://i.imgur.com/X3bK1iK.png",
    desc: "Oversees the complete architecture of the image inpainting system, ensuring smooth integration of diffusion models for optimal results.",
  },
  {
    name: "Rithik B R",
    role: "AI Engineer",
    img: "https://i.imgur.com/0y0y0y0.png",
    desc: "Develops and fine-tunes advanced neural networks that power the diffusion-based image reconstruction process.",
  },
  {
    name: "Shreeya",
    role: "UI/UX Designer",
    img: "https://i.imgur.com/abcd123.png",
    desc: "Designs elegant and user-friendly interfaces that make interacting with complex AI tools intuitive and engaging.",
  },
  {
    name: "Sandeep K",
    role: "Backend Developer",
    img: "https://i.imgur.com/asdf789.png",
    desc: "Handles the server-side logic and API integrations, ensuring fast, reliable image processing in real time.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="about-section py-5"
      style={{
        background: "linear-gradient(135deg, #0a0f24 40%, #10172b 100%)",
        color: "#f1f1f1",
        position: "relative",
      }}
    >
      <div className="container text-center">
        {/* Header */}
        <h2 className="fw-bold mb-4" style={{ color: "#66ccff" ,marginTop:"30px"}}>
          About the Project
        </h2>
        <p className="lead mb-5" style={{ color: "#d6d6d6" }}>
          <strong>Diffusion Inpainting</strong> is an advanced image restoration platform
          that uses cutting-edge <span style={{ color: "#5cd4a3" }}>diffusion models</span>.
          It can intelligently fill in missing or damaged areas in images with natural,
          realistic details — making the restored image look seamless and authentic.
        </p>

        {/* Mission */}
        <div className="row justify-content-center mb-5">
          <div
            className="col-md-10 p-4 rounded-4 shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(102, 204, 255, 0.3)",
            }}
          >
            <h4 className="fw-bold mb-3" style={{ color: "#5cd4a3" }}>
              Our Mission
            </h4>
            <p style={{ color: "#e8e8e8" }}>
              Our mission is to redefine the future of digital restoration through
              artificial intelligence. We aim to make visual repair and enhancement more
              accurate, efficient, and accessible for everyone — from artists to
              researchers.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="row justify-content-center mb-5">
          <div
            className="col-md-10 p-4 rounded-4 shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(92, 212, 163, 0.3)",
            }}
          >
            <h4 className="fw-bold mb-3" style={{ color: "#66ccff" }}>
              Our Vision
            </h4>
            <p style={{ color: "#e8e8e8" }}>
              We envision a creative world where anyone can use AI to restore, enhance,
              and imagine visuals effortlessly — turning imperfect images into works of
              art through the power of diffusion-based intelligence.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        {/* Technology Stack */}
        <h3 className="fw-bold mb-4" style={{ color: "#66ccff" }}>
        Technology Stack
        </h3>

        <div className="row justify-content-center mb-5">
        <div
            className="col-md-10 text-start mx-auto p-4 rounded-4 shadow-lg"
            style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(102, 204, 255, 0.3)",
            color: "#e6e6e6",
            }}
        >
            <ul
            className="list-unstyled mb-0"
            style={{
                lineHeight: "1.8rem",
                fontSize: "1.1rem",
            }}
            >
            <li className="mb-3">
                <span style={{ color: "#5cd4a3", fontWeight: "600" }}>
                Stable Diffusion:
                </span>{" "}
                The core model for realistic image generation and restoration.
            </li>
            <li className="mb-3">
                <span style={{ color: "#5cd4a3", fontWeight: "600" }}>
                Segment Anything (SAM):
                </span>{" "}
                Automatically detects and isolates regions for inpainting.
            </li>
            <li className="mb-3">
                <span style={{ color: "#5cd4a3", fontWeight: "600" }}>PyTorch:</span>{" "}
                Powers deep learning and AI model training.
            </li>
            <li>
                <span style={{ color: "#5cd4a3", fontWeight: "600" }}>
                React + Bootstrap:
                </span>{" "}
                Provides a responsive, interactive, and user-friendly interface.
            </li>
            </ul>
        </div>
        </div>


        {/* Team */}
        <h3 className="fw-bold mb-4" style={{ color: "#5cd4a3" }}>
          Meet the Team
        </h3>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div
                className="team-card p-4 rounded-4 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-circle mb-3 border border-3"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderColor: "#66ccff",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold mb-1" style={{ color: "#ffffff" }}>
                  {member.name}
                </h5>
                <p className="mb-2" style={{ color: "#5cd4a3" }}>
                  {member.role}
                </p>
                <p className="small" style={{ color: "#cccccc" }}>
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
