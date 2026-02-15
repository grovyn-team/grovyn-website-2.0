import PortfolioContent from "@/components/PortfolioContent";
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
    pathSegment: "portfolio",
    title: `${t("portfolio")} | GROVYN`,
    description: "Our work: web applications, mobile apps, and software platforms we've built.",
  });
}

export default function PortfolioPage() {
  return <PortfolioContent />;
}
