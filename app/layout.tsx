import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, GOOGLE_SITE_VERIFICATION } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "GROVYN | Software Engineering for Modern Enterprises";
const defaultDescription =
  "GROVYN is a software engineering company specializing in web applications, mobile apps (iOS/Android), and system integrations. We build scalable platforms using React, Node.js, and modern cloud infrastructure. Services include CometChat integration, Sendbird SDK, API development, and end-to-end digital solutions for enterprises.";

const defaultKeywords = [
  "Grovyn",
  "GROVYN",
  "grovyn.in",
  "software engineering company",
  "web development company",
  "mobile app development",
  "iOS development",
  "Android development",
  "React development",
  "Next.js development",
  "Node.js development",
  "React Native",
  "CometChat integration",
  "Sendbird integration",
  "API development",
  "system integration",
  "SaaS platform development",
  "cloud infrastructure",
  "DevOps services",
  "software consulting",
  "India software company",
  "web applications",
  "mobile applications",
  "enterprise software",
  "custom software development",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: "Grovyn", url: SITE_URL }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Grovyn",
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    siteName: "Grovyn",
    locale: "en_US",
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/grovyn_logo.png", width: 1200, height: 630, alt: "GROVYN - Software Engineering Company Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/grovyn_logo.png"],
  },
  alternates: {
    // Canonical is set per-page so each URL is canonical to itself (avoids "alternate page" indexing issues).
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
