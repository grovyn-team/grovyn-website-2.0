"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <div className="bg-white">
      
      <section className="bg-black text-white pt-24 sm:pt-22 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 rounded-b-[2rem] sm:rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,_rgba(16,185,129,0.12)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 relative z-10">
          <div className="lg:w-[55%] space-y-8 sm:space-y-12 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.4rem] font-black leading-[1.1] sm:leading-[1.02] tracking-tighter px-2 sm:px-0">
                {t("title_line1")}
                <br />
                {t("title_line2")}{" "}
                <span className="text-[#10b981]">
                  {t("title_highlight")}
                  <br />
                  {t("title_highlight2")}
                </span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base lg:text-[1.1rem] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium px-2 sm:px-0">
                {t("subtitle")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start px-4 sm:px-0">
              <a
                href="#contact"
                className="bg-[#10b981] text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-black text-sm hover:bg-[#059669] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#10b981]/20 text-center"
              >
                {t("cta_primary")}
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center space-x-3 border border-white/20 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-black text-sm hover:bg-white/10 transition-all transform hover:-translate-y-1"
              >
                <span className="text-[#10b981]">{t("cta_secondary")}</span>
                <ArrowUpRight
                  size={20}
                  className="text-[#10b981] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>

          <div className="lg:w-[45%] w-full sm:w-[70%] md:w-[60%] relative mt-12 sm:mt-16 lg:mt-0 hidden sm:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="relative z-20 w-full h-full flex items-center justify-center">
                <div className="absolute top-[10%] left-0 w-[65%] aspect-[4/3] bg-[#0c0c0c] rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-float-slow opacity-90 scale-95">
                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/40" />
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/40" />
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/40" />
                      </div>
                      <div className="h-1.5 sm:h-2 w-10 sm:w-12 bg-emerald-500/20 rounded" />
                    </div>
                    <div className="h-12 sm:h-16 w-full bg-emerald-500/5 rounded-lg border border-emerald-500/10 flex items-end p-1.5 sm:p-2">
                      <div className="flex items-end space-x-0.5 sm:space-x-1 w-full h-full">
                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-emerald-500/30 rounded-t-sm"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 w-full bg-white/5 rounded" />
                      <div className="h-1.5 sm:h-2 w-2/3 bg-white/5 rounded" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-[25%] right-0 w-[80%] aspect-[16/10] bg-[#111] rounded-lg sm:rounded-xl border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-30 animate-float-mid">
                  <div className="w-full h-full p-3 sm:p-4 flex flex-col">
                    <div className="flex-grow bg-black rounded-md sm:rounded-lg border border-white/5 flex flex-col font-mono overflow-hidden">
                      <div className="bg-white/5 px-2 sm:px-3 py-1.5 sm:py-2 border-b border-white/5 flex items-center justify-between">
                        <span className="text-[8px] sm:text-[10px] text-gray-500">app-engine.tsx</span>
                        <span className="text-[8px] sm:text-[10px] text-emerald-500">Ready</span>
                      </div>
                      <div className="p-2 sm:p-4 space-y-1 sm:space-y-2 text-[7px] sm:text-[9px]">
                        <div className="flex space-x-1 sm:space-x-2">
                          <span className="text-purple-500">import</span>{" "}
                          <span className="text-blue-400">Grovyn</span>{" "}
                          <span className="text-purple-500">from</span>{" "}
                          <span className="text-emerald-300">&apos;@grovyn/core&apos;</span>;
                        </div>
                        <div className="flex space-x-1 sm:space-x-2">
                          <span className="text-purple-500">const</span>{" "}
                          <span className="text-yellow-400">deploy</span> ={" "}
                          <span className="text-blue-400">()</span> =&gt; {"{"}
                        </div>
                        <div className="pl-2 sm:pl-4 text-gray-500">// Engineering for scale...</div>
                        <div className="pl-2 sm:pl-4">
                          <span className="text-blue-400">Grovyn</span>.
                          <span className="text-yellow-400">initialize</span>({"{"}
                        </div>
                        <div className="pl-4 sm:pl-8">
                          reliability: <span className="text-orange-400">0.9999</span>,
                        </div>
                        <div className="pl-4 sm:pl-8">
                          performance: <span className="text-orange-400">&apos;ultra&apos;</span>
                        </div>
                        <div className="pl-2 sm:pl-4">{"});"}</div>
                        <div className="text-yellow-400">{"};"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[10%] right-[5%] w-[28%] sm:w-[30%] aspect-[9/19] bg-black rounded-[2rem] sm:rounded-[2.8rem] border-[3px] sm:border-[5px] border-[#222] shadow-[0_40px_80px_-20px_rgba(16,185,129,0.3)] z-40 overflow-hidden animate-float-fast">
                  <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-black">
                    <div className="h-5 sm:h-6 w-full flex items-center justify-center pt-1.5 sm:pt-2">
                      <div className="w-10 sm:w-12 h-3 sm:h-4 bg-black rounded-full border border-white/5" />
                    </div>
                    <div className="p-4 sm:p-5 space-y-4 sm:space-y-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-black text-emerald-500 text-xs">
                        G
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="h-3 sm:h-4 w-full bg-white/10 rounded-md" />
                        <div className="h-1.5 sm:h-2 w-3/4 bg-white/5 rounded-md" />
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-3 sm:pt-4">
                        <div className="aspect-square bg-emerald-500/10 rounded-lg sm:rounded-xl border border-emerald-500/10" />
                        <div className="aspect-square bg-white/5 rounded-lg sm:rounded-xl border border-white/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
