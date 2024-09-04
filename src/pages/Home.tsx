import { homeSwimLessonsImage } from '@/assets';
import { CoreValues } from '@/components';
import PhotoGallery from '@/components/homepage/PhotoGallery';
import VideoGallery from '@/components/homepage/VideoGallery';
import Location from '@/components/homepage/Location';

const Home = () => {
  return (
    <div>
      <CoreValues />
      <img
        className="w-full my-[6.25rem] mx-0"
        src={homeSwimLessonsImage}
      ></img>
      <PhotoGallery />
      <VideoGallery />
      <Location />
    </div>
  );
};

export default Home;
