"use client";

import Link from "next/link";
import { categoryBox, categoryButton } from "./CategoryCard.styles";
import { useTranslation } from "@/i18n/I18nProvider";

export const CategoryCard = ({ name }: { name: string }) => {
  const { t } = useTranslation();

  return (
    <section css={categoryBox}>
      <h2>{t(`${name}.title`)}</h2>
      <p>{t(`${name}.description`)}</p>
      <Link href={`/products/${name}`} css={categoryButton}>
        {t("viewCatalog")}
        <span>&rarr;</span>
        <p>fdjjdkd</p>
      </Link>
    </section>
  );
};
