type ProductImage = {
  url: string;
  // можливо ще є alt, width, height тощо?
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
  category: string;
  // додай інші поля, якщо є
};
