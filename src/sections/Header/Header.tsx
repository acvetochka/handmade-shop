"use client";

import { LanguageSwitcher } from "@/components";
import Link from "next/link";
import { useParams } from "next/navigation";
import { headerStyles } from "./Header.styles";

export const Header = () => {
      const params = useParams();
      const locale = params?.locale as string;

  return (
    <header css={headerStyles}>
      <Link href="/">Home</Link>
      <Link href={`/${locale}/products`}>Products</Link>
      <LanguageSwitcher />
    </header>
  );
};
