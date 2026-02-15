import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { INFRASTRUCTURE_SLUGS } from "@/lib/infrastructure";
import { SITE_URL, STATIC_PATHS, SERVICE_SLUGS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of STATIC_PATHS) {
      const pathSegment = path ? `${path}` : "";
      const url = pathSegment ? `${base}/${locale}/${pathSegment}` : `${base}/${locale}`;
      entries.push({
        url,
        lastModified,
        changeFrequency: path === "" || path === "blog" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : path === "about" ? 0.9 : 0.8,
      });
    }

    for (const slug of SERVICE_SLUGS) {
      entries.push({
        url: `${base}/${locale}/services/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const slug of INFRASTRUCTURE_SLUGS) {
      entries.push({
        url: `${base}/${locale}/infrastructure/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
