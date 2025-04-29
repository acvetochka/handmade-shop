import { HeroSection } from "@/sections/HeroSection/HeroSection";
import { HomeCategory } from "@/sections/HomeCategory/HomeCategory";

export default function HomePage() {
  // const { t } = useTranslation();

  return (
    <main>
      <HeroSection />
      <HomeCategory />
    </main>
  );
}
