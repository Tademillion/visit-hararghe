import React from "react";

const Culture: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900/70 to-gray-900/30 text-white py-32">
        <div className="absolute inset-0 -z-10">
          <img
            src="/src/assets/images/garamuleta.png"
            alt="Hararghe Culture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            The Heartbeat of Hararghe Gara Muleta
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the vibrant traditions and rich heritage of our land.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Melodies of the Mountains
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive into the soul-stirring sounds that echo through Hararghe.
            </p>
          </div>

          {/* Shagayyee Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/shagoyye-3.jpg"
                alt="Shagayyee Music"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Shagoyyee: The Essence of Hararghe
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                A group of Hararghe men and women dancing the traditional
                Hararghe dance, Shagooye. Shagooye is a tango-like dance where
                men and women dance together. The women dance by dramatically
                swaying their head from left to right with the rhythm of the
                song and the movement from the man's hand.
              </p>
            </div>
          </div>

          {/* Instruments Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Instruments of Heritage
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                The music of Hararghe is brought to life by unique instruments
                like the krar and masenqo. Each instrument has its own story and
                sound, creating a rich tapestry of harmony that is both
                captivating and culturally significant.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src="/src/assets/images/musician.jpg"
                alt="Traditional Instruments"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Dance Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/shagoyye-2.jpg"
                alt="Traditional Dance"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Dance and Music: Dadaysa and Shagoyye
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                In Hararghe, music and dance are inseparable. Traditional dances
                accompany our songs, telling stories of love, celebration, and
                community. This vibrant interaction is essential to our cultural
                identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Living Traditions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Festivals & Celebrations",
                image: "/src/assets/images/festivals.jpg",
                description:
                  "Experience the joy and vibrancy of our traditional festivals that mark important moments in our calendar.",
              },
              {
                title: "Craftsmanship",
                image: "/src/assets/images/crafts.jpg",
                description:
                  "Discover the intricate artistry of our local craftsmen who keep ancient techniques alive.",
              },
              {
                title: "Culinary Heritage",
                image: "/src/assets/images/food.jpg",
                description:
                  "Taste the flavors of Hararghe through our traditional dishes and cooking methods.",
              },
              {
                title: "Kullubbi Gabriel",
                image: "/src/assets/images/kullubbigabriel-1.png",
                description:
                  "Kulubi is known for its large church, dedicated to St. Gabriel, which is built on victory of minilik warrior over muslim mosques (i.e. jibril mosque whom killed and buried 3 km from site of Church), the site is now serve massive twice-yearly pilgrimages (on 26 July and 28 December) attended by tens of thousands of Orthodox pilgrims..",
              },
            ].map((tradition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={tradition.image}
                    alt={tradition.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{tradition.title}</h3>
                  <p className="text-gray-600">{tradition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experience CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Experience Our Culture
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us for an immersive cultural experience and discover the
            authentic traditions that make Hararghe unique.
          </p>
          <button
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md 
            transition-colors duration-300 text-lg font-medium"
          >
            Book a Cultural Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default Culture;
