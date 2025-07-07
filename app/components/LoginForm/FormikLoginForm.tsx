"use client";

import React from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";

import { useAuthContext } from "../../context/AuthContext";
import { TEXTS } from "../../../constants";
import { Input, Button } from "../ui";
import { validationSchema } from "./validationSchema.yup";

import styles from "./FormikLoginForm.module.scss";

interface LoginFormValues {
  phoneNumber: string;
}

const initialValues: LoginFormValues = {
  phoneNumber: "",
};

export const FormikLoginForm: React.FC = () => {
  const { login, loading } = useAuthContext();

  const handleSubmit = async (
    _: LoginFormValues,
    { resetForm }: FormikHelpers<LoginFormValues>
  ) => {
    const success = await login();
    if (success) {
      resetForm();
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>{TEXTS.login.title}</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field
              name="phoneNumber"
              as={Input}
              label={TEXTS.login.phoneLabel}
              placeholder={TEXTS.login.phonePlaceholder}
              type="tel"
              dir="ltr"
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />

            <Button
              type="submit"
              isLoading={loading}
              loadingText={TEXTS.login.loading}
              className={styles.submitButton}
            >
              {TEXTS.login.buttonText}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikLoginForm;
