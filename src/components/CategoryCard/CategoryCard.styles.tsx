import { css } from "@emotion/react";

export const categoryBox = (index: number) => css`
  // display: flex;
  // flex-direction: column;
  // min-height: 300px;
  // align-items: center;
  // text-align: center;
  // background-image: url("/home/kerzen.jpg");
  // background-color: rgba(255, 255, 255, 0.6);
  // background-size: cover;
  // background-blend-mode: lighten;
  background-color: ${index % 2 ? "#f0eae0" : "#dfd5d5"};
`;

export const categoryWrapper = css`
  display: flex;
  padding: 40px 0;
  align-items: space-between;
`;

export const imageWrapper = (index: number) => css`
  width: 60%;
  order: ${index % 2 === 0 ? 2 : 1};
`;

export const descriptionWrapper = (index: number) => css`
  width: 40%;
  order: ${index % 2 === 0 ? 1 : 2};
  // text-align: ${index % 2 === 0 ? "start" : "end"};
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: ${index % 2 ? "flex-end" : "flex-start"};
`;

export const categoryTitle = css`
  margin-bottom: 20px;
`;

export const categoryDescription = css`
  margin-bottom: 20px;
  text-align: justify;
`;
