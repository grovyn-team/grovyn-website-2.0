import { getTranslations } from "next-intl/server";
import Industries from "@/components/Industries";

export default async function SolutionsIndustriesPage() {
  const t = await getTranslations("solutions_industries");
  return (
    <div className="bg-white">
      <section className="bg-black text-white pt-28 pb-24 px-6 lg:px-12 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,_rgba(16,185,129,0.12)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-8">
            {t("hero_badge")}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-6">
            {t("hero_title_line1")}{" "}
            <span className="text-[#10b981]">{t("hero_title_highlight")}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("hero_subtitle")}
          </p>
        </div>
      </section>
      <Industries />
    </div>
  );
}
