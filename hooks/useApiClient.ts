"use client";

import { useToast } from "@/hooks";
import { apiClient } from "../app/services/api/client";

export interface ApiHookOptions {
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

export function useApiClient() {
  const toast = useToast();

  /**
   * Handle API response and show toast notifications if needed
   */
  const handleResponse = <T>(
    response: Awaited<ReturnType<typeof apiClient.fetch<T>>>,
    options: ApiHookOptions = {}
  ) => {
    const {
      showErrorToast = true,
      showSuccessToast = false,
      successMessage = "Operation successful",
      errorMessage,
    } = options;

    if (response.error && showErrorToast) {
      toast.error(errorMessage || response.error.message);
    } else if (!response.error && showSuccessToast) {
      toast.success(successMessage);
    }

    return response;
  };

  return {
    async get<T>(url: string, options: ApiHookOptions = {}) {
      const response = await apiClient.get<T>(url, options);
      return handleResponse<T>(response, options);
    },

    async post<T>(url: string, data: unknown, options: ApiHookOptions = {}) {
      const response = await apiClient.post<T>(url, data, options);
      return handleResponse<T>(response, options);
    },

    async put<T>(url: string, data: unknown, options: ApiHookOptions = {}) {
      const response = await apiClient.put<T>(url, data, options);
      return handleResponse<T>(response, options);
    },

    async delete<T>(url: string, options: ApiHookOptions = {}) {
      const response = await apiClient.delete<T>(url, options);
      return handleResponse<T>(response, options);
    },
  };
}
