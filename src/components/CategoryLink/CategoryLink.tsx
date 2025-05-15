"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/I18nProvider";
import { categoryButton } from "./CategoryLink.styles";

export const CategoryLink = ({ name }: { name: string }) => {
  const { t } = useTranslation();

  return (
      <Link href={`/products/${name}`} css={categoryButton}>
        <p>{t("viewCatalog")}</p>
        <span>&rarr;</span>
      </Link>
  );
};
