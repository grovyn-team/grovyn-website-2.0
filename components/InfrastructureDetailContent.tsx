"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Network,
  Server,
  Shield,
  Headphones,
  Database,
  GitBranch,
  Building2,
  MessageCircle,
  Truck,
  ArrowRight,
  Play,
  Check,
  Users,
  Zap,
  Activity,
  Lock,
  Globe,
  Workflow,
  Search,
  Radar,
} from "lucide-react";
import type { InfrastructureSlug } from "@/lib/infrastructure";

const DEFAULT_HERO_IMG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";
const DEFAULT_OVERVIEW_IMG = "/assets/infra-works.png";
const DEFAULT_BANNER_IMG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000";
const EXPERT_AVATAR = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";

const us = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

const HERO_IMAGES: Record<InfrastructureSlug, string> = {
  cloud: "/assets/CloudHero.png",
  network: us("1558494949-ef010cbdcc31"),
  servers: us("1550757737-9c2f636e6c34"),
  security: us("1563986768609-322da13575f3"),
  support: us("1600880292203-757bb62b4baf"),
  backup: us("1544197150-b99a580bb7a8"),
  devops: us("1555066931-4365d14bab8c"),
  datacenter: us("1550757737-9c2f636e6c34"),
  communication: us("1542744173-8e7e53415bb0"),
  migration: us("1451187580459-43490279c0fa"),
};

const OVERVIEW_IMAGES: Record<InfrastructureSlug, string> = {
  cloud: us("1451187580459-43490279c0fa", 800),
  network: us("1558494949-ef010cbdcc31", 800),
  servers: us("1550757737-9c2f636e6c34", 800),
  security: us("1563986768609-322da13575f3", 800),
  support: us("1600880292203-757bb62b4baf", 800),
  backup: us("1544197150-b99a580bb7a8", 800),
  devops: us("1555066931-4365d14bab8c", 800),
  datacenter: us("1550757737-9c2f636e6c34", 800),
  communication: us("1542744173-8e7e53415bb0", 800),
  migration: us("1451187580459-43490279c0fa", 800),
};

const BANNER_IMAGES: Record<InfrastructureSlug, string> = {
  cloud: us("1451187580459-43490279c0fa", 2000),
  network: us("1558494949-ef010cbdcc31", 2000),
  servers: us("1550757737-9c2f636e6c34", 2000),
  security: us("1563986768609-322da13575f3", 2000),
  support: us("1600880292203-757bb62b4baf", 2000),
  backup: us("1544197150-b99a580bb7a8", 2000),
  devops: us("1555066931-4365d14bab8c", 2000),
  datacenter: us("1550757737-9c2f636e6c34", 2000),
  communication: us("1542744173-8e7e53415bb0", 2000),
  migration: us("1451187580459-43490279c0fa", 2000),
};

const DETAILED_SERVICE_CARD_IMAGES: Record<InfrastructureSlug, [string, string, string]> = {
  cloud: ["/assets/assesment.png", "/assets/migrate.png", "/assets/operations.png"],
  network: ["/design.png", "/implementation.png", "/monitoring.png"],
  servers: [us("1550757737-9c2f636e6c34", 800), us("1544197150-b99a580bb7a8", 800), us("1558494949-ef010cbdcc31", 800)],
  security: [us("1563986768609-322da13575f3", 800), us("1573496359142-b8d87734a5a2", 800), us("1550757737-9c2f636e6c34", 800)],
  support: [us("1600880292203-757bb62b4baf", 800), us("1542744173-8e7e53415bb0", 800), us("1573496359142-b8d87734a5a2", 800)],
  backup: [us("1544197150-b99a580bb7a8", 800), us("1550757737-9c2f636e6c34", 800), us("1563986768609-322da13575f3", 800)],
  devops: [us("1555066931-4365d14bab8c", 800), us("1504384308090-c040fd5e7e0d", 800), us("1558494949-ef010cbdcc31", 800)],
  datacenter: [us("1550757737-9c2f636e6c34", 800), us("1544197150-b99a580bb7a8", 800), us("1558494949-ef010cbdcc31", 800)],
  communication: [us("1542744173-8e7e53415bb0", 800), us("1600880292203-757bb62b4baf", 800), us("1573496359142-b8d87734a5a2", 800)],
  migration: [us("1451187580459-43490279c0fa", 800), us("1504384308090-c040fd5e7e0d", 800), us("1558494949-ef010cbdcc31", 800)],
};

