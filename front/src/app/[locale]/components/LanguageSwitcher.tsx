"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Detecta el idioma actual
  const currentLocale = pathname.startsWith("/en") ? "en" : "es";

  // Alterna al otro idioma
  const toggleLocale = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";
    const newPath = pathname.replace(/^\/(en|es)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="p-1 border rounded bg-[#B3C3F3] transition hover:text-verde"
    >
      {currentLocale === "es" ? "EN" : "ES"}
    </button>
  );
}
