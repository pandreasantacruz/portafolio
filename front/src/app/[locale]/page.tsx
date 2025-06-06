"use client";
import AboutMe from "./components/Aboutme";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/LogingIndicator";
import Technologies from "./components/Technologies";
import Proyects from "./components/Proyects";
import Contact from "./components/contactForm";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div>
          <section id="welcome">
            <Welcome></Welcome>
          </section>
          <section id="aboutme">
            <AboutMe></AboutMe>
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
