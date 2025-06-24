import React from "react";
import NavBar from "../components/NavBar";
import MainContent from "../components/MainContent";
import Bg from "../assets/Bitmap2.jpg";

const Homepage = () => {
  return (
    <div className="  page-home relative flex gap-[40px]">
      <div className="w-[450px] h-[382px]  flex flex-col justify-end mx-auto mt-[280px] text-[16px]">
        <h4 className="text-[28px]  text-[#D0D6F9] h-[34px] leading-[100%]">
          SO, YOU WANT TO TRAVEL TO
        </h4>
        <h1 className="text-[150px] w-[445px] h-[172px] font-normal leading-[100%] my-[20px] ">
          SPACE
        </h1>
        <p className="text-[18px] font-normal text-[#D0D6F9] w-[444px] h-[128px] leading-[32px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[274px] h-[274px] border text-center flex flex-col justify-center rounded-full mx-auto mt-[400px] bg-[#FFFFFF] ">
        <h2 className="text-[32px] text-[#0B0D17] ">EXPLORE</h2>
      </div>
    </div>
  );
};

export default Homepage;
