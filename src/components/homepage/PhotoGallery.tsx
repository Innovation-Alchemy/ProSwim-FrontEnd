import { useState } from 'react';
import {
  cardPhoto
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
  { src: cardPhoto, alt: 'img1' },
  { src: cardPhoto, alt: 'img2' },
  { src: cardPhoto, alt: 'img3' },
  { src: cardPhoto, alt: 'img4' },
  { src: cardPhoto, alt: 'img2' },
  { src: cardPhoto, alt: 'img5' },
  { src: cardPhoto, alt: 'img6' },
  { src: cardPhoto, alt: 'img7' },
  { src: cardPhoto, alt: 'img8' },
  { src: cardPhoto, alt: 'img9' },
  { src: cardPhoto, alt: 'img10' },
  { src: cardPhoto, alt: 'img5' },
  { src: cardPhoto, alt: 'img6' },
  { src: cardPhoto, alt: 'img7' },
  { src: cardPhoto, alt: 'img8' },
  { src: cardPhoto, alt: 'img9' },
  { src: cardPhoto, alt: 'img10' },
];

const PhotoGallery = () => {
  const [endIndex, setEndIndex] = useState(6);
  const startIndex = endIndex - 6;
  const currentPhotos = photos.slice(startIndex, endIndex);
  return (
    <>
      <Title secondary={'our'} primary={'gallery'} />
      <div className="flex justify-center">
        <Carousel className="w-[80%] !outline-none !border-none !ring-0 no-focus">
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
