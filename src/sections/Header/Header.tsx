// "use client";

import { HeaderComponent } from "@/components";
import { JSX } from "@emotion/react/jsx-runtime";

export const Header = (): JSX.Element => {
  return <HeaderComponent />;
};

// import { JSX, useEffect, useState } from "react";
// import Link from "next/link";
// import { MdMenu, MdClose } from "react-icons/md";
// import { useMediaQuery } from "react-responsive";
// import {
//   Container,
//   LanguageSwitcher,
//   MobileMenu,
//   // MobileMenu,
//   Navigation,
// } from "@/components";
// import { headerStyles, menuButton, navWrapperStyles } from "../../components/Header/Header.styles";
// import { useMobileMenu } from "@/hooks/useMobileMenu";

// export const Header = (): JSX.Element => {
//   // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const [isClient, setIsClient] = useState(false);

//   const { isOpen, toggleMenu } = useMobileMenu();

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // useEffect(() => {
//   //   if (isClient) {
//   //     if (isMobileMenuOpen) {
//   //       document.documentElement.classList.add("no-scroll");
//   //       document.body.classList.add("no-scroll");
//   //     } else {
//   //       document.documentElement.classList.remove("no-scroll");
//   //       document.body.classList.remove("no-scroll");
//   //     }
//   //   }
//   // }, [isMobileMenuOpen, isClient]);

//   // const toggleMobileMenu = (event?: React.MouseEvent) => {
//   //   if (event) event.preventDefault(); // Запобігає зміні позиції скролу
//   //   setIsMobileMenuOpen((prev) => !prev);
//   // };

//   return (
//     <header css={headerStyles}>
//       <Container>
//         <div css={navWrapperStyles}>
//           <Link href="/">Handwerk Ecke</Link>

//           {!isMobile && <Navigation />}
//           <LanguageSwitcher />
//           {isClient && isMobile && (
//             <>
//               <button
//                 css={menuButton}
//                 type="button"
//                 // onClick={toggleMobileMenu}
//                 onClick={toggleMenu}
//                 aria-label={
//                   // isMobileMenuOpen ? "close-menu-button" : "open-menu-button"
//                   isOpen ? "close-menu-button" : "open-menu-button"
//                 }
//               >
//                 {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
//               </button>
//               <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
//             </>
//           )}
//         </div>
//       </Container>
//     </header>
//   );
// };
