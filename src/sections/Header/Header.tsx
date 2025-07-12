"use client";

import {
  Container,
  LanguageSwitcher,
  // MobileMenu,
  Navigation,
} from "@/components";
import Link from "next/link";
import { headerStyles, navWrapperStyles } from "./Header.styles";
import { JSX } from "react";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { menuButton } from "./Header.styles";

export const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      if (isMobileMenuOpen) {
        document.documentElement.classList.add("no-scroll");
        document.body.classList.add("no-scroll");
      } else {
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
      }
    }
  }, [isMobileMenuOpen, isClient]);

  const toggleMobileMenu = (event?: React.MouseEvent) => {
    if (event) event.preventDefault(); // Запобігає зміні позиції скролу
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header css={headerStyles}>
      <Container>
        <div css={navWrapperStyles}>
          <Link href="/">Handwerk Ecke</Link>
          {isClient && isMobile && (
            <>
              <button
                css={menuButton}
                type="button"
                onClick={toggleMobileMenu}
                aria-label={
                  isMobileMenuOpen ? "close-menu-button" : "open-menu-button"
                }
              >
                {isMobileMenuOpen ? (
                  <MdClose size={24} />
                ) : (
                  <MdMenu size={24} />
                )}
              </button>
              {/* <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={toggleMobileMenu}
              /> */}
            </>
          )}
          <LanguageSwitcher />
          {!isMobile && <Navigation />}
        </div>
      </Container>
    </header>
  );
};
