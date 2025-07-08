import { css } from "@emotion/react";

export const container = css`
  padding: 0 60px;
  text-align: center;
  // max-width: 1440px;
  max-width: 393px
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 393px){
  max-width: 393px}

   @media screen and (min-width: 768px){
  max-width: 768px}

     @media screen and (min-width: 1440px){
  max-width: 1440px}
`;
