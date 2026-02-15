import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Capabilities from "@/components/Capabilities";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import TechStackFlow from "@/components/TechnologyStack";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("meta");
  return {
    ...pageMetadata({
      locale,
      pathSegment: "",
      title: t("title"),
      description: t("description"),
    }),
  };
}

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <Hero />
      <Industries />
      <TechStackFlow/>
      <Capabilities />
      <Metrics />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
