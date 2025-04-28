// import { I18nProvider } from '@/i18n/I18nProvider';
// import { dir } from 'i18next';
// import { languages } from '@/i18n/settings'; // якщо є окремий settings файл, або можна прямо руками задати

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale } = params;

  return (
    <html lang={locale} >
        {/* dir={dir(locale)} */}
      <body>
        {/* <I18nProvider locale={locale}> */}
          {children}
        {/* </I18nProvider> */}
      </body>
    </html>
  );
}
