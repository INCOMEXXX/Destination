import React from "react";
import MainContent from "../components/MainContent";
import NavBar from "../components/NavBar";
import Moon from "../assets/mooon2.png";
import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div className="page-Destination flex items-center justify-center gap-[90px]">
      <div className="text-[#ffffff] flex flex-col gap-3 my-[50px]">
        <div className="flex items-center gap-3 text-[28px] font-normal font">
          <p>01</p>
          <h4>PICK YOUR DESTINATION</h4>
        </div>
        <img src={Moon} alt="" className="my-[60px]" />
      </div>
      <div className="w-[445px] h-[472px] flex flex-col justify-center">
        <div className="text-[16px] font-normal flex gap-5">
          <Link
            to="/Destination"
            className="hover:border-b-2 border-white pb-[4px] "
          >
            MOON
          </Link>
          <Link
            to="/destination/mars"
            className="hover:border-b-2 border-white pb-[4px] "
          >
            MARS
          </Link>
          <Link
            to="/destination/europa"
            className="hover:border-b-2 border-white pb-[4px] "
          >
            EUROPA
          </Link>
          <Link
            to="/destination/titan"
            className="hover:border-b-2 border-white pb-[4px] "
          >
            TITAN
          </Link>
        </div>
        <h1 className="text-[100px] font-normal">MOON</h1>
        <p className="text-[18px] font-normal">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="my-[70px] flex items-center gap-[50px]">
          <div className="flex flex-col">
            <p>AVG. DISTANCE</p>
            <b>384,400 km</b>
          </div>
          <div>
            <p>Est. travel time</p>
            <b>3 days</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
