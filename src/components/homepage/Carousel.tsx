import { carouselImages } from '@/constants';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  const nextSlide = useCallback(() => {
    if (!isForward) return;
    setCurrentIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
  }, [isForward]);

  const handleIndicatorClick = (index: number) => {
    setIsForward(() => index > currentIndex);
    setCurrentIndex(index);
  };

  const handleImageClick = () => {
    window.location.href = carouselImages[currentIndex].link;
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div
      className="relative w-full"
      style={{
        height: 'calc(100vh - 84px)',
      }}
    >
      {/* Image display */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          initial={{
            opacity: 0,
            x: isForward ? '100%' : '-100%',
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ type: 'tween', duration: 0.3 }}
          src={carouselImages[currentIndex].src}
          alt={carouselImages[currentIndex].alt}
          className="w-full h-full cursor-pointer object-cover"
          onClick={handleImageClick}
        />
      </AnimatePresence>

      {/* Button on some images */}
      {carouselImages[currentIndex].hasButton && (
        <button
          className="absolute bottom-20 rounded-md text-6xl left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 border border-blue-500 hover:bg-transparent hover:text-blue-500 font-splash"
          onClick={handleImageClick}
        >
          Shop Now
        </button>
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
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
