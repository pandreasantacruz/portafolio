import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Portafolio Paula Andrea Santacruz",
  description: "Portafolio Junior Front-End Paula Andrea Santacruz",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${bebasNeue.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Navbar />
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: "#175699",
                    color: "white",
                    borderRadius: "8px",
                    padding: "16px",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                  },
                  iconTheme: {
                    primary: "white",
                    secondary: "#16a34a",
                  },
                },
                error: {
                  style: {
                    background: "#ef4444",
                    color: "white",
                    borderRadius: "8px",
                    padding: "16px",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                  },
                  iconTheme: {
                    primary: "white",
                    secondary: "#dc2626",
                  },
                },
                position: "top-center",
                duration: 2000,
              }}
            />

            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
