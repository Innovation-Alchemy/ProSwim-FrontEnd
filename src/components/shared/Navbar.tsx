import { logo } from '@/assets';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const links = [
  { path: '/', name: 'Home' },
  { path: '/learn-to-swim', name: 'Learn to Swim' },
  { path: '/shop', name: 'Shop' },
  { path: '/about', name: 'About' },
  { path: '/classes', name: 'Classes' },
  { path: '/album', name: 'Album' },
  { path: '/contact-us', name: 'Contact Us' },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 border-b border-black">
      <NavLink className="w-[9.0625rem] h-7 ml-[4.34375rem]" key="logo" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className="relative group text-black"
        >
          {link.name}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      ))}
      <Button
        type="submit"
        className="w-[9.0625rem] h-9 text-base mr-[4.34375rem]"
      >
        Login
      </Button>
    </div>
  );
};

export default Navbar;
