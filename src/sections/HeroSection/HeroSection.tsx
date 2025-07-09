"use client";

import { Container } from "@/components";
import { useTranslation } from "@/i18n/I18nProvider";
import { heroSection, title } from "./HeroSection.styles";
import { JSX } from "react";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section css={heroSection}>
      <Container>
        <h1 css={title}>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
      </Container>
    </section>
  );
};
