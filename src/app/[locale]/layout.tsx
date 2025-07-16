import { flattenDictionary, getDictionary, Locale, locales } from "@/lib";
import Providers from "@/providers/Providers";
import { Header } from "@/sections";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale;

  const rawDictionary = await getDictionary(locale);
  const dictionary = flattenDictionary({ obj: rawDictionary });

  return (
    <Providers dictionary={dictionary}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </Providers>
  );
}
