import React from "react";
import gilded from "../assets/gif/gilded.gif"
import right from "../assets/images/background-dark-smoke-right.webp"
import left from "../assets/images/background-dark-smoke.webp"
import Heading from "../common/Heading";
import Description from "../common/Description";

const PlayEarn = () => {
  return (
    <div className="bg-black pb-[110px] max-lg:pb-16 flex justify-center items-center -mt-1 relative">
      <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
        <div className="max-w-[1024px] mx-auto">
        <Heading spanTwo="Earn " heading="Play To" myClass="text-center" />
        <Description myClass="text-center" paragraph="Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!" />
        </div>
        <img
          src={left}
          alt="smoke"
          className="absolute left-0 max-xl:hidden pointer-events-none"
        />
        <img
          src={right}
          alt="smoke"
          className="absolute right-0 max-xl:hidden pointer-events-none"
        />
        <div className="relative z-10 bg-gradient-to-r from-off-blue to-off-sky p-[5px] rounded-xl mt-12 max-md:mt-8">
          <img
            className="max-w-[1320px] w-full rounded-xl pointer-events-none"
            src={gilded}
            alt="gilded-world-img"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayEarn;