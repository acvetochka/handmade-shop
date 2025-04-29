"use client"

import { categoryBox, categoryButton } from "@/components/CategoryCard/CategoryCard.styles";
import { useTranslation } from "@/i18n/I18nProvider";
import Link from "next/link";


const categoryList = [
  { name: 'kerzen', label: 'Свічки' },
  { name: 'karten', label: 'Листівки' },
  { name: 'gips', label: 'Гіпсові фігури' },
  { name: '3d', label: '3D-друк' },
];

export const HomeCategory = () => {

    const {t} = useTranslation();

    return (
      <div>
        {categoryList.map(({ name }) => (
            <section key={name} css={categoryBox}>
            <h2>{t(`categories.${name}.title`)}</h2>
            <p>{t(`categories.${name}.description`)}</p>
            <Link href={`/products/${name}`} css={categoryButton}>
              {t("viewCatalog")}
            </Link>
          </section>
        ))}
      </div>

    )

}
