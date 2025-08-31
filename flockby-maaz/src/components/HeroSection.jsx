import React from "react";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-yellow-500 text-white py-8">
      {/* Abstract background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-yellow-600/10 pointer-events-none"></div>

      <div className="relative z-10 w-7xl mx-auto px-4 mt-8">
        {/* Slider */}
        <ImageSlider />
      </div>
    </section>
  );
};

export default HeroSection;
