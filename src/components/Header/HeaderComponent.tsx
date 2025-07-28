"use client";

import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import {
  // Container,
  LanguageSwitcher,
  MobileMenu,
  Navigation,
} from "@/components";
import {
  container,
  // container,
  headerStyles,
  menuButton,
  navWrapperStyles,
} from "./Header.styles";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import Image from "next/image";

export const HeaderComponent = (): JSX.Element => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isClient, setIsClient] = useState(false);

  const { isOpen, toggleMenu } = useMobileMenu();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header css={headerStyles}>
      <div css={container}>
        {/* <Container> */}
        <div css={navWrapperStyles}>
          <Link href="/">
            <Image
              src="/hw-logo2.png"
              width={90}
              height={40}
              alt="Handwerk Ecke logo"
            />
          </Link>

          {!isMobile && <Navigation />}
          <LanguageSwitcher />
          {isClient && isMobile && (
            <>
              <button
                css={menuButton}
                type="button"
                onClick={toggleMenu}
                aria-label={isOpen ? "close-menu-button" : "open-menu-button"}
              >
                {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
              </button>
            </>
          )}
          <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
        </div>
      </div>
      {/* </Container> */}
    </header>
  );
};
