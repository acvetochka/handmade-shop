"use client";

import { useTranslation } from "@/providers";
import Link from "next/link";
import { JSX } from "react";
import { footerStyles, linksWrapper } from "./Footer.styles";

export const FooterComponent = (): JSX.Element => {
  const { locale, t } = useTranslation();
  return (
    <footer css={footerStyles}>
      <div>
        <span>2025 © </span>
        <a
          href="https://kuznietsova.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          Alona Kuznietsova
        </a>
        <p>All rights reserved.</p>
      </div>
      <div css={linksWrapper}>
        <Link href={`/${locale}/impressum`}>{t("impressum.title")}</Link>
        <Link href={`/${locale}/datenschutz`}>{t("datenschutz.title")}</Link>
      </div>
    </footer>
  );
};
