import { homeSwimLessonsImage } from '@/assets';

const Banner = () => {
  return (
    <div className="relative">
      <img className="w-full mt-[6.25rem]" src={homeSwimLessonsImage}></img>
      <div className="absolute inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <span className="text-6xl font-bold absolute inset-40 mr-20 flex items-end justify-end">
          Book Now
        </span>
      </div>
    </div>
  );
};

export default Banner;
