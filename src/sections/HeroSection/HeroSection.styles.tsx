import { css } from "@emotion/react";

export const heroSection = css`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

export const title = css`
  margin-bottom: 30px;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
`;
