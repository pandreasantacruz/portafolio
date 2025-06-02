"use client";
import AboutMe from "./aboutMe/page";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Welcome from "./welcome/page";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/LogingIndicator";
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
          <div>
            <h1>{t("title")}</h1>
            <Link href="/about">{t("about")}</Link>
          </div>
        </div>
      )}
    </main>
  );
}
