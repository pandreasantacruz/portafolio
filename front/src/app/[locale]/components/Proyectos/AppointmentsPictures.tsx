"use client";
import React, { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { imgAppoints } from "../../helpers/appoint";
import { useTranslations } from "next-intl";

const CarouselAppointments = () => {
  const t = useTranslations("Appointments");
  const tP = useTranslations("Proyects");

  const images = imgAppoints;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col max-w-full gap-6 pb-4 overflow-hidden text-black bg-white md:flex-row dark:bg-blackP dark:text-white">
      {/* Carrusel */}
      <div className="relative w-full max-w-[300px] aspect-[4/5] mx-auto md:mx-0">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-contain rounded-xl"
        />
        <button
          onClick={prevSlide}
          className="absolute p-2 -translate-y-1/2 rounded-full shadow-md top-1/2 left-2 bg-[#B3C3F3] hover:bg-[#EF3C62]"
        >
          <GoChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute p-2 -translate-y-1/2 rounded-full shadow-md top-1/2 right-2 bg-[#B3C3F3] hover:bg-[#EF3C62]"
        >
          <GoChevronRight />
        </button>
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-verde" : "bg-grisP"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Texto */}
      <div className="flex flex-col justify-center w-full max-w-md px-4 space-y-4 md:px-0">
        <p className="text-lg font-medium text-justify break-words">
          {t("Appo1")}
        </p>
        <p className="text-lg font-medium text-justify break-words font-bebas">
          {tP("Pr")}
        </p>
        <p className="text-lg text-justify break-words">{t("Appo2")}</p>
        <div className="flex flex-row gap-4">
          <a
            target="_blank"
            href="https://res.cloudinary.com/dpo25wgdo/video/upload/v1749159568/Nuevo_proyecto_clinica_fxljud.mp4"
          >
            <button className="px-4 py-2 bg-[#B3C3F3]  rounded-lg hover:bg-[#EF3C62]">
              Video Demo
            </button>
          </a>
          <a
            target="_blank"
            href="https://github.com/pandreasantacruz/ProyectoClinica"
          >
            <button className="px-4 py-2 bg-[#B3C3F3]  rounded-lg hover:bg-[#EF3C62]">
              {tP("Gh")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselAppointments;
