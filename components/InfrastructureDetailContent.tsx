"use client";

import { useEffect } from "react";
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
const DEFAULT_OVERVIEW_IMG = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600";
const BANNER_IMG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000";
const EXPERT_AVATAR = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";

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

function safeRaw<T>(t: ReturnType<typeof useTranslations>, key: string): T | undefined {
  try {
    return t.raw(key) as T;
  } catch {
    return undefined;
  }
}

type HeroMetric = { value: string; label: string };
type ProcessStep = { step: string; title: string; desc: string };

export default function InfrastructureDetailContent({ slug }: { slug: InfrastructureSlug }) {
  const t = useTranslations("infrastructure_detail");
  const locale = useLocale();
  const base = `/${locale}`;
  const slugNs = `slugs.${slug}`;

  const title = (t.raw(`${slugNs}.title`) as string) || slug;
  const titleHighlight = safeRaw<string>(t, `${slugNs}.title_highlight`);
  const titleSuffix = safeRaw<string>(t, `${slugNs}.title_suffix`);
  const subtitle = (t.raw(`${slugNs}.subtitle`) as string) || "";
  const featuresRaw = t.raw(`${slugNs}.features`);
  const features = Array.isArray(featuresRaw) ? (featuresRaw as string[]) : [];
  const processStepsRaw = t.raw(`${slugNs}.process_steps`);
  const processSteps = Array.isArray(processStepsRaw)
    ? (processStepsRaw as ProcessStep[])
    : [];
  const heroMetricsRaw = safeRaw<HeroMetric[]>(t, `${slugNs}.hero_metrics`);
  const stats = Array.isArray(heroMetricsRaw) ? heroMetricsRaw.slice(0, 3) : [];
  const heroImg = DEFAULT_HERO_IMG;
  const overviewImg = DEFAULT_OVERVIEW_IMG;

  const fullTitle = [title, titleHighlight, titleSuffix].filter(Boolean).join(" ");
  const titleWords = fullTitle.split(" ");
  const heroTitleFirst = titleWords[0] || title;
  const heroTitleRest = titleWords.slice(1).join(" ");

  const featureCards = features.slice(0, 3).map((titleStr, i) => ({
    title: titleStr,
    desc: processSteps[i]?.desc || "Expert implementation and ongoing support.",
    icon: FEATURE_ICONS[slug][i],
  }));

  const detailedServices = processSteps.slice(0, 3).map((step, i) => ({
    title: step.title,
    desc: step.desc,
    icon: DETAILED_SERVICE_ICONS[slug][i],
  }));

  const expertBulletsRaw = t.raw("template_expert_bullets");
  const expertBullets = Array.isArray(expertBulletsRaw) ? (expertBulletsRaw as string[]) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-white selection:bg-[#10b981] selection:text-white">
      <section className="relative min-h-[75vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt={fullTitle}
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

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-3 text-[#10b981] font-black uppercase tracking-[0.4em] text-[10px]">
              <div className="w-10 h-[1px] bg-[#10b981]" />
              <span>{t("hero_tag")}</span>
            </div>
            <h1 className="text-4xl md:text-[5rem] lg:text-[4.5rem] font-black text-white tracking-tighter leading-[0.9]">
              {heroTitleFirst} <br />
              <span className="text-[#10b981]">& {heroTitleRest}</span>
            </h1>
            <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-xl italic border-l-4 border-[#10b981] pl-6">
              &quot;{subtitle}&quot;
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`${base}#contact`}
                className="bg-[#10b981] text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl inline-flex items-center gap-2"
              >
                {t("cta_discover_more")}
              </Link>
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
                  <Play fill="currentColor" size={16} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">{t("cta_watch_intro")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 px-6 lg:px-12 -mt-10 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50 group hover:-translate-y-4 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#f0fdf9] flex items-center justify-center text-[#10b981] mb-8 group-hover:bg-[#10b981] group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-4 text-[#111]">{feature.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
              <div className="mt-8 pt-8 border-t border-gray-100 w-full">
                <Link
                  href="#detailed-services"
                  className="text-[10px] font-black text-[#10b981] uppercase tracking-widest flex items-center justify-center space-x-2 mx-auto hover:opacity-80"
                >
                  <span>Explore Tech</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl relative aspect-[4/5] lg:aspect-square">
              <Image
                src={overviewImg}
                alt="Technical Expertise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-10 left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-50 animate-float-slow">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-[#10b981] flex items-center justify-center text-white">
                    <Users size={28} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#111]">10+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {t("template_expert_engineers")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 rounded-full border-[20px] border-[#10b981]/10" />
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-block text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em]">
                {t("template_expert_tag")}
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-tight italic text-[#111]">
                {t("template_expert_heading")} <br />
                <span className="text-[#10b981]">{t("template_expert_highlight")}</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              {t("template_expert_para")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertBullets.map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center text-white flex-shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 relative">
                <Image src={EXPERT_AVATAR} alt="Expert" fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <h5 className="font-black text-[#111]">Janmejay S.</h5>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  {t("template_lead_architect")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={BANNER_IMG}
          alt="Deep Tech"
          fill
          className="object-cover grayscale-[0.5]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center space-y-8 max-w-4xl px-6">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#10b981] hover:bg-[#10b981] hover:text-white transition-all mx-auto cursor-pointer">
            <Play size={32} fill="currentColor" />
          </div>
          <h2 className="text-3xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-none italic">
            {t("template_blueprint_line1")} <br />
            <span className="text-[#10b981]">{t("template_blueprint_highlight")}</span>
          </h2>
        </div>
      </section>

      <section id="detailed-services" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <div className="inline-block text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em] mb-4">
            {t("template_what_we_do")}
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter italic text-[#111]">
            {t("template_services_line1")} <br />
            <span className="text-[#10b981]">{t("template_services_highlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {detailedServices.map((service, i) => (
            <div key={i} className="group relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src={heroImg}
                alt=""
                fill
                className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute top-10 left-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#10b981] border border-white/20">
                  {service.icon}
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10 space-y-4">
                <span className="text-[10px] font-black uppercase text-[#10b981] tracking-[0.4em]">
                  Service_ID: 0{i + 1}
                </span>
                <h4 className="text-3xl font-black text-white tracking-tight leading-none">{service.title}</h4>
                <p className="text-white/60 text-sm font-medium line-clamp-2">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 lg:gap-24">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center space-y-6">
              <div className="w-48 h-48 rounded-full border-2 border-gray-100 bg-white shadow-xl flex items-center justify-center relative group">
                <div className="absolute inset-4 rounded-full border-4 border-[#10b981]/10 group-hover:border-[#10b981]/40 transition-colors" />
                <div className="text-4xl lg:text-5xl font-black tracking-tighter text-[#111]">{stat.value}</div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 text-center max-w-[120px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight italic text-[#111]">
            {t("template_ready")} <span className="text-[#10b981]">{t("template_modernize")}</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
            &quot;{t("template_cta_quote")}&quot;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link
              href={`${base}#contact`}
              className="bg-black text-white px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#10b981] hover:text-black transition-all shadow-2xl"
            >
              {t("template_consultation")}
            </Link>
            <Link
              href={`${base}#portfolio`}
              className="text-[11px] font-black uppercase tracking-[0.3em] flex items-center space-x-2 text-[#111] hover:text-[#10b981]"
            >
              <span>{t("template_explore_portfolio")}</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
