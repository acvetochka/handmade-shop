"use client";

import { JSX } from "react";
import { usePathname } from "next/navigation";
import de from "@/data/dictionaries/de.json";
import en from "@/data/dictionaries/en.json";
import ua from "@/data/dictionaries/ua.json";
import { ScrollLink } from "@/components";
import { navList } from "./Navigation.styles";

export const Navigation = (): JSX.Element => {
  const locales = { de, en, ua };
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "de";

  const navigation = locales[locale as keyof typeof locales].navigation;

  return (
    <ul css={navList} className="nav-list">
      {navigation.map(({ id, title, link }) => (
        <li key={id}>
          <ScrollLink to={link}>{title}</ScrollLink>
        </li>
      ))}
    </ul>
  );
};
