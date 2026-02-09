"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Search,
  Smartphone,
  Globe,
  Boxes,
  Code,
  Terminal,
  Server,
  Layers,
  Plus,
  ArrowRight,
  ArrowUpRight,
  LayoutGrid,
  Activity,
  ShieldCheck,
  Rocket,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  category: "Web" | "Mobile" | "Integration";
  industry: string;
  description: string;
  completedDate: string;
  techStack: string[];
  metrics: { label: string; value: string };
  image: string;
  dossierId: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "OmniStream Messaging",
    category: "Integration",
    industry: "Social SaaS",
    description:
      "High-performance integration of CometChat SDK and Sendbird UIKit for global scale. Engineered custom real-time handlers with <50ms latency.",
    completedDate: "Feb 2025",
    techStack: ["CometChat", "React", "WebSockets"],
    metrics: { label: "Active Users", value: "2.5M+" },
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    dossierId: "GRVN-01",
  },
  {
    id: "2",
    name: "Grovyn Finance Pro",
    category: "Web",
    industry: "FinTech",
    description:
      "Comprehensive wealth management SaaS. Features a high-performance dashboard with AI-driven predictive analytics.",
    completedDate: "Jan 2025",
    techStack: ["Next.js 15", "Go", "PostgreSQL"],
    metrics: { label: "Daily Volume", value: "$45M" },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    dossierId: "GRVN-02",
  },
  {
    id: "3",
    name: "SwiftLogix Fleet",
    category: "Mobile",
    industry: "Logistics",
    description:
      "Enterprise-grade fleet management for iOS & Android. Precise GPS tracking and offline data persistence.",
    completedDate: "Dec 2024",
    techStack: ["Flutter", "Firebase", "Native Bridge"],
    metrics: { label: "Deliveries", value: "150K+" },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    dossierId: "GRVN-03",
  },
  {
    id: "4",
    name: "SecureLink Auth SDK",
    category: "Integration",
    industry: "Cybersecurity",
    description:
      "Security-first integration of biometric authentication and hardware key protocols for mission-critical apps.",
    completedDate: "Nov 2024",
    techStack: ["OAuth 2.1", "WebAuthn", "Node.js"],
    metrics: { label: "Security Score", value: "A+" },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    dossierId: "GRVN-04",
  },
];

const MAP_IMG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";

