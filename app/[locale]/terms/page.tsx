import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TermsPage() {
  const t = await getTranslations("terms_page");
  const tNav = await getTranslations("navbar");
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-[#111] tracking-tight mb-8">
          {tNav("terms")}
        </h1>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
          <p>{t("intro")}</p>
          <p>{t("contact")}</p>
        </div>
      </div>
    </main>
  );
}
