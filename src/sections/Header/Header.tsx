"use client";

import { Container, LanguageSwitcher } from "@/components";
import Link from "next/link";
import { useParams } from "next/navigation";
import { headerStyles } from "./Header.styles";

export const Header = (): JSX.Element => {
  const params = useParams();
  const locale = params?.locale as string;

  return (
    <header>
      <Container>
        <div css={headerStyles}>
          <Link href="/">Home</Link>
          <Link href={`/${locale}/products`}>Products</Link>
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
};
