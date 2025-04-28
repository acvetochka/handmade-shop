// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// import { CategoryCard } from '@/components/CategoryCard/CategoryCard';
// import { HeroSection } from '@/sections/HeroSection/HeroSection';
// import { mainContainer } from '@/styles/HomePage.styles';



// const mainContainer = css`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 40px;
// `;

// const categoryBox = css`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   text-align: center;
// `;

// const categoryButton = css`
//   margin-top: 15px;
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   text-decoration: none;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const CategoryCard = ({ name }: { name: string }) => {
//   const { t } = useTranslation();
//   const category = t(`categories.${name}`, { returnObjects: true }) as { title: string; description: string };


//   return (
//     <div css={categoryBox}>
//       <h2>{category.title}</h2>
//       <p>{category.description}</p>
//       <Link href={`/products/${name}`} passHref>
//         <a css={categoryButton}>{t('categories.viewCatalog')}</a>
//       </Link>
//     </div>
//   );
// };

// const HomePage = () => {

//   return (
//     <div css={mainContainer}>
// <HeroSection/>
//       <div>
//         {categoryList.map(({ name }) => (
//           <CategoryCard key={name} name={name} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import { getTranslation } from '@/i18n'; // або правильно вказати шлях до свого файлу
// import { mainContainer } from './styles';
// import HeroSection from '@/components/HeroSection';
// import CategoryCard from '@/components/CategoryCard';
// import { categoryList } from '@/constants/categoryList';

// const categoryList = [
//   { name: 'kerzen', label: 'Свічки' },
//   { name: 'karten', label: 'Листівки' },
//   { name: 'gips', label: 'Гіпсові фігури' },
//   { name: '3d', label: '3D-друк' },
// ];

// type HomePageProps = {
//   params: { locale: string };
// };

// export default async function HomePage({ params }: HomePageProps) {
//   const t = await getTranslation(params.locale, 'home');

//   return (
//     <div css={mainContainer}>
//       <HeroSection />
//       <div>
//         {categoryList.map(({ name }) => (
//           <CategoryCard key={name} name={t(`categories.${name}`)} />
//         ))}
//       </div>
//     </div>
//   );
// }

import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n';

type Props = {
  params: {
    locale: Locale;
  };
};

const HomePage = async ({ params: { locale } }: Props) => {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <h1>{dictionary.home.title}</h1>
      <p>{dictionary.home.description}</p>
    </main>
  );
};

export default HomePage;

