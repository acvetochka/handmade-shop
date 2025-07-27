export type Dictionary = Record<string, string>;

export type I18nContextType = {
  dictionary: Dictionary;
  locale: string;
};

export type I18nProviderType = {
  dictionary: Dictionary;
  locale: string;
  children: React.ReactNode;
};