function getDetailedServiceCardImage(
  slug: InfrastructureSlug,
  cardIndex: number,
  fallback: string
): string {
  const images = DETAILED_SERVICE_CARD_IMAGES[slug];
  if (images && images[cardIndex]) return images[cardIndex];
  return fallback;
}

const SLUG_ICONS: Record<InfrastructureSlug, React.ReactNode> = {
  cloud: <Cloud size={28} />,
  network: <Network size={28} />,
  servers: <Server size={28} />,
  security: <Shield size={28} />,
  support: <Headphones size={28} />,
  backup: <Database size={28} />,
  devops: <GitBranch size={28} />,
  datacenter: <Building2 size={28} />,
  communication: <MessageCircle size={28} />,
  migration: <Truck size={28} />,
};

const FEATURE_ICONS: Record<InfrastructureSlug, [React.ReactNode, React.ReactNode, React.ReactNode]> = {
  cloud: [<Cloud size={24} key="c1" />, <Zap size={24} key="c2" />, <Activity size={24} key="c3" />],
  network: [<Network size={24} key="n1" />, <Shield size={24} key="n2" />, <Workflow size={24} key="n3" />],
  servers: [<Server size={24} key="s1" />, <Database size={24} key="s2" />, <Activity size={24} key="s3" />],
  security: [<Shield size={24} key="s1" />, <Lock size={24} key="s2" />, <CheckCircle2 size={24} key="s3" />],
  support: [<Headphones size={24} key="s1" />, <MessageCircle size={24} key="s2" />, <CheckCircle2 size={24} key="s3" />],
  backup: [<Database size={24} key="b1" />, <Server size={24} key="b2" />, <Shield size={24} key="b3" />],
  devops: [<GitBranch size={24} key="d1" />, <Zap size={24} key="d2" />, <Activity size={24} key="d3" />],
  datacenter: [<Building2 size={24} key="d1" />, <Server size={24} key="d2" />, <Database size={24} key="d3" />],
  communication: [<MessageCircle size={24} key="c1" />, <Headphones size={24} key="c2" />, <Globe size={24} key="c3" />],
  migration: [<Truck size={24} key="m1" />, <Cloud size={24} key="m2" />, <Activity size={24} key="m3" />],
};

const DETAILED_SERVICE_ICONS: Record<InfrastructureSlug, [React.ReactNode, React.ReactNode, React.ReactNode]> = {
  cloud: [<Globe size={24} key="1" />, <Zap size={24} key="2" />, <Lock size={24} key="3" />],
  network: [<Network size={24} key="1" />, <Activity size={24} key="2" />, <Search size={24} key="3" />],
  servers: [<Server size={24} key="1" />, <Database size={24} key="2" />, <Activity size={24} key="3" />],
  security: [<Shield size={24} key="1" />, <Radar size={24} key="2" />, <Zap size={24} key="3" />],
  support: [<Headphones size={24} key="1" />, <MessageCircle size={24} key="2" />, <CheckCircle2 size={24} key="3" />],
  backup: [<Database size={24} key="1" />, <Server size={24} key="2" />, <Shield size={24} key="3" />],
  devops: [<GitBranch size={24} key="1" />, <Zap size={24} key="2" />, <Activity size={24} key="3" />],
  datacenter: [<Building2 size={24} key="1" />, <Server size={24} key="2" />, <Database size={24} key="3" />],
  communication: [<MessageCircle size={24} key="1" />, <Headphones size={24} key="2" />, <Globe size={24} key="3" />],
  migration: [<Truck size={24} key="1" />, <Cloud size={24} key="2" />, <Activity size={24} key="3" />],
};

function isKeyLike(value: unknown): value is string {
  if (typeof value !== "string") return false;
  return (
    value.includes("title_highlight") ||
    value.includes("title_suffix") ||
    value.includes("slugs.")
  );
}

