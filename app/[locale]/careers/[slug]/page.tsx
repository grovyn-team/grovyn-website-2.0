import { notFound } from "next/navigation";
import CareerDetailContent from "@/components/CareerDetailContent";
import { pageMetadata } from "@/lib/seo";
import { getJobOpeningBySlugServer } from "@/lib/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const opening = await getJobOpeningBySlugServer(slug, locale);
  const title = opening ? `${opening.title} | GROVYN Careers` : "Careers | GROVYN";
  const description = opening?.description ?? "Careers at GROVYN.";
  return pageMetadata({
    locale,
    pathSegment: `careers/${slug}`,
    title,
    description,
  });
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const opening = await getJobOpeningBySlugServer(slug, locale);
  if (!opening) notFound();
  return <CareerDetailContent slug={slug} />;
}
