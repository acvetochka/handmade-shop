import {
  //   StyledMobileMenu,
  menuWrapper,
  menuList,
  linkStyled,
  mobileMenuStyle,
} from "./MobileMenu.styles";
import { JSX } from "react";
import { MobileMenuProps } from "@/types/mobileMenu.props";
import { Container, ScrollLink } from "@/components";
import { useNavigation } from "@/hooks/useNavigation";
// import ScrollLink from "../ui/ScrollLink/ScrollLink";
// import { Link } from "react-scroll";
// import {}

export const MobileMenu = ({
  isOpen = false,
  onClose,
}: MobileMenuProps): JSX.Element => {
  const navigation = useNavigation();
  return (
    <div css={mobileMenuStyle(isOpen)}>
      <Container>
        <div css={menuWrapper}>
          <ul css={menuList}>
            {navigation.map(({ id, link, title }) => (
              <li key={id}>
                <ScrollLink
                  css={linkStyled}
                  href="/"
                  to={link}
                  onClick={onClose}
                  // onClick={isOpen && (() => onClose())}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="link"
                >
                  {title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
