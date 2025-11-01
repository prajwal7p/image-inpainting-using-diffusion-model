import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import InpaintPage from "./components/InpaintPage";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inpaint" element={<InpaintPage/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
