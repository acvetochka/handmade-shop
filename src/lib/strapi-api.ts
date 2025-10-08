const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchProducts(locale: string) {
  const res = await fetch(
    `${API_URL}/api/products?locale=${locale}&populate=images`
  );
  const data = await res.json();
  return data.data;
}

// export async function fetchProductCategory() {
//   const products = fetchProducts("de");

// }

// export default [
//   "strapi::logger",
//   "strapi::errors",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:", "http:"],
//           "img-src": ["'self'", "data:", "blob:", "https://*"],
//           "media-src": ["'self'", "data:", "blob:", "https://*"],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   {
//     name: "strapi::cors",
//     config: {
//       enabled: true,
//       origin: [
//         "https://hw-ecke.de",
//         "  https://handmade-shop-eight.vercel.app",
//         "http://localhost:3000",
//         "http://localhost:3001",
//       ],
//       headers: "*",
//       methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//       credentials: true,
//     },
//   },
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];
