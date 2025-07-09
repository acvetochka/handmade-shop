"use client";

import { JSX } from "react";
import { container } from "./Container.styles";
import { ContainerProps } from "@/types";

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div css={container}>{children}</div>;
};
