"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LoadingIndicator = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#E0004D",
          margin: "auto",
        }}
        className="relative w-20 h-20"
      >
        <Image
          src="/Logo.png"
          alt="Cargando..."
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
};

export default LoadingIndicator;
