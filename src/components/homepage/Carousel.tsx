import React, { useState, useEffect } from 'react';
import { homeCarouselImage } from '@/assets';

const imgs = [
  { src: homeCarouselImage, alt: 'Image 1' },
  { src: homeCarouselImage, alt: 'Image 2' },
  { src: homeCarouselImage, alt: 'Image 3' },
  { src: homeCarouselImage, alt: 'Image 4' },
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

  return (
    <div className="relative">
      {/* Image display */}
      <img
        src={imgs[currentIndex].src}
        alt={imgs[currentIndex].alt}
        className="w-full h-auto"
      />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imgs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className="w-4 h-4 rounded-full bg-gray-900"
          >
            {currentIndex === index && (
              <div className="w-2 h-2 bg-[#1E5C97] rounded-full mx-auto"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
