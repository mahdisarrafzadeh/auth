"use client";

import React, { useState } from "react";

import { FormikLoginForm, CustomLoginForm } from "./LoginForm";
import { TEXTS } from "@/constants";
import { Button } from "@/app/components/ui";

import styles from "./Login.module.scss";

const Login = () => {
  const [useFormik, setUseFormik] = useState(true);

  const handleToggle = () => {
    setUseFormik(!useFormik);
  };

  const Component = useFormik ? FormikLoginForm : CustomLoginForm;
  const buttonText = useFormik
    ? TEXTS.login.withFormikAndYup
    : TEXTS.login.withoutLibrary;

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Component />
        <div className={styles.toggleContainer}>
          <Button variant="secondary" onClick={handleToggle}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
