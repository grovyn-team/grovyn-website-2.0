/**
 * SEO constants and helpers. Use for canonical URLs, sitemaps, and metadata.
 */

export const SITE_URL = "https://grovyn.in";

export const GOOGLE_SITE_VERIFICATION = "5RU4b4H4v4X03pTKVmJNVVoiNDxivxpNwKyMUJGPbus";

/** Paths that exist for every locale (no trailing slash). Empty string = home. */
export const STATIC_PATHS = [
  "",
  "about",
  "blog",
  "careers",
  "privacy",
  "terms",
  "industries",
  "portfolio",
  "automations",
] as const;

export const SERVICE_SLUGS = ["web", "mobile", "custom-software"] as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function canonicalFor(locale: string, pathSegment: string): string {
  const path = pathSegment ? `/${locale}/${pathSegment}` : `/${locale}`;
  return absoluteUrl(path);
}

export type PageMetaOptions = {
  locale: string;
  pathSegment: string;
  title?: string;
  description?: string;
};

/** Build metadata with self-referencing canonical so the page is indexed (not "alternate"). */
export function pageMetadata({ locale, pathSegment, title, description }: PageMetaOptions) {
  const canonical = canonicalFor(locale, pathSegment);
  return {
    title: title ?? undefined,
    description: description ?? undefined,
    alternates: { canonical },
    openGraph: title || description ? { title: title ?? undefined, description: description ?? undefined } : undefined,
  };
}
