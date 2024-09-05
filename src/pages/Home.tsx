import { CoreValues } from '@/components';
import PhotoGallery from '@/components/homepage/PhotoGallery';
import VideoGallery from '@/components/homepage/VideoGallery';
import Location from '@/components/homepage/Location';
import Carousel from '@/components/homepage/Carousel';
import Navbar from '@/components/shared/Navbar';
import Banner from '@/components/homepage/Banner';

const Home = () => {
  return (
    <div className="overflow-x-auto">
      <Navbar />
      <Carousel />
      <CoreValues />
      <Banner />
      <div className="flex flex-col mx-[4.375rem] gap-[6.25rem]">
        <PhotoGallery />
        <VideoGallery />
        <Location />
      </div>
    </div>
  );
};

export default Home;
