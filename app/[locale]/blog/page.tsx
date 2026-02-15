import BlogContent from "@/components/BlogContent";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  return pageMetadata({
    locale,
    pathSegment: "blog",
    title: `${t("badge")} | GROVYN`,
    description: "Insights on software engineering, product development, and technology.",
  });
}

export default function BlogPage() {
  return <BlogContent />;
}
