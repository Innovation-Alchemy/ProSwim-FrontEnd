import { homeSwimLessonsImage } from "@/assets";
import { motion, useAnimate } from "framer-motion";

const Banner = () => {
  const [scope, animate] = useAnimate();

  return (
    <div
    ref={scope}
      className="relative overflow-hidden"
      onMouseOver={() => {
        animate("span", { scaleX: 4, scaleY: 1 });
      }}
      onMouseOut={() => {
        animate("span", { scaleY: 0 });
      }}
    >
      <span
        className="absolute border-[#ffffffc9] border-[20vw] 
      border-l-transparent border-t-transparent bottom-0 right-0 scale-x-[0] transition-all"
      ></span>
      <img
        className="w-full h-full object-cover"
        src={homeSwimLessonsImage}
      ></img>
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <p className="text-6xl font-bold absolute inset-40 mr-20 flex items-end justify-end">
          Book Now
        </p>
      </div>
    </div>
  );
};

export default Banner;
