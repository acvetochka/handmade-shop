'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProducts } from '@/lib/strapi-api';
import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants';

export default function ProductsPage() {
  const params = useParams();
  const locale = params?.locale as string;

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts(locale).then(setProducts);
  }, [locale]);

  console.log(products);
  

  return (
    <div>
      <h1>Каталог товарів</h1>
      <div style={{ display: 'grid', gap: '20px' }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {/* {item.attributes.image?.data && (
              <img
                src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                alt={item.attributes.title}
                width={200}
              />
            )} */}
            <p>Ціна: {item.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}
