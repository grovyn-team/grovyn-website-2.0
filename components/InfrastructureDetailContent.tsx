"use client";

import Link from "next/link";
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
} from "lucide-react";
import type { InfrastructureSlug } from "@/lib/infrastructure";

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

type LayoutVariant = "tech" | "security" | "operations";

const SLUG_VARIANT: Record<InfrastructureSlug, LayoutVariant> = {
  cloud: "tech",
  network: "tech",
  devops: "tech",
  migration: "tech",
  security: "security",
  backup: "security",
  servers: "operations",
  support: "operations",
  datacenter: "operations",
  communication: "operations",
};

type HeroMetric = { value: string; label: string };
type FeaturedProject = { title: string; subtitle: string; description: string; tags: string[]; metric: string };

const DEFAULT_FEATURES = ["Architecture design", "Implementation & migration", "24/7 monitoring", "Compliance & security"];
const DEFAULT_PROCESS_STEPS: { step: string; title: string; desc: string }[] = [
  { step: "01", title: "Assessment & design", desc: "Understand your current setup and define target architecture." },
  { step: "02", title: "Implement & migrate", desc: "Deploy with minimal disruption and zero-downtime where possible." },
  { step: "03", title: "Operate & optimize", desc: "Ongoing support, monitoring, and continuous improvement." },
];

const TECH_CARD_COLORS = ["bg-[#3b82f6]", "bg-[#10b981]", "bg-[#f59e0b]", "bg-[#8b5cf6]", "bg-[#ec4899]", "bg-[#06b6d4]"];

function safeRaw<T>(t: ReturnType<typeof useTranslations>, key: string): T | undefined {
  try {
    return t.raw(key) as T;
  } catch {
    return undefined;
  }
}

