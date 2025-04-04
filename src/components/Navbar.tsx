import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Culture and religion", "/culture"],
    ["Activities", "/activities"],
    ["Contact Us", "/contact"],
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
              isScrolled || isMenuOpen ? "text-gray-900" : "text-white"
            }`}
          >
            Visitharaghe
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <div
              className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
                isScrolled || isMenuOpen ? "bg-gray-900" : "bg-white"
              } ${isMenuOpen ? "transform rotate-45 translate-y-2" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
                isScrolled || isMenuOpen ? "bg-gray-900" : "bg-white"
              } ${isMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled || isMenuOpen ? "bg-gray-900" : "bg-white"
              } ${isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(([name, path]) => (
              <Link
                key={name}
                to={path}
                className={`nav-link relative py-2 transition-colors duration-300 ${
                  isActive(path)
                    ? isScrolled
                      ? "text-accent"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-600 hover:text-accent"
                    : "text-white hover:text-accent"
                } ${isActive(path) ? "active" : ""}`}
              >
                {name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                    isActive(path) ? "scale-x-100" : "scale-x-0"
                  } ${isScrolled ? "bg-accent" : "bg-white"}`}
                ></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          {navLinks.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 px-4 text-lg transition-colors duration-300 ${
                isActive(path)
                  ? "text-accent"
                  : "text-gray-600 hover:text-accent"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
