import React from "react";
import Xtremegym from "./Proyectos/Xtremegym";
import { useTranslations } from "next-intl";
import Ecommerce from "./Proyectos/Ecommerce";
import Appointments from "./Proyectos/Appointments";
import SstProyect from "./Proyectos/SstProyect";

const Proyects = () => {
  const t = useTranslations("Proyects");

  return (
    <div className=" px-4 pb-12 sm:px-8 lg:px-16 border-b-8 border-[#E0004D]">
      <h2 className="font-sans text-center bg-[#B3C3F3] font-bold text-2xl sm:text-4xl md:text-4xl mt-8  py-2 px-4">
        {t("Ph1")}
      </h2>
      <p className="mt-2 text-xl text-center font-bebas sm:text-base md:text-lg">
        {t("Pp1")}
      </p>
      <div className="flex flex-wrap justify-center gap-4 py-4">
        <SstProyect></SstProyect>
        <Xtremegym></Xtremegym>
        <Ecommerce></Ecommerce>
        <Appointments></Appointments>
      </div>
    </div>
  );
};
export default Proyects;
