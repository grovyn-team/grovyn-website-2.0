import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

const VALID_SLUGS = ["web", "mobile", "custom-software"] as const;

type Slug = (typeof VALID_SLUGS)[number];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!VALID_SLUGS.includes(slug as Slug)) return {};
  const t = await getTranslations("services_detail");
  const key = slug === "custom-software" ? "custom_software" : slug;
  let title = `${slug} | GROVYN Services`;
  let description = `GROVYN ${slug} development services.`;
  try {
    const line1 = t(`${key}.hero_title_line1`);
    const subtitle = t(`${key}.hero_subtitle`);
    if (line1) title = `${line1} | GROVYN`;
    if (subtitle) description = subtitle;
  } catch {
    // use fallbacks above
  }
  return pageMetadata({
    locale,
    pathSegment: `services/${slug}`,
    title,
    description,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug as Slug)) notFound();
  return <ServiceDetailContent slug={slug as Slug} />;
}
