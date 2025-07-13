"use client";

import { Container, ScrollLink } from "@/components";
import { useTranslation } from "@/i18n/I18nProvider";
import { heroSection, linkStyled, title, warning } from "./HeroSection.styles";
import { JSX } from "react";
// import { categoryButton } from "@/components/CategoryLink/CategoryLink.styles";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section css={heroSection}>
      <Container>
        <div css={warning}>
          <p>{t("home.warning")}</p>
          {/* <p>
            Die Website befindet sich aktuell im Aufbau und wird bis zum 16.Juli
            2025 fertiggestellt. Sie können mich jedoch bereits jetzt über die
            Kontaktdaten am Ende der Seite erreichen
          </p> */}
          <ScrollLink to="kontakte" css={linkStyled}>
            <p css={linkStyled}>Kontakte</p>
          </ScrollLink>
        </div>
        <h1 css={title}>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
      </Container>
    </section>
  );
};
