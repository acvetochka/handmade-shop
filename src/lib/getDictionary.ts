import { Locale } from './i18n';

export const getDictionary = async (locale: Locale) => {
  const dictionary = await import(`../data/dictionaries/${locale}.json`);
  return dictionary.default;
};
