"use client";

import { JSX } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import { Input } from "@/components";
import inputData from "@/data/inputData.json";
import {
  buttonStyled,
  formStyled,
  inputWrapper,
  textareaStyled,
} from "./ContactForm.styles";
import { useTranslation } from "@/providers";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string;

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = (): JSX.Element => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
      reset();
      alert(t("contactForm.success"));
    } catch (error) {
      console.error(error);
      alert(t("contactForm.error"));
    }
  };

  return (
    <form css={formStyled} onSubmit={handleSubmit(onSubmit)}>
      {inputData.map(({ type, name }) => (
        <Input
          key={name}
          type={type}
          label={t(`contactForm.${name}.label`)}
          name={name}
          placeholder={t(`contactForm.${name}.placeholder`)}
          register={register(name as keyof FormData, {
            required: t(`contactForm.${name}.required`),
            ...(name === "email"
              ? {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("contactForm.email.invalid"),
                  },
                }
              : {}),
          })}
          error={errors[name as keyof FormData]?.message}
        />
      ))}

      <div css={inputWrapper}>
        <label>
          {t("contactForm.message.label")}
          <textarea
            css={textareaStyled}
            placeholder={t("contactForm.message.placeholder")}
            {...register("message", {
              required: t("contactForm.message.required"),
            })}
          />
          {errors.message && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.message.message}
            </span>
          )}
        </label>
      </div>

      <button
        type="submit"
        css={buttonStyled}
        className="has-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? t("contactForm.sending") : t("contactForm.send")}
      </button>
    </form>
  );
};
