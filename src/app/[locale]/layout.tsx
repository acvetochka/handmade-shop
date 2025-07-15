import { flattenDictionary, getDictionary, Locale, locales } from "@/lib";
import Providers from "@/providers/Providers";
import { Header } from "@/sections";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { params } = props;
  const locale = params.locale;

  const rawDictionary = await getDictionary(locale);
  const dictionary = flattenDictionary({ obj: rawDictionary });

  console.log("rawDictionary", rawDictionary);

  return (
    <Providers dictionary={dictionary}>
      <Header />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </Providers>
  );
}
