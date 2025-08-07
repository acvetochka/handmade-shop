"use client";

import Link from "next/link";
import { useTranslation } from "@/providers";
import { categoryButton } from "./CategoryLink.styles";
import { JSX } from "react";

export const CategoryLink = ({ name }: { name: string }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Link href={`/products/${name}`} css={categoryButton}>
      <p>{t("viewCatalog")}</p>
      <span>&rarr;</span>
    </Link>
  );
};
