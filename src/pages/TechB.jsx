import React from "react";
import Tech from "../assets/TECHB.jpg";
import { Link } from "react-router-dom";

const TechB = () => {
  return (
    <div className=" techB relative flex item-center justify-center gap-[0px] py-[190px] ps-[130px] mt-[0px]">
      <div className="flex  justify-center gap-4 ">
        <div className="flex flex-col items-start ">
          <div className="flex items-start gap-3">
            <p className="w-[30px] h-[34px] text-[28px] font-bold leading-[100%]">
              03
            </p>
            <h4 className="  text-[28px] font-normal leading-[100%]">
              SPACE LAUNCH 101
            </h4>
          </div>
          <div className="flex items-start mt-[90px] gap-[50px] m">
            <div className="flex flex-col gap-5 ">
              <Link
                to="/Technology"
                className=" border-1 w-[80px] h-[80px] text-center flex flex-col justify-center rounded-full hover:bg-[#ffffff]"
              >
                1
              </Link>
              <Link
                to="/Technology/b"
                className=" border-1 w-[80px] h-[80px] text-center flex flex-col justify-center rounded-full bg-[#ffffff]"
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
            <div className="flex flex-col items-start w-[470px] h-[303px] gap-[0px]">
              <p>THE TERMINOLOGY…</p>
              <h1 className="text-[56px] font-normal w-[470px] h-[64px]">
                SPACEPORT
              </h1>
              <p className="w-[444px] h-[192px] my-[35px]">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </div>
        </div>
        <img src={Tech} alt="" className="w-[515px] h-[527px] " />
      </div>
    </div>
  );
};

export default TechB;
