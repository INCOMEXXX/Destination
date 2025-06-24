import { Link } from "react-router-dom";
import pageLogo from "../assets/Group 2.svg";

const NavBar = () => {
  return (
    <div className="flex absolute right-[30px] z-10 items-center gap-[40px] justify-between mt-[25px] ">
      <img src={pageLogo} alt="" />
      <div className="border w-[320px] h-[1px] opacity-[0.25]  left-[120px] relative"></div>
      <div className="flex items-center gap-[40px]  bg-[#FFFFFF0A] w-[830px] h-[90px] justify-center px-[70px] text-[16px] font-normal relative  ">
        <div className="flex items-center gap-4 hover:border-b border-[#FFFFFF]">
          <p>00</p>
          <Link to="/">Home</Link>
        </div>
        <div className="flex items-center gap-4 hover:border-b border-[#FFFFFF]">
          <p>01</p>
          <Link to="/Destination">Destination</Link>
        </div>
        <div className="flex items-center gap-4 hover:border-b border-[#FFFFFF]">
          <p>02</p>
          <Link to="/Crew">Crew</Link>
        </div>

        <div className="flex items-center gap-4 hover:border-b border-[#FFFFFF]">
          <p>03</p>
          <Link to="/Technology">Technology</Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