function safeRaw<T>(t: ReturnType<typeof useTranslations>, key: string): T | undefined {
  try {
    const value = t.raw(key) as T;
    if (isKeyLike(value)) return undefined;
    return value;
  } catch {
    return undefined;
  }
}

type HeroMetric = { value: string; label: string };
type ProcessStep = { step: string; title: string; desc: string; micro?: string };
type ProcessStepFull = { step: string; title: string; desc: string };
type DetailedServiceWithStat = { title: string; desc: string; stat?: string };

export default function InfrastructureDetailContent({ slug }: { slug: InfrastructureSlug }) {
  const t = useTranslations("infrastructure_detail");
  const locale = useLocale();
  const base = `/${locale}`;
  const slugNs = `slugs.${slug}`;

  const rawTitle = safeRaw<string>(t, `${slugNs}.title`);
  const title = (typeof rawTitle === "string" && !isKeyLike(rawTitle) ? rawTitle : null) || slug;
  const titleHighlight = safeRaw<string>(t, `${slugNs}.title_highlight`);
  const titleSuffix = safeRaw<string>(t, `${slugNs}.title_suffix`);
  const rawSubtitle = safeRaw<string>(t, `${slugNs}.subtitle`);
  const subtitle = (typeof rawSubtitle === "string" && !isKeyLike(rawSubtitle) ? rawSubtitle : null) || "";
  const featuresRaw = safeRaw<string[]>(t, `${slugNs}.features`);
  const features = Array.isArray(featuresRaw) ? featuresRaw : [];
  const processStepsRaw = safeRaw<ProcessStep[]>(t, `${slugNs}.process_steps`);
  const processSteps = Array.isArray(processStepsRaw) ? processStepsRaw : [];
  const heroMetricsRaw = safeRaw<HeroMetric[]>(t, `${slugNs}.hero_metrics`);
  const stats = Array.isArray(heroMetricsRaw) ? heroMetricsRaw.slice(0, 4) : [];
  const heroImg = HERO_IMAGES[slug] ?? DEFAULT_HERO_IMG;
  const overviewImg = OVERVIEW_IMAGES[slug] ?? DEFAULT_OVERVIEW_IMG;
  const bannerImg = BANNER_IMAGES[slug] ?? DEFAULT_BANNER_IMG;

  const ctaPrimary = safeRaw<string>(t, `${slugNs}.cta_primary`);
  const ctaSecondary = safeRaw<string>(t, `${slugNs}.cta_secondary`);
  const trustBarText = safeRaw<string>(t, `${slugNs}.trust_bar_text`);
  const expertHeading = safeRaw<string>(t, `${slugNs}.expert_heading`);
  const expertPara = safeRaw<string>(t, `${slugNs}.expert_para`);
  const expertBulletsSlug = safeRaw<string[]>(t, `${slugNs}.expert_bullets`);
  const expertShowAvatar = safeRaw<boolean>(t, `${slugNs}.expert_show_avatar`);
  const processSectionHeading = safeRaw<string>(t, `${slugNs}.process_section_heading`);
  const processStepsFullRaw = safeRaw<ProcessStepFull[]>(t, `${slugNs}.process_steps_full`);
  const processStepsFull = Array.isArray(processStepsFullRaw) ? processStepsFullRaw : [];
  const detailedServicesOverride = safeRaw<DetailedServiceWithStat[]>(t, `${slugNs}.detailed_services`);
  const techStrip = safeRaw<string[]>(t, `${slugNs}.tech_strip`);
  const valueHeading = safeRaw<string>(t, `${slugNs}.value_heading`);
  const valuePara = safeRaw<string>(t, `${slugNs}.value_para`);
  const miniStatsRaw = safeRaw<string[]>(t, `${slugNs}.mini_stats`);
  const miniStats = Array.isArray(miniStatsRaw) ? miniStatsRaw : [];
  const ctaHeading = safeRaw<string>(t, `${slugNs}.cta_heading`);
  const ctaSubtext = safeRaw<string>(t, `${slugNs}.cta_subtext`);
  const ctaPrimaryBtn = safeRaw<string>(t, `${slugNs}.cta_primary_btn`);
  const ctaSecondaryBtn = safeRaw<string>(t, `${slugNs}.cta_secondary_btn`);

  const fullTitle = [title, titleHighlight, titleSuffix].filter(Boolean).join(" ");
  const titleWords = fullTitle.split(" ");
  const heroTitleFirst = titleWords[0] || title;
  const heroTitleRestRaw = titleWords.slice(1).join(" ");
  const heroTitleRest = heroTitleRestRaw.startsWith("and ") 
    ? heroTitleRestRaw 
    : heroTitleRestRaw ? `& ${heroTitleRestRaw}` : "";

  const featureCards = features.slice(0, 3).map((titleStr, i) => ({
    title: titleStr,
    desc: processSteps[i]?.desc || "Expert implementation and ongoing support.",
    micro: processSteps[i]?.micro,
    icon: FEATURE_ICONS[slug][i],
  }));

  const detailedServicesFromSteps = processSteps.slice(0, 3).map((step, i) => ({
    title: step.title,
    desc: step.desc,
    stat: undefined as string | undefined,
    icon: DETAILED_SERVICE_ICONS[slug][i],
  }));
  const detailedServicesList =
    Array.isArray(detailedServicesOverride) && detailedServicesOverride.length >= 3
      ? detailedServicesOverride.slice(0, 3).map((s, i) => ({
          title: s.title,
          desc: s.desc,
          stat: s.stat,
          icon: DETAILED_SERVICE_ICONS[slug][i],
        }))
      : detailedServicesFromSteps.map((s, i) => ({ ...s, stat: detailedServicesOverride?.[i]?.stat }));

  const detailedServices = detailedServicesList;

  const expertBulletsRaw = safeRaw<string[]>(t, "template_expert_bullets");
  const expertBulletsDefault = Array.isArray(expertBulletsRaw) ? expertBulletsRaw : [];
  const expertBullets = Array.isArray(expertBulletsSlug) && expertBulletsSlug.length > 0 ? expertBulletsSlug : expertBulletsDefault;
  const expertHeadingResolved = typeof expertHeading === "string" ? expertHeading : t("template_expert_heading");
  const expertHighlightResolved = typeof expertHeading === "string" ? "" : t("template_expert_highlight");
  const expertParaResolved = typeof expertPara === "string" ? expertPara : t("template_expert_para");
  const showExpertAvatar = expertShowAvatar !== false;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-white selection:bg-[#10b981] selection:text-white">
      <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col justify-center py-12 md:py-20 lg:py-24 pt-16 md:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt={mounted ? fullTitle : "Infrastructure"}
            fill
            className="object-cover grayscale-[0.3]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl space-y-3 md:space-y-8">
            {!mounted ? (
              <>
                <div className="inline-flex items-center space-x-2 md:space-x-3 text-[#10b981] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[7px] md:text-[10px]">
                  <div className="w-6 md:w-10 h-[1px] bg-[#10b981]" />
                  <span>&nbsp;</span>
                </div>
                <h1 className="text-lg md:text-3xl lg:text-[3.5rem] font-black text-white tracking-tighter leading-[0.9]">
                  <span>&nbsp;</span>
                </h1>
                <p className="text-gray-300 text-[11px] md:text-lg font-medium leading-relaxed max-w-xl italic border-l-2 md:border-l-4 border-[#10b981] pl-3 md:pl-6 line-clamp-3 md:line-clamp-none">
                  &nbsp;
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                  <span className="w-32 h-10 bg-[#10b981]/80 rounded-lg" />
                </div>
              </>
            ) : (
              <>
                <div className="inline-flex items-center space-x-2 md:space-x-3 text-[#10b981] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[7px] md:text-[10px]">
                  <div className="w-6 md:w-10 h-[1px] bg-[#10b981]" />
                  <span>{t("hero_tag")}</span>
                </div>
                <h1 className="text-lg md:text-3xl lg:text-[3.5rem] font-black text-white tracking-tighter leading-[0.9]">
                  {heroTitleFirst}
                  {heroTitleRest ? (
                    <>
                      {" "}
                      <br />
                      <span className="text-[#10b981]">{heroTitleRest.startsWith("and ") ? heroTitleRest : `& ${heroTitleRest}`}</span>
                    </>
                  ) : null}
                </h1>
                <p className="text-gray-300 text-[11px] md:text-lg font-medium leading-relaxed max-w-xl italic border-l-2 md:border-l-4 border-[#10b981] pl-3 md:pl-6 line-clamp-3 md:line-clamp-none">
                  &quot;{subtitle}&quot;
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                  <Link
                    href={`${base}#contact`}
                    className="w-full sm:w-auto bg-[#10b981] text-black px-4 md:px-10 py-2.5 md:py-4 rounded-lg md:rounded-xl font-black text-[9px] md:text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl inline-flex items-center justify-center gap-2"
                  >
                    {typeof ctaPrimary === "string" ? ctaPrimary : t("cta_discover_more")}
                  </Link>
                  {typeof ctaSecondary === "string" && (
                    <Link
                      href={`${base}#how-we-work`}
                      className="w-full sm:w-auto border-2 border-white text-white px-4 md:px-10 py-2.5 md:py-4 rounded-lg md:rounded-xl font-black text-[9px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-2"
                    >
                      {ctaSecondary}
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {mounted && typeof trustBarText === "string" && trustBarText.length > 0 && (
        <section className="relative z-20 px-3 md:px-6 lg:px-12 py-6 md:py-8 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed">{trustBarText}</p>
          </div>
        </section>
      )}

      <section className="relative z-20 px-3 md:px-6 lg:px-12 mt-8 md:-mt-13 pb-12 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {!mounted
            ? [0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-white p-4 md:p-8 lg:p-10 xl:p-12 rounded-xl md:rounded-[2.5rem] shadow-2xl border border-gray-50 flex flex-col items-center text-center min-w-0"
                >
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-2xl bg-[#f0fdf9] mb-4 md:mb-8 shrink-0" />
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-full bg-gray-100 rounded mb-4" />
                  <div className="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-gray-100 w-full">
                    <div className="h-3 w-24 bg-gray-100 rounded mx-auto" />
                  </div>
                </div>
              ))
            : featureCards.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white p-4 md:p-8 lg:p-10 xl:p-12 rounded-xl md:rounded-[2.5rem] shadow-2xl border border-gray-50 group hover:-translate-y-4 transition-all duration-500 flex flex-col items-center text-center min-w-0"
                >
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-2xl bg-[#f0fdf9] flex items-center justify-center text-[#10b981] mb-4 md:mb-8 group-hover:bg-[#10b981] group-hover:text-white transition-all shrink-0">
                    <div className="scale-75 md:scale-100">{feature.icon}</div>
                  </div>
                  <h3 className="text-sm md:text-2xl font-black tracking-tight mb-2 md:mb-4 text-[#111] break-words line-clamp-2 w-full">{feature.title}</h3>
                  <p className="text-gray-500 text-[10px] md:text-base font-medium leading-relaxed line-clamp-3 md:line-clamp-none break-words w-full min-w-0">{feature.desc}</p>
                  {"micro" in feature && feature.micro && (
                    <p className="mt-2 text-[#10b981] text-[9px] md:text-[10px] font-bold uppercase tracking-wider">{feature.micro}</p>
                  )}
                  <div className="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-gray-100 w-full">
                    <Link
                      href="#detailed-services"
                      className="text-[8px] md:text-[10px] font-black text-[#10b981] uppercase tracking-widest flex items-center justify-center space-x-1 md:space-x-2 mx-auto hover:opacity-80"
                    >
                      <span>{t("explore_tech")}</span>
                      <ArrowRight size={10} className="md:w-3.5 md:h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </section>

      <section className="py-8 md:py-16 lg:py-24 px-3 md:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl md:rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/5] lg:aspect-square">
              <Image
                src={overviewImg}
                alt={mounted ? `${fullTitle} — expert guidance` : "Expert guidance"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-[-10px] left-4 md:left-10 bg-white p-4 md:p-8 rounded-xl md:rounded-[2.5rem] shadow-2xl border border-gray-50 animate-float-slow">
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-[#10b981] flex items-center justify-center text-white">
                    <Users size={16} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-lg md:text-3xl font-black text-[#111]">2+</div>
                    <div className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {t("template_expert_engineers")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-4 -right-4 md:-top-10 md:-right-10 w-20 h-20 md:w-40 md:h-40 rounded-full border-8 md:border-[20px] border-[#10b981]/10" />
          </div>

          <div className="space-y-4 md:space-y-8 lg:space-y-10 order-1 lg:order-2">
            <div className="space-y-3 md:space-y-6">
              <div className="inline-block text-[#10b981] font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em]">
                {t("template_expert_tag")}
              </div>
              <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-tighter leading-tight italic text-[#111]">
                {expertHighlightResolved ? (
                  <>
                    {t("template_expert_heading")} <br />
                    <span className="text-[#10b981]">{expertHighlightResolved}</span>
                  </>
                ) : (
                  expertHeadingResolved
                )}
              </h2>
            </div>
            <p className="text-gray-500 text-xs md:text-lg font-medium leading-relaxed">
              {expertParaResolved}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {expertBullets.map((item) => (
                <div key={item} className="flex items-center space-x-2 md:space-x-4">
                  <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#10b981] flex items-center justify-center text-white flex-shrink-0">
                    <Check size={10} strokeWidth={3} className="md:w-3.5 md:h-3.5" />
                  </div>
                  <span className="font-bold text-gray-800 text-[10px] md:text-sm">{item}</span>
                </div>
              ))}
            </div>

            {showExpertAvatar && (
              <div className="pt-4 md:pt-8 border-t border-gray-200 flex items-center space-x-3 md:space-x-6">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200 relative flex-shrink-0">
                  <Image src={EXPERT_AVATAR} alt="Expert" fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <h5 className="font-black text-[#111] text-xs md:text-base">Janmejay S.</h5>
                  <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {t("template_lead_architect")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {processStepsFull.length > 0 && typeof processSectionHeading === "string" && (
        <section id="how-we-work" className="py-12 md:py-20 lg:py-24 px-3 md:px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base md:text-2xl lg:text-3xl font-black tracking-tight text-[#111] mb-8 md:mb-12 text-center">
              {processSectionHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {processStepsFull.map((step, i) => (
                <div key={i} className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-xl border border-gray-100 bg-gray-50/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#10b981] text-white flex items-center justify-center font-black text-sm md:text-base flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-black text-[#111] text-sm md:text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImg}
          alt={mounted ? fullTitle : "Infrastructure"}
          fill
          className="object-cover grayscale-[0.5]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center space-y-4 md:space-y-8 max-w-4xl px-3 md:px-6">
          <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#10b981] hover:bg-[#10b981] hover:text-white transition-all mx-auto cursor-pointer">
            <Play size={16} className="md:w-6 md:h-6 lg:w-8 lg:h-8" fill="currentColor" />
          </div>
          <h2 className="text-lg md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white tracking-tighter leading-none italic">
            {t("template_blueprint_line1")} <br />
            <span className="text-[#10b981]">{t("template_blueprint_highlight")}</span>
          </h2>
        </div>
      </section>

      <section id="detailed-services" className="py-8 md:py-24 lg:py-32 px-3 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-6 md:mb-16 lg:mb-24">
          <div className="inline-block text-[#10b981] font-black text-[7px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.6em] mb-2 md:mb-4">
            {t("template_what_we_do")}
          </div>
          <h2 className="text-base md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-tighter italic text-[#111]">
            {t("template_services_line1")} <br />
            <span className="text-[#10b981]">{t("template_services_highlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {detailedServices.map((service, i) => {
            const cardImgSrc = getDetailedServiceCardImage(slug, i, heroImg);
            return (
            <div key={i} className="group relative rounded-xl md:rounded-[3rem] overflow-hidden aspect-[5/3] md:aspect-[4/5] shadow-2xl">
              <Image
                src={cardImgSrc}
                alt=""
                fill
                className="object-cover opacity-70 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized={cardImgSrc.startsWith("/")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute top-2 left-2 md:top-10 md:left-10">
                <div className="w-7 h-7 md:w-16 md:h-16 rounded-md md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#10b981] border border-white/20">
                  <div className="scale-50 md:scale-100">{service.icon}</div>
                </div>
              </div>

              <div className="absolute bottom-2 left-2 right-2 md:bottom-10 md:left-10 md:right-10 space-y-1 md:space-y-4 min-w-0">
                <span className="text-[6px] md:text-[10px] font-black uppercase text-[#10b981] tracking-[0.2em] md:tracking-[0.4em]">
                  Service_ID: 0{i + 1}
                </span>
                <h4 className="text-xs md:text-3xl font-black text-white tracking-tight leading-tight line-clamp-2 break-words">{service.title}</h4>
                <p className="text-white/60 text-[8px] md:text-sm font-medium line-clamp-2 break-words">{service.desc}</p>
                {"stat" in service && service.stat && (
                  <p className="text-[#10b981] text-[8px] md:text-[10px] font-bold uppercase tracking-wider">{service.stat}</p>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {Array.isArray(techStrip) && techStrip.length > 0 && (
        <section className="py-8 md:py-12 px-3 md:px-6 lg:px-12 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
            {techStrip.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-medium border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {typeof valueHeading === "string" && valueHeading.length > 0 && (
        <section className="py-12 md:py-20 px-3 md:px-6 lg:px-12 bg-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-black tracking-tight text-[#111]">
              {valueHeading}
            </h2>
            {typeof valuePara === "string" && (
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">{valuePara}</p>
            )}
          </div>
        </section>
      )}

      {miniStats.length > 0 && (
        <section className="py-10 md:py-16 px-3 md:px-6 lg:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
            {miniStats.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#111] font-bold text-xs md:text-sm">
                <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="py-12 md:py-24 lg:py-32 px-3 md:px-6 lg:px-12 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-14 xl:gap-20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center space-y-3 md:space-y-5 min-w-0 flex-1 max-w-[200px]">
              <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full border-2 border-gray-100 bg-white shadow-xl flex items-center justify-center relative group overflow-hidden shrink-0">
                <div className="absolute inset-2 md:inset-3 rounded-full border-2 md:border-4 border-[#10b981]/10 group-hover:border-[#10b981]/40 transition-colors pointer-events-none" />
                <div className="relative z-10 px-2 md:px-3 w-full min-w-0 flex justify-center">
                  <span className="font-black tracking-tighter text-[#111] text-[11px] md:text-base lg:text-lg xl:text-xl whitespace-nowrap overflow-hidden text-ellipsis max-w-full block text-center">
                    {stat.value}
                  </span>
                </div>
              </div>
              <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 text-center min-w-0 w-full max-w-[110px] md:max-w-[130px] break-words line-clamp-2 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-40 px-3 md:px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-10 lg:space-y-12">
          <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-black tracking-tighter leading-tight italic text-[#111]">
            {typeof ctaHeading === "string" && ctaHeading.length > 0 ? (
              ctaHeading
            ) : (
              <>
                {t("template_ready")} <span className="text-[#10b981]">{t("template_modernize")}</span>
              </>
            )}
          </h2>
          <p className="text-gray-500 text-xs md:text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
            &quot;{typeof ctaSubtext === "string" && ctaSubtext.length > 0 ? ctaSubtext : t("template_cta_quote")}&quot;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 pt-3 md:pt-6">
            <Link
              href={`${base}#contact`}
              className="w-full sm:w-auto bg-black text-white px-6 md:px-12 lg:px-16 py-3 md:py-5 lg:py-6 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#10b981] hover:text-black transition-all shadow-2xl"
            >
              {typeof ctaPrimaryBtn === "string" && ctaPrimaryBtn.length > 0 ? ctaPrimaryBtn : t("template_consultation")}
            </Link>
            <Link
              href={`${base}#portfolio`}
              className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em] md:tracking-[0.3em] flex items-center space-x-1.5 md:space-x-2 text-[#111] hover:text-[#10b981]"
            >
              <span>{typeof ctaSecondaryBtn === "string" && ctaSecondaryBtn.length > 0 ? ctaSecondaryBtn : t("template_explore_portfolio")}</span>
              <ArrowUpRight size={14} className="md:w-[18px] md:h-[18px]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}