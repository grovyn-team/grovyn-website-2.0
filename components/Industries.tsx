"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Heart,
  CreditCard,
  ShoppingCart,
  Shield,
  Activity,
  Zap,
  Database,
  BarChart3,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

const industryIds = ["healthcare", "finance", "ecommerce"] as const;
const industryImages: Record<string, string> = {
  healthcare:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
  finance:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
  ecommerce:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
};

const watermarks: Record<string, string> = {
  healthcare: "HEALTHCARE",
  finance: "FINANCE",
  ecommerce: "COMMERCE",
};

type IndustryId = (typeof industryIds)[number];

function BlueprintIllustration({
  id,
  isActive,
}: {
  id: IndustryId;
  isActive: boolean;
}) {
  const icons: Record<IndustryId, React.ReactNode> = {
    healthcare: <Heart size={20} strokeWidth={1.5} className="sm:w-7 sm:h-7" />,
    finance: <CreditCard size={20} strokeWidth={1.5} className="sm:w-7 sm:h-7" />,
    ecommerce: <ShoppingCart size={20} strokeWidth={1.5} className="sm:w-7 sm:h-7" />,
  };
  const satelliteIcons: Record<IndustryId, React.ReactNode[]> = {
    healthcare: [
      <Heart size={7} key="1" className="sm:w-[10px] sm:h-[10px]" />,
      <Shield size={7} key="2" className="sm:w-[10px] sm:h-[10px]" />,
      <Activity size={7} key="3" className="sm:w-[10px] sm:h-[10px]" />,
      <Heart size={7} key="4" className="sm:w-[10px] sm:h-[10px]" />,
    ],
    finance: [
      <BarChart3 size={7} key="1" className="sm:w-[10px] sm:h-[10px]" />,
      <Globe size={7} key="2" className="sm:w-[10px] sm:h-[10px]" />,
      <Zap size={7} key="3" className="sm:w-[10px] sm:h-[10px]" />,
      <Shield size={7} key="4" className="sm:w-[10px] sm:h-[10px]" />,
    ],
    ecommerce: [
      <Database size={7} key="1" className="sm:w-[10px] sm:h-[10px]" />,
      <Zap size={7} key="2" className="sm:w-[10px] sm:h-[10px]" />,
      <Globe size={7} key="3" className="sm:w-[10px] sm:h-[10px]" />,
      <Shield size={7} key="4" className="sm:w-[10px] sm:h-[10px]" />,
    ],
  };

  return (
    <div
      className={`relative w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center transition-all duration-700 ${isActive ? "opacity-100 scale-110" : "opacity-80 grayscale group-hover:opacity-80 group-hover:grayscale-0"}`}
    >
      <div
        className={`absolute inset-0 border-[1px] sm:border-[1.2px] border-dashed rounded-full transition-all duration-700 ${isActive ? "border-[#10b981] animate-spin-slow" : "border-gray-200"}`}
      />
      <div
        className={`absolute inset-1 sm:inset-1.5 border-[0.5px] sm:border-[1px] border-dashed rounded-full transition-all duration-700 opacity-30 ${isActive ? "border-[#10b981] animate-spin-mid-reverse" : "border-transparent"}`}
      />
      <div
        className={`w-[72%] h-[72%] rounded-full flex flex-col items-center justify-center border-[1.5px] sm:border-2 transition-all duration-700 ${isActive ? "bg-white border-[#10b981]/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]" : "bg-white border-gray-100"}`}
      >
        <div
          className={`transition-all duration-700 ${isActive ? "text-[#10b981] scale-110" : "text-gray-300"}`}
        >
          {icons[id]}
        </div>
      </div>
      {isActive &&
        satelliteIcons[id].map((Icon, idx) => {
          const angles = [45, 135, 225, 315];
          const angle = angles[idx];
          return (
            <div
              key={idx}
              className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shadow-sm z-30"
              style={{
                transform: `rotate(${angle}deg) translate(18px) rotate(-${angle}deg)`,
              }}
            >
              {Icon}
            </div>
          );
        })}
    </div>
  );
}

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
        watermark: watermarks[id],
      })),
    [t]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowStart, setWindowStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const current = industries[activeIndex];

  const visibleCount = Math.min(4, industries.length);
  const visibleIndustries = industries.slice(windowStart, windowStart + visibleCount);

  const next = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      const nextIdx = (activeIndex + 1) % industries.length;
      setActiveIndex(nextIdx);
      setWindowStart((start) => {
        if (nextIdx >= start + visibleCount) return nextIdx - visibleCount + 1;
        if (nextIdx < start) return nextIdx;
        return start;
      });
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  }, [industries.length, activeIndex, visibleCount]);

  const prev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      const prevIdx = (activeIndex - 1 + industries.length) % industries.length;
      setActiveIndex(prevIdx);
      setWindowStart((start) => {
        if (prevIdx < start) return prevIdx;
        if (prevIdx >= start + visibleCount) return prevIdx - visibleCount + 1;
        return start;
      });
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  }, [industries.length, activeIndex, visibleCount]);

  useEffect(() => {
    setWindowStart((start) => {
      if (activeIndex < start) return activeIndex;
      if (activeIndex >= start + visibleCount) return activeIndex - visibleCount + 1;
      return start;
    });
  }, [activeIndex, visibleCount]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      id="industries"
      className="py-8 sm:py-12 lg:py-16 bg-white px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-[#10b981] font-black text-lg sm:text-xl lg:text-xl italic tracking-tight uppercase">
            {t("badge")}
          </h2>
        </div>

        <div className="relative bg-[#f4f6f8] rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-6 md:p-8 lg:p-10 overflow-hidden border border-gray-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)] min-h-[420px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035] overflow-hidden">
            <h1 
              key={current.watermark}
              className="text-[3rem] sm:text-[8rem] md:text-[10rem] lg:text-[16rem] font-black tracking-tighter text-black whitespace-nowrap leading-none transition-opacity duration-700"
              style={{ opacity: isTransitioning ? 0 : 1 }}
            >
              {current.watermark}
            </h1>
          </div>

          <div className={`flex flex-col lg:flex-row items-stretch gap-3 sm:gap-6 lg:gap-12 relative z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-full lg:w-[46%] relative">
              <div className="rounded-[1rem] overflow-hidden lg:aspect-[1.15/1] aspect-[1.15/1] sm:aspect-[3.5/2] shadow-xl relative border-2 sm:border-4 border-white/40 group">
                <div className="relative w-full h-full">
                  <Image
                    key={current.id}
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover grayscale-[0.1] transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div 
                    key={`icon-${current.id}`}
                    className="relative p-3 sm:p-6 rounded-full bg-[#10b981]/5 backdrop-blur-md border border-[#10b981]/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                  >
                    <div className="text-[#10b981] scale-[1.3] sm:scale-[2.2] transition-all duration-700">
                      {current.id === "healthcare" ? (
                        <Heart size={24} className="sm:w-9 sm:h-9" />
                      ) : current.id === "finance" ? (
                        <CreditCard size={24} className="sm:w-9 sm:h-9" />
                      ) : (
                        <ShoppingCart size={24} className="sm:w-9 sm:h-9" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 sm:bottom-6 lg:bottom-8 left-0 w-full px-3 sm:px-6 lg:px-8">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="h-[2px] w-3 sm:w-8 bg-[#10b981]" />
                    <h4 
                      key={`location-${current.id}`}
                      className="text-white font-black text-[7px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase leading-tight drop-shadow-xl"
                    >
                      {current.location}
                    </h4>
                  </div>
                </div>
                <div className="absolute bottom-2 sm:bottom-6 right-2 sm:right-6 opacity-40">
                  <div className="text-white text-sm sm:text-2xl">✦</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[54%] flex flex-col justify-center space-y-2 sm:space-y-6 lg:space-y-8">
              <div className="space-y-1 sm:space-y-3">
                <h3 
                  key={`title-${current.id}`}
                  className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-[0.9] tracking-tighter"
                >
                  {current.title}
                </h3>
                <p className="text-[#111] font-black text-xs sm:text-lg tracking-tight opacity-95">
                  {t("core_areas_label")}
                </p>
              </div>
              <div className="space-y-1.5 sm:space-y-4 min-h-[80px] sm:min-h-[200px]">
                {current.areas.map((area, i) => (
                  <div
                    key={`${current.id}-area-${i}`}
                    className="flex items-center space-x-2 sm:space-x-4 group"
                  >
                    <span className="text-sm sm:text-xl font-black text-[#111] w-3 sm:w-6 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-500 font-bold text-[11px] sm:text-base md:text-lg leading-tight group-hover:text-[#111] transition-colors">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-0 sm:pt-4">
                <div className="bg-white rounded-lg sm:rounded-2xl p-2.5 sm:p-6 flex-1 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.07)] border border-white/60 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 group">
                  <div 
                    key={`projects-${current.id}`}
                    className="text-lg sm:text-3xl md:text-4xl font-black text-[#111] mb-0 sm:mb-1 group-hover:text-[#10b981] transition-colors"
                  >
                    {current.projects}
                  </div>
                  <div className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                    {t("total_deployments")}
                  </div>
                </div>
                <div className="bg-white rounded-lg sm:rounded-2xl p-2.5 sm:p-6 flex-1 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.07)] border border-white/60 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 group">
                  <div 
                    key={`uptime-${current.id}`}
                    className="text-lg sm:text-3xl md:text-4xl font-black text-[#111] mb-0 sm:mb-1 group-hover:text-[#10b981] transition-colors"
                  >
                    {current.uptime}
                  </div>
                  <div className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                    {t("system_availability")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[-10px] sm:mt-[-15px] lg:mt-[-20px] flex flex-col items-center justify-center relative z-10">
          <div className="flex items-center justify-center gap-1 sm:gap-4 md:gap-6">
            <button
              type="button"
              onClick={prev}
              className="relative z-0 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#10b981] hover:border-[#10b981]/40 hover:bg-[#10b981]/5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(16,185,129,0.15)] transition-all duration-300 flex-shrink-0"
              aria-label="Previous industry"
            >
              <ChevronLeft size={16} strokeWidth={2.5} className="sm:w-6 sm:h-6" />
            </button>
            <div className="relative z-10 flex items-center space-x-1 sm:space-x-3 md:space-x-5">
              {visibleIndustries.map((ind) => {
                const idx = industries.indexOf(ind);
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative z-10 w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-2xl flex items-center justify-center transition-all duration-500 border-2 overflow-visible ${activeIndex === idx ? "border-[#10b981] shadow-[0_8px_24px_-4px_rgba(16,185,129,0.25),0_0_0_1px_rgba(16,185,129,0.1)] scale-105 bg-[#10b981]/5" : "border-gray-300 hover:border-gray-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"}`}
                    aria-label={`Go to ${ind.title}`}
                    aria-current={activeIndex === idx ? "true" : undefined}
                  >
                    <BlueprintIllustration
                      id={ind.id}
                      isActive={activeIndex === idx}
                    />
                    {activeIndex === idx && (
                      <div className="absolute inset-0 border-4 border-[#10b981]/10 rounded-lg sm:rounded-2xl animate-pulse pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={next}
              className="relative z-0 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#10b981] hover:border-[#10b981]/40 hover:bg-[#10b981]/5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(16,185,129,0.15)] transition-all duration-300 flex-shrink-0"
              aria-label="Next industry"
            >
              <ChevronRight size={16} strokeWidth={2.5} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
