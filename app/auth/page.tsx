"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Login } from "../components";
import { useAuthContext } from "../context/AuthContext";
import { pagesInfo } from "../../constants";

const AuthPage = () => {
  const { loading, isAuthenticated } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated()) {
      router.push(pagesInfo.dashboardPage.path);
    }
  }, [loading, isAuthenticated, router]);

  return <Login />;
};

export default AuthPage;
