/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const switcherWrapper = css`
  position: relative;
  display: inline-block;
`;

export const selectedLocaleStyle = css`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const arrowStyle = css`
  margin-left: 4px;
  font-size: 6px;
  transition: transform 0.3s ease;
`;

export const arrowOpen = css`
  transform: rotate(180deg);
`;

export const dropdownStyle = css`
    position: absolute;
    top: 100%;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 5px;
    // background: #000000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    padding: 0;
    gap: 5px;
`;

export const dropdownItem = css`
  background: none;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 1px 1px 5px #5d2c13;
  }
`;

export const flagImage = css`
  width: 24px;
  height: auto;
  display: block;
`;

