"use client";

import { useTranslations } from "next-intl";

const BRANCH_COLORS = [
  { border: "border-blue-200", dot: "bg-blue-500", bg: "bg-blue-50", line: "#60a5fa" },
  { border: "border-green-200", dot: "bg-green-500", bg: "bg-green-50", line: "#4ade80" },
  { border: "border-purple-200", dot: "bg-purple-500", bg: "bg-purple-50", line: "#a78bfa" },
  { border: "border-orange-200", dot: "bg-orange-500", bg: "bg-orange-50", line: "#fb923c" },
  { border: "border-teal-200", dot: "bg-teal-500", bg: "bg-teal-50", line: "#5eead4" },
];

type TechCategory = { title: string; items: string[] };

export default function TechnologyStack() {
  const t = useTranslations("technology_stack");
  const rootTitle = t("root_label");
  const categories = (t.raw("categories") as TechCategory[]) ?? [];

  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center mb-2">
          <div className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/80 backdrop-blur-xl border-2 border-purple-200/50 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shrink-0 shadow-lg shadow-purple-500/50" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75" />
            </span>
            <span className="relative text-base lg:text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{rootTitle}</span>
          </div>
        </div>

        <div className="relative h-32 w-full hidden min-[1100px]:block" aria-hidden="true">
          <svg 
            viewBox="0 0 1000 120" 
            className="absolute inset-0 w-full h-full" 
            preserveAspectRatio="none"
          >
            <defs>
              {categories.map((_, i) => (
                <linearGradient key={i} id={`desktop-gradient-${i}`} x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor={BRANCH_COLORS[i].line} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={BRANCH_COLORS[i].line} stopOpacity="0.5" />
                </linearGradient>
              ))}
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {categories.map((_, i) => {
              const totalCategories = categories.length;
              const spacing = 1000 / (totalCategories + 1);
              const xEnd = spacing * (i + 1);
              const xStart = 500;
              const yStart = 0;
              const yEnd = 120;
              
              const isCenterBranch = Math.abs(xEnd - xStart) < 1;
              const controlX1 = xStart;
              const controlY1 = yStart + 40;
              const controlX2 = xEnd;
              const controlY2 = yEnd - 40;
              const pathD = isCenterBranch
                ? `M ${xStart} ${yStart} L ${xEnd} ${yEnd}`
                : `M ${xStart} ${yStart} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${xEnd} ${yEnd}`;
              
              return (
                <g key={i}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={`url(#desktop-gradient-${i})`}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0,1000"
                      to="1000,0"
                      dur="2s"
                      fill="freeze"
                    />
                  </path>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="hidden min-[1100px]:grid grid-cols-5 gap-6 xl:gap-8">
          {categories.map((category, index) => {
            const style = BRANCH_COLORS[index];
            return (
              <div key={index} className="flex flex-col items-center group">
                <div
                  className={`w-full flex items-center gap-2.5 px-5 py-3.5 rounded-2xl ${style.bg} border-2 ${style.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm bg-opacity-80 relative overflow-hidden will-change-transform`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <span
                    className={`relative w-2.5 h-2.5 rounded-full ${style.dot} shrink-0 shadow-lg`}
                    aria-hidden
                  >
                    <span className={`absolute inset-0 rounded-full ${style.dot} opacity-50 group-hover:animate-ping`} />
                  </span>
                  <span className="relative text-sm font-bold text-gray-900 truncate">
                    {category.title}
                  </span>
                </div>
                
                <div className="flex flex-col w-full items-center">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center w-full">
                      <div
                        className="w-0.5 h-5 shrink-0"
                        style={{ backgroundColor: style.line }}
                        aria-hidden
                      />
                      
                      <div
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-sm border ${style.border} shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 relative overflow-hidden group/item will-change-transform`}
                      >
                        <div className={`absolute inset-0 ${style.bg} opacity-0 group-hover/item:opacity-50 transition-opacity duration-300`} />
                        
                        <span
                          className={`relative w-2 h-2 rounded-full ${style.dot} shrink-0 shadow-sm`}
                          aria-hidden
                        />
                        <span className="relative text-sm font-medium text-gray-700 group-hover/item:text-gray-900 truncate transition-colors">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden min-[640px]:block min-[1100px]:hidden mt-8">
          <div className="relative h-45 w-full mb-4" aria-hidden="true">
            <svg 
              viewBox="0 0 1000 160" 
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {categories.map((_, i) => (
                  <linearGradient key={i} id={`tablet-gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={BRANCH_COLORS[i].line} stopOpacity="1" />
                    <stop offset="50%" stopColor={BRANCH_COLORS[i].line} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={BRANCH_COLORS[i].line} stopOpacity="0.6" />
                  </linearGradient>
                ))}
                <filter id="tablet-glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <line
                x1="500"
                y1="0"
                x2="500"
                y2="50"
                stroke="url(#tablet-gradient-2)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#tablet-glow)"
              />
              
              {categories.map((_, i) => {
                const totalCategories = categories.length;
                const spacing = 800 / (totalCategories + 1);
                const xEnd = 100 + spacing * (i + 1);
                const xStart = 500;
                const yStart = 50;
                const yEnd = 160;
                
                const isCenterBranch = Math.abs(xEnd - xStart) < 1;
                const controlX1 = xStart;
                const controlY1 = yStart + 40;
                const controlX2 = xEnd;
                const controlY2 = yEnd - 40;
                const pathD = isCenterBranch
                  ? `M ${xStart} ${yStart} L ${xEnd} ${yEnd}`
                  : `M ${xStart} ${yStart} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${xEnd} ${yEnd}`;
                
                return (
                  <g key={i}>
                    <path
                      d={pathD}
                      fill="none"
                      stroke={`url(#tablet-gradient-${i})`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      filter="url(#tablet-glow)"
                    />
                  </g>
                );
              })}
              
              <circle cx="500" cy="50" r="6" fill="#a78bfa" opacity="1" filter="url(#tablet-glow)">
                <animate attributeName="r" values="6;7.5;6" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.8;1" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {categories.map((_, i) => {
                const totalCategories = categories.length;
                const spacing = 800 / (totalCategories + 1);
                const xEnd = 100 + spacing * (i + 1);
                
                return (
                  <g key={i}>
                    <circle
                      cx={xEnd}
                      cy="160"
                      r="5"
                      fill={BRANCH_COLORS[i].line}
                      opacity="0.3"
                    />
                    <circle
                      cx={xEnd}
                      cy="160"
                      r="4"
                      fill={BRANCH_COLORS[i].line}
                      opacity="1"
                      filter="url(#tablet-glow)"
                    >
                      <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                      <animate attributeName="r" values="4;5;4" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                    </circle>
                  </g>
                );
              })}
            </svg>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category, index) => {
              const style = BRANCH_COLORS[index];
              return (
                <div key={index} className="flex flex-col items-center group" style={{ width: 'fit-content' }}>
                  <div
                    className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl ${style.bg} border-2 ${style.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] whitespace-nowrap backdrop-blur-sm bg-opacity-80 relative overflow-hidden will-change-transform`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <span
                      className={`relative w-2.5 h-2.5 rounded-full ${style.dot} shrink-0 shadow-lg`}
                      aria-hidden
                    >
                      <span className={`absolute inset-0 rounded-full ${style.dot} opacity-50 group-hover:animate-ping`} />
                    </span>
                    <span className="relative text-sm font-bold text-gray-900">
                      {category.title}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center" style={{ width: 'fit-content' }}>
                    {category.items.map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div
                          className="w-0.5 h-5 shrink-0"
                          style={{ backgroundColor: style.line }}
                          aria-hidden
                        />
                        
                        <div
                          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-sm border ${style.border} shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 whitespace-nowrap relative overflow-hidden group/item will-change-transform`}
                        >
                          <div className={`absolute inset-0 ${style.bg} opacity-0 group-hover/item:opacity-50 transition-opacity duration-300`} />
                          
                          <span
                            className={`relative w-2 h-2 rounded-full ${style.dot} shrink-0 shadow-sm`}
                            aria-hidden
                          />
                          <span className="relative text-sm font-medium text-gray-700 group-hover/item:text-gray-900 transition-colors">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex min-[640px]:hidden flex-col items-stretch mt-8 px-4 gap-6">
          <div className="flex justify-center">
            <div className="relative w-1 h-12 rounded-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent" aria-hidden>
              <div className="absolute inset-0 bg-purple-500 blur-md opacity-40 animate-pulse" />
            </div>
          </div>
          
          {categories.map((category, index) => {
            const style = BRANCH_COLORS[index];
            const isLast = index === categories.length - 1;
            
            return (
              <div key={index} className="flex flex-col">
                <div className={`rounded-2xl ${style.bg} border-2 ${style.border} shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-90`}>
                  <div className="relative px-4 py-4 border-b-2 border-current" style={{ borderColor: BRANCH_COLORS[index].line }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
                    <div className="relative flex items-center gap-3">
                      <div className="relative">
                        <span
                          className={`w-3.5 h-3.5 rounded-full ${style.dot} block shadow-lg`}
                          aria-hidden
                        />
                        <span className={`absolute inset-0 w-3.5 h-3.5 rounded-full ${style.dot} animate-ping opacity-75`} aria-hidden />
                      </div>
                      <span className="text-base font-bold text-gray-900">
                        {category.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-3 grid grid-cols-2 gap-2">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="group relative bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden will-change-transform"
                      >
                        <div className={`absolute inset-0 ${style.bg} opacity-0 group-hover:opacity-40 group-active:opacity-60 transition-opacity duration-300`} />
                        
                        <div className="relative flex items-center gap-2 min-w-0">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${style.dot} shrink-0 shadow-sm`}
                            aria-hidden
                          />
                          <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors truncate">
                            {item}
                          </span>
                        </div>
                        
                        <div 
                          className="absolute top-0 right-0 w-8 h-8 opacity-10"
                          style={{
                            background: `radial-gradient(circle at top right, ${BRANCH_COLORS[index].line}, transparent)`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {!isLast && (
                  <div className="flex justify-center py-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="relative w-0.5 h-4 rounded-full bg-gradient-to-b from-purple-300 to-purple-200">
                        <div className="absolute inset-0 bg-purple-300 blur-sm opacity-30" />
                      </div>
                      <div 
                        className="w-2 h-2 rounded-full opacity-60"
                        style={{ backgroundColor: BRANCH_COLORS[Math.min(index + 1, BRANCH_COLORS.length - 1)].line }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
