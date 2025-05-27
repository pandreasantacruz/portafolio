import { ReactNode } from "react";
import { NextIntlProvider } from "next-intl"; // <-- así, no IntlProvider
import { notFound } from "next/navigation";

const locales = ["en", "es"] as const;
type Locale = (typeof locales)[number];

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlProvider locale={locale} messages={messages}>
          {children}
        </NextIntlProvider>
      </body>
    </html>
  );
}
