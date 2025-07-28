import { css } from "@emotion/react";

export const categoryButton = css`
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

  & p {
    transition: transform 0.3s ease;
    display: inline-block;
    box-shadow: 1px 1px 2px 0px #311704;
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
