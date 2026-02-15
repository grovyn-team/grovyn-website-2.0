import { notFound } from "next/navigation";
import { INFRASTRUCTURE_SLUGS, type InfrastructureSlug } from "@/lib/infrastructure";
import InfrastructureDetailContent from "@/components/InfrastructureDetailContent";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return INFRASTRUCTURE_SLUGS.map((slug) => ({
    slug: slug,
  }));
}

const INFRA_TITLES: Record<InfrastructureSlug, string> = {
  cloud: "Cloud Infrastructure",
  network: "Network Infrastructure",
  servers: "Server Infrastructure",
  security: "Security Infrastructure",
  support: "Support Services",
  backup: "Backup & Recovery",
  devops: "DevOps Services",
  datacenter: "Data Center Solutions",
  communication: "Communication Services",
  migration: "Migration Services",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const title = `${INFRA_TITLES[slug as InfrastructureSlug] || slug} - Grovyn Infrastructure`;
  const description = `Enterprise-grade ${slug} infrastructure services and solutions by Grovyn`;
  return pageMetadata({
    locale,
    pathSegment: `infrastructure/${slug}`,
    title,
    description,
  });
}

export default async function InfrastructurePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  if (!INFRASTRUCTURE_SLUGS.includes(slug as InfrastructureSlug)) notFound();
  return <InfrastructureDetailContent slug={slug as InfrastructureSlug} />;
}
