// types/i18n.d.ts
export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Categories {
  [key: string]: Category;
}

export interface Translation {
  categories: Categories;
  // Додайте інші секції перекладу за потреби
}
