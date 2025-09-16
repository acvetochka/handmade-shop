# My handmade-shop

## Categories:
- Candles
- Carts
- Gips-products
- 3d-print models 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<details> 
<summary> Next.js Getting Started</summary>

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</details>

Цей репозиторій містить фронтенд частину магазину “Handwerk Ecke”, створену на Next.js + TypeScript.
Бекенд (серверна логіка, API, база даних) тепер винесений в окремий репозиторій.

## 📁 Структура репозиторію
```
/public             — статичні файли (зображення, шрифти тощо)
/src                — вихідні коди фронтенду
  ├─ components     — React компоненти
  ├─ app/...  — сторінки, маршрутизація
  ├─ styles          — стилі
  ├─ data            — дані JSON, ts
  └─ lib...       — утиліти, допоміжні модулі
next.config.ts      — конфігурація Next.js
tsconfig.json       — конфігурація TypeScript
.next-i18next.config.js — для інтернаціоналізації
```

## ⚙️ Використані технології

- Next.js + TypeScript

- Emotion Styles

- Міжнародна підтримка (i18n) — налаштування через next-i18next

- Інструменти налаштування ESLint, конфігурація build та dev середовища


## 🚀 Локальне середовище (Front-end)

- Клонувати репозиторій:
```
git clone https://github.com/acvetochka/handmade-shop.git
cd handmade-shop
```


- Встановити залежності:
```
npm install
```

або
```
yarn
```

- Запустити dev-сервер:
```
npm run dev
```

чи
```
yarn dev
```

- Відкрити в браузері: [http://localhost:3000](http://localhost:3000)
