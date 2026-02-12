import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales, isRtl } from "@/i18n/config";
import IntlErrorHandlingProvider from "@/components/IntlErrorHandlingProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <IntlErrorHandlingProvider>
            <Navbar />
            <main className="min-h-screen flex flex-col" style={{ paddingTop: "5rem" }}>
              {children}
            </main>
            <Footer locale={locale} />
            <WhatsAppFloat />
          </IntlErrorHandlingProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
