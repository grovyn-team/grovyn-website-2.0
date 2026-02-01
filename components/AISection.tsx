"use client";

import { useTranslations } from "next-intl";
import { Brain } from "lucide-react";

export default function AISection() {
  const t = useTranslations("ai_section");

  return (
    <section className="py-24 lg:py-32 bg-[#f8f9fa] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="w-16 h-16 rounded-[2rem] bg-[#10b981]/10 flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-[#10b981]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#111] tracking-tight mb-6">
              {t("title_line1")}{" "}
              <span className="text-[#10b981]">{t("title_highlight")}</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">{t("para1")}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{t("para2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
