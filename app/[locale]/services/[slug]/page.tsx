import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/ServiceDetailContent";

const VALID_SLUGS = ["web", "mobile", "custom-software"] as const;

type Slug = (typeof VALID_SLUGS)[number];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug as Slug)) notFound();
  return <ServiceDetailContent slug={slug as Slug} />;
}
