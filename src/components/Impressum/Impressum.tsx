"use client";

import { useTranslation } from "@/providers";
import { JSX } from "react";
import { Container } from "@/components";
import { wrapper } from "./Impressum.styles";

export const Impressum = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <div css={wrapper}>
          <h1 className="text-3xl font-bold mb-4">{t("impressum.title")}</h1>

          <div>
            <h2>1. {t("impressum.ownerLabel")}</h2>
            <p>{t("impressum.companyName")}</p>
            <p>{t("impressum.registrationNumber")}</p>
            <p>{t("impressum.name")}</p>
            <p>{t("impressum.address")}</p>
            <p>Telefon: {t("impressum.email")}</p>
            <p>E-Mail: {t("impressum.phone")}</p>
          </div>
          <div>
            <h2>2. Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p>{t("impressum.name")}</p>
            <p>{t("impressum.address")}</p>
          </div>
          <div>
            <h2>3. {t("impressum.disclaimerLabel")}</h2>
            <p>{t("impressum.disclaimerText")}</p>
          </div>
          <div>
            <h2>4. {t("impressum.disputeResolution.platform")}</h2>
            {/* <p> */}
            <a
              href={t("impressum.disputeResolution.link")}
              // className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("impressum.disputeResolution.link")}
            </a>
            {/* </p> */}
          </div>
          <p>{t("impressum.disputeResolution.statement")}</p>
        </div>
      </Container>
    </section>
  );
};
