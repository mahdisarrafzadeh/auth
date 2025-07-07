import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../app/context/AuthContext";
import { pagesInfo } from "../constants";

/**
 * Hook for protecting routes that require authentication
 * @param redirectPath Path to redirect to if user is not authenticated (defaults to AUTH_ROUTE)
 * @returns Authentication state information
 */
export const useProtectedRoute = (redirectPath = pagesInfo.authPage.path) => {
  const { user, loading, isAuthenticated, logout } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated()) {
      router.push(redirectPath);
    }
  }, [loading, isAuthenticated, router, redirectPath]);

  return { user, loading, isAuthenticated, logout };
};
