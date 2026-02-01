"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Metrics() {
  const t = useTranslations("metrics");
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-black text-[#10b981] mb-6 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-[13px] leading-relaxed font-medium">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div className="bg-[#F6F6F6] p-10 rounded-[2.5rem] flex flex-col justify-between border border-gray-50">
          <div>
            <h3 className="text-5xl font-black mb-4">25+</h3>
            <p className="text-gray-500 font-bold text-xs uppercase tracking-wider">
              {t("deliveries")}
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <h4 className="text-lg font-bold">{t("pricing_title")}</h4>
            <Link
              href="#contact"
              className="w-full bg-black text-white px-6 py-4 rounded-full flex justify-between items-center text-sm font-bold group hover:bg-[#10b981] transition-colors"
            >
              <span>{t("get_quote")}</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="bg-[#F6F6F6] p-10 rounded-[2.5rem] border border-gray-50">
          <h4 className="text-lg font-bold mb-6 leading-tight">
            {t("global_delivery")}
          </h4>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-3 aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-1 relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=150"
                alt="Meeting"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=150"
                alt="Collaboration"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=150"
                alt="Office"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#F6F6F6] p-10 rounded-[2.5rem] flex-1 border border-gray-50">
            <h3 className="text-4xl font-black mb-3">{t("mvp_value")}</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
              {t("mvp_delivery")}
            </p>
          </div>
          <div className="bg-[#F6F6F6] p-10 rounded-[2.5rem] flex-1 border border-gray-50">
            <h3 className="text-4xl font-black mb-3">{t("quality_value")}</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
              {t("quality_guarantee")}
            </p>
          </div>
        </div>

        <div className="bg-[#F6F6F6] p-10 rounded-[2.5rem] flex items-center border border-gray-50">
          <h3 className="text-3xl font-black leading-[1.2] text-[#111]">
            {t("ownership")}
          </h3>
        </div>
      </div>

      <div className="overflow-hidden border-y border-gray-100 py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center mx-10 text-[10px] font-black uppercase tracking-[0.25em] text-[#111]"
            >
              <div className="w-2 h-2 bg-[#10b981] rounded-full mr-4" />
              {t("ticker")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
