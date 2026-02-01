"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export default function FreeQuoteCTA() {
  const t = useTranslations("free_quote_cta");

  return (
    <section className="py-24 lg:py-32 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-6">
          <Clock className="w-4 h-4 text-[#10b981]" />
          <span className="text-sm font-bold text-[#10b981]">{t("badge")}</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-[#111] tracking-tight mb-4">
          {t("title_line1")}{" "}
          <span className="text-[#10b981]">{t("title_highlight")}</span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          {t("subtitle")}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          {[t("benefit1"), t("benefit2"), t("benefit3"), t("benefit4")].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#f9f9f9] border border-gray-100"
            >
              <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
              <span className="text-sm font-bold text-[#111]">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#10b981] text-black px-8 py-5 rounded-2xl font-black text-sm hover:bg-black hover:text-white transition-all shadow-lg shadow-[#10b981]/20"
          >
            {t("cta")}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-4">{t("hint")}</p>
        </div>
      </div>
    </section>
  );
}
