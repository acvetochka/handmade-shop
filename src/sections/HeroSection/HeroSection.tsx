"use client";

// import { LanguageSwitcher } from "@/components";
import { useTranslation } from "@/i18n/I18nProvider";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <LanguageSwitcher /> */}
      <h1>{t("home.title")}</h1>
      <p>{t("home.description")}</p>
    </>
  );
};
