"use client";
import AboutMe from "./components/Aboutme";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/LogingIndicator";
import Technologies from "./components/Technologies";
export default function Home() {
  const t = useTranslations("HomePage");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Simula carga inicial (2.5s)

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
          <div>
            <h1>{t("title")}</h1>
            <Link href="/about">{t("about")}</Link>
          </div>
        </div>
      )}
    </main>
  );
}
