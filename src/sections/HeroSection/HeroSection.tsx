"use client";

import { JSX } from "react";
import { Container, ScrollLink } from "@/components";
import { useTranslation } from "@/providers/I18nProvider";
import { heroSection, linkStyled, title, warning } from "./HeroSection.styles";
// import { categoryButton } from "@/components/CategoryLink/CategoryLink.styles";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section css={heroSection}>
      <Container>
        <div css={warning}>
          <p>{t("home.warning")}</p>
          <ScrollLink to="kontakte" css={linkStyled}>
            <p css={linkStyled}>{t("home.contactButton")}</p>
          </ScrollLink>
        </div>
        <h1 css={title}>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
      </Container>
    </section>
  );
};
