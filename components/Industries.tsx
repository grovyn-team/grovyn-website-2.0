"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const industryIds = ["healthcare", "finance", "ecommerce"] as const;
const industryImages: Record<string, string> = {
  healthcare: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
  finance: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
  ecommerce: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
};

export default function Industries() {
  const t = useTranslations("industries");
  const industries = useMemo(
    () =>
      industryIds.map((id) => ({
        id,
        title: t(`${id}.title`),
        location: t(`${id}.location`),
        areas: t.raw(`${id}.areas`) as string[],
        projects: t(`${id}.projects`),
        uptime: t(`${id}.uptime`),
        image: industryImages[id],
      })),
    [t]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const current = industries[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % industries.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);

  return (
    <section className="py-32 bg-white px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-[2px] bg-[#10b981]" />
              <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.3em]">
                {t("badge")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#111] tracking-tighter leading-none">
              {t("title_line1")}
              <br />
              {t("title_line2")} <span className="text-[#10b981]">{t("title_highlight")}</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] max-w-[200px]">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#f9f9f9] rounded-[4rem] p-8 lg:p-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
              <span className="text-[25rem] font-black uppercase tracking-tighter">IMPACT</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="relative rounded-[3rem] overflow-hidden aspect-[1.1/1] border-[8px] border-white shadow-2xl transition-all duration-700">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-8 left-8">
                      <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#111]">
                          {current.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-5xl lg:text-7xl font-black text-[#111] leading-[0.9] tracking-tighter">
                      {current.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {current.areas.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-4 group cursor-default"
                      >
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[10px] font-black text-gray-400 group-hover:text-[#10b981] group-hover:border-[#10b981] transition-all">
                          0{i + 1}
                        </div>
                        <span className="text-gray-600 font-bold text-sm lg:text-base group-hover:text-[#111] transition-colors">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-8">
                    <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-sm">
                      <div className="text-4xl font-black text-[#111] mb-1">
                        {current.projects}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                        {t("total_deployments")}
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-sm">
                      <div className="text-4xl font-black text-[#10b981] mb-1">
                        {current.uptime}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                        {t("system_availability")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 px-8">
            <div className="flex space-x-2">
              {industries.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    activeIndex === i ? "w-12 bg-[#10b981]" : "w-4 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prev}
                className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-[#111] hover:bg-black hover:text-white transition-all shadow-sm bg-white"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-[#111] hover:bg-black hover:text-white transition-all shadow-sm bg-white"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
