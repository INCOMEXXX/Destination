import React from "react";
import Titan from "../assets/TITANN.png";
import { Link } from "react-router-dom";

const Dtitan = () => {
  return (
    <div className="flex items-center justify-center gap-[90px]">
      <div className="text-[#ffffff] flex flex-col gap-[50px] my-[50px]">
        <div className="flex items-center gap-3 text-[28px] font-normal">
          <p>01</p>
          <h4>PICK YOUR DESTINATION</h4>
        </div>
        <img src={Titan} alt="" />
      </div>
      <div className="w-[445px] h-[472px] flex flex-col justify-center">
        <div className="text-[16px] font-normal flex gap-5">
          <Link
            to="/Destination"
            className="hover:border-b-2 border-white pb-[4px]"
          >
            MOON
          </Link>
          <Link
            to="/destination/mars"
            className="hover:border-b-2 border-white pb-[4px]"
          >
            MARS
          </Link>
          <Link
            to="/destination/europa"
            className="hover:border-b-2 border-white pb-[4px]"
          >
            EUROPA
          </Link>
          <a href="" className="border-b-2 border-white pb-[4px]">
            TITAN
          </a>
        </div>

        <div>
          <h1 className="text-[100px] font-normal">TITAN</h1>
          <p className="text-[18px] font-normal">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <div className="my-[70px] flex items-center gap-[50px]">
            <div className="flex flex-col">
              <p>AVG. DISTANCE</p>
              <b>1.6 BIL. km</b>
            </div>
            <div>
              <p>Est. travel time</p>
              <b>7 years</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dtitan;
