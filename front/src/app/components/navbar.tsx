/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
//import { routes } from "../../routes/routes";
import { useState } from "react";
import { routes } from "../routes/routes";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
// import { FiMenu } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";
// import { useAuth } from "@/app/contextos/contextoAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const isPremium = user?.subscriptionType === "premium";
  return (
    <div className="sticky z-40 bg-fondo bg-opacity-80 backdrop-blur-md">
      <nav
        className="text-foreground ring-2 ring-gray-300 ring-opacity-100 
      mx-auto  shadow-xl 
        bg-opacity-80 font-poppins flex items-center justify-between p-4"
      >
        <div className="flex items-center gap-8">
          <Link href={routes}>
            <img alt="logo" className="w-auto h-12  " />
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            className="text-2xl transition hover:text-verde"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <FiMenu />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center lg:justify-center transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center pl-1 lg:flex-row lg:gap-8 lg:space-x-8">
            <Link href={routes} className="transition hover:text-verde">
              Inicio
            </Link>
            <Link href={routes} className="transition hover:text-verde">
              Nosotros
            </Link>
            <Link
              href={routes}
              className="text-center transition hover:text-verde"
            >
              Planes y Rutinas
            </Link>

            <Link
              href={routes}
              className="text-center transition hover:text-verde"
            >
              Casos de Éxito
            </Link>
            <Link href={routes} className="transition hover:text-verde">
              Tarifas
            </Link>

            <Link href={routes} className="transition hover:text-verde">
              Eventos
            </Link>

            <Link href={routes} className="transition hover:text-verde">
              Comunidad
            </Link>
            <div className="flex items-center justify-end mt-4 lg:mt-0"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
