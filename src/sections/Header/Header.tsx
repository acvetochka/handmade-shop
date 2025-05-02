"use client";

import { LanguageSwitcher } from "@/components";
import Link from "next/link";
import { useParams } from "next/navigation";

export const Header = () => {
      const params = useParams();
      const locale = params?.locale as string;

  return (
    <header>
      <Link href="/">Home</Link>
      <Link href={`/${locale}/products`}>Products</Link>
      <LanguageSwitcher />
    </header>
  );
};
