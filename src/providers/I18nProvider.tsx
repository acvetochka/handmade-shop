"use client";

import { createContext, useContext } from "react";

export type Dictionary = Record<string, string>;

const I18nContext = createContext<Dictionary>({});

export const useTranslation = () => {
  const dict = useContext(I18nContext);
  return {
    t: (key: string) => dict[key] ?? key,
  };
};

export const I18nProvider = ({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) => {
  return (
    <I18nContext.Provider value={dictionary}>{children}</I18nContext.Provider>
  );
};
