import { getDictionary } from '@/lib/getDictionary';
import { I18nProvider } from '@/i18n/I18nProvider';
import { Locale, locales } from '@/lib/i18n';
import { flattenDictionary } from '@/lib/flattenDictionary';
import { Header } from '@/sections';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const rawDictionary = await getDictionary(params.locale);
  const dictionary = flattenDictionary(rawDictionary);

  return (
    <I18nProvider dictionary={dictionary}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </I18nProvider>
  );
}
