import React from 'react';
import { cardPhoto } from '@/assets';
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

// Define the type for a photo
interface Photo {
  src: string;
  alt: string;
}

// Sample photos data
const photos: Photo[] = [
  { src: cardPhoto, alt: 'img1' },
  { src: cardPhoto, alt: 'img2' },
  { src: cardPhoto, alt: 'img3' },
  { src: cardPhoto, alt: 'img4' },
  { src: cardPhoto, alt: 'img5' },
  { src: cardPhoto, alt: 'img6' },
  { src: cardPhoto, alt: 'img7' },
  { src: cardPhoto, alt: 'img8' },
  { src: cardPhoto, alt: 'img9' },
  { src: cardPhoto, alt: 'img10' },
  { src: cardPhoto, alt: 'img11' },
  { src: cardPhoto, alt: 'img12' },
  { src: cardPhoto, alt: 'img13' },
  { src: cardPhoto, alt: 'img14' },
  { src: cardPhoto, alt: 'img15' },
  { src: cardPhoto, alt: 'img16' },
];

// Function to split photos into chunks
const getPhotoChunks = (photos: Photo[], chunkSize: number): Photo[][] => {
  const result: Photo[][] = [];
  for (let i = 0; i < photos.length; i += chunkSize) {
    result.push(photos.slice(i, i + chunkSize));
  }
  return result;
};

// Get chunks of 6 photos each
const photoChunks = getPhotoChunks(photos, 6);

const PhotoGallery: React.FC = () => {
  return (
    <>
      <Title secondary={'our'} primary={'gallery'} />
      <div className="flex justify-center">
        <Carousel className="w-[80%]">
          <CarouselContent>
            {photoChunks.map((chunk, chunkIndex) => (
              <CarouselItem key={chunkIndex}>
                <div className="p-1">
                  <Card className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0">
                    <CardContent className="grid grid-cols-3 gap-6">
                      {chunk.map((photo, photoIndex) => (
                        <Image
                          key={photoIndex}
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
          <CarouselPrevious className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0" />
          <CarouselNext className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0" />
        </Carousel>
      </div>
    </>
  );
};

export default PhotoGallery;
