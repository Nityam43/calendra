import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calendra",
  description: "Calendra is a simple and efficient calendar app that helps you manage your events, meeting, and schedules with ease. Stady organized and never miss an important date again!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased animate-fade-in`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
    </ClerkProvider>
  );
}
