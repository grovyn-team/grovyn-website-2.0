"use client";

import { NextIntlClientProvider } from "next-intl";

/**
 * Inner provider that adds onError and getMessageFallback so missing
 * translation keys never crash the app. Inherits locale and messages
 * from the outer NextIntlClientProvider.
 */
export default function IntlErrorHandlingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider
      onError={() => {
        // Prevent missing-message errors from crashing the app
      }}
      getMessageFallback={({ namespace, key }) => {
        const path = [namespace, key].filter(Boolean).join(".");
        return path || "…";
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
