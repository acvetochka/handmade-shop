// import { css } from "@emotion/react";

// export const headerStyles = css`
//   padding: 10px 0;
//   // background-color: #b79d9d;
//   background-color: rgb(183 157 157 / 50%);
//   // backdrop-filter: blur(10px);
//   height: 60px;
//   display: flex;
//   align-items: center;
// `;

// export const navWrapperStyles = css`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const menuButton = css`
//   display: block;
//   text-transform: uppercase;
//   transition: letter-spacing 0.3s ease-in-out;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   z-index: 999;

//   &:hover {
//     letter-spacing: 1.26px;
//   }

//   & svg {
//     fill: #2a221a;
//   }

//   @media (min-width: 768px) {
//     display: none; /* Сховати кнопку на великих екранах */
//   }
// `;

import { css } from "@emotion/react";

export const headerStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 900;
  // width: 100dvw;

  min-height: 60px;
  display: flex;
  align-items: center;
`;
export const container = css`
  padding: 10px 20px;
  text-align: center;
  // background-color: #b79d9d;
  background-color: rgb(183 157 157 / 95%);
  box-shadow: 0 1px 10px 0px #311704;
  // backdrop-filter: blur(10px);
  border-radius: 0 0 8px 8px;
  max-width: 393px;
  margin: 0 auto;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 393px) {
    max-width: 393px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 10px 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 10px 60px;
  }
`;

export const navWrapperStyles = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const menuButton = css`
  display: block;
  text-transform: uppercase;
  transition: letter-spacing 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 999;

  &:hover {
    letter-spacing: 1.26px;
  }

  & svg {
    fill: #2a221a;
  }

  @media (min-width: 768px) {
    display: none; /* Сховати кнопку на великих екранах */
  }
`;
