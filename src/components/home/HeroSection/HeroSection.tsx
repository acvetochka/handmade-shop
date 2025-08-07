"use client";

import { JSX } from "react";
import { Container, LinkToHash } from "@/components";
import { useTranslation } from "@/providers";
import {
  heroSection,
  linkStyled,
  text,
  title,
  warning,
} from "./HeroSection.styles";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section css={heroSection}>
      <Container>
        <div css={warning}>
          <p>{t("home.warning")}</p>
          <LinkToHash id="contacts">
            <p css={linkStyled}>{t("home.contactButton")}</p>
          </LinkToHash>
        </div>
        <h1 css={title}>{t("home.title")}</h1>
        <p css={text}>{t("home.description")}</p>
      </Container>
    </section>
  );
};
