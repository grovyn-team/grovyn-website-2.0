"use client";

import { NextIntlClientProvider } from "next-intl";

/**
 * Wraps the app with NextIntlClientProvider and adds onError + getMessageFallback
 * so missing translation keys never crash the app.
 */
export default function IntlErrorHandlingProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
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
