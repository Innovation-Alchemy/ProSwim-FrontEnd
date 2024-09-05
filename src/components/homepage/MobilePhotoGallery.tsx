import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cardPhoto } from '@/assets';
import Title from '../shared/Title';
import Image from '../shared/Image';

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

export function MobilePhotoGallery() {
  return (
    <>
      <Title secondary={'our'} primary={'gallery'} />
      <div className="flex justify-center my-16">
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0">
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        width="w-full"
                        height="auto"
                      />
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
}
