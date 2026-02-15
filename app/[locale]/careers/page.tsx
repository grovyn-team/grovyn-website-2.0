import CareersContent from "@/components/CareersContent";
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
    pathSegment: "careers",
    title: `${t("careers")} | GROVYN`,
    description: "Careers at GROVYN. Join our software engineering team.",
  });
}

export default function CareersPage() {
  return <CareersContent />;
}
