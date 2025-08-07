"use client";

import { JSX } from "react";
import { navList } from "./Navigation.styles";
import { useNavigation } from "@/hooks/useNavigation";
import { LinkToHash } from "@/components/ui/LinkToHash/LinkToHash";

export const Navigation = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <ul css={navList}>
      {navigation.map(({ id, title, link }) => (
        <li key={id}>
          <LinkToHash id={link} className="link">
            {title}
          </LinkToHash>
        </li>
      ))}
    </ul>
  );
};
