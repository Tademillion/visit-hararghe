import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

const Home: React.FC = () => {
  const landscapes = [
    {
      src: "/src/assets/images/landofhararghe.jpg",
      title: "The Majestic Landscapes",
      description:
        "Experience the breathtaking beauty of Hararghe, where lush valleys and towering mountains create a picturesque backdrop for adventure.",
    },
    {
      src: "/src/assets/images/culture.jpg",
      title: "Cultural Heritage",
      description:
        "Discover the rich cultural heritage of Hararghe, where ancient traditions blend seamlessly with modern life.",
    },
    {
      src: "/src/assets/images/elephant.jpg",
      title: "Natural Wonders",
      description:
        "From rolling hills to hidden valleys, every corner of Hararghe tells a story.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* Landscapes Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Carousel images={landscapes} />
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/mountain.jpg"
                alt="Hararghe Heritage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Celebrating Hararghe's Heritage
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                At Visitharaghe, we are dedicated to capturing the essence of
                Hararghe by showcasing its breathtaking landscapes, vibrant
                music, and rich cultural traditions.
              </p>
              <button
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md 
                transition-colors duration-300"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community and be the first to know about Hararghe's vibrant
            culture!
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
