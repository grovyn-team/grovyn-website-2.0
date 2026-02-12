import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const activeLocale: Locale =
    locale && typeof locale === "string" && (locales as readonly string[]).includes(locale)
      ? (locale as Locale)
      : defaultLocale;

  let messages: Record<string, unknown>;
  try {
    messages = (await import(`../messages/${activeLocale}.json`)).default;
  } catch {
    messages = (await import(`../messages/${defaultLocale}.json`)).default;
  }

  return {
    locale: activeLocale,
    messages,
    onError() {
      // Prevent missing-message errors from crashing the app in production
    },
    getMessageFallback({ namespace, key }) {
      const path = [namespace, key].filter(Boolean).join(".");
      return path || "…";
    },
  };
});