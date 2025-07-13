import { LinkProps } from "react-scroll";
import { ReactNode } from "react";

export interface ScrollLinkProps extends LinkProps {
  children: ReactNode;
  to: string;
  onClick?: () => void;
}
