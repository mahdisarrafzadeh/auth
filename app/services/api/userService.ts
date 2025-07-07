import { apiClient } from "./client";

export interface UserData {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  // Add other user data fields as needed
}

export interface LoginCredentials {
  email: string;
  password: string;
}

const config = {
  baseUrl: "https://randomuser.me/api",
  localStorageUserKey: "auth_user",
};

/**
 * User service for authentication and user management
 */
export const userService = {
  /**
   * Login user with credentials
   * @param credentials User login credentials
   * @returns User data if successful
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(credentials: LoginCredentials) {
    // For demonstration purposes, we're using randomuser.me API
    // In a real app, this would use the credentials to authenticate
    // e.g., await apiClient.post('/api/auth/login', credentials);
    const { data, error } = await apiClient.get<{ results: UserData[] }>(
      `${config.baseUrl}/?results=1&nat=us`
    );

    if (error) {
      throw new Error("Login failed");
    }

    if (data?.results?.[0]) {
      const userData = data.results[0];
      localStorage.setItem(
        config.localStorageUserKey,
        JSON.stringify(userData)
      );
      return userData;
    }

    throw new Error("Invalid login response");
  },

  /**
   * Get the current user from local storage
   * @returns Current user data or null if not logged in
   */
  getCurrentUser(): UserData | null {
    if (typeof window === "undefined") {
      return null;
    }

    const userData = localStorage.getItem(config.localStorageUserKey);
    return userData ? JSON.parse(userData) : null;
  },

  /**
   * Logout the current user
   */
  logout() {
    localStorage.removeItem(config.localStorageUserKey);
  },
};
