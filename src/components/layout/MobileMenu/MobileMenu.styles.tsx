import { css } from "@emotion/react";

export const mobileMenuStyle = ($isOpen: boolean) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  backdrop-filter: blur(12px);
  transform: ${$isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${$isOpen ? "1" : "0"};
  visibility: ${$isOpen ? "visible" : "hidden"};
  pointer-events: ${$isOpen ? "auto" : "none"};
  transition: all 0.5s ease-in-out;
  // overflow-y: ${$isOpen ? "scroll" : "hidden"};
  overflow-y: ${$isOpen ? "hidden" : "scroll"};
`;

export const menuWrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const menuList = css`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  list-style: none;
`;

export const linkStyled = css`
  cursor: pointer;
  //   text-decoration: none;
  color: inherit;
  text-transform: uppercase;
`;
