"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { imgTech } from "../helpers/helpers";

const Technologies = () => {
  const t = useTranslations("Technologies");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgTech.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 pb-12 sm:px-8 lg:px-16 border-b-8 border-[#E0004D]">
      <h2 className="font-sans bg-[#B3C3F3] font-bold text-2xl sm:text-4xl md:text-4xl mt-8 ml-auto py-2 mr-0 px-4 w-max">
        {t("Th1")}
      </h2>
      <p className="mt-2 text-xl text-justify font-bebas sm:text-base md:text-2xl">
        {t("Tp1")}
      </p>

      <div className="flex flex-wrap justify-center gap-4 py-4">
        {imgTech.map((image, index) => (
          <motion.div
            onClick={() => setCurrentIndex(index)}
            key={`${image.label}-${index}`}
            className={`flex flex-col items-center justify-center w-20 sm:w-24 md:w-28 bg-[#B3C3F3] shadow-md rounded-lg transition-transform duration-300 hover:scale-105 ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <img
              src={image.src}
              alt={`Technologies ${index + 1}`}
              className="object-contain w-full h-20 p-2"
            />
            <span className="mt-1 font-sans text-xs font-semibold text-center">
              {image.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
