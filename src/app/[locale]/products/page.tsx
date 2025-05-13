'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProducts } from '@/lib/strapi-api';
import { useTranslation } from '@/i18n/I18nProvider';
import { productItem, productList } from '@/styles/ProductsPage.styles';

export default function ProductsPage() {
  const params = useParams();
  const locale = params?.locale as string;

    const { t } = useTranslation();

  const [products, setProducts] = useState<any[]>([]);

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
            {product.images[0] && (
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.images[0].url}`}
                alt={product.title}
                width={200}
              />
            )}
            <p>{t("products.price")}: {product.price} €</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
