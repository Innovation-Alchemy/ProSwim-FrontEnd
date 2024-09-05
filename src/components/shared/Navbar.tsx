import { logo } from "@/assets";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { links } from "@/constants";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const activeClassStyle = ({ isActive: active }: { isActive: boolean }) => {
    if (active) {
      return { fontWeight: "bold", color: "#1E5C97" };
    }
  };

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup to ensure scroll is enabled when component unmounts
    };
  }, [toggle]);

  return (
    <div className="shadow-md border-b border-gray-300">
      <div className="container h-[84px] flex items-center justify-between gap-10">
        <Link className="w-[9.0625rem] h-7" key="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex justify-between items-center gap-8 flex-1 max-lg:hidden">
          {links.map((link, index) => (
            <li>
              <NavLink
                style={activeClassStyle}
                key={index}
                to={link.path}
                className="relative group text-black"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
        <Button
          type="submit"
          className="w-[9.0625rem] h-9 text-base max-lg:hidden"
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
