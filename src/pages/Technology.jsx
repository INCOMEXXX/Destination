import React from "react";
import Flytech from "../assets/flytech.jpg";
import { Link } from "react-router-dom";

const Technology = () => {
  return (
    <div className=" page-tech relative flex item-center justify-between gap-[90px] my-[0px] ml-[0px]">
      <div className="flex flex-col justify-center ps-[70px] ">
        <div className="flex gap-4 px-[]">
          <p className="w-[30px] h-[34px] text-[28px] font-bold leading-[100%]">
            03
          </p>
          <h4 className="  text-[28px] font-normal leading-[100%]">
            SPACE LAUNCH 101
          </h4>
        </div>

        <div className="flex items-start px-[] gap-[50px] mt-[90px]">
          <div className="flex flex-col gap-5 mt-[20px]">
            <p className=" border-1 w-[80px] h-[80px] text-center flex flex-col justify-center rounded-full bg-[#ffffff]">
              1
            </p>
            <Link
              to="/Technology/b"
              className=" border-1 w-[80px] h-[80px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
            >
              2
            </Link>
            <Link
              to="/Technology/c"
              className=" border-1 w-[80px] h-[80px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
            >
              3
            </Link>
          </div>

          <div className="flex flex-col items-start w-[470px] h-[303px] gap-[20px]">
            <p>THE TERMINOLOGY…</p>
            <h1 className="text-[56px] font-normal w-[470px] h-[64px] text-start">
              LAUNCH VEHICLE
            </h1>
            <p className="w-[444px] h-[192px] mt-[120px]">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
      <img src={Flytech} alt="" className="w-[515px] h-[527px] mt-[240px] pr-[10px]" />
    </div>
  );
};

export default Technology;
