"use client";

import { useState, useCallback } from "react";
import { regex, PHONE_ERROR_MESSAGE, TEXTS } from "../constants";

export const usePhoneValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const validatePhone = useCallback((value: string) => {
    if (!value) {
      return TEXTS.login.phoneRequired;
    }

    if (!regex.phone.test(value)) {
      return PHONE_ERROR_MESSAGE;
    }

    return "";
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      setPhoneNumber(value);
      if (touched) {
        setError(validatePhone(value));
      }
    },
    [touched, validatePhone]
  );

  const handleBlur = useCallback(() => {
    setTouched(true);
    setError(validatePhone(phoneNumber));
  }, [phoneNumber, validatePhone]);

  const resetForm = useCallback(() => {
    setPhoneNumber("");
    setError("");
    setTouched(false);
  }, []);

  return {
    phoneNumber,
    error,
    touched,
    isValid: !error,
    handleChange,
    handleBlur,
    resetForm,
    validatePhone,
  };
};

export default usePhoneValidation;
