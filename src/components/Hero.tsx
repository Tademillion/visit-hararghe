import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/garamuleta.png"
          alt="Hararghe Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <p className="text-lg md:text-xl mb-4 font-light">
          Where the mountains meet the melodies, and culture thrives in every
          corner.
        </p>
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
          Welcome to Hararghe
        </h1>
        <Link
          to="/activities"
          className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md 
          transition-colors duration-300 text-lg font-medium"
        >
          Book Now
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
