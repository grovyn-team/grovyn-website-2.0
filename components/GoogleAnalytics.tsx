"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { consentAllowsAnalytics } from "@/lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Runs gtag('config', GA_ID) only when user has accepted analytics (cookie consent).
 * Sends page_view on initial load and on client-side route changes.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const gtag = typeof window !== "undefined" ? (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag : undefined;
    if (!GA_ID || !gtag) return;

    const sendPageView = () => {
      if (consentAllowsAnalytics()) {
        gtag("config", GA_ID, {
          page_path: pathname ?? window.location.pathname,
          send_page_view: true,
        });
      }
    };

    sendPageView();
  }, [pathname]);

  useEffect(() => {
    const onConsentUpdate = () => {
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (GA_ID && gtag && consentAllowsAnalytics()) {
        gtag("config", GA_ID, {
          page_path: window.location.pathname,
          send_page_view: true,
        });
      }
    };
    window.addEventListener("grovyn-consent-update", onConsentUpdate);
    return () => window.removeEventListener("grovyn-consent-update", onConsentUpdate);
  }, []);

  return null;
}
