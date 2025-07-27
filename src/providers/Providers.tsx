"use client";

import { EmotionProvider } from "./EmotionProvider";
import { I18nProvider } from "./I18nProvider";
import { I18nProviderType } from "@/types";

export default function Providers({
  children,
  locale,
  dictionary,
}: I18nProviderType) {
  return (
    <EmotionProvider>
      <I18nProvider dictionary={dictionary} locale={locale}>
        {children}
      </I18nProvider>
    </EmotionProvider>
  );
}
