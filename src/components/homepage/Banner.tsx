import { homeSwimLessonsImage } from '@/assets';
import { useAnimate } from 'framer-motion';

const Banner = () => {
  const [scope, animate] = useAnimate();

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseOver={() => {
        animate('span', { scaleX: 4, scaleY: 1 });
      }}
      onMouseOut={() => {
        animate('span', { scaleY: 0 });
      }}
    >
      <span
        className="absolute border-white border-[20vw] 
      border-l-transparent border-t-transparent bottom-0 right-0 scale-x-[0] transition-all"
      ></span>
      <img
        className="w-full h-full object-cover"
        src={homeSwimLessonsImage}
      ></img>
      <div className="absolute inset-0 bg-gray-600 bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <p className="absolute bottom-7 text-3xl sm:text-4xl md:text-6xl font-bold xl:bottom-[25%] 2xl:right-40 sm:bottom-10 right-10 flex items-end justify-end">
          Book Now
        </p>
      </div>
    </div>
  );
};

export default Banner;
