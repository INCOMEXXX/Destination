import React from "react";
import Mars from "../assets/MARSS.png";
import { Link } from "react-router-dom";

const Dmars = () => {
  return (
    <div className="flex page-mars items-center justify-center gap-[90px]">
      <div className="text-[#ffffff] flex flex-col gap-[50px] my-[50px]">
        <div className="flex items-center gap-3 text-[28px] font-normal ">
          <p>01</p>
          <h4>PICK YOUR DESTINATION</h4>
        </div>
        <img src={Mars} alt="" />
      </div>
      <div className="w-[445px] h-[472px] flex flex-col justify-center">
        <div className="text-[16px] font-normal flex gap-5">
          <Link
            to="/Destination"
            className="hover:border-b-2 border-white pb[4px]"
          >
            MOON
          </Link>
          <a href="" className="border-b-2 border-white pb[4px]">
            MARS
          </a>
          <Link
            to="/destination/europa"
            className="hover:border-b-2 border-white pb[4px]"
          >
            EUROPA
          </Link>
          <Link
            to="/destination/titan"
            className="hover:border-b-2 border-white pb[4px]"
          >
            TITAN
          </Link>
        </div>

        <div>
          <h1 className="text-[100px] font-normal">MARS</h1>
          <p className="text-[18px] font-normal">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <div className="my-[70px] flex items-center gap-[50px]">
            <div className="flex flex-col">
              <p>AVG. DISTANCE</p>
              <b>225 MIL. km</b>
            </div>
            <div>
              <p>Est. travel time</p>
              <b>9 MONTHS</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dmars;
