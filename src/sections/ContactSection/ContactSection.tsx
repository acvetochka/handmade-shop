"use client";

import { Container } from "@/components";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { contactSection } from "./ContactSection.styles";

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contacts" css={contactSection}>
      <Container>
        <ContactForm />
      </Container>
    </section>
  );
};
