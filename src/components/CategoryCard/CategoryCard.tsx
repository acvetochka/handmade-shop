// "use client";

// import { JSX } from "react";
// import {
//   categoryBox,
//   categoryDescription,
//   categoryTitle,
//   categoryWrapper,
//   descriptionWrapper,
//   imageWrapper,
// } from "./CategoryCard.styles";
// import { Container, ImageSlider } from "@/components";
// import {
//   cardsImages,
//   threeDPrintImages,
//   candlesImages,
//   gipsImages,
// } from "@/data/images";
// import { useTranslation } from "@/providers";

// type ImageProps = {
//   cards: string[];
//   print: string[];
//   candles: string[];
//   gips: string[];
// };

// const imagesByCategory: ImageProps = {
//   cards: cardsImages,
//   print: threeDPrintImages,
//   candles: candlesImages,
//   gips: gipsImages,
// };

// export const CategoryCard = ({
//   name,
//   index,
// }: {
//   name: string;
//   index: number;
// }): JSX.Element => {
//   const { t } = useTranslation();

//   return (
//     <section id={t(`categories.${name}.id`)} css={categoryBox(index)}>
//       <Container>
//         <div css={categoryWrapper}>
//           <div css={descriptionWrapper(index)}>
//             <h2 css={categoryTitle}>{t(`categories.${name}.title`)}</h2>
//             <p css={categoryDescription}>
//               {t(`categories.${name}.description`)}
//             </p>
//             {/* <CategoryLink name={name} /> */}
//           </div>

//           <div css={imageWrapper(index)}>
//             {/* <ImageSlider images={cardsImages} /> */}
//             <ImageSlider images={imagesByCategory[image]} />
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

"use client";

import { JSX } from "react";
import {
  categoryBox,
  categoryDescription,
  categoryTitle,
  categoryWrapper,
  descriptionWrapper,
  imageWrapper,
} from "./CategoryCard.styles";
import { Container, ImageSlider } from "@/components";
import {
  cardsImages,
  threeDPrintImages,
  candlesImages,
  gipsImages,
} from "@/data/images";
import { useTranslation } from "@/providers";

// Типізація дозволених імен категорій
const CATEGORY_KEYS = ["cards", "print", "candles", "gips"] as const;
type CategoryName = (typeof CATEGORY_KEYS)[number];

type ImageProps = Record<CategoryName, string[]>;

const imagesByCategory: ImageProps = {
  cards: cardsImages,
  candles: candlesImages,
  gips: gipsImages,
  print: threeDPrintImages,
};

export const CategoryCard = ({
  name,
  index,
}: {
  name: string;
  index: number;
}): JSX.Element => {
  const { t } = useTranslation();

  const isValidCategory = (name: string): name is CategoryName => {
    return CATEGORY_KEYS.includes(name as CategoryName);
  };

  if (!isValidCategory(name)) {
    console.warn(`Invalid category name: ${name}`);
    return <></>; // або відображення заглушки
  }

  const images = imagesByCategory[name];

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
            <ImageSlider images={images} />
          </div>
        </div>
      </Container>
    </section>
  );
};
