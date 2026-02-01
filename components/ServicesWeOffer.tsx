"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Briefcase, ShoppingBag, Palette, ArrowUpRight } from "lucide-react";

const CARD_ICONS = [Briefcase, ShoppingBag, Palette];

type CardData = { title: string; description: string; tags: string[] };

export default function ServicesWeOffer() {
  const t = useTranslations("services_we_offer");
  const locale = useLocale();
  const cards = t.raw("cards") as CardData[];

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden bg-[#f8fafc]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-[#10b981] text-xs font-bold uppercase tracking-widest mb-3">
            {t("badge")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-4">
            {t("title")}{" "}
            <span className="text-[#10b981]">{t("highlight")}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Bento grid: one large left card, two stacked right cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          {/* Featured card — spans 2 rows on large screens */}
          <div className="lg:col-span-2 lg:row-span-2">
            <Card
              data={cards[0]}
              icon={CARD_ICONS[0]}
              featured
              locale={locale}
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {cards.slice(1, 3).map((data, i) => (
              <Card
                key={i}
                data={data}
                icon={CARD_ICONS[i + 1]}
                locale={locale}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/services/web`}
            className="inline-flex items-center gap-2 text-[#10b981] font-bold text-sm hover:text-[#059669] transition-colors"
          >
            {t("cta_link")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({
  data,
  icon: Icon,
  featured,
  locale,
}: {
  data: CardData;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  featured?: boolean;
  locale: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl border border-gray-200/80 bg-white p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:border-[#10b981]/30 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] ${
        featured ? "lg:p-8" : ""
      }`}
    >
      {/* Accent blob — different position per card type */}
      <div
        className={`absolute rounded-full bg-[#10b981]/10 blur-3xl transition-opacity group-hover:bg-[#10b981]/15 ${
          featured ? "w-48 h-48 -top-12 -right-12" : "w-32 h-32 top-0 right-0"
        }`}
        aria-hidden
      />
      <div className="relative">
        <div
          className={`inline-flex items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981] mb-5 transition-colors group-hover:bg-[#10b981]/20 ${
            featured ? "w-16 h-16" : "w-12 h-12"
          }`}
        >
          <Icon size={featured ? 28 : 22} />
        </div>
        <h3
          className={`font-black text-gray-900 tracking-tight mb-2 ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {data.title}
        </h3>
        <p
          className={`text-gray-600 leading-relaxed mb-4 ${
            featured ? "text-base md:text-lg" : "text-sm"
          }`}
        >
          {data.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {data.tags.map((tag, j) => (
            <span
              key={j}
              className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
