import { ReactNode } from 'react';
import { getDictionary } from '@/lib/getDictionary';
import { I18nProvider } from '@/i18n/I18nProvider';
import { Locale, locales } from '@/lib/i18n';
import { flattenDictionary } from '@/lib/flattenDictionary';

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: { locale:  string };
// }) {
//   const dictionary = await getDictionary(params.locale as Locale);
//   console.log("DIC", dictionary)

//   return (
//     <html lang={params.locale}>
//       <body>
//         <I18nProvider dictionary={dictionary}>{children}</I18nProvider>
//       </body>
//     </html>
//   );
// }


export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: Locale };
})  {
  const { params } = await Promise.resolve(props);
  const rawDictionary = await getDictionary(params.locale);
  // const rawDictionary = await getDictionary(params.locale as Locale);
  const dictionary = flattenDictionary(rawDictionary);

  return (
    // <html lang={params.locale}>
    //   <body>
        <I18nProvider dictionary={dictionary}>{props.children}</I18nProvider>
    //   </body>
    // </html>
  );
}

