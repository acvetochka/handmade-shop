"use client";

import { Container } from "@/components";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import {
  contactSection,
  contactTitle,
  contactWrapper,
  itemStyled,
  listStyled,
  textStyled,
} from "./ContactSection.styles";
import { JSX } from "react";
// import contacts from "@/data/contacts.json";
import { useTranslation } from "@/providers";
// import { useTranslation } from "@/providers";

export const ContactSection = (): JSX.Element => {
  const { t } = useTranslation();
  // const contacts = t.raw("contacts.contactList");
  const contacts = ["email", "phone", "whatsapp"];

  return (
    <section id="contacts" css={contactSection}>
      <Container>
        <h2 css={contactTitle}>{t(`contacts.title`)}</h2>
        {/* {t(`categories.${name}.title`)} */}
        <div css={contactWrapper}>
          <ul css={listStyled}>
            {/* {contacts.map(({ name, type, link }, id) => (
              <li css={itemStyled} key={id}>
                <p css={textStyled}>{type}:</p>
                <a href={link}>{name}</a>
              </li>
            ))} */}
            {contacts.map((name, id) => (
              <li css={itemStyled} key={id}>
                <p css={textStyled}>
                  {/* {t(`contacts.contactList.${name}.label`)}: */}
                  {t(`contactList.${name}.label`)}
                </p>
                <a href={t(`contactList.${name}.link`)}>
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
