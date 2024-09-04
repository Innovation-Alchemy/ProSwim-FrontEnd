import { useState } from 'react';
import {
  homeGalleryImage1,
  homeGalleryImage2,
  homeGalleryImage3,
  homeGalleryImage4,
  homeGalleryImage5,
} from '@/assets';
import Title from '../shared/Title';
import Image from '../shared/Image';

const photos = [
  { src: homeGalleryImage1, alt: 'img1' },
  { src: homeGalleryImage2, alt: 'img2' },
  { src: homeGalleryImage3, alt: 'img3' },
  { src: homeGalleryImage4, alt: 'img4' },
  { src: homeGalleryImage2, alt: 'img2' },
  { src: homeGalleryImage5, alt: 'img5' },
  { src: homeGalleryImage1, alt: 'img6' }, // Added extra images for demonstration
  { src: homeGalleryImage2, alt: 'img7' },
  { src: homeGalleryImage3, alt: 'img8' },
  { src: homeGalleryImage4, alt: 'img9' },
  { src: homeGalleryImage5, alt: 'img10' },
  // Added extra images for demonstration
  { src: homeGalleryImage2, alt: 'img7' },
  { src: homeGalleryImage3, alt: 'img8' },
  { src: homeGalleryImage4, alt: 'img9' },
  { src: homeGalleryImage5, alt: 'img10' },
];

const itemsPerPage = 6;

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    if (currentIndex + itemsPerPage < photos.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const currentPhotos = photos.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="w-full flex flex-col items-center py-8 bg-gray-100">
      <Title secondary={'our'} primary={'gallery'} />
      <div className="relative w-full max-w-6xl flex items-center mt-[3.4375rem]">
        <button
          onClick={prevPage}
          disabled={currentIndex === 0}
          className={`absolute left-[-80px] top-1/2 transform -translate-y-1/2 p-3 text-black text-5xl font-bold transition-transform duration-300 ease-in-out ${
            currentIndex === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:text-gray-700'
          }`}
        >
          &lt;
        </button>
        <div className="flex flex-wrap gap-7 mx-auto mt-4 justify-center">
          {currentPhotos.map((photo, index) => (
            <Image
              key={index}
              src={photo.src}
              alt={photo.alt}
              width="360px"
              height="auto"
            />
          ))}
        </div>
        <button
          onClick={nextPage}
          disabled={currentIndex + itemsPerPage >= photos.length}
          className={`absolute right-[-80px] top-1/2 transform -translate-y-1/2 p-3 text-black text-5xl font-bold transition-transform duration-300 ease-in-out ${
            currentIndex + itemsPerPage >= photos.length
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:text-gray-700'
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
