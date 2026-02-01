"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface Capability {
  id: string;
  title: string;
  description: string;
}

const leftIds = ["custom-soft", "web-cloud", "mobile-app", "product-eng", "cloud-infra"];
const rightIds = ["uiux", "quality-eng", "security", "api-sys", "support"];

function CapabilityItem({
  cap,
  isHovered,
  onHover,
}: {
  cap: Capability;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}) {
  return (
    <div
      onMouseEnter={() => onHover(cap.id)}
      onMouseLeave={() => onHover(null)}
      className={`group relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] px-5 py-3 rounded-2xl border will-change-transform ${
        isHovered
          ? "bg-[#f0fdf9] border-[#10b981]/10 shadow-[0_15px_40px_-20px_rgba(16,185,129,0.1)] translate-x-1"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between pointer-events-none">
        <h4
          className={`text-sm lg:text-[15px] font-bold tracking-tight transition-colors duration-500 ease-out ${
            isHovered ? "text-[#111]" : "text-gray-400 group-hover:text-gray-800"
          }`}
        >
          {cap.title}
        </h4>
        <div
          className={`transition-all duration-500 ease-out ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <CheckCircle2 size={14} className="text-[#10b981] shrink-0" />
        </div>
      </div>
      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isHovered ? "grid-rows-[1fr] mt-1.5 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`text-gray-500 text-[12px] leading-relaxed max-w-md font-medium pb-1.5 transition-all duration-500 ease-out ${
              isHovered ? "translate-y-0 opacity-100 delay-[100ms]" : "-translate-y-1 opacity-0"
            }`}
          >
            {cap.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const t = useTranslations("capabilities");
  const leftCaps = (t.raw("left") as { title: string; description: string }[]) ?? [];
  const rightCaps = (t.raw("right") as { title: string; description: string }[]) ?? [];
  const leftCapabilities: Capability[] = leftCaps.map((item, i) => ({
    id: leftIds[i] ?? `left-${i}`,
    title: item.title,
    description: item.description,
  }));
  const rightCapabilities: Capability[] = rightCaps.map((item, i) => ({
    id: rightIds[i] ?? `right-${i}`,
    title: item.title,
    description: item.description,
  }));
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="pt-24 pb-4 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          <div className="lg:w-3/5">
            <h2 className="text-3xl lg:text-[3.4rem] font-black leading-[0.96] text-[#111] tracking-tighter">
              {t("title_line1")} 
              {t("title_line2")}
              {t("title_line3")} <span className="text-[#10b981]">{t("title_highlight")}</span> 
              {t("title_line4")} 
              {t("title_line5")}
            </h2>
          </div>
          <div className="lg:w-2/5 lg:pt-8 text-right">
            <p className="text-gray-400 text-[10px] font-black leading-normal uppercase tracking-[0.25em] max-w-[280px] ml-auto">
              {t("subtext")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0.5 items-start min-h-[380px]">
          <div className="flex flex-col space-y-0.5">
            {leftCapabilities.map((cap) => (
              <CapabilityItem
                key={cap.id}
                cap={cap}
                isHovered={hoveredId === cap.id}
                onHover={setHoveredId}
              />
            ))}
          </div>
          <div className="flex flex-col space-y-0.5">
            {rightCapabilities.map((cap) => (
              <CapabilityItem
                key={cap.id}
                cap={cap}
                isHovered={hoveredId === cap.id}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
