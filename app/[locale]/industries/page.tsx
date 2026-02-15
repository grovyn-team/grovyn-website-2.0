import IndustriesContent from "@/components/IndustriesContent";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("navbar");
  return pageMetadata({
    locale,
    pathSegment: "industries",
    title: `${t("industries")} | GROVYN`,
    description: "Industries we serve: healthcare, fintech, e-commerce, edtech, SaaS, and more.",
  });
}

export default function IndustriesPage() {
  return <IndustriesContent />;
}
