import React from "react";
import Doug from "../assets/image-removebg-preview(289).png";
import Oval from "../assets/Oval.png";
import { Link } from "react-router-dom";

const Crew = () => {
  return (
    <div className="page-crew relative text-[#ffffff] flex gap-[80px] ps-[70px] ">
      <div className="flex flex-col items-start my-[30px] mt-[90px]">
        <div className=" c flex items-center gap-3 text-[28px] font-bold leading [100%] my-[50px] ">
          <p>01</p>
          <h4>MEET YOUR CREW</h4>
        </div>
        <div className="page crew flex flex-col items-start my-[auto] gap-2">
          <h3 className="text-[32px] font-normal leading [100%]">COMMANDER</h3>
          <h2 className="text-[56px] font-normal leading [100%]  ">
            DOUGLAS HURLEY
          </h2>
          <p className="text-[18px]  leading-[32px] w-[444px] h-[128px] my-[30px]">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div className="flex items-center gap-4 my-[20px]">
            <p className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full bg-[#ffffff]"></p>
            <Link
              to="/Crew/b"
              className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
            ></Link>
            <Link
              to="/Crew/c"
              className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
            ></Link>
            <Link
              to="/Crew/d"
              className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
            ></Link>
          </div>
        </div>
      </div>
      <div className="mt-[80px]">
        <img src={Doug} alt="" className="mt-[80px]" />
      </div>
    </div>
  );
};

export default Crew;
