import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-400">
            Powered by{" "}
            <span className="font-semibold text-accent hover:text-accent/90 cursor-pointer transition-colors">
              <a href="https://github.com/Tademillion" target="blank">
                Tademillion
              </a>
            </span>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
