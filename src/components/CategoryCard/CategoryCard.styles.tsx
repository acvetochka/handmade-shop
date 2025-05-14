import { css } from "@emotion/react";

export const categoryBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  // border: 1px solid #ddd;
  // border-radius: 8px;
  text-align: center;
`;

export const categoryButton = css`
// position: relative;
//   margin-top: 10px;
//   padding: 8px 16px;
//   background-color: var(--button-background);
//   // background-color: transparent;
//   color: var(--foreground);
//   border: none;
//   border-radius: 4px;
//   text-decoration: none;
//   cursor: pointer;
//   transition: hover 0.2s ease;



//   ::after {
//   content: "";
//   position: absolute;
//   border-radius: 4px;
//   width: 0;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background-color:var(--button-hover);
//   transition: width 0.3s ease;
//   z-index: -1;
// }

// &:hover::after {
//   width: 100%;
// }

//   &:hover{
//   background-color:var(--button-background);

  position: relative;
  padding: 12px 24px;
  border: none;
  background: linear-gradient(to right,var(--button-hover) 50%,var(--button-background) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border-radius: 4px;
  color:  var(--foreground);
  transition: background-position 0.4s ease;
  cursor: pointer;

&:hover {
  background-position: left bottom;
  // color: white;

  & span {
  opacity: 1;
  transform: translateX(0);
}
}

& span {
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
  }
`;
