"use client";

import {
  menuWrapper,
  menuList,
  linkStyled,
  mobileMenuStyle,
} from "./MobileMenu.styles";
import { JSX } from "react";
import { MobileMenuProps } from "@/types/mobileMenu.props";
import { Container, LinkToHash } from "@/components";
import { useNavigation } from "@/hooks/useNavigation";

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
                <LinkToHash
                  id={link}
                  css={linkStyled}
                  className="link"
                  onClick={onClose}
                >
                  {title}
                </LinkToHash>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
