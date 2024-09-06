import { headerBG } from '@/assets';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <img src={headerBG} alt="header background" className="w-full" />
      <h1
        className="absolute font-cabin-sketch text-white z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        {title.charAt(0).toUpperCase() + title.slice(1).trim().toLowerCase()}
      </h1>
    </div>
  );
};

export default Header;
