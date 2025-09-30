import { css } from "@emotion/react";

export const footerStyles = css`
  padding: 10px 20px;
  text-align: center;
  background-color: rgb(183 157 157 / 95%);
  box-shadow: 0 1px 10px 0px #311704;
  border-radius: 8px 8px 0 0;
  // max-width: 393px;
  margin: 0 auto;
  width: 100%;
  // height: 60px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin-top: auto;

  @media screen and (min-width: 393px) {
    // max-width: 393px;
  }

  @media screen and (min-width: 768px) {
    // max-width: 768px;
    padding: 10px 40px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    // max-width: 1440px;
    padding: 10px 60px;
  }
`;

export const linksWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
