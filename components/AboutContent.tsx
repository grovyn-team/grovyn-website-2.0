"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Terminal,
  Database,
  Cpu,
  Users,
  Activity,
  Server,
  Lock,
} from "lucide-react";

export default function AboutContent() {
  const locale = useLocale();
  const t = useTranslations("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
              alt="Deep Space Technology"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#10b981]/5 rounded-full blur-[100px] animate-pulse" />
        </div>
        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">
              {t("badge")}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            {t("title_line1")} <span className="text-[#10b981]">{t("title_highlight")}</span>,<br />
            {t("title_line2")} <span className="italic">{t("title_italic")}</span>.
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-[#111] tracking-tighter leading-tight">
                  {t("philosophy_title")} <br />
                  <span className="text-[#10b981]">{t("philosophy_highlight")}</span>
                </h2>
                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                  {t("philosophy_desc")}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: t("clean_code"), icon: <Terminal size={20} />, desc: t("clean_code_desc") },
                  { title: t("cloud_native"), icon: <Database size={20} />, desc: t("cloud_native_desc") },
                  { title: t("zero_latency"), icon: <Zap size={20} />, desc: t("zero_latency_desc") },
                  { title: t("data_security"), icon: <ShieldCheck size={20} />, desc: t("data_security_desc") },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-3xl border border-gray-100 hover:border-[#10b981]/30 hover:bg-[#10b981]/5 transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#10b981] mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-[#111] mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#10b981] to-emerald-400 rounded-[4rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white transform transition-transform duration-700 group-hover:-rotate-1 h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                  alt="Engineering Collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                  <div className="text-white space-y-2">
                    <div className="text-3xl font-black">{t("code_metric_value")}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/70">
                      {t("code_metric_label")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10b981]/5 clip-path-diagonal" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#111] tracking-tight">
              {t("precision_title")} <span className="text-[#10b981]">{t("precision_highlight")}</span>
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.4em]">
              {t("principles")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("transparency"),
                desc: t("transparency_desc"),
                icon: <Globe size={28} />,
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: t("reliability"),
                desc: t("reliability_desc"),
                icon: <Cpu size={28} />,
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: t("user_flow"),
                desc: t("user_flow_desc"),
                icon: <Users size={28} />,
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow items-start text-left space-y-4">
                  <div className="p-4 bg-gray-50 rounded-2xl text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-500">
                    {card.icon}
                  </div>
                  <h4 className="text-2xl font-black text-[#111]">{card.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#080808] rounded-[4rem] p-12 lg:p-32 overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[160px] animate-pulse" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-12">
              <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 group-hover:border-[#10b981]/30 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50">
                  {t("cta_badge")}
                </span>
              </div>
              <h2 className="text-6xl md:text-[6.8rem] font-black text-white tracking-[-0.06em] leading-[0.9] drop-shadow-2xl">
                {t("cta_title")}
                <br />
                <span className="text-[#10b981]">{t("cta_highlight")}</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80 pt-4">
                {t("cta_subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full pt-4">
                <Link
                  href={`/${locale}#contact`}
                  className="relative overflow-hidden bg-[#10b981] text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center space-x-4 hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                >
                  <span>{t("deploy_btn")}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
                <Link
                  href={`/${locale}`}
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
                >
                  {t("case_studies")}
                </Link>
              </div>
              <div className="pt-16 flex items-center space-x-12 opacity-20">
                {[Server, Lock, Globe].map((Icon, i) => (
                  <Icon key={i} size={24} className="text-[#10b981]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
