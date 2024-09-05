import { CoreValues } from '@/components';
import PhotoGallery from '@/components/homepage/PhotoGallery';
import VideoGallery from '@/components/homepage/VideoGallery';
import Location from '@/components/homepage/Location';
import Carousel from '@/components/homepage/Carousel';
import Banner from '@/components/homepage/Banner';

const Home = () => {
  return (
    <div className="overflow-x-auto">
      <Carousel />
      <div className="my-16">
        <CoreValues />
      </div>
      <Banner />
      <div className="my-16">
        <PhotoGallery />
      </div>
      <div className="my-16">
        <VideoGallery />
      </div>
      <div className="my-16">
        <Location />
      </div>
    </div>
  );
};

export default Home;
