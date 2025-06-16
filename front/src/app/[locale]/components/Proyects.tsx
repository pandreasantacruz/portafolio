import React from "react";
import Xtremegym from "./Proyectos/Xtremegym";
import { useTranslations } from "next-intl";
import Ecommerce from "./Proyectos/Ecommerce";
import Appointments from "./Proyectos/Appointments";
import SstProyect from "./Proyectos/SstProyect";

const Proyects = () => {
  const t = useTranslations("Proyects");

  return (
    <div className="px-4 pb-12 border-b-8  sm:px-8 lg:px-16 border-redP">
      <h2 className="px-4 py-2 mt-8 font-sans text-2xl font-bold text-center bg-blueP sm:text-4xl md:text-4xl">
        {t("Ph1")}
      </h2>
      <p className="mt-2 text-xl text-center font-bebas sm:text-base md:text-2xl">
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
