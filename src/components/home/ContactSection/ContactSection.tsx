"use client";

import { ContactForm, Container } from "@/components";
import {
  contactSection,
  contactTitle,
  contactWrapper,
  itemStyled,
  listStyled,
  textStyled,
} from "./ContactSection.styles";
import { JSX } from "react";
import { useTranslation } from "@/providers";

export const ContactSection = (): JSX.Element => {
  const { t } = useTranslation();

  const contacts = ["email", "phone", "whatsapp"];

  return (
    <section id="contacts" css={contactSection}>
      <Container>
        <h2 css={contactTitle}>{t(`contacts.title`)}</h2>
        <div css={contactWrapper}>
          <ul css={listStyled}>
            {contacts.map((name, id) => (
              <li css={itemStyled} key={id}>
                <p css={textStyled}>{t(`contactList.${name}.label`)}</p>
                <a href={t(`contactList.${name}.link`)} className="link">
                  {t(`contactList.${name}.name`)}
                </a>
              </li>
            ))}
            <li css={itemStyled}>
              <p css={textStyled}>{t(`contacts.locationLabel`)}:</p>
              <span>{t(`contacts.location`)}</span>
            </li>
          </ul>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
