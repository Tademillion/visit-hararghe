import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              About Visitharaghe
            </h3>
            <p className="text-sm leading-relaxed">
              Discover the beauty and culture of Hararghe through our curated
              experiences. We offer unique adventures and cultural immersions
              that showcase the best of our region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/culture"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Culture
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-accent" />
                <span className="text-sm">123 Hararghe Street, Ethiopia</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-accent" />
                <span className="text-sm">+251 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-accent" />
                <span className="text-sm">info@visitharaghe.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1">
              <p className="text-sm">© {currentYear} Visitharaghe.</p>
              <p className="text-sm text-gray-400">
                Powered by{" "}
                <a
                  href="https://github.com/Tademillion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:text-accent/90 transition-colors"
                >
                  Tademillion
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
