"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  const t = useTranslations("Aboutme");

  return (
    <div className="grid w-full grid-cols-1 h-auto gap-4 py-4 my-2 sm:px-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:px-16 border-b-8 border-[#E0004D] ">
      <div className="flex flex-col justify-center py-4 pt-4 m-0">
        <h2 className=" font-sans inline-block  bg-[#B3C3F3] font-bold text-4xl py-2 px-4 w-max">
          <Typewriter
            words={[t("h1")]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
          />
        </h2>
        <h2 className="px-4 py-4 text-2xl font-bold font-bebas ">{t("h2")} </h2>
        <h3 className="px-4 text-2xl text-justify font-bebas">{t("h3")} </h3>
      </div>
      <div className="">
        {" "}
        <div className="flex flex-col items-center justify-center p-8">
          <img
            src="/Aboutme.png"
            alt="logo"
            className="w-auto h-80  sm:h-80 sm:h-120  md:h-120  lg:h-120 xl:h-120 bg-[#B3C3F3] rounded-full "
          />{" "}
          <p className="mt-2 text-lg"></p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
