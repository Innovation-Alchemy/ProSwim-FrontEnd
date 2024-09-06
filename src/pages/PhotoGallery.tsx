import { useState } from 'react';
import GalleryCarousel from '@/components/photogallery_page/GalleryCarousel';
import {
  galleryPhoto1,
  galleryPhoto2,
  galleryPhoto3,
  galleryPhoto4,
  galleryPhoto5,
  galleryPhoto6,
  galleryPhoto7,
} from '@/assets';
import Album from '@/components/photogallery_page/Album';

// Define the type for a photo
interface Photo {
  id: number;
  src: string;
  alt: string;
}

// Sample photos data
const photos: Photo[] = [
  { id: 0, src: galleryPhoto1, alt: 'img1' },
  { id: 1, src: galleryPhoto3, alt: 'img2' },
  { id: 2, src: galleryPhoto4, alt: 'img3' },
  { id: 3, src: galleryPhoto5, alt: 'img4' },
  { id: 4, src: galleryPhoto6, alt: 'img5' },
  { id: 5, src: galleryPhoto7, alt: 'img6' },
  { id: 6, src: galleryPhoto3, alt: 'img7' },
  { id: 7, src: galleryPhoto4, alt: 'img8' },
  { id: 8, src: galleryPhoto7, alt: 'img9' },
  { id: 9, src: galleryPhoto6, alt: 'img10' },
  { id: 10, src: galleryPhoto5, alt: 'img11' },
  { id: 11, src: galleryPhoto3, alt: 'img12' },
  { id: 12, src: galleryPhoto1, alt: 'img13' },
  { id: 13, src: galleryPhoto2, alt: 'img14' },
  { id: 14, src: galleryPhoto7, alt: 'img15' },
  { id: 15, src: galleryPhoto2, alt: 'img16' },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="overflow-x-auto">
      {/* GalleryCarousel receives photos and handles image selection */}
      <GalleryCarousel
        images={photos}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      {/* Album receives photos, currentIndex and setCurrentIndex for pagination and selection */}
      <div className="mt-8">
        <Album
          photos={photos}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
