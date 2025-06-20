"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
const Welcome = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const src =
    theme === "dark"
      ? "https://res.cloudinary.com/dpo25wgdo/image/upload/v1749146685/ImagenInicialDark_hzdfee.jpg"
      : "https://res.cloudinary.com/dpo25wgdo/image/upload/v1749146732/ImagenInicial_panluc.jpg";

  return (
    <div className="relative w-full mx-auto overflow-hidden border-b-8 mt-28 max-w-10xl border-redP ">
      {" "}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full aspect-[16/9]" key={theme}>
          <Image src={src} alt="Imagen" fill className="block object-contain" />
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
