"use client";

import { useTranslation } from "@/providers";
import { JSX } from "react";
import { Container } from "@/components";
import {
  LabelWrapper,
  paragraphWrapper,
  secondTitle,
  sectionStyles,
  textStyles,
  wrapper,
} from "./Impressum.styles";

export const Impressum = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section css={sectionStyles}>
      <Container>
        <div css={wrapper}>
          <h1 className="text-3xl font-bold mb-4">{t("impressum.title")}</h1>

          <div css={paragraphWrapper}>
            <h2 css={secondTitle}>1. {t("impressum.ownerLabel")}</h2>
            <p>{t("impressum.companyName")}</p>
            <p>{t("impressum.registrationNumber")}</p>
            <p>{t("impressum.name")}</p>
            <p css={textStyles}>{t("impressum.address")}</p>
            <div css={LabelWrapper}>
              <p>{t("impressum.phone.label")}: </p>
              <a href={t("impressum.phone.link")}>
                {t("impressum.phone.name")}
              </a>
            </div>
            <div css={LabelWrapper}>
              <p>{t("impressum.email.label")}: </p>
              <a href={t("impressum.email.link")}>
                {t("impressum.email.name")}
              </a>
            </div>
          </div>
          <div css={paragraphWrapper}>
            <h2 css={secondTitle}>2. {t("impressum.broadcasting")}</h2>
            <p>{t("impressum.name")}</p>
            <p css={textStyles}>{t("impressum.address")}</p>
          </div>
          <div css={paragraphWrapper}>
            <h2 css={secondTitle}>3. {t("impressum.disclaimerLabel")}</h2>
            <p>{t("impressum.disclaimerText")}</p>
          </div>
          <div css={paragraphWrapper}>
            <h2 css={secondTitle}>
              4. {t("impressum.disputeResolution.platform")}
            </h2>
            <a
              href={t("impressum.disputeResolution.link")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("impressum.disputeResolution.link")}
            </a>
          </div>
          <p>{t("impressum.disputeResolution.statement")}</p>
        </div>
      </Container>
    </section>
  );
};
