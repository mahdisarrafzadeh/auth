import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppProviders } from "./providers";
import { ToastContainer } from "./components/ui/Toast";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auth App",
  description: "Authentication Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${inter.variable} antialiased`}>
        <AppProviders>
          {children}
          <ToastContainer />
        </AppProviders>
      </body>
    </html>
  );
}
