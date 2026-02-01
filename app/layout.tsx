import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GROVYN | Software Engineering for Modern Enterprises",
  description: "GROVYN is a software engineering company specializing in web applications, mobile apps (iOS/Android), and system integrations. We build scalable platforms using React, Node.js, and modern cloud infrastructure. Services include CometChat integration, Sendbird SDK, API development, and end-to-end digital solutions for enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
