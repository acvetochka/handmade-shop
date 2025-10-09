"use client";

import { usePathname } from "next/navigation";
import de from "@/data/dictionaries/de.json";
import en from "@/data/dictionaries/en.json";
import uk from "@/data/dictionaries/uk.json";

export const useNavigation = () => {
  const locales = { de, en, uk };
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "de";

  const navigation = locales[locale as keyof typeof locales].navigation;

  return navigation;
};
