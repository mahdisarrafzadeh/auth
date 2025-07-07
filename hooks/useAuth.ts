"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

import { User } from "../app/types";
import { config } from "../config";
import { pagesInfo } from "../constants/pagesInfo";
import { useToast } from "./useToast";

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const toast = useToast();
  // Load user from localStorage on mount
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

  // Login function
  const login = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${config.baseUrl}/?results=1&nat=us`);
      const data = await response.json();

      if (data?.results?.[0]) {
        const userData = data.results[0];
        localStorage.setItem(
          config.localStorageUserKey,
          JSON.stringify(userData)
        );
        toast.success("Login successful");
        setUser(userData);
        router.push(pagesInfo.dashboardPage.href());
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  }, [router, toast]);

  // Logout function
  const logout = useCallback(() => {
    localStorage.removeItem(config.localStorageUserKey);
    setUser(null);
    router.push(pagesInfo.authPage.href());
  }, [router]);

  // Check if user is authenticated
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
