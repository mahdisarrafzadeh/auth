"use client";

import React from "react";

import { AuthProvider, ToastProvider } from "../context";

interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * AppProviders component that wraps all context providers
 * This helps avoid "provider hell" with multiple nested providers
 */
export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
};

export default AppProviders;
