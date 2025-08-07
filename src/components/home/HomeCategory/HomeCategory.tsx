import { JSX } from "react";
import { CategoryCard } from "@/components";

const categoryList = [
  { name: "candles", label: "Свічки", id: "kerzen" },
  { name: "cards", label: "Листівки", id: "karten" },
  { name: "gips", label: "Гіпсові фігури", id: "gips" },
  { name: "print", label: "3D-друк", id: "3d" },
];

export const HomeCategory = (): JSX.Element => {
  return (
    <>
      {categoryList.map(({ name }, idx) => (
        <CategoryCard key={name} name={name} index={idx} />
      ))}
    </>
  );
};
