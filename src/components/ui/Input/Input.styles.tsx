import { css } from "@emotion/react";

export const inputWrapper = css`
  width: 100%;
  text-align: start;

  &media width(min-width: 768px) {
    width: 500px;
  }
`;

export const inputStyled = css`
  width: 100%;
  min-height: 40px;
  border-radius: 10px;
  padding: 10px;
  // background: hsla(0, 0%, 100%, 0.05);
  background: #f0eae0;
  // margin: 10px 0 20px 0;
  margin-top: 10px;

  &:focus {
    border: 1px solid #4f0ac9;
    outline: 2px solid #b79d9d;
  }
`;
