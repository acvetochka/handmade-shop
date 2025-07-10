"use client";

import { Container, LanguageSwitcher } from "@/components";
import Link from "next/link";
// import { useParams } from "next/navigation";
import { headerStyles, navWrapperStyles } from "./Header.styles";
import { JSX } from "react";
import { Navigation } from "@/components/Navigation/Navigation";
// import Image from "next/image";

export const Header = (): JSX.Element => {
  // const params = useParams();
  // const locale = params?.locale as string;

  return (
    <header css={headerStyles}>
      <Container>
        <div css={navWrapperStyles}>
          {/* <Image
            src="/logo.png"
            alt="Logo Handwerk Ecke"
            width={80}
            height={80}
          /> */}
          <Link href="/">Handwerk Ecke</Link>
          {/* <Link href="/">Home</Link> */}
          {/* <Link href={`/${locale}/products`}>Products</Link> */}
          <Navigation />
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
};
