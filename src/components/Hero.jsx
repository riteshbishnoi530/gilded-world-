import React, { useState, useEffect } from "react";
import Header from "./Header";
import presale from "../assets/images/presale.webp";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(11, 0, 0, 0);
    if (new Date() > targetDate) {
      targetDate.setDate(targetDate.getDate());
    }

    const now = new Date();
    const timeDifference = targetDate - now;
    if (timeDifference <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    setTimeLeft({ days, hours, minutes, seconds });
  }, []);

  return (
    <div className="bg-[url(./assets/images/hero-bg-img.webp)] bg-center bg-cover bg-no-repeat lg:min-h-screen ">
      <div className="bg-[#000000CC] py-[21px]">
        <div className="container mx-auto">
          <Header />
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-white font-normal text-[72px] max-xl:text-6xl max-lg:text-5xl max-md:text-4xl leading-[150%] max-w-[1059px] mx-auto text-center pt-[254px] max-lg:pt-16 max-md:pt-12 max-sm:pt-8">
          There are games... And then there are{" "}
          <span className="text-[#1BABFE]">Gilded</span> Games
        </h1>
        <p className="font-semibold leading-[127%] text-4xl max-lg:text-3xl max-md:text-2xl text-white text-center timer">
          <span className="text-[#1BABFE]">{timeLeft.days}d</span> :
          {timeLeft.hours}hr : {timeLeft.minutes}min : {timeLeft.seconds}sec
        </p>
        <p className="font-semibold leading-[127%] text-lg text-white text-center">
          Remaining Presale Time
        </p>
        <div className=" flex flex-wrap items-center gap-6 justify-center mt-[22px] pb-[129px] max-xl:pb-24 max-lg:pb-16 max-md:pb-12 max-sm:pb-8">
          <button className="py-[14px] px-[34px] cursor-pointer max-md:px-7 max-md:py-2 presale-shadow bg-gradient-to-r from-off-blue to-off-sky text-white font-normal text-2xl flex items-center rounded-full gap-2 hover:scale-110 transition-all ease-in-out duration-300">
            <img src={presale} alt="icon" className="w-full max-w-[22px] pointer-events-none" />
            Presale
          </button>
          <button className="py-[14px] px-[34px] cursor-pointer max-md:px-7 max-md:py-2 border border-solid border-white text-white font-normal text-2xl flex items-center justify-center rounded-full gap-2 hover:scale-110 transition-all ease-in-out duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;