"use client";

import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  touched,
  className,
  ...props
}) => {
  const showError = error && touched;

  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${showError ? styles.error : ""} ${
            className || ""
          }`}
          {...props}
        />
      </div>
      {showError && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
