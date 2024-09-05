import { logo } from "@/assets";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { links } from "@/constants";

const Navbar = () => {
  const activeClassStyle = ({ isActive: active }: { isActive: boolean }) => {
    if (active) {
      return { fontWeight: "bold", color: "#1E5C97" };
    }
  };

  return (
    <div className="border-b border-gray-300 shadow-md">
      <div className="container flex justify-between items-center p-6">
        <NavLink className="w-[9.0625rem] h-7" key="logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        {links.map((link, index) => (
          <NavLink
            style={activeClassStyle}
            key={index}
            to={link.path}
            className="relative group text-black"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        ))}
        <Button type="submit" className="w-[9.0625rem] h-9 text-base">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
