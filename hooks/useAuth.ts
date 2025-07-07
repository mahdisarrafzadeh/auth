"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import { User } from "../app/types";
import { config } from "../config";
import { pagesInfo } from "../constants/pagesInfo";
import { useApiClient } from "./useApiClient";

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const api = useApiClient();

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem(config.localStorageUserKey);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error loading user from localStorage:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await api.get<{ results: User[] }>(
        `${config.baseUrl}/?results=1&nat=us`,
        {
          successMessage: "Login successful",
          showSuccessToast: true,
          showErrorToast: true,
        }
      );

      if (error) {
        throw error;
      }

      if (data?.results?.[0]) {
        const userData = data.results[0];
        localStorage.setItem(
          config.localStorageUserKey,
          JSON.stringify(userData)
        );
        setUser(userData);
        router.push(pagesInfo.dashboardPage.href());
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setLoading(false);
    }
  }, [router, api]);

  const logout = useCallback(() => {
    localStorage.removeItem(config.localStorageUserKey);
    setUser(null);
    router.push(pagesInfo.authPage.href());
  }, [router]);

  const isAuthenticated = useCallback(() => {
    return !!user;
  }, [user]);

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
