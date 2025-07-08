"use client";

import { InputProps } from "@/types";
import { inputStyled, inputWrapper } from "./Input.styles";

export const Input = ({
  type,
  name,
  label,
  placeholder,
  // value = "",
  // onChange,
  register,
  error,
}: InputProps): JSX.Element => {
  return (
    <div css={inputWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        css={inputStyled}
        type={type}
        id={name}
        // name={name}
        placeholder={placeholder}
        // required
        // value={value}
        // onChange={onChange}
        {...register}
      />
      {error && (
        <span style={{ color: "red", fontSize: "0.875rem" }}>{error}</span>
      )}
      {/* </label> */}
    </div>
  );
};
