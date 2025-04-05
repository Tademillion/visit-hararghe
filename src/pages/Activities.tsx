import React, { useState, useEffect } from "react";

const Activities: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/src/assets/images/beauty-2.jpg",
      alt: "Hararghe Activities",
    },
    {
      url: "/src/assets/images/qullubi.jpg",
      alt: "Hararghe Activities",
    },
    {
      url: "/src/assets/images/beauty-1.jpg",
      alt: "Mountain Hiking",
    },
    {
      url: "/src/assets/images/harar-jegol-1.jpg",
      alt: "Cultural Tours",
    },
    {
      url: "/src/assets/images/landofhararghe.jpg",
      alt: "Photography Tours",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const activities = [
    {
      title: "Mountain Hiking",
      image: "/src/assets/images/land-1.PNG",
      description:
        "Embark on an exhilarating hike up GaraMuleta, where panoramic views of the stunning landscape will leave you in awe.",
      duration: "4-6 hours",
      difficulty: "Moderate",
    },
    {
      title: "Cultural Tours",
      image: "/src/assets/images/dancing-1.jpg",
      description:
        "Immerse yourself in local traditions, visit historic sites, and experience the authentic lifestyle of Hararghe.",
      duration: "3-4 hours",
      difficulty: "Easy",
    },
    {
      title: "Photography Tours",
      image: "/src/assets/images/beauty-3.jpg",
      description:
        "Capture the breathtaking landscapes and cultural moments with guidance from experienced photographers.",
      duration: "4 hours",
      difficulty: "Easy",
    },
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full relative flex-shrink-0"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
          ))}
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            Discover Your Adventure
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience the beauty and culture of Hararghe through diverse
            activities.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-6">
                      <span>Duration: {activity.duration}</span>
                      <span>Difficulty: {activity.difficulty}</span>
                    </div>
                    <button
                      className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-2 
                      rounded-md transition-colors duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">
                What to Expect
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Professional guides with extensive local knowledge
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Safety equipment and first aid support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Authentic local experiences and cultural insights</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">
                How to Prepare
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Wear comfortable clothing and appropriate footwear
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Bring water and sun protection</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Camera for capturing memorable moments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
