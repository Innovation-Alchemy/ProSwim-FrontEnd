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
      <div className="my-12">
        <CoreValues />
      </div>
      <Banner />
      <div className="my-12">
        <PhotoGallery />
      </div>
      <div className="my-12">
        <VideoGallery />
      </div>
      <div className="my-12">
        <Location />
      </div>
    </div>
  );
};

export default Home;
