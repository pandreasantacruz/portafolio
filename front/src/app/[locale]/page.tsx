import AboutMe from "./aboutMe/page";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Welcome from "./welcome/page";
export default function Home() {
  const t = useTranslations("HomePage");

  return (
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
  );
}
