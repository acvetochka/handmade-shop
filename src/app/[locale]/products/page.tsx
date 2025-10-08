"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProducts } from "@/lib/strapi-api";
import { useTranslation } from "@/providers";
import { productItem, productList } from "@/styles/ProductsPage.styles";
import Image from "next/image";
import { Product } from "@/types";

export default function ProductsPage() {
  const params = useParams();
  const locale = params?.locale as string;

  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts(locale).then(setProducts);
  }, [locale]);

  return (
    <section>
      <h1>{t("products.pageTitle")}</h1>
      <ul css={productList}>
        {products.map((product) => (
          <li key={product.id} css={productItem}>
            <h2>{product.title}</h2>
            {product?.images[0] && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product?.images[0].url}`}
                alt={product.title}
                width={200}
                height={350}
              />
            )}
            <p>
              {t("products.price")}: {product.price} €
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
