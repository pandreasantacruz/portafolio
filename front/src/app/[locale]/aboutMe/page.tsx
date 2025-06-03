"use client";
import { useTranslations } from "next-intl";
import React from "react";
//import { motion } from "framer-motion";

const AboutMe = () => {
  const t = useTranslations("Aboutme");

  return (
    <div className="grid w-full grid-cols-1 h-auto gap-4 py-4 my-2 sm:px-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:px-16 ring-8 ring-[#EF3C62]">
      <div className="flex flex-col justify-center pt-4 m-0 dark:bg-black dark:text-white">
        <h2 className=" inline-block  bg-[#B3C3F3] font-bold text-4xl py-2 px-4 w-max">
          {t("h1")}
        </h2>
        <h2 className="py-4 text-xl font-bold ">{t("h2")} </h2>
        <h3 className="text-2xl text-justify ">{t("h3")} </h3>
      </div>
      <div className=" dark:bg-black dark:text-white">
        {" "}
        <div className="flex flex-col items-center justify-center p-8 dark:bg-black dark:text-white">
          <img
            src="/Aboutme.png"
            alt="logo"
            className="w-auto h-120 bg-[#B3C3F3] rounded-full "
          />{" "}
          <p className="mt-2 text-lg"></p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
