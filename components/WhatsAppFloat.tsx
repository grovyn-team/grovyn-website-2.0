"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const WHATSAPP_NUMBER = "917354972920";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const CAL_MODAL_BREAKPOINT = 768;
export const OPEN_DISCOVERY_CALL_EVENT = "openDiscoveryCall";

/** Allow only path-safe segment for cal.com (no protocol or host) to avoid open redirect. */
function sanitizeCalComPath(raw: string): string {
  const path = raw.replace(/^https?:\/\/[^/]*\/?/i, "").trim();
  if (!path) return "grovyn/discovery-call";
  return path.replace(/[^a-zA-Z0-9/_-]/g, "") || "grovyn/discovery-call";
}

const CAL_COM_LINK =
  typeof process.env.NEXT_PUBLIC_CAL_COM_LINK === "string" &&
  process.env.NEXT_PUBLIC_CAL_COM_LINK.length > 0
    ? sanitizeCalComPath(process.env.NEXT_PUBLIC_CAL_COM_LINK)
    : "grovyn/discovery-call";

const CAL_COM_URL = `https://cal.com/${CAL_COM_LINK}`;

export default function WhatsAppFloat() {
  const t = useTranslations("contact");
  const [calOpen, setCalOpen] = useState(false);

  const closeCal = useCallback(() => setCalOpen(false), []);

  useEffect(() => {
    if (!calOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [calOpen, closeCal]);

  useEffect(() => {
    if (calOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [calOpen]);

  useEffect(() => {
    const openModal = () => setCalOpen(true);
    window.addEventListener(OPEN_DISCOVERY_CALL_EVENT, openModal);
    return () => window.removeEventListener(OPEN_DISCOVERY_CALL_EVENT, openModal);
  }, []);

  const handleCalClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window !== "undefined" && window.innerWidth >= CAL_MODAL_BREAKPOINT) {
        e.preventDefault();
        setCalOpen(true);
      }
    },
    []
  );

  return (
    <>
      {calOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4"
          onClick={closeCal}
          onKeyDown={(e) => e.key === "Escape" && closeCal()}
          role="dialog"
          aria-modal="true"
          aria-label={t("book_discovery_call")}
        >
          <div
            className="relative flex h-[85vh] w-full max-w-4xl flex-col rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeCal}
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <iframe
              src={CAL_COM_URL}
              title={t("book_discovery_call")}
              className="h-full w-full flex-1 rounded-xl border-0"
            />
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <a
          href={CAL_COM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCalClick}
          title={t("book_discovery_call")}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg shadow-gray-900/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-gray-900/40 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
          aria-label={t("book_discovery_call")}
        >
          <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            {t("book_discovery_call")}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          title={t("whatsapp_us")}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
          aria-label="Chat on WhatsApp"
        >
          <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            {t("whatsapp_us")}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}
