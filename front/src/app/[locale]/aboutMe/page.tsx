import React from "react";
import ThemeToggle from "../components/ThemeToggle";

const AboutMe = () => {
  return (
    <div className=" dark:bg-black dark:text-white">
      {" "}
      <div className="min-h-screen bg-fondo dark:bg-black dark:text-white flex flex-col items-center justify-center p-8">
        <ThemeToggle />
        <h1 className="mt-6 text-4xl font-bold">Hola, prueba Dark Mode</h1>
        <p className="mt-2 text-lg">
          Haz click en el botón para cambiar el tema.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
