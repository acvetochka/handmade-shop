"use client";

import { Container } from "@/components";
// import { LanguageSwitcher } from "@/components";
import { useTranslation } from "@/i18n/I18nProvider";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container>
      {/* <LanguageSwitcher /> */}
      <h1>{t("home.title")}</h1>
      <p>{t("home.description")}</p>
    </Container>
  );
};
