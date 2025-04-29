import { getDictionary } from '@/lib/getDictionary';
import { I18nProvider } from '@/i18n/I18nProvider';
import { Locale, locales } from '@/lib/i18n';
import { flattenDictionary } from '@/lib/flattenDictionary';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}


export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: Locale };
})  {
  const { params } = await Promise.resolve(props);
  const rawDictionary = await getDictionary(params.locale);
   const dictionary = flattenDictionary(rawDictionary);

  return (
        <I18nProvider dictionary={dictionary}>{props.children}</I18nProvider>
  );
}

