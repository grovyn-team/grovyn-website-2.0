import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import CareerDetailContent from "@/components/CareerDetailContent";

type Opening = { slug: string; title: string; type: string; team: string; description?: string };

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
