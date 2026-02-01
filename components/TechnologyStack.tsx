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
    <section className="relative py-20 lg:py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Root Node */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-gray-200 shadow-md relative z-10">
            <span className="w-3 h-3 rounded-full bg-purple-500 shrink-0" aria-hidden />
            <span className="text-base lg:text-lg font-semibold text-gray-900">{rootTitle}</span>
          </div>
        </div>

        {/* Individual smooth curved lines from parent to each category */}
        <div className="relative h-32 w-full" aria-hidden="true">
          <svg 
            viewBox="0 0 1000 120" 
            className="absolute inset-0 w-full h-full" 
            preserveAspectRatio="none"
          >
            {categories.map((_, i) => {
              const totalCategories = categories.length;
              const spacing = 1000 / (totalCategories + 1);
              const xEnd = spacing * (i + 1);
              const xStart = 500; // Center (below root node)
              const yStart = 0;
              const yEnd = 120;
              
              // Smooth curve control points
              const controlX1 = xStart;
              const controlY1 = yStart + 40;
              const controlX2 = xEnd;
              const controlY2 = yEnd - 40;
              
              return (
                <path
                  key={i}
                  d={`M ${xStart} ${yStart} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${xEnd} ${yEnd}`}
                  fill="none"
                  stroke={BRANCH_COLORS[i].line}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              );
            })}
          </svg>
        </div>

        {/* Category Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8">
          {categories.map((category, index) => {
            const style = BRANCH_COLORS[index];
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Category Header Node */}
                <div
                  className={`w-full max-w-[240px] flex items-center gap-2.5 px-5 py-3.5 rounded-full ${style.bg} border-2 ${style.border} shadow-sm`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${style.dot} shrink-0`}
                    aria-hidden
                  />
                  <span className="text-sm font-semibold text-gray-900 truncate">
                    {category.title}
                  </span>
                </div>
                
                {/* Technology Items with connecting lines */}
                <div className="flex flex-col w-full max-w-[240px]">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {/* Vertical line before item */}
                      <div
                        className="w-0.5 h-3"
                        style={{ backgroundColor: style.line }}
                        aria-hidden
                      />
                      
                      {/* Item node */}
                      <div
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border ${style.border} shadow-sm transition-all hover:shadow-md hover:scale-105`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${style.dot} shrink-0`}
                          aria-hidden
                        />
                        <span className="text-xs lg:text-sm font-medium text-gray-700 truncate">
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
    </section>
  );
}