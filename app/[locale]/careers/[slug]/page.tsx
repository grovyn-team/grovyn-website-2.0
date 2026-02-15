import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import CareerDetailContent from "@/components/CareerDetailContent";
import { pageMetadata } from "@/lib/seo";

type Opening = { slug: string; title: string; type: string; team: string; description?: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("careers");
  const openings = (t.raw("openings") as Opening[]) ?? [];
  const opening = openings.find((o) => o.slug === slug);
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
  const { slug } = await params;
  const t = await getTranslations("careers");
  const openings = (t.raw("openings") as Opening[]) ?? [];
  const valid = openings.some((o) => o.slug === slug);
  if (!valid) notFound();
  return <CareerDetailContent slug={slug} />;
}
