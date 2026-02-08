import { notFound } from "next/navigation";
import { INFRASTRUCTURE_SLUGS, type InfrastructureSlug } from "@/lib/infrastructure";
import InfrastructureDetailContent from "@/components/InfrastructureDetailContent";

export async function generateStaticParams() {
  return INFRASTRUCTURE_SLUGS.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  
  const titles: Record<InfrastructureSlug, string> = {
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
  
  return {
    title: `${titles[slug as InfrastructureSlug] || slug} - Grovyn Infrastructure`,
    description: `Enterprise-grade ${slug} infrastructure services and solutions by Grovyn`,
  };
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
