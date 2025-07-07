"use client";

import React from "react";
import { Toast } from "./Toast";
import styles from "./ToastContainer.module.scss";
import { useToastContext } from "../../../context/ToastContext";

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToastContext();

  if (toasts.length === 0) return null;

  return (
    <div className={styles.container}>
      {toasts.map(
        (toast: {
          id: string;
          message: string;
          type?: import("./Toast").ToastType;
          duration?: number;
        }) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={removeToast}
          />
        )
      )}
    </div>
  );
};
