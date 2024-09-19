import { logo } from '@/assets';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import { links } from '@/constants';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // State to track the active dropdown
  const [activeDropdownPageChild, setActiveDropdownPageChild] = useState<number | null>(null); // State to track the active page child dropdown

  const activeClassStyle = ({ isActive: active }: { isActive: boolean }) => {
    if (active) {
      return { fontWeight: 'bold', color: '#1E5C97', backgroundColor: '#fff' };
    }
  };

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggle]);

  return (
    <div className="shadow-md border-b border-gray-300 fixed top-0 left-0 right-0 bg-white z-10 ">
      <div className="container h-[84px] flex items-center justify-between gap-10">
        <Link className="w-[9.0625rem] h-7" key="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex justify-between items-center gap-8 flex-1 max-lg:hidden">
          {links.map((link, index) => (
            link.pageChildren ? (
              <span
                key={index}
                className="relative group cursor-pointer text-black text-nowrap py-4"
                onMouseEnter={() => setActiveDropdown(index)} // Show the dropdown for this link
                onMouseLeave={() => setActiveDropdown(null)} // Hide the dropdown when not hovering
              >
                {/* Parent Link */}
                {link.name}

                {/* Dropdown for pageChildren */}
                {activeDropdown === index && ( // Show dropdown only if this is the active link
                  <div className="absolute bg-white shadow-md mt-2 z-10 transition-all ease-in-out duration-300 shadow-[0px_0px_10px_-1px_rgba(0,0,0,.5)]">
                    {link.pageChildren.map((pageChild, PC__index) => (
                      <NavLink
                        key={PC__index}
                        to={pageChild.path ? pageChild.path : '/'}
                        style={pageChild.path ? activeClassStyle : {}}
                        className="block relative group text-nowrap px-4 py-2 cursor-pointer text-black hover:bg-[#1e5c97] hover:text-white"
                        onMouseEnter={() => setActiveDropdownPageChild(PC__index)} // Show the dropdown for this page child
                        onMouseLeave={() => setActiveDropdownPageChild(null)} // Hide the dropdown when not hovering
                      >
                        {pageChild.name}
                        {pageChild.subChildren ? (
                          <>
                            {/* Page Child with SubChildren */}


                            {/* Dropdown for subChildren */}
                            {activeDropdownPageChild === PC__index && (
                              <div className="absolute right-[-90%] top-0 z-8 bg-white shadow-md p-4 ml-2 transition-all ease-in-out duration-1000 flex flex-col items-center justify-between">
                                {pageChild.subChildren.map((subChild) => (
                                  // Remove 'key={PC__index}' from here
                                  <NavLink
                                    to={subChild.path}
                                    className="block text-black px-1 py-2 
                                     w-full text-nowrap"
                                    style={activeClassStyle}
                                  >
                                    {/* border-b border-t border-gray-300 */}
                                    {subChild.name}
                                  </NavLink>

                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          /* Direct pageChild link */
                          null
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </span>
            ) : (
              /* Direct link, like Shop */
              <NavLink
                key={index}
                to={link.path}
                className="relative group text-black"
                style={activeClassStyle}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            )
          ))}
        </div>

        <Button
          type="submit"
          className="w-[9.0625rem] h-9 text-base max-lg:hidden hover:bg-transparent hover:font-bold hover:text-blue-500 hover:border-blue-500 hover:border-2"
        >
          Login
        </Button>
        <MenuIcon
          onClick={() => setToggle(true)}
          type="submit"
          className="text-primary size-12 p-1 border-2 rounded-md border-gray-100 lg:hidden"
        />
        <AnimatePresence>
          {toggle && <MobileNav closeMenu={() => setToggle(false)} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
