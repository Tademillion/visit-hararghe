import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/contactus.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            Find Us Here
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Visit us to explore the beauty of Hararghe and discover how we can
            bring its essence to your online presence.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent 
                    focus:ring-accent sm:text-sm px-4 py-2 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent 
                    focus:ring-accent sm:text-sm px-4 py-2"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent 
                    focus:ring-accent sm:text-sm px-4 py-2"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md 
                  transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="w-6 h-6 text-accent mt-1" />
                  <div className="ml-4">
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">
                      123 Sunnyvale Rd, San Jose
                      <br />
                      California, United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="w-6 h-6 text-accent mt-1" />
                  <div className="ml-4">
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="w-6 h-6 text-accent mt-1" />
                  <div className="ml-4">
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@visitharaghe.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="w-6 h-6 text-accent mt-1" />
                  <div className="ml-4">
                    <h3 className="font-bold">Hours</h3>
                    <p className="text-gray-600">
                      Mon-Fri: 10am-5pm
                      <br />
                      Sat: 1pm-5pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.0419!3d37.3631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIxJzQ3LjIiTiAxMjLCsDAyJzMwLjgiVw!5e0!3m2!1sen!2sus!4v1644183265218!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
