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
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "tween" }}
      className="fixed h-screen inset-0 bg-red-50 z-[1000]"
    >
      <div className="h-[84px] shadow-sm flex items-center justify-between container">
        <img src={logo} alt="" className="h-[29px]" />
        <XIcon className="size-12  text-primary border-2 rounded-md p-1" onClick={closeMenu}/>
      </div>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li>
            <NavLink
              onClick={closeMenu}
              style={activeClassStyle}
              key={index}
              to={link.path}
              className="relative group text-black px-5 py-8 block text-2xl"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNav;
