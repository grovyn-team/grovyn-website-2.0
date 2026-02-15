import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

/** Redirect non-default locales to default so URL cannot be used to switch language. Re-enable i18n later by removing this redirect. */
export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const nonEnMatch = pathname.match(/^\/(ar|es|fr|de|zh|hi|pt)(\/.*|$)/);
  if (nonEnMatch) {
    const newPath = `/en${nonEnMatch[2] || ""}`;
    return NextResponse.redirect(new URL(newPath, req.url));
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(en|ar|es|fr|de|zh|hi|pt)/:path*"],
};