export default function PortfolioContent() {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: <Layers size={28} /> },
    { name: "Web", icon: <Globe size={28} /> },
    { name: "Mobile", icon: <Smartphone size={28} /> },
    { name: "Integration", icon: <Boxes size={28} /> },
    { name: "Infrastructure", icon: <Server size={28} /> },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen font-sans selection:bg-[#10b981] selection:text-white bg-white text-black">
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-visible">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          >
            <source src="/assets/Portfolio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
          <div
            className={`absolute bottom-[-1px] left-[-10%] w-[120%] h-[80px] sm:h-[100px] lg:h-[120px] transition-colors duration-500 ${
              "bg-white"
            }`}
            style={{ borderRadius: "100% 100% 0 0", transform: "translateY(50%)" }}
          />
        </div>

        <div className="relative z-10 space-y-6 sm:space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-[4.5rem] lg:text-[5.5rem] font-black text-white tracking-tighter leading-none drop-shadow-2xl italic">
            Grovyn Portfolio.
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-2xl font-medium tracking-tight max-w-2xl mx-auto italic drop-shadow-md px-4">
          Real-world digital systems built with teams across different industries.
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6 pt-4">
            {[Search, Code, Terminal].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-2xl hover:bg-[#10b981] hover:text-black transition-all cursor-pointer group"
              >
                <Icon size={18} className="sm:w-[22px] sm:h-[22px] group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[-60px] sm:bottom-[-70px] lg:bottom-[-80px] left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6 z-20">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-10 pb-4 scrollbar-hide overflow-x-auto">
            {categories.map((cat) => (
              <div key={cat.name} className="flex flex-col items-center space-y-2 sm:space-y-4 group shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl border-2 sm:border-4 ${
                    activeCategory === cat.name
                      ? "bg-[#10b981] text-white border-white scale-110 shadow-[#10b981]/40"
                      : "bg-white border-gray-50 text-gray-400 hover:border-[#10b981]/40"
                  }`}
                >
                  <div className="scale-75 sm:scale-100">{cat.icon}</div>
                </button>
                <span
                  className={`text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-colors text-center ${
                    activeCategory === cat.name ? "text-[#10b981]" : "text-gray-400 group-hover:text-black dark:group-hover:text-white"
                  }`}
                >
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-32 sm:pt-48 lg:pt-64 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 sm:mb-16 lg:mb-24 border-b border-gray-100 dark:border-white/5 pb-8 sm:pb-10 lg:pb-12 gap-6 sm:gap-8">
          <div className="space-y-2 sm:space-y-3">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter italic ${
                "text-[#111]"
              }`}
            >
              Projets <span className="text-[#10b981] text-xl sm:text-2xl md:text-3xl lg:text-4xl">/ Réalisations</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[9px] sm:text-[10px]">
              Grovyn Business Engineering Archive
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative">
              <div
                className={`rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden aspect-[16/10] sm:aspect-[13/6] lg:aspect-[16/10] shadow-2xl border-2 sm:border-4 md:border-8 transition-all duration-700 group-hover:-translate-y-2 ${
                  "border-gray-50"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#10b981] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest rounded-full">
                      {project.category}
                    </div>
                    <span className="text-white/60 text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
                      {project.completedDate}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="text-[8px] sm:text-[9px] font-black text-[#10b981] uppercase tracking-[0.2em]">
                        {project.metrics.label}
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl font-black text-white">{project.metrics.value}</span>
                    </div>
                    <button
                      type="button"
                      className="flex items-center space-x-2 sm:space-x-3 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] group/btn"
                    >
                      <span className="hidden sm:inline">View Dossier</span>
                      <Plus size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`py-20 sm:py-32 lg:py-40 rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] transition-colors duration-1000 overflow-hidden ${
          "bg-[#fcfcfc]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 space-y-4 sm:space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
              <LayoutGrid size={12} className="sm:w-[14px] sm:h-[14px] text-[#10b981]" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] text-[#10b981]">
                Engineering Masterpieces
              </span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none italic ${
                "text-[#111]"
              }`}
            >
              Selected <span className="text-[#10b981]">Systems.</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
              Explore the architectural logic behind our most significant SaaS deployments and specialized SDK
              integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">
            <div className="lg:col-span-8 group relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl transition-shadow duration-300 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)]">
              <div className="aspect-[16/10] md:aspect-[16/8] relative">
                <Image
                  src={projects[0].image}
                  alt={projects[0].name}
                  fill
                  className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 max-w-xl">
                  <div className="rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-md px-4 sm:px-5 lg:px-6 py-3 sm:py-4 shadow-lg border border-white/5">
                    <div className="space-y-1 pointer-events-none">
                      <span className="text-[7px] sm:text-[8px] font-mono font-black text-[#10b981] tracking-[0.4em] uppercase">
                        SYSTEM_ARCHIVE_{projects[0].dossierId}
                      </span>
                      <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter italic">
                        {projects[0].name}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pointer-events-none">
                  <div className="rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-md px-4 sm:px-5 lg:px-6 py-3 sm:py-4 shadow-lg border border-white/5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase text-white/90 tracking-widest">
                        Reliability
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#10b981]">99.99%</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase text-white/90 tracking-widest">
                        Deployment
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white">Global Edge</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 bg-[#10b981] text-black w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-xl shrink-0 pointer-events-auto"
                >
                  <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            <div
              className={`lg:col-span-4 group relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between border transition-all duration-700 hover:-translate-y-3 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${
                "bg-white border-gray-100 shadow-xl"
              }`}
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                    <Smartphone size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-[#10b981]">
                      Mobile Tier 1
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-none mt-1 text-[#111]">
                      {projects[2].name}
                    </h4>
                  </div>
                </div>
                <p className={`text-xs sm:text-sm md:text-base font-medium leading-relaxed text-gray-500`}>
                  {projects[2].description}
                </p>
              </div>
              <div className="pt-6 sm:pt-8 border-t dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <div className="text-[8px] sm:text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                  {projects[2].dossierId}
                </div>
                <button
                  type="button"
                  className="text-[#10b981] font-black text-[9px] sm:text-[10px] uppercase tracking-widest flex items-center space-x-2 group/btn"
                >
                  <span>Review Docs</span>
                  <Plus size={12} className="sm:w-[14px] sm:h-[14px] group-hover/btn:rotate-90 transition-transform" />
                </button>
              </div>
            </div>

            <div
              className={`lg:col-span-4 group relative rounded-[3.5rem] overflow-hidden aspect-square border shadow-2xl transition-all duration-700 hover:-translate-y-3 ${
                "border-gray-50 bg-white"
              }`}
            >
              <Image
                src={projects[1].image}
                alt={projects[1].name}
                fill
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Activity size={16} className="text-[#10b981] animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#10b981]">
                    Real-time Logic
                  </span>
                </div>
                <h4 className="text-3xl font-black text-white tracking-tight leading-none">{projects[1].name}</h4>
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Archived_01_2025</p>
              </div>
            </div>

            <div
              className={`lg:col-span-8 group relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 border transition-all duration-700 hover:-translate-y-3 shadow-2xl ${
                "bg-white border-gray-100"
              }`}
            >
              <div className="w-full md:w-[35%] aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-black relative group/img shrink-0">
                <Image
                  src={projects[3].image}
                  alt={projects[3].name}
                  fill
                  className="object-cover grayscale opacity-40 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#10b981]">
                    <Search size={18} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[65%] space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center space-x-2 sm:space-x-3 text-[#10b981] font-black uppercase tracking-[0.4em] text-[8px] sm:text-[9px]">
                    <ShieldCheck size={14} className="sm:w-4 sm:h-4" />
                    <span>Security_Protocol_Dossier</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-tight text-[#111]">
                    {projects[3].name}
                  </h4>
                  <p className={`text-xs sm:text-sm md:text-base font-medium leading-relaxed line-clamp-2 text-gray-500`}>
                    {projects[3].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[3].techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 dark:bg-white/5 border dark:border-white/5 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black uppercase text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-6 sm:pt-8 border-t dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase text-gray-400 tracking-widest">
                      Reliability Score
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#10b981]">99.99%</span>
                  </div>
                  <button
                    type="button"
                    className="bg-black dark:bg-white text-white dark:text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-[#10b981] dark:hover:bg-[#10b981] transition-all w-full sm:w-auto"
                  >
                    Deep Dive Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-40 lg:py-56 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24 xl:gap-32">
          <div className="lg:w-1/2 space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 sm:space-x-3 text-[#10b981] font-black uppercase tracking-[0.4em] text-[9px] sm:text-[10px]">
                <Globe size={14} className="sm:w-4 sm:h-4" />
                <span>Digital Sovereign Territory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter leading-[0.85] italic text-[#111] dark:text-white">
                Le <span className="text-[#10b981]">Territoire</span> <br /> Digital.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
                Grovyn ecosystems power SaaS enterprises across global borders. Our architecture ensures absolute
                data sovereignty.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pt-4">
              {[
                { val: "15ms", label: "SDK RESPONSE AVG" },
                { val: "420+", label: "ACTIVE EDGE NODES" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981] flex-shrink-0" />
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#111] dark:text-white">
                      {stat.val}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-relaxed pl-6 sm:pl-7">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center space-x-3 sm:space-x-4 group bg-black text-white hover:bg-[#10b981] dark:bg-white dark:text-black dark:hover:bg-[#10b981] w-full sm:w-auto"
            >
              <span>Carte interactive</span>
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] text-white dark:text-black group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 relative group w-full">
            <div className="relative rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[4px] sm:border-[6px] md:border-8 border-white dark:border-[#151515] bg-white dark:bg-[#151515] transform transition-transform duration-1000">
              <Image
                src={MAP_IMG}
                alt="Global Deployment Network"
                width={1200}
                height={960}
                className="w-full aspect-[4/5] object-cover opacity-90 group-hover:scale-105 transition-transform duration-[4s]"
              />
              <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />
              <div className="absolute top-[35%] left-[42%] w-10 h-10 rounded-full bg-[#10b981]/20 border-2 border-[#10b981] flex items-center justify-center animate-pulse shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <div className="absolute bottom-[20%] right-[30%] w-10 h-10 rounded-full bg-[#10b981]/20 border-2 border-[#10b981] flex items-center justify-center animate-pulse shadow-[0_0_25px_rgba(16,185,129,0.5)]" style={{ animationDelay: "700ms" }}>
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-24 sm:py-32 lg:py-48 transition-colors duration-1000 bg-gray-50`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 lg:p-12 xl:p-16 lg:p-10 shadow-2xl border text-center space-y-8 sm:space-y-10 lg:space-y-12 ${
              "bg-white border-gray-100"
            }`}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#10b981]/10 rounded-full flex items-center justify-center mx-auto border border-[#10b981]/20 mb-6 sm:mb-8">
              <Rocket size={40} className="sm:w-14 sm:h-14 lg:w-[56px] lg:h-[56px] text-[#10b981]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-tight italic text-[#111] dark:text-white self-center">
              Prêt pour la <br className="md:hidden" /> <span className="text-[#10b981]">Prochaine</span> Étape?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
              Open a project dossier with our engineering leads today. Let&apos;s discuss high-performance architecture,
              SDK integrations, or full-scale SaaS delivery.
            </p>
            <Link
              href={`/${locale}#contact`}
              className={`inline-block px-10 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-2xl transition-all w-full sm:w-auto ${
                "bg-black text-white hover:bg-[#10b981]"
              }`}
            >
              Ouvrir un dossier projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}