import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="relative carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 gap-8 items-center px-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  {image.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {image.description}
                </p>
                <button className="mt-6 bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md 
                  transition-colors duration-300">
                  Explore Landscapes
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev !text-accent !w-12 !h-12 !bg-white/80 rounded-full !left-2"></div>
      <div className="swiper-button-next !text-accent !w-12 !h-12 !bg-white/80 rounded-full !right-2"></div>
    </div>
  );
};

export default Carousel; 