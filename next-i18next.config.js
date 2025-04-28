/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'de',
      locales: ['de', 'uk', 'en'],
      localeDetection: true,
    },
    react: { useSuspense: false },
    localePath: './public/locales',
  };
  