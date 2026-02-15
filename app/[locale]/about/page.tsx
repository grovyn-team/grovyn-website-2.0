import AboutContent from "@/components/AboutContent";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("about");
  return pageMetadata({
    locale,
    pathSegment: "about",
    title: `${t("badge")} | GROVYN`,
    description: t("subtitle"),
  });
}

export default function AboutPage() {
  return <AboutContent />;
}
