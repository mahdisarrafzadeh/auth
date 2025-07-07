"use client";

import React, { ButtonHTMLAttributes } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isLoading = false,
  loadingText,
  children,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${
        isLoading ? styles.loading : ""
      } ${className || ""}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && loadingText ? loadingText : children}
      {isLoading && (
        <span className={styles.loaderContainer}>
          <AiOutlineLoading3Quarters className="animate-spin" />
        </span>
      )}
    </button>
  );
};

export default Button;
