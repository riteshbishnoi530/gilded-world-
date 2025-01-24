import React from "react";
import gilded from "../assets/gif/gilded.gif"
import right from "../assets/images/background-dark-smoke-right.webp"
import left from "../assets/images/background-dark-smoke.webp"

const PlayEarn = () => {
  return (
    <div className="bg-black pb-[110px] max-lg:pb-16 flex justify-center items-center -mt-1 relative">
      <div className="max-w-[1320px] w-full mx-auto max-xl:px-4">
        <h2 className="font-bold text-5xl max-lg:text-4xl max-md:text-3xl text-center lg:mb-4 mb-3 max-sm:text-2xl text-white font-josefin">
          Play to <span className="bg-gradient-to-r from-off-blue to-off-sky bg-clip-text text-transparent">Earn</span>
        </h2>
        <p className="text-white opacity-70 text-center max-w-[1024px] mx-auto text-xl max-md:text-lg max-sm:text-base">Gilded World will be the first game released by Gilded Games. It is an MMORPG, browser based game that is unlike any other. We have taken inspiration from some of the most popular and successful MMORPG and RPG games and have boiled it down to the best online gameplay that people will actually want to play!</p>
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
        <div className="relative z-10 bg-gradient-to-r from-off-blue to-off-sky p-[5px] rounded-xl mt-12">
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