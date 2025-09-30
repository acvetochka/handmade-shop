"use client";

import { JSX } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { LanguageSwitcher, MobileMenu, Navigation } from "@/components";
import {
  container,
  headerStyles,
  menuButton,
  navWrapperStyles,
} from "./Header.styles";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import Image from "next/image";

export const Header = (): JSX.Element => {
  const isMobile = useMediaQuery({ maxWidth: 1439 });
  const { isOpen, toggleMenu } = useMobileMenu();

  return (
    <header css={headerStyles}>
      <div css={container}>
        <div css={navWrapperStyles}>
          <Link href="/">
            <Image
              // src="/hw-logo2.png"
              src="/logo-hw-ecke.png"
              width={100}
              height={100}
              alt="Handwerk Ecke logo"
            />
          </Link>

          {!isMobile && <Navigation />}
          <LanguageSwitcher />
          {isMobile && (
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
    </header>
  );
};
