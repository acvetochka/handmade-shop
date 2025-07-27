"use client";

import { I18nContextType, I18nProviderType } from "@/types";
import { createContext, useContext } from "react";

const I18nContext = createContext<I18nContextType>({
  dictionary: {},
  locale: "de",
});

export const useTranslation = () => {
  const { dictionary, locale } = useContext(I18nContext);
  return {
    t: (key: string) => dictionary[key] ?? key,
    locale,
  };
};

export const I18nProvider = ({
  dictionary,
  locale,
  children,
}: I18nProviderType) => {
  return (
    <I18nContext.Provider value={{ dictionary, locale }}>
      {children}
    </I18nContext.Provider>
  );
};
