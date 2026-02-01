"use client";

import { useTranslations } from "next-intl";
import { Zap, DollarSign, Target, Lock, Globe, Shield } from "lucide-react";

const icons = [Zap, DollarSign, Target, Lock, Globe, Shield];

type WhyItem = { title: string; description: string };

export default function WhyGrovyn() {
  const t = useTranslations("why_grovyn");
  const items = (t.raw("items") as WhyItem[]) ?? [];

  return (
    <section className="py-24 lg:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#10b981] font-bold text-xs uppercase tracking-[0.2em]">
            {t("badge")}
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-[#111] tracking-tighter mt-4">
            {t("title_line1")} <span className="text-[#10b981]">{t("title_highlight")}</span>{" "}
            {t("title_line2")} <span className="text-[#10b981]">{t("title_highlight2")}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Zap;
            return (
              <div
                key={index}
                className="p-6 rounded-[2rem] bg-[#f9f9f9] border border-gray-100 hover:border-[#10b981]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#10b981]" />
                </div>
                <h3 className="text-lg font-black text-[#111] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
