interface FetchOptions extends RequestInit {
  // These options will be handled by the useApiClient hook
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  status: number;
}

/**
 * Base API client for handling HTTP requests
 */
export const apiClient = {
  /**
   * Perform a fetch request with error handling
   * @param url The URL to fetch
   * @param options Fetch options and additional config
   * @returns API response with data, error, and status
   */
  async fetch<T>(
    url: string,
    options: FetchOptions = {}
  ): Promise<ApiResponse<T>> {
    // Extract custom options to avoid passing them to fetch
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ...fetchOptions } = options;

    try {
      const response = await fetch(url, fetchOptions);
      const status = response.status;

      if (!response.ok) {
        throw new Error(`Request failed with status: ${status}`);
      }

      let data: T | null = null;
      const contentType = response.headers.get("content-type");

      if (contentType?.includes("application/json")) {
        data = await response.json();
      }

      return { data, error: null, status };
    } catch (error) {
      console.error("API request failed:", error);
      return {
        data: null,
        error: error instanceof Error ? error : new Error("Unknown error"),
        status: 0,
      };
    }
  },

  /**
   * Perform a GET request
   * @param url The URL to fetch
   * @param options Fetch options
   * @returns API response
   */
  async get<T>(
    url: string,
    options: FetchOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.fetch<T>(url, {
      method: "GET",
      ...options,
    });
  },

  /**
   * Perform a POST request
   * @param url The URL to fetch
   * @param data The data to send
   * @param options Fetch options
   * @returns API response
   */
  async post<T>(
    url: string,
    data: unknown,
    options: FetchOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.fetch<T>(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });
  },

  /**
   * Perform a PUT request
   * @param url The URL to fetch
   * @param data The data to send
   * @param options Fetch options
   * @returns API response
   */
  async put<T>(
    url: string,
    data: unknown,
    options: FetchOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.fetch<T>(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });
  },

  /**
   * Perform a DELETE request
   * @param url The URL to fetch
   * @param options Fetch options
   * @returns API response
   */
  async delete<T>(
    url: string,
    options: FetchOptions = {}
  ): Promise<ApiResponse<T>> {
    return this.fetch<T>(url, {
      method: "DELETE",
      ...options,
    });
  },
};
