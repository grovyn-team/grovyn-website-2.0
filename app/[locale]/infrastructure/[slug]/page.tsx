import { notFound } from "next/navigation";
import { INFRASTRUCTURE_SLUGS, type InfrastructureSlug } from "@/lib/infrastructure";
import InfrastructureDetailContent from "@/components/InfrastructureDetailContent";

export default async function InfrastructurePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  if (!INFRASTRUCTURE_SLUGS.includes(slug as InfrastructureSlug)) notFound();
  return <InfrastructureDetailContent slug={slug as InfrastructureSlug} />;
}
