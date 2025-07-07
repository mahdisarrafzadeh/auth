"use client";

import React from "react";
import Image from "next/image";

import { useProtectedRoute } from "@/hooks";
import { TEXTS } from "@/constants";
import { Button } from "@/app/components/ui";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const { user, loading, logout } = useProtectedRoute();

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.dashboardWrapper}>
          <p>{TEXTS.dashboard.loading}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboardWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>{TEXTS.dashboard.welcome}</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <Image
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                width={128}
                height={128}
              />
            </div>
            <h2 className={styles.name}>
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className={styles.email}>{user.email}</p>
          </div>
        </div>

        <Button onClick={logout} className={styles.logoutButton}>
          {TEXTS.dashboard.logout}
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
