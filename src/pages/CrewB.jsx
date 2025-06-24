import React from "react";
import Crew from "../assets/CREWB.png";
import { Link } from "react-router-dom";

const CrewB = () => {
  return (
    <div className="crewb  text-[#ffffff] flex gap-[80px]  ps-[70px]">
      <div className="flex flex-col items-start my-[90px]">
        <div className="flex items-center gap-3 text-[28px] font-bold leading [100%] my-[50px] font-family:Barlow Condensed ">
          <p>01</p>
          <h4>MEET YOUR CREW</h4>
        </div>
        <div className="page crew flex flex-col items-start my-[auto] gap-2">
          <h3 className="text-[32px] font-normal leading [100%]">
            MISSON SPECIALIST{" "}
          </h3>
          <h2 className="text-[56px] font-normal leading [100%]  ">
            MARK SHUTTLEWORTH
          </h2>
          <p className="text-[18px]  leading-[32px] w-[444px] h-[128px] my-[30px]">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
          <div className="flex items-center gap-4 my-[20px]">
            <Link
              to="/Crew"
              className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
            ></Link>
            <Link className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full bg-[#ffffff]"></Link>
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
      <div className="mt-[150px]">
        <img src={Crew} alt="" />
      </div>
    </div>
  );
};

export default CrewB;
