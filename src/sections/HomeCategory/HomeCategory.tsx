import { CategoryCard } from "@/components";

const categoryList = [
  { name: 'kerzen', label: 'Свічки' },
  { name: 'karten', label: 'Листівки' },
  { name: 'gips', label: 'Гіпсові фігури' },
  { name: '3d', label: '3D-друк' },
];

export const HomeCategory = () => {

    return (
      <div>
        {categoryList.map(({ name }) => (
          <CategoryCard key={name} name={name}/>
        ))}
      </div>

    )

}
