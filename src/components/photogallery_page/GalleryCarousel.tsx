import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function ImageCarousel({
  images,
  currentIndex,
  setCurrentIndex,
}: ImageCarouselProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (!isAnimating && currentIndex < images.length - 1) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (!isAnimating && currentIndex > 0) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-8xl mx-auto overflow-hidden">
      <div className="flex items-center justify-center py-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevImage}
          className="absolute left-4 z-20"
          disabled={currentIndex === 0}
        >
          <ChevronLeftIcon className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>

        <div className="relative flex items-center justify-center max-w-7xl w-full h-[37.25rem]">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`absolute object-cover rounded-lg transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? 'w-2/3 h-full opacity-100 scale-100 z-20'
                  : index === currentIndex + 1
                  ? 'w-1/2 h-4/5 opacity-50 scale-90 translate-x-2/3 z-10'
                  : index === currentIndex - 1
                  ? 'w-1/2 h-4/5 opacity-50 scale-90 -translate-x-2/3 z-10'
                  : 'w-1/3 h-3/5 opacity-0 scale-75'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextImage}
          className="absolute right-4 z-10"
          disabled={currentIndex === images.length - 1}
        >
          <ChevronRightIcon className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
    </div>
  );
}
