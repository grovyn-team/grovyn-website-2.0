"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import {
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Smartphone,
  Database,
  Box,
  Briefcase,
  ShoppingCart,
  Palette,
  Shield,
  Store,
  Plug,
  Cloud,
  BarChart3,
  Search,
  Bot,
  Cpu,
} from "lucide-react";

type ServiceSlug = "web" | "mobile" | "backend" | "ai";

const SLUG_ICONS: Record<ServiceSlug, React.ReactNode> = {
  web: <Monitor size={32} />,
  mobile: <Smartphone size={32} />,
  backend: <Database size={32} />,
  ai: <Box size={32} />,
};

const OFFER_CARD_ICONS: Record<ServiceSlug, React.ReactNode[]> = {
  web: [<Briefcase key="b" size={24} />, <ShoppingCart key="s" size={24} />, <Palette key="p" size={24} />],
  mobile: [<Smartphone key="m" size={24} />, <Shield key="s" size={24} />, <Store key="t" size={24} />],
  backend: [<Plug key="p" size={24} />, <Cloud key="c" size={24} />, <BarChart3 key="b" size={24} />],
  ai: [<Search key="s" size={24} />, <Bot key="b" size={24} />, <Cpu key="c" size={24} />],
};

const OFFER_CARD_IMAGES: Record<ServiceSlug, string[]> = {
  web: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
  ],
  mobile: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  ],
  backend: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  ],
  ai: [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1676299080923-2d36443b28f9?auto=format&fit=crop&q=80&w=800",
  ],
};

export default function ServiceDetailContent({ slug }: { slug: ServiceSlug }) {
  const t = useTranslations(`services_detail.${slug}`);
  const locale = useLocale();
  const base = `/${locale}`;

  const techItems = t.raw("tech_items") as string[];
  const offerCards = t.raw("offer_cards") as { title: string; description: string; tags: string[] }[];
  const offerings = t.raw("offerings") as { title: string; desc: string }[];
  const features = t.raw("features") as string[];
  const advanced = t.raw("advanced") as string[];
  const processSteps = t.raw("process_steps") as { step: string; title: string; desc: string }[];

  return (
    <div className="bg-white">
      {/* Hero — dark (like home page) */}
      <section className="bg-black text-white pt-28 pb-24 px-6 lg:px-12 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,_rgba(16,185,129,0.12)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-8">
            {t("hero_badge")}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-6">
            {t("hero_title_line1")}{" "}
            <span className="text-[#10b981]">{t("hero_title_highlight")}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            {t("hero_subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`${base}#contact`}
              className="inline-flex items-center gap-2 bg-[#10b981] text-black px-8 py-4 rounded-full font-black text-sm hover:bg-[#059669] transition-all shadow-lg shadow-[#10b981]/20"
            >
              {t("cta_primary")}
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="#offerings"
              className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full font-black text-sm hover:bg-white/10 transition-all"
            >
              {t("cta_secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Bridge: fills hero curve so light section starts cleanly */}

      {/* What we offer — light theme */}
      <section className="relative py-20 md:py-28 px-6 bg-white text-gray-900 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10b981]/40 to-transparent" aria-hidden />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3 text-gray-900">
              {t("offer_section_title")}{" "}
              <span className="text-[#10b981]">{t("offer_section_highlight")}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("offer_section_subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {offerCards.map((card, i) => (
              <article
                key={i}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:border-[#10b981]/40 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] shrink-0 bg-gray-100 overflow-hidden">
                  <Image
                    src={OFFER_CARD_IMAGES[slug][i]}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                <div className="relative z-10 -mt-6 px-6">
                  <div className="w-12 h-12 rounded-xl bg-[#10b981] flex items-center justify-center text-white shadow-lg border-2 border-white">
                    {OFFER_CARD_ICONS[slug][i]}
                  </div>
                </div>
                <div className="relative flex flex-col flex-1 px-6 pb-6 pt-1">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold bg-[#10b981]/10 text-[#059669] border border-[#10b981]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 md:py-24 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-8">
            {t("tech_title")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {techItems.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-sm font-bold text-[#111] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-4">
            {t("offerings_title")}
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl">
            {t("offerings_intro")}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#f9f9f9] border border-gray-100 hover:border-[#10b981]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] mb-4">
                  {SLUG_ICONS[slug]}
                </div>
                <h3 className="text-lg font-black text-[#111] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-10">
            {t("features_title")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                <span className="font-medium text-[#111]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-10">
            {t("advanced_title")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {advanced.map((a, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-[#10b981]/10 text-[#10b981] text-sm font-bold"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-6 bg-black text-white rounded-t-[3rem]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-12">
            {t("process_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-[#10b981] font-black text-sm opacity-80">{step.step}</span>
                <h3 className="text-xl font-black mt-2 mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">
            {t("cta_title")}
          </h2>
          <Link
            href={`${base}#contact`}
            className="inline-flex items-center gap-2 bg-[#10b981] text-black px-10 py-4 rounded-full font-black text-sm hover:bg-[#059669] transition-all"
          >
            {t("cta_button")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
