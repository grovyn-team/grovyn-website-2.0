"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Play, Zap, LayoutGrid, Cloud, Headphones, Shield, FileCheck, Globe } from "lucide-react";
import type { IndustrySlug } from "@/lib/industries";

const INDUSTRY_CARD: Record<
  IndustrySlug,
  { img: string; titleKey: string }
> = {
  healthcare: {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    titleKey: "healthcare_title",
  },
  fintech: {
    img: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1000",
    titleKey: "fintech_title",
  },
  ecommerce: {
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=500",
    titleKey: "ecommerce_title",
  },
  edtech: {
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=500",
    titleKey: "edtech_title",
  },
  saas: {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
    titleKey: "saas_title",
  },
  startups: {
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=500",
    titleKey: "startups_title",
  },
};

const HERO_VIDEO_SRC = "/videos/industries-hero.mp4";
const HERO_POSTER =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200";

export default function IndustriesContent() {
  const t = useTranslations("industries_landing");
  const locale = useLocale();
  const base = `/${locale}`;
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const section3Items = (t.raw("section3_items") as string[]) ?? [];

  return (
    <div className="bg-white overflow-x-hidden selection:bg-[#10b981] selection:text-white font-sans">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-black">
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={HERO_POSTER}
              src={HERO_VIDEO_SRC}
              onError={() => setVideoError(true)}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={HERO_POSTER}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          )}
        </div>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/55 to-black/25 pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[#10b981] font-bold text-xs uppercase tracking-[0.35em] mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              <div className="w-10 h-[2px] bg-[#10b981] rounded-full" />
              <span>{t("hero_badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] xl:text-[4.5rem] font-black tracking-tight leading-[0.92] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {t("hero_title_line1")}{" "}
              <span className="text-white">{t("hero_title_line2")}</span>
              <br />
              <span className="text-[#10b981] italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">{t("hero_title_highlight")}</span>
            </h1>
            <p className="mt-6 text-white/95 text-base lg:text-lg font-medium leading-relaxed max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                href={`${base}#contact`}
                className="inline-flex items-center justify-center gap-2 bg-[#10b981] text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#34d399] hover:scale-[1.02] transition-all shadow-lg shadow-[#10b981]/30"
              >
                {t("hero_cta")}
              </Link>
              <a
                href={`${base}#verticals`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/30 bg-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-[#10b981]/20 hover:border-[#10b981]/50 hover:text-[#10b981] transition-all drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              >
                {t("hero_explore_sectors")}
                <span className="text-[#10b981]">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">
              {t("section2_badge")}
            </span>
            <h2 className="text-5xl font-black text-[#111] tracking-tighter leading-[0.95]">
              {t("section2_title_line1")} <br />
              {t("section2_title_line2")} <br />
              <span className="text-[#10b981]">{t("section2_title_highlight")}</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md">
              {t("section2_subtitle")}
            </p>
            <Link
              href={`${base}/portfolio`}
              className="inline-block bg-[#10b981] text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              {t("section2_cta")}
            </Link>
          </div>
          <div className="relative">
            <div className="relative z-10 w-[80%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Tech 1"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            <div className="absolute top-[20%] right-0 w-[60%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white -z-0 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                alt="Tech 2"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>
            <div className="absolute -bottom-12 right-[10%] w-[50%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                alt="Tech 3"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#edf4f9]" id="verticals">
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-[#111] tracking-tighter">
            {t("verticals_heading")}
            {t("verticals_heading_highlight") ? (
              <span className="text-[#10b981]"> {t("verticals_heading_highlight")}</span>
            ) : null}
          </h2>
          <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            {t("verticals_subtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div
            className="lg:col-span-6 group relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-xl"
            id="healthcare"
          >
            <Image
              src={INDUSTRY_CARD.healthcare.img}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
              <span className="inline-block px-2.5 py-1 rounded bg-black/70 text-[10px] font-black uppercase tracking-widest text-[#10b981] border border-[#10b981]/40">
                {t("verticals_badge")}
              </span>
              <h4 className="text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{t("healthcare_title")}</h4>
              <p className="text-sm font-medium max-w-sm text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{t("healthcare_desc")}</p>
              <Link
                href={`${base}#contact`}
                className="inline-block bg-[#10b981] text-black px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-white transition-colors"
              >
                {t("read_more")}
              </Link>
            </div>
          </div>
          <div
            className="lg:col-span-6 group relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-xl"
            id="fintech"
          >
            <Image
              src={INDUSTRY_CARD.fintech.img}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-3">
              <span className="inline-block px-2.5 py-1 rounded bg-black/70 text-[10px] font-black uppercase tracking-widest text-[#10b981] border border-[#10b981]/40">
                {t("verticals_badge")}
              </span>
              <h4 className="text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{t("fintech_title")}</h4>
              <p className="text-sm font-medium max-w-sm text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{t("fintech_desc")}</p>
              <Link
                href={`${base}#contact`}
                className="inline-block bg-[#10b981] text-black px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-white transition-colors"
              >
                {t("read_more")}
              </Link>
            </div>
          </div>

          {(["saas", "ecommerce", "edtech", "startups"] as const).map((slug) => (
            <div
              key={slug}
              id={slug}
              className="lg:col-span-3 group relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] shadow-xl"
            >
              <Image
                src={INDUSTRY_CARD[slug].img}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <span className="inline-block px-2.5 py-1 rounded bg-black/70 text-[10px] font-black uppercase tracking-widest text-[#10b981] border border-[#10b981]/40">
                  {t("verticals_badge")}
                </span>
                <h4 className="text-xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{t(INDUSTRY_CARD[slug].titleKey)}</h4>
                <p className="text-xs font-medium line-clamp-2 text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{t(`${slug}_desc`)}</p>
                <Link
                  href={`${base}#contact`}
                  className="inline-block bg-[#10b981] text-black px-5 py-2 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-white transition-colors"
                >
                  {t("read_more")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 bg-[#0a0c10] text-white p-12 lg:p-16 rounded-[2.5rem] flex flex-col justify-between shadow-2xl">
            <div className="space-y-8">
              <h3 className="text-3xl font-black tracking-tighter">
                {t("section3_title_line1")} <br />
                {t("section3_title_line2")}
              </h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                {t("section3_body")}
              </p>
              <div className="space-y-4">
                {section3Items.map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={`${base}#contact`}
              className="bg-[#10b981] text-black px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest mt-12 hover:bg-white transition-colors inline-block w-fit"
            >
              {t("section3_cta")}
            </Link>
          </div>
          <div className="lg:col-span-8 relative rounded-[2.5rem] overflow-hidden group shadow-2xl aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
              alt="Video Preview"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <button
              type="button"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:scale-110 transition-transform"
              aria-label="Play"
            >
              <Play size={32} fill="currentColor" />
            </button>
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-2xl font-black">{t("section3_showcase_label")}</h4>
              <p className="text-gray-300 font-bold uppercase text-[10px] tracking-widest">
                {t("section3_showcase_title")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] py-24 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          alt="Office Space"
          fill
          className="object-cover grayscale-[0.5]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-[45%] grid grid-cols-2 gap-3 lg:gap-4 max-w-xl lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
                alt={t("section4_image_1_label")}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-[10px] font-black uppercase tracking-widest">
                {t("section4_image_1_label")}
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600"
                alt={t("section4_image_2_label")}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-[10px] font-black uppercase tracking-widest">
                {t("section4_image_2_label")}
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/2] col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                alt={t("section4_image_3_label")}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-[10px] font-black uppercase tracking-widest">
                {t("section4_image_3_label")}
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] italic">
              {t("section4_title_line1")} <br />
              <span className="text-[#10b981]">{t("section4_title_line2")}</span>{" "}
              {t("section4_title_line3")} <br />
              {t("section4_title_line4")}
            </h2>
            <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-lg">
              {t("section4_subtitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              {[t("section4_outcome_1"), t("section4_outcome_2"), t("section4_outcome_3")].map(
                (label) => (
                  <span
                    key={label}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-white/90"
                  >
                    {label}
                  </span>
                )
              )}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/50 pt-2">
              {t("section4_deliver_label")}
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: t("section4_deliver_1"), icon: <LayoutGrid size={18} /> },
                { label: t("section4_deliver_2"), icon: <Cloud size={18} /> },
                { label: t("section4_deliver_3"), icon: <Headphones size={18} /> },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white"
                >
                  <span className="text-[#10b981]">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <Link
              href={`${base}#contact`}
              className="inline-block bg-[#10b981] text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all mt-4"
            >
              {t("section4_cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl lg:text-3xl font-black text-[#111] tracking-tighter mb-12">
            {t("section_why_heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { titleKey: "section_why_1_title", descKey: "section_why_1_desc", icon: <Zap size={24} /> },
              { titleKey: "section_why_2_title", descKey: "section_why_2_desc", icon: <Shield size={24} /> },
              { titleKey: "section_why_3_title", descKey: "section_why_3_desc", icon: <FileCheck size={24} /> },
              { titleKey: "section_why_4_title", descKey: "section_why_4_desc", icon: <Globe size={24} /> },
            ].map(({ titleKey, descKey, icon }) => (
              <div
                key={titleKey}
                className="p-6 rounded-2xl border border-gray-100 bg-[#fafafa]/80 hover:border-[#10b981]/30 hover:bg-[#10b981]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] mb-4">
                  {icon}
                </div>
                <h3 className="font-black text-[#111] text-sm uppercase tracking-wider mb-2">
                  {t(titleKey)}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {t(descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-48 px-6 lg:px-12 overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2000"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-[3rem] p-12 lg:p-20 text-center shadow-2xl space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-[#111] tracking-tighter">
                {t("newsletter_title")}
              </h2>
              <p className="text-gray-500 font-medium text-lg">{t("newsletter_subtitle")}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder={t("newsletter_placeholder")}
                className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all"
              />
              <button
                type="button"
                className="bg-[#10b981] text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl"
              >
                {t("newsletter_cta")}
              </button>
            </div>
            <p className="text-[10px] font-medium text-gray-400">{t("newsletter_disclaimer")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
