import React from "react";
import HeroCarousel from "./HeroCarousel";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
