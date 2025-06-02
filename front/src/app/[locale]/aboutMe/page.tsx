"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-2 gap-4 py-4 md:px-16 md:grid-cols-2 ">
        <div className="flex flex-col transition-transform duration-300 ring-2 hover:scale-110 ring-gray-300">
          <h2 className="py-2 text-3xl font-bold text-center ">
            Nuestra ubicación
          </h2>
          <h3 className="text-center text-1xl ">
            Centro Comercial Andino Cra. 11 #82-71, Bogotá
          </h3>
        </div>
        <div className=" dark:bg-black dark:text-white">
          {" "}
          <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-fondo dark:bg-black dark:text-white">
            <h1 className="mt-6 text-4xl font-bold">Hola, prueba Dark Mode</h1>
            <p className="mt-2 text-lg"></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
