import AutomationsContent from "@/components/AutomationsContent";
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
    pathSegment: "automations",
    title: `${t("automations")} | GROVYN`,
    description: "AI automations and workflow solutions for modern teams.",
  });
}

export default function AutomationsPage() {
  return <AutomationsContent />;
}
