"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import AboutMe from "./components/Aboutme";
import Welcome from "./components/Welcome";
import LoadingIndicator from "./components/LogingIndicator";
import Technologies from "./components/Technologies";
import Proyects from "./components/Proyects";
import Contact from "./components/contactForm";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Barra de progreso de scroll */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: "96px",
          left: 0,
          right: 0,
          height: "5px",
          backgroundColor: "#EF3C62",
          transformOrigin: "left",
          zIndex: 100,
        }}
      />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div>
          <section id="welcome">
            <Welcome />
          </section>
          <section id="aboutme">
            <AboutMe />
          </section>
          <section id="technologies">
            <Technologies />
          </section>
          <section id="proyects">
            <Proyects />
          </section>
          <section id="contactMe">
            <Contact />
          </section>
        </div>
      )}
    </main>
  );
}
