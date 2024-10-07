import { useState } from "react";
import { logo } from "@/assets";
import { motion } from "framer-motion";
import { links } from "@/constants";
import { NavLink } from "react-router-dom";
import { XIcon } from "lucide-react";


type Props = {
  closeMenu: () => void;
};

const MobileNav = ({ closeMenu }: Props) => {
  const activeClassStyle = ({ isActive: active }: { isActive: boolean }) => {
    if (active) {
      return { fontWeight: "bold", color: "#1E5C97", backgroundColor: "#eee" };
    }
  };

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // State to track the active dropdown
  const [activeDropdownPageChild, setActiveDropdownPageChild] = useState<number | null>(null); // State to track the active page child dropdown

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "tween" }}
      className="fixed h-screen inset-0 bg-red-50 z-[1000] lg:hidden" // Ensure MobileNav only shows on small screens
    >
      <div className="h-[84px] shadow-sm flex items-center justify-between container min-w-[100vw]">
        <img src={logo} alt="" className="h-[29px]" />
        <XIcon className="size-12 text-primary border-2 rounded-md p-1" onClick={closeMenu} />
      </div>
      <ul className="flex flex-col px-6 pt-4 text-[1.35rem]">
        {links.map((link, index) => (
          link.pageChildren ? (
            <span
              key={index}
              className="relative group cursor-pointer max-w-fit text-black text-nowrap py-4"
              onClick={() => activeDropdown === index ? setActiveDropdown(null) : setActiveDropdown(index)} // Show and Hide the dropdown for this link
            >
              {/* Parent Link */}
              {link.name}

              {/* Dropdown for pageChildren */}
              {activeDropdown === index && ( // Show dropdown only if this is the active link
                <div className="absolute top-0 right-0 translate-x-[110%] bg-white shadow-md mt-2 z-10 transition-all ease-in-out duration-300 shadow-[0px_0px_10px_-1px_rgba(0,0,0,.5)]">
                  {link.pageChildren.map((pageChild, PC__index) => (
                    <NavLink
                      key={PC__index}
                      to={pageChild.path ? pageChild.path : '/'}
                      style={pageChild.path ? activeClassStyle : {}}
                      className="block relative group text-nowrap px-4 py-2 cursor-pointer text-black "
                      onClick={() => activeDropdownPageChild === PC__index ? setActiveDropdownPageChild(null) : setActiveDropdownPageChild(PC__index)}
                    >
                      {pageChild.name}
                      {pageChild.subChildren ? (
                        <>
                          {/* Page Child with SubChildren */}


                          {/* Dropdown for subChildren */}
                          {
                            // activeDropdownPageChild === PC__index && 
                            (
                              <div className="absolute right-[0px] top-0 translate-x-[99%] z-8 bg-white shadow-md p-4 ml-2 transition-all ease-in-out duration-1000 flex flex-col items-center justify-between">
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
              className="relative group text-black py-4"
              style={activeClassStyle}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 "></span>
            </NavLink>
          )
        ))}
      </ul>
    </motion.div >
  );
};

export default MobileNav;
