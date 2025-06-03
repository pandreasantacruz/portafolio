/* eslint-disable @next/next/no-img-element */
"use client";
//import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
//import { routes } from "../routes/routes";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const src = theme === "dark" ? "/LogoDark.png" : "/Logo.png";
  return (
    <div className="fixed top-0 z-50 w-full bg-opacity-80 backdrop-blur-md">
      <nav className="flex items-center justify-between h-24 px-4 mx-auto bg-white shadow-xl text-foreground ring-2 ring-gray-300 ring-opacity-100 dark:bg-black bg-opacity-80">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={src} alt="logo" className="w-auto h-16" />
        </div>

        {/* Botón hamburguesa visible en móviles */}
        <div className="lg:hidden">
          <button
            className="text-2xl transition hover:text-verde"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <FiMenu />}
          </button>
        </div>

        {/* Menú responsive */}
        <div
          className={`
        ${isOpen ? "block" : "hidden"}
        absolute top-24 left-0 w-full bg-white dark:bg-black text-center lg:static lg:block lg:w-auto
        transition-all duration-300 ease-in-out
      `}
        >
          <div className="flex flex-col items-center gap-4 py-4 lg:flex-row lg:gap-8 lg:py-0">
            <a
              href="#welcome"
              className="transition font-bebas hover:text-verde"
            >
              {t("home")}
            </a>
            <a href="#aboutme" className="transition hover:text-verde">
              {t("aboutme")}
            </a>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
