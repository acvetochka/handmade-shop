const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchProducts(locale: string) {
  const res = await fetch(`${API_URL}/api/products?locale=${locale}&populate=images`);
  const data = await res.json();
  return data.data;
}
