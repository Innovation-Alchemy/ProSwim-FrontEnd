import React, { useState, useEffect } from 'react';
import { homeCarouselImage, homeCarouselImage2 } from '@/assets';

const imgs = [
  { src: homeCarouselImage, alt: 'Image 1', link: '/', hasButton: false },
  { src: homeCarouselImage2, alt: 'Image 2', link: '/shop', hasButton: true },
  { src: homeCarouselImage, alt: 'Image 3', link: '/', hasButton: false },
  { src: homeCarouselImage2, alt: 'Image 4', link: '/shop', hasButton: true },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % imgs.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);
    return () => clearInterval(intervalId);
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageClick = () => {
    window.location.href = imgs[currentIndex].link;
  };

  return (
    <div className="relative w-full h-[35rem]">
      {/* Image display */}
      <img
        src={imgs[currentIndex].src}
        alt={imgs[currentIndex].alt}
        className="w-full h-full cursor-pointer"
        onClick={handleImageClick}
      />

      {/* Button on some images */}
      {imgs[currentIndex].hasButton && (
        <button
          className="absolute bottom-20 rounded-md text-6xl left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 border border-blue-500 hover:bg-transparent hover:text-blue-500"
          onClick={handleImageClick}
        >
          Shop Now
        </button>
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imgs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-900'
            }`}
          >
            {currentIndex === index && (
              <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
