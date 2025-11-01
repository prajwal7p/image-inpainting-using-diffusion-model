import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-colored" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand fw-bold fs-4 text-decoration-none"
          onClick={() => setActiveLink("hero")}
        >
           Image Inpainting
        </Link>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link btn btn-link text-decoration-none ${
                  activeLink === "hero" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("hero")}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link btn btn-link text-decoration-none ${
                  activeLink === "about" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("about")}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/inpaint"
                className={`nav-link btn btn-link text-decoration-none ${
                  activeLink === "features" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("features")}
              >
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link btn btn-link text-decoration-none ${
                  activeLink === "contact" ? "active-link" : ""
                }`}
                onClick={() => setActiveLink("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
