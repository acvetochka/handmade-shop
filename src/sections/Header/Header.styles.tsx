import { css } from "@emotion/react";

export const headerStyles = css`
  padding: 10px 0;
  background-color: #b79d9d;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const navWrapperStyles = css`
  display: flex;
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
    fill: white;
  }

  @media (min-width: 768px) {
    display: none; /* Сховати кнопку на великих екранах */
  }
`;
