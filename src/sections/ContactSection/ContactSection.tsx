"use client";

import { Container } from "@/components";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import {
  contactSection,
  contactWrapper,
  itemStyled,
  listStyled,
} from "./ContactSection.styles";
import { JSX } from "react";
import contacts from "@/data/contacts.json";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="kontakte" css={contactSection}>
      <Container>
        <div css={contactWrapper}>
          <ul css={listStyled}>
            {contacts.map(({ name, type, link }, id) => (
              <li css={itemStyled} key={id}>
                <p>{type}:</p>
                <a href={link}>{name}</a>
              </li>
            ))}
            <li css={itemStyled}>
              <p>Location:</p>
              <span>Germany, Bavaria</span>
            </li>
          </ul>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
