"use client";

import React, { FormEvent } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { TEXTS } from "../../../constants";
import usePhoneValidation from "../../../hooks/usePhoneValidation";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styles from "./CustomLoginForm.module.scss";

export const CustomLoginForm: React.FC = () => {
  const { login, loading } = useAuthContext();
  const {
    phoneNumber,
    error,
    touched,
    isValid,
    handleChange,
    handleBlur,
    resetForm,
  } = usePhoneValidation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const success = await login();
    if (success) {
      resetForm();
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>{TEXTS.login.title}</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label={TEXTS.login.phoneLabel}
          placeholder={TEXTS.login.phonePlaceholder}
          type="tel"
          dir="ltr"
          value={phoneNumber}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          error={error}
          touched={touched}
        />

        <Button
          type="submit"
          isLoading={loading}
          loadingText={TEXTS.login.loading}
          className={styles.submitButton}
          disabled={!isValid || !phoneNumber}
        >
          {TEXTS.login.buttonText}
        </Button>
      </form>
    </div>
  );
};

export default CustomLoginForm;
