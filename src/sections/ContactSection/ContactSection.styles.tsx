import { css } from "@emotion/react";

export const contactSection = css`
  //   background-color: #f0eae0;
  background-color: #dfd5d5;
  padding: 40px 0;
  //  : "#dfd5d5"};
`;

export const contactWrapper = css`
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 1020px) {
    flex-direction: row;
    align-items: flex-start;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
`;

export const listStyled = css`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  // align-items: center;
  width: 300px;
`;

export const itemStyled = css`
  display: flex;
  gap: 30px;
  align-items: center;

  & p {
    text-transform: capitalize;
    width: 70px;
  }
`;
