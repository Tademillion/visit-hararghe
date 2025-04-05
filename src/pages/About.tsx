import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const team = [
    {
      title: "Creative Director",
      image: "/src/assets/images/pg",
      description:
        "Our Creative Director envisions and shapes the digital narratives that highlight Hararghe's landscapes and culture, ensuring every story resonates with authenticity and creativity.",
      action: "Meet Us",
    },

    {
      title: "Cultural Ambassador",
      image: "/src/assets/images/.jpg",
      description:
        "Our Cultural Ambassador bridges the gap between tradition and modernity, curating content that celebrates the unique music and customs of Hararghe while ensuring it reaches a global audience.",
      action: "Learn More",
    },
    {
      title: "Web Developer",
      image: "/src/assets/images/tade.jpg",
      description:
        "Our Web Developer brings our vision to life through innovative design and seamless functionality, creating an online experience that captivates and informs our visitors.",
      action: "See Our Work",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/elephant.jpg"
            alt="Hararghe Mountains"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Celebrating Hararghe's Heritage
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/land-2.jpg"
                alt="Hararghe Landscape"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gray-900">
                About Visitharaghe
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At 'visitharaghe', we are dedicated to capturing the essence of
                Hararghe by showcasing its breathtaking landscapes, vibrant
                music, and rich cultural traditions. Our goal is to inspire both
                locals and visitors to appreciate and explore this remarkable
                region.
              </p>
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md 
                  transition-colors duration-300 inline-block self-start"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/land-3.jpg"
            alt="Hararghe Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-black-300 leading-relaxed">
                Join our community and be the first to know about the vibrant
                culture, stunning landscapes, and musical rhythms of Hararghe!
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md 
                      text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                      focus:ring-accent focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md 
                      text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                      focus:ring-accent focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 
                    rounded-md transition-colors duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
              Our Passionate Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collective of dreamers and doers dedicated to bringing
              Hararghe's beauty to the world.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="relative aspect-square w-full h-full mb-6 rounded-lg">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-gray-900">
                  {member.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {member.description}
                </p>
                <button
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md 
                  transition-colors duration-300"
                >
                  {member.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
