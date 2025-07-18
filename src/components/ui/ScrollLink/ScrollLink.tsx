import { JSX } from "react";
import { Link } from "react-scroll";

import { ScrollLinkProps } from "@/types";

const ScrollLink = ({
  children,
  to,
  onClick,
}: ScrollLinkProps): JSX.Element => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      href="/"
      className="link"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
