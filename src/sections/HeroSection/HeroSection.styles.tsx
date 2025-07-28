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

export const warning = css`
  padding: 20px;
  border: 1px solid red;
  margin-bottom: 20px;
`;

export const linkStyled = css`
  position: relative;
  max-width: 150px;
  padding: 12px 24px;
  border: none;
  background: linear-gradient(
    to right,
    var(--button-hover) 50%,
    var(--button-background) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  border-radius: 8px;
  color: var(--foreground);
  transition: background-position 0.4s ease;
  cursor: pointer;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
  box-shadow: 1px 1px 2px 0px #311704;

  & p {
    transition: transform 0.3s ease;
    display: inline-block;
  }

  & span {
    position: absolute;
    right: 10px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    background-position: left bottom;

    & p {
      transform: translateX(-10px);
    }

    & span {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const text = css`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
