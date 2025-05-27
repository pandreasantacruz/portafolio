import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <LanguageSwitcher />

      <h1>{t("greeting")}</h1>
      <p>{t("portfolio")}</p>
    </main>
  );
}
