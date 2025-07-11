"use client";

import { usePathname } from "next/navigation";
import de from "@/data/dictionaries/de.json";
import en from "@/data/dictionaries/en.json";
import ua from "@/data/dictionaries/ua.json";

export const useNavigation = () => {
  const locales = { de, en, ua };
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "de";

  const navigation = locales[locale as keyof typeof locales].navigation;

  return navigation;
};
