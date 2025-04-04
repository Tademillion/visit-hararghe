import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Visitharaghe
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Culture', '/culture'],
              ['Activities', '/activities'],
              ['Contact Us', '/contact']
            ].map(([name, path]) => (
              <Link
                key={name}
                to={path}
                className={`nav-link relative py-2 transition-colors duration-300 ${
                  isActive(path) 
                    ? isScrolled ? 'text-accent' : 'text-white' 
                    : isScrolled 
                      ? 'text-gray-600 hover:text-accent' 
                      : 'text-white hover:text-accent'
                } ${isActive(path) ? 'active' : ''}`}
              >
                {name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                  isActive(path) ? 'scale-x-100' : 'scale-x-0'
                } ${
                  isScrolled ? 'bg-accent' : 'bg-white'
                }`}></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 