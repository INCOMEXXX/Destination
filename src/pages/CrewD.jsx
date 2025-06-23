import React from "react";
import Crew from "../assets/CREW D.png";
import { Link } from "react-router-dom";

const CrewD = () => {
  return (
    <div className="text-[#ffffff] flex gap-[50px] ">
      <div className="flex flex-col items-start my-[30px]">
        <div className="flex items-center gap-3 text-[28px] font-bold leading [100%] my-[50px] font-family:Barlow Condensed">
          <p>01</p>
          <h4>MEET YOUR CREW</h4>
        </div>
        <div className="page crew flex flex-col items-start my-[auto] gap-2">
          <h3 className="text-[32px] font-normal leading [100%]">
            Flight Engineer
          </h3>
          <h2 className="text-[56px] font-normal leading [100%]  ">
            ANOUSHEH ANSARI
          </h2>
          <p className="text-[18px]  leading-[32px] w-[444px] h-[128px] my-[30px]">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </div>
        <div className="flex items-center gap-4 my-[20px]">
          <Link
            to="/Crew"
            className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
          ></Link>
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
            className=" border-1 w-[15px] h-[15px] text-center flex flex-col justify-center rounded-full bg-[#ffffff]"
          ></Link>
        </div>
      </div>
      <img src={Crew} alt="" className="mt-[100px]" />
    </div>
  );
};

export default CrewD;