export default function InfrastructureDetailContent({ slug }: { slug: InfrastructureSlug }) {
  const t = useTranslations("infrastructure_detail");
  const locale = useLocale();
  const base = `/${locale}`;
  const variant = SLUG_VARIANT[slug];

  const slugNs = `slugs.${slug}`;
  const title = (t.raw(`${slugNs}.title`) as string) || slug;
  const titleHighlight = safeRaw<string>(t, `${slugNs}.title_highlight`);
  const titleSuffix = safeRaw<string>(t, `${slugNs}.title_suffix`);
  const subtitle = (t.raw(`${slugNs}.subtitle`) as string) || "";
  const featuresRaw = t.raw(`${slugNs}.features`);
  const features = Array.isArray(featuresRaw) ? (featuresRaw as string[]) : DEFAULT_FEATURES;
  const processStepsRaw = t.raw(`${slugNs}.process_steps`);
  const processSteps = Array.isArray(processStepsRaw)
    ? (processStepsRaw as { step: string; title: string; desc: string }[])
    : DEFAULT_PROCESS_STEPS;
  const offeringsRaw = t.raw(`${slugNs}.offerings`);
  const offerings = Array.isArray(offeringsRaw) ? (offeringsRaw as string[]) : null;
  const heroMetricsRaw = safeRaw<HeroMetric[]>(t, `${slugNs}.hero_metrics`);
  const heroMetrics = Array.isArray(heroMetricsRaw) && heroMetricsRaw.length >= 4
    ? heroMetricsRaw.slice(0, 4)
    : null;
  const featuredProjectsTitleRaw = safeRaw<string>(t, `${slugNs}.featured_projects_title`);
  const featuredProjectsTitle =
    typeof featuredProjectsTitleRaw === "string" ? featuredProjectsTitleRaw : (safeRaw<string>(t, "featured_projects_title") ?? "Featured Projects");
  const featuredProjectsRaw = safeRaw<FeaturedProject[]>(t, `${slugNs}.featured_projects`);
  const featuredProjects = Array.isArray(featuredProjectsRaw) ? featuredProjectsRaw : null;
  const targetClientsRaw = safeRaw<string[]>(t, `${slugNs}.target_clients`);
  const targetClients = Array.isArray(targetClientsRaw) ? targetClientsRaw : null;
  const technologiesUsedTitleRaw = safeRaw<string>(t, `${slugNs}.technologies_used_title`);
  const technologiesUsedTitle =
    typeof technologiesUsedTitleRaw === "string" ? technologiesUsedTitleRaw : (safeRaw<string>(t, "technologies_used_title") ?? "Technologies Used");

  return (
    <div className="bg-white">
      {variant === "tech" && (
        <section className="bg-black text-white pt-28 pb-24 px-6 lg:px-12 rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(16,185,129,0.15)_0%,_transparent_50%)]" />
          <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-6">
                {t("hero_badge")}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-4">
                {title}
                {titleHighlight && <> <span className="text-[#10b981]">{titleHighlight}</span></>}
                {titleSuffix && ` ${titleSuffix}`}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`${base}#contact`}
                  className="inline-flex items-center gap-2 bg-[#10b981] text-black px-8 py-4 rounded-full font-black text-sm hover:bg-[#059669] transition-all shadow-lg shadow-[#10b981]/20"
                >
                  {t("cta_primary")}
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full font-black text-sm hover:bg-white/10 transition-all"
                >
                  {t("cta_secondary")}
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              {heroMetrics ? (
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                  {heroMetrics.map((m, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col items-center justify-center text-center"
                    >
                      <span className="text-[#10b981] mb-2">{SLUG_ICONS[slug]}</span>
                      <span className="text-2xl font-black text-white block">{m.value}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{m.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-48 h-48 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981]">
                  {SLUG_ICONS[slug]}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {variant === "security" && (
        <section className="bg-[#0f172a] text-white pt-28 pb-20 px-6 lg:px-12 rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(16,185,129,0.08)_0%,_transparent_60%)]" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#10b981]/20 border border-[#10b981]/30 text-[#10b981] mb-6">
              {SLUG_ICONS[slug]}
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-4">
              {t("hero_badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tighter mb-4">
              {title}
              {titleHighlight && <> <span className="text-[#10b981]">{titleHighlight}</span></>}
              {titleSuffix && ` ${titleSuffix}`}
            </h1>
            <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`${base}#contact`}
                className="inline-flex items-center gap-2 bg-[#10b981] text-black px-6 py-3 rounded-xl font-black text-sm hover:bg-[#059669] transition-all"
              >
                {t("cta_primary")}
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl font-black text-sm hover:bg-white/10 transition-all"
              >
                {t("cta_secondary")}
              </Link>
            </div>
            {heroMetrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 max-w-2xl mx-auto">
                {heroMetrics.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/5 border border-white/10 p-4 text-center"
                  >
                    <span className="text-xl font-black text-[#10b981] block">{m.value}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {variant === "operations" && (
        <section className="bg-gradient-to-b from-[#111] to-[#1a1a1a] text-white pt-28 pb-24 px-6 lg:px-12 rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#10b981]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-4">
                  {t("hero_badge")}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter mb-3">
                  {title}
                  {titleHighlight && <> <span className="text-[#10b981]">{titleHighlight}</span></>}
                  {titleSuffix && ` ${titleSuffix}`}
                </h1>
                <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-6">
                  {subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`${base}#contact`}
                    className="inline-flex items-center gap-2 bg-[#10b981] text-black px-6 py-3 rounded-xl font-black text-sm hover:bg-[#059669] transition-all"
                  >
                    {t("cta_primary")}
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl font-black text-sm hover:bg-white/10 transition-all"
                  >
                    {t("cta_secondary")}
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {heroMetrics
                  ? heroMetrics.map((m, i) => (
                      <div
                        key={i}
                        className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[120px]"
                      >
                        <span className="text-2xl font-black text-[#10b981] block">{m.value}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{m.label}</span>
                      </div>
                    ))
                  : (
                    <>
                      <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[120px]">
                        <span className="text-2xl font-black text-[#10b981] block">24/7</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Support</span>
                      </div>
                      <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[120px]">
                        <span className="text-2xl font-black text-[#10b981] block">SLA</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Driven</span>
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="services" className="py-20 md:py-28 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div
            className={
              variant === "security"
                ? "max-w-4xl mx-auto grid md:grid-cols-1 gap-12"
                : "grid lg:grid-cols-2 gap-12 lg:gap-16"
            }
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-6">
                {(() => {
                  const label = safeRaw<string>(t, "services_offered_title") ?? "Services Offered";
                  const parts = label.split(" ");
                  return parts.length > 1 ? (
                    <> {parts[0]} <span className="text-[#10b981]">{parts.slice(1).join(" ")}</span></>
                  ) : (
                    parts[0]
                  );
                })()}
              </h2>
              {variant === "security" ? (
                <ul className="space-y-0">
                  {features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 py-4 border-b border-gray-200 last:border-0"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#10b981]/10 text-[#10b981] font-black text-sm flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="font-medium text-[#111] pt-0.5">{f}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="text-[#111] font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {offerings && offerings.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-6">
                  {(() => {
                    const parts = technologiesUsedTitle.split(" ");
                    return parts.length > 1 ? (
                      <> {parts[0]} <span className="text-[#10b981]">{parts.slice(1).join(" ")}</span></>
                    ) : (
                      <span className="text-[#10b981]">{parts[0]}</span>
                    );
                  })()}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {offerings.map((item, i) => (
                    <div
                      key={i}
                      className={`rounded-xl ${TECH_CARD_COLORS[i % TECH_CARD_COLORS.length]} text-white font-bold text-sm flex items-center justify-center p-4 min-h-[80px] text-center`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {variant === "tech" && (
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-12">
              {t("process_title")}
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" style={{ width: "calc(100% - 4rem)", marginLeft: "2rem" }} />
              <div className="grid md:grid-cols-3 gap-8 relative">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-[#10b981] text-black font-black text-lg flex items-center justify-center mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-black text-[#111] mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {variant === "security" && (
        <section className="py-20 md:py-28 px-6 bg-[#fafafa]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-12">
              {t("process_title")}
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-[#10b981]/30" aria-hidden />
              {processSteps.map((step, i) => (
                <div key={i} className="relative pb-10 last:pb-0 pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#10b981] text-white font-black text-xs flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-[#111] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {variant === "operations" && (
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-12">
              {t("process_title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#fafafa] border-2 border-gray-100 hover:border-[#10b981]/30 transition-colors relative"
                >
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200 z-0" aria-hidden />
                  )}
                  <span className="text-[#10b981] font-black text-sm">{step.step}</span>
                  <h3 className="text-lg font-black text-[#111] mt-2 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredProjects && featuredProjects.length > 0 && (
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-10 text-center">
              {(() => {
                const parts = featuredProjectsTitle.split(" ");
                return parts.length > 1 ? (
                  <> {parts[0]} <span className="text-[#10b981]">{parts.slice(1).join(" ")}</span></>
                ) : (
                  <span className="text-[#10b981]">{parts[0]}</span>
                );
              })()}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.slice(0, 3).map((proj, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#fafafa] border border-gray-100 hover:border-[#10b981]/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] mb-4">
                    {SLUG_ICONS[slug]}
                  </div>
                  <h3 className="font-black text-[#111] text-lg mb-1">{proj.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{proj.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(proj.tags || []).map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-xs font-bold text-[#111]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-black text-[#10b981]">{proj.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {targetClients && targetClients.length > 0 && (
        <section className="py-16 md:py-20 px-6 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-tight mb-8">
              {safeRaw<string>(t, "target_clients_title") ?? "Target Clients"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {targetClients.map((client, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-[#111] shadow-sm"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

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
