import React from "react";
import Europa from "../assets/EUROPAA.png";
import { Link } from "react-router-dom";

const Deuropa = () => {
  return (
    <div className="flex page-europa items-center justify-center gap-[90px]">
      <div className="text-[#ffffff] flex flex-col gap-[50px] my-[50px]">
        <div className="flex items-center gap-3 text-[28px] font-normal ">
          <p>01</p>
          <h4>PICK YOUR DESTINATION</h4>
        </div>
        <img src={Europa} alt="" />
      </div>
      <div className="w-[445px] h-[472px] flex flex-col justify-center ">
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
          <a href="" className="border-b-2 border-white pb-[4px]">
            EUROPA
          </a>
          <Link
            to="/destination/titan"
            className="hover:border-b-2 border-white pb-[4px]"
          >
            TITAN
          </Link>
        </div>

        <div>
          <h1 className="text-[100px] font-normal">EUROPA</h1>
          <p className="text-[18px] font-normal">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="my-[70px] flex items-center gap-[50px]">
            <div className="flex flex-col">
              <p>AVG. DISTANCE</p>
              <b>628 MIL. km</b>
            </div>
            <div>
              <p>Est. travel time</p>
              <b>3 YEARS</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deuropa;
