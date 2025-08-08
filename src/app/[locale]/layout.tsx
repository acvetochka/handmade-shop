import { JSX, ReactNode, Suspense } from "react";
import { flattenDictionary, getDictionary, Locale, locales } from "@/lib";
import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer, GoogleAnalytics, Header, ScrollToHash } from "@/components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Handwerk Ecke",
  description: "Handwerk Ecke von Alona Kuznietsova",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>): Promise<JSX.Element> {
  const { locale } = await params;

  const rawDictionary = await getDictionary(locale as Locale);
  const dictionary = flattenDictionary({ obj: rawDictionary });

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} `}>
        <GoogleAnalytics />
        <Providers dictionary={dictionary} locale={locale}>
          <Suspense fallback={null}>
            <ScrollToHash />
          </Suspense>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
