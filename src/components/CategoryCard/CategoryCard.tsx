"use client";

import {
  categoryBox,
  categoryDescription,
  categoryTitle,
  categoryWrapper,
  descriptionWrapper,
  imageWrapper,
} from "./CategoryCard.styles";
import { useTranslation } from "@/providers/I18nProvider";
import { Container } from "../ui/Container/Container";
import { JSX } from "react";
import { cardsImages } from "@/data/images";
import { ImageSlider } from "../ImageSlider/ImageSlider";
// import { useTranslation } from "@/providers";

export const CategoryCard = ({
  name,
  index,
}: {
  name: string;
  index: number;
}): JSX.Element => {
  const { t } = useTranslation();

  console.log(t("categories.kerzen.title"));

  return (
    <section id={t(`categories.${name}.id`)} css={categoryBox(index)}>
      <Container>
        <div css={categoryWrapper}>
          <div css={descriptionWrapper(index)}>
            <h2 css={categoryTitle}>{t(`categories.${name}.title`)}</h2>
            <p css={categoryDescription}>
              {t(`categories.${name}.description`)}
            </p>
            {/* <CategoryLink name={name} /> */}
          </div>

          <div css={imageWrapper(index)}>
            <ImageSlider images={cardsImages} />
          </div>
        </div>
      </Container>
    </section>
  );
};
