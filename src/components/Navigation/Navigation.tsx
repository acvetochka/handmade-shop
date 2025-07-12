"use client";

import { JSX } from "react";
import { ScrollLink } from "@/components";
import { navList } from "./Navigation.styles";
import { useNavigation } from "@/hooks/useNavigation";

export const Navigation = (): JSX.Element => {
  const navigation = useNavigation();

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
