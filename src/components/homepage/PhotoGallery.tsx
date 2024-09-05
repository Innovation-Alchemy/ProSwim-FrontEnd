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
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const photos = [
  { src: homeGalleryImage1, alt: 'img1' },
  { src: homeGalleryImage2, alt: 'img2' },
  { src: homeGalleryImage3, alt: 'img3' },
  { src: homeGalleryImage4, alt: 'img4' },
  { src: homeGalleryImage2, alt: 'img2' },
  { src: homeGalleryImage5, alt: 'img5' },
  { src: homeGalleryImage1, alt: 'img6' },
  { src: homeGalleryImage2, alt: 'img7' },
  { src: homeGalleryImage3, alt: 'img8' },
  { src: homeGalleryImage4, alt: 'img9' },
  { src: homeGalleryImage5, alt: 'img10' },
  { src: homeGalleryImage5, alt: 'img5' },
  { src: homeGalleryImage1, alt: 'img6' },
  { src: homeGalleryImage2, alt: 'img7' },
  { src: homeGalleryImage3, alt: 'img8' },
  { src: homeGalleryImage4, alt: 'img9' },
  { src: homeGalleryImage5, alt: 'img10' },
];

const PhotoGallery = () => {
  const [endIndex, setEndIndex] = useState(6);
  const startIndex = endIndex - 6;
  const currentPhotos = photos.slice(startIndex, endIndex);
  return (
    <>
      <Title secondary={'our'} primary={'gallery'} />
      <div className="flex justify-center">
        <Carousel className="w-[80%] h-[41.5rem] !outline-none !border-none !ring-0 no-focus">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="grid grid-cols-3 gap-6">
                      {currentPhotos.map((photo, index) => (
                        <Image
                          key={index}
                          src={photo.src}
                          alt={photo.alt}
                          width="w-full"
                          height="auto"
                        />
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default PhotoGallery;
