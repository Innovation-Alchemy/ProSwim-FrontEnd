'use client';

import { useState } from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface AlbumProps {
  photos: Photo[];
  photosPerPage?: number;
  setCurrentIndex: (id: number) => void;
  currentIndex: number | null;
}

export function Album({
  photos,
  photosPerPage = 12,
  setCurrentIndex,
  currentIndex,
}: AlbumProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePhotoClick = (id: number) => {
    setCurrentIndex(id);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out my photo album!',
          text: 'I wanted to share this amazing photo album with you.',
          url: window.location.href,
        });
        toast({
          title: "Shared successfully",
          description: "Your album has been shared.",
        });
      } catch (error) {
        console.error('Error sharing:', error);
        toast({
          title: "Share failed",
          description: "There was an error sharing your album.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Share not supported",
        description: "Your browser doesn't support sharing.",
        variant: "destructive",
      });
    }
  };

  const paginatedPhotos = photos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2 overflow-x-auto">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? 'default' : 'outline'}
              onClick={() => handlePageChange(i + 1)}
              className="min-w-[100px]"
            >
              Album {i + 1}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedPhotos.map(photo => (
          <div
            key={photo.id}
            className="aspect-square overflow-hidden rounded-md cursor-pointer"
            onClick={() => handlePhotoClick(photo.id)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover transition-transform hover:scale-105 ${
                currentIndex === photo.id
                  ? 'ring-2 ring-primary ring-offset-2'
                  : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}