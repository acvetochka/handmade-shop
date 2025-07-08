"use client";

import {
  categoryBox,
  categoryDescription,
  categoryTitle,
  categoryWrapper,
  descriptionWrapper,
  imageWrapper,
} from "./CategoryCard.styles";
import { useTranslation } from "@/i18n/I18nProvider";
import { CategoryLink } from "../CategoryLink/CategoryLink";
import { Container } from "../ui/Container/Container";

export const CategoryCard = ({
  name,
  index,
}: {
  name: string;
  index: number;
}) => {
  const { t } = useTranslation();

  return (
    <section id={t(`categories.${name}.id`)} css={categoryBox(index)}>
      <Container>
        <div css={categoryWrapper}>
          <div css={imageWrapper(index)}></div>
          <div css={descriptionWrapper(index)}>
            <h2 css={categoryTitle}>{t(`categories.${name}.title`)}</h2>
            <p css={categoryDescription}>
              {t(`categories.${name}.description`)}
            </p>
            <CategoryLink name={name} />
          </div>
        </div>
      </Container>
    </section>
  );
};
