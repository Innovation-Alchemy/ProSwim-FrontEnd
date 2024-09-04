import { homeSwimLessonsImage } from '@/assets';
import { CoreValues } from '@/components';

const Home = () => {
  return (
    <div>
      <CoreValues />
      <img className="w-full my-[6.25rem]" src={homeSwimLessonsImage}></img>
    </div>
  );
};

export default Home;
