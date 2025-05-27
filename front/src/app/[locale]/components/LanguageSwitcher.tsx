"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: string) => {
    const newPath = pathname.replace(/^\/(en|es)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => changeLocale("es")}>ES</button>
      <button onClick={() => changeLocale("en")}>EN</button>
    </div>
  );
}
