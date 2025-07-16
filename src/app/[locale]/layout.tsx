import { ReactNode } from "react";
import { Header } from "@/sections";
import Providers from "@/providers/Providers";
import { flattenDictionary, getDictionary, Locale, locales } from "@/lib";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  return (
    <ProvidersWrapper locale={params.locale}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </ProvidersWrapper>
  );
}

async function ProvidersWrapper({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const rawDictionary = await getDictionary(locale);
  const dictionary = flattenDictionary({ obj: rawDictionary });

  return <Providers dictionary={dictionary}>{children}</Providers>;
}
