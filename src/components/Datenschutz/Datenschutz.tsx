"use client";

import { useTranslation } from "@/providers";
import { JSX } from "react";
import { Container } from "@/components";
import {
  LabelWrapper,
  mainTitle,
  paragraphWrapper,
  secondTitle,
  sectionStyles,
  wrapper,
} from "./Datenschutz.styles";

export const Datenschutz = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section css={sectionStyles}>
      <Container>
        <div css={wrapper}>
          <h1 css={mainTitle}>{t("datenschutz.title")}</h1>

          <div css={paragraphWrapper}>
            <h2 css={secondTitle}>1. {t("datenschutz.general.title")}</h2>
            <p>{t("datenschutz.general.text")}</p>
            <h2 css={secondTitle}>2. {t("datenschutz.responsible.title")}</h2>
            <div css={LabelWrapper}>
              <p>{t("datenschutz.responsible.name.label")}: </p>
              <p>{t("datenschutz.responsible.name.text")}</p>
            </div>
            <div css={LabelWrapper}>
              <p>{t("datenschutz.responsible.address.label")}: </p>
              <p> {t("datenschutz.responsible.address.text")}</p>
            </div>
            <div css={LabelWrapper}>
              <p>{t("datenschutz.responsible.email.label")}: </p>
              <a href={t("impressum.email.link")}>
                {t("impressum.email.name")}
              </a>
            </div>
          </div>
          <div css={paragraphWrapper}>
            <h2 css={secondTitle}>
              3. {t("datenschutz.responsible.googleAnalytics.title")}
            </h2>
            <p>{t("datenschutz.responsible.googleAnalytics.text")}</p>
            <div css={paragraphWrapper}>
              <h2 css={secondTitle}>
                4. {t("datenschutz.responsible.contactForm.title")}
              </h2>
              <p>{t("datenschutz.responsible.contactForm.text")}</p>
            </div>
            <div css={paragraphWrapper}>
              <h2 css={secondTitle}>
                5. {t("datenschutz.responsible.rights.title")}
              </h2>
              <p>{t("datenschutz.responsible.rights.text")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
