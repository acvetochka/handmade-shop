"use client";

import { Container } from "@/components";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import {
  contactSection,
  contactWrapper,
  itemStyled,
  listStyled,
  textStyled,
} from "./ContactSection.styles";
import { JSX } from "react";
import contacts from "@/data/contacts.json";
// import { useTranslation } from "@/providers";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contacts" css={contactSection}>
      <Container>
        <div css={contactWrapper}>
          <ul css={listStyled}>
            {contacts.map(({ name, type, link }, id) => (
              <li css={itemStyled} key={id}>
                <p css={textStyled}>{type}:</p>
                <a href={link}>{name}</a>
              </li>
            ))}
            <li css={itemStyled}>
              <p css={textStyled}>Location:</p>
              <span>Germany, Bavaria</span>
            </li>
          </ul>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
