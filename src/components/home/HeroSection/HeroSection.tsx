"use client";

import { JSX } from "react";
import { Container, LinkToHash } from "@/components";
import { useTranslation } from "@/providers";
import {
  heroSection,
  heroWrapper,
  imageStyles,
  linkStyled,
  text,
  title,
  // warning,
} from "./HeroSection.styles";
import Image from "next/image";

export const HeroSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section css={heroSection}>
      <Container>
        <h1 css={title}>{t("home.title")}</h1>
        <div css={heroWrapper}>
          <Image
            src="/home/markt.jpg"
            width={351}
            height={512}
            alt="Markt Holzgueng"
            css={imageStyles}
          />
          <div>
            <p css={text}>{t("home.description")}</p>
            <LinkToHash id="contacts">
              <p css={linkStyled}>{t("home.contactButton")}</p>
            </LinkToHash>
          </div>
        </div>
      </Container>
    </section>
  );
};
