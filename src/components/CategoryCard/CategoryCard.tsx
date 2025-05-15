"use client";

import { categoryBox, categoryDescription, categoryTitle } from "./CategoryCard.styles";
import { useTranslation } from "@/i18n/I18nProvider";
import { CategoryLink } from "../CategoryLink/CategoryLink";
import { Container } from "../Container/Container";

export const CategoryCard = ({ name }: { name: string }) => {
  const { t } = useTranslation();

  return (
    <section css={categoryBox}>
      <Container>
      <h2 css={categoryTitle}>{t(`categories.${name}.title`)}</h2>
      <p css={categoryDescription}>{t(`categories.${name}.description`)}</p>
      <CategoryLink name={name}/>
      </Container>
    </section>
  );
};
