"use client";

import { ReactNode } from "react";

import { EmotionProvider } from "./EmotionProvider";
import { I18nProvider, Dictionary } from "./I18nProvider";

export default function Providers({
  children,
  dictionary,
}: {
  children: ReactNode;
  dictionary: Dictionary;
}) {
  return (
    <EmotionProvider>
      <I18nProvider dictionary={dictionary}>{children}</I18nProvider>
    </EmotionProvider>
  );
}
