"use client";

import { useToastContext } from "../app/context/ToastContext";
import { ToastType } from "../app/components/ui/Toast/Toast";

/**
 * Hook for using toast notifications throughout the application
 *
 * @returns Methods for showing different types of toast notifications
 */
export const useToast = () => {
  const { addToast } = useToastContext();

  return {
    /**
     * Show a success toast notification
     * @param message The message to display
     * @param duration How long to display the toast (in ms)
     */
    success: (message: string, duration?: number) => {
      addToast(message, "success", duration);
    },

    /**
     * Show an error toast notification
     * @param message The message to display
     * @param duration How long to display the toast (in ms)
     */
    error: (message: string, duration?: number) => {
      addToast(message, "error", duration);
    },

    /**
     * Show an info toast notification
     * @param message The message to display
     * @param duration How long to display the toast (in ms)
     */
    info: (message: string, duration?: number) => {
      addToast(message, "info", duration);
    },

    /**
     * Show a warning toast notification
     * @param message The message to display
     * @param duration How long to display the toast (in ms)
     */
    warning: (message: string, duration?: number) => {
      addToast(message, "warning", duration);
    },

    /**
     * Show a toast notification with custom type
     * @param message The message to display
     * @param type The type of toast
     * @param duration How long to display the toast (in ms)
     */
    show: (message: string, type?: ToastType, duration?: number) => {
      addToast(message, type, duration);
    },
  };
};
