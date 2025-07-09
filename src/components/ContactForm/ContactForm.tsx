"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import { Input } from "../ui/Input/Input";
import inputData from "@/data/inputData.json";
import {
  buttonStyled,
  formStyled,
  inputWrapper,
  textareaStyled,
} from "./ContactForm.styles";
import { JSX } from "react";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string;

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = (): JSX.Element => {
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
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <form css={formStyled} onSubmit={handleSubmit(onSubmit)}>
      {inputData.map(({ type, name, label, placeholder }) => (
        <Input
          key={name}
          type={type}
          label={label}
          name={name}
          placeholder={placeholder}
          register={register(name as keyof FormData, {
            required: `${label} is required`,
            ...(name === "email"
              ? {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }
              : {}),
          })}
          error={errors[name as keyof FormData]?.message}
        />
      ))}

      <div css={inputWrapper}>
        <label>
          Message
          <textarea
            css={textareaStyled}
            placeholder="Write your message here"
            {...register("message", { required: "Message is required" })}
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
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
