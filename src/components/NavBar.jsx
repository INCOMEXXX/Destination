import { Link, NavLink } from "react-router-dom";
import pageLogo from "../assets/Group 2.svg";

const NavBar = () => {
  return (
    <div className="flex absolute right-[30px] z-10 items-center gap-[40px] justify-between mt-[25px] w-[1385px] pl-[55px] pt-[10px] ">
      <img src={pageLogo} alt="" />
      <div className="border w-[320px] h-[1px] opacity-[0.25]  left-[120px] relative"></div>
      <div className="flex items-center gap-[40px]  bg-[#FFFFFF0A] w-[830px] h-[90px] justify-center px-[70px] text-[16px] font-normal relative  ">
        <div className="flex items-center gap-4 hover:border-b border-[#FFFFFF]">
          <p>00</p>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Home
          </NavLink>
        </div>
        <div
          className="
        flex items-center gap-4 hover:border-b border-[#FFFFFF]"
        >
          <p>01</p>
          <NavLink
            to="/Destination"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Destination
          </NavLink>
        </div>
        <div className="flex items-center gap-4 hover:border-b border-[#FFFFFF]">
          <p>02</p>
          <NavLink
            to="/Crew"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Crew
          </NavLink>
        </div>

        <div className="flex items-center gap-4 hover:border-b border-[#FFFFFF]">
          <p>03</p>
          <NavLink
            to="/Technology"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            Technology
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
