import { css } from "@emotion/react";

export const formStyled = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  // align-items: center;
  width: 100%;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 600px;
  }

  @media screen and (min-width: 1020px) {
    align-items: flex-end;
  }
`;

export const inputWrapper = css`
  width: 100%;
  text-align: start;

  &media width(min-width: 768px) {
    width: 500px;
  }
`;

export const textareaStyled = css`
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
  padding: 10px;
  outline: 1px solid #b79d9d;
  // background: hsla(0, 0%, 100%, 0.05);
  background: #f0eae0;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  // color: white;

  &:focus {
    border: 1px solid #4f0ac9;
    outline: 2px solid #b79d9d;
  }
`;

export const buttonStyled = css`
  position: relative;
  width: 100%;
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

  &:hover {
    background-position: left bottom;
  }

  @media screen and (min-width: 768px) {
    max-width: 150px;
  }
`;
