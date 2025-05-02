'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProducts } from '@/lib/strapi-api';
// import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants';
import { useTranslation } from '@/i18n/I18nProvider';

export default function ProductsPage() {
  const params = useParams();
  const locale = params?.locale as string;

    const { t } = useTranslation();

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts(locale).then(setProducts);
  }, [locale]);

  console.log(products);
  
  
  return (
    <div>
      <h1>{t("products.pageTitle")}</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h2>{item.title}</h2>
            {/* <p>{item.description}</p> */}
            {item.images[0] && (
              <img
                src={`http://localhost:1337${item.images[0].url}`}
                alt={item.title}
                width={200}
              />
            )}
            <p>{t("products.price")}: {item.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}
