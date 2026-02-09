"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Zap,
  CheckCircle2,
  Cpu,
  Layout,
  Search,
  Database,
  Terminal,
  Workflow,
  Lock,
  Maximize2,
  ShieldCheck,
  Command,
  Radar,
  Share2,
  Server,
  Plus,
  Layers,
  Activity,
  FileSearch,
  PenTool,
  GitBranch,
} from "lucide-react";

const architecturalLayers = [
  {
    title: "The Interface Layer",
    tech: "React 19 / Next.js / Tailwind",
    desc: "Pixel-perfect, performance-first frontends that prioritize Core Web Vitals and user engagement.",
    features: ["Server Components", "Streaming SSR", "Motion Orchestration"],
    icon: <Layout className="text-pink-500" />,
  },
  {
    title: "The Logic Engine",
    tech: "Node.js / Go / Python",
    desc: "Distributed microservices and event-driven backends designed for ultra-low latency and complex business logic.",
    features: ["Auto-scaling APIs", "Real-time Pub/Sub", "Edge Computing"],
    icon: <Cpu className="text-emerald-500" />,
  },
  {
    title: "The Data Foundation",
    tech: "PostgreSQL / Redis / S3",
    desc: "Robust, encrypted storage solutions with high-availability clustering and automated failovers.",
    features: ["Vector Embeddings", "Multi-region Sync", "ACID Compliance"],
    icon: <Database className="text-[#10b981]" />,
  },
];

export default function WebServiceContent() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const t = useTranslations("services_detail.web");
  const locale = useLocale();
  const base = `/${locale}`;
  const processSteps = t.raw("process_steps") as { step: string; title: string; desc: string }[];

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden selection:bg-[#10b981] selection:text-black font-sans">
      <section className="relative py-10 md:py-10 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#10b981]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Terminal size={14} className="text-[#10b981]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Engineering Protocol 2.5</span>
              </div>
              <h1 className="text-3xl xl:text-[3.5rem] font-black tracking-[-0.06em] leading-[0.85] text-white">
                Web <br />
                <span className="text-[#10b981]">Engineering</span> <br />
                Manifesto.
              </h1>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium max-w-xl leading-relaxed">
                Moving beyond &quot;development&quot; into high-fidelity system architecture. We build web assets that are fast by default and scalable by design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href={`${base}#contact`}
                className="w-full sm:w-auto bg-white text-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-4 hover:bg-[#10b981] transition-all duration-500 group"
              >
                <span>Talk to an Architect</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href={`${base}/portfolio`}
                className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-md px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-all text-center"
              >
                The Playbook
              </Link>
            </div>
          </div>

          <div className="relative group hidden lg:block w-full max-w-[380px] xl:max-w-[420px]">
            <div className="absolute -inset-8 bg-[#10b981]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl transform transition-transform duration-1000 group-hover:rotate-1 group-hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity size={12} className="text-[#10b981] animate-pulse" />
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.15em]">Deploying_Cluster_01</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-1.5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Node Status</span>
                    <div className="text-xl font-black text-[#10b981]">Healthy</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-1.5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Latency</span>
                    <div className="text-xl font-black text-[#10b981]">12ms</div>
                  </div>
                </div>
                <div className="h-20 w-full bg-black/40 rounded-2xl border border-white/5 p-3 flex items-end gap-0.5">
                  {[40, 70, 55, 90, 45, 80, 60, 95, 40, 60, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#10b981]/40 rounded-t-md group-hover:bg-[#10b981] transition-all" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}></div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-emerald-500 to-[#10b981] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.2em] text-white/20">
                    <span>Build Progress</span>
                    <span>85% Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-[#fafafa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em]">System Architecture</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter leading-tight text-[#111]">The Three Layers of <br />Scalable Web Systems.</h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {architecturalLayers.map((layer, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveLayer(i)}
                  className={`w-full text-left p-8 rounded-[2.5rem] border transition-all duration-500 flex items-center justify-between group ${activeLayer === i ? "bg-white border-gray-200 shadow-xl shadow-gray-200/50" : "bg-gray-100/60 border-gray-100 opacity-80 hover:opacity-100 hover:bg-gray-100"}`}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      {layer.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black tracking-tight text-[#111]">{layer.title}</h4>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">{layer.tech}</p>
                    </div>
                  </div>
                  <div className={`transition-transform duration-500 ${activeLayer === i ? "rotate-90" : ""}`}>
                    <ArrowRight size={20} className="text-gray-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group shadow-xl shadow-gray-200/50">
              <div className="absolute top-0 right-0 p-12 text-gray-300 opacity-[0.08]"><Workflow size={200} /></div>
              <div className="relative z-10 space-y-8 animate-in fade-in duration-1000" key={activeLayer}>
                <div className="w-20 h-20 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#10b981]">
                  {architecturalLayers[activeLayer].icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black tracking-tighter text-[#111]">{architecturalLayers[activeLayer].title}</h3>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed">
                    {architecturalLayers[activeLayer].desc}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {architecturalLayers[activeLayer].features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <CheckCircle2 size={16} className="text-[#10b981]" />
                      <span className="text-xs font-bold text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-white text-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 lg:mb-24 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
                <Command size={14} />
                <span>Strategic_Execution_Overview</span>
              </div>
              <h2 className="text-3xl xl:text-[3.5rem] font-black tracking-tighter leading-[0.85]">
                Engineered <br />
                for <span className="text-[#10b981]">Results.</span>
              </h2>
            </div>
            <div className="lg:w-1/3 space-y-6">
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Our engineering is a calculated response to mediocrity. We design for absolute reliability, security, and velocity.
              </p>
              <div className="flex space-x-2">
                <div className="h-1.5 w-12 bg-[#10b981] rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-100 rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 lg:gap-8 md:auto-rows-[380px]">
            <div className="md:col-span-8 group relative bg-[#050505] rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 shadow-2xl border border-white/5 min-h-[240px] md:min-h-0">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <svg className="absolute bottom-0 left-0 w-full h-1/2" viewBox="0 0 800 200">
                  <path d="M0 100 Q 100 0 200 100 T 400 100 T 600 100 T 800 100" fill="none" stroke="#10b981" strokeWidth="1" className="animate-[dash_5s_linear_infinite]" />
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-3 md:space-y-8">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-16 md:h-16 rounded-lg md:rounded-[1.8rem] bg-[#10b981] flex items-center justify-center text-black shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                      <Zap size={16} strokeWidth={2.5} className="md:w-8 md:h-8" />
                    </div>
                    <div className="space-y-0 md:space-y-1">
                      <span className="text-[6px] md:text-[10px] font-mono text-[#10b981] uppercase tracking-[0.2em] block">Live_Throughput</span>
                      <div className="text-white text-[8px] md:text-xs font-bold uppercase tracking-widest">Optimized Pipeline</div>
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-3">
                    <h3 className="text-base md:text-2xl lg:text-4xl font-black tracking-tight leading-none text-white">Sub-Second <br />Execution.</h3>
                    <p className="text-gray-500 text-[10px] md:text-sm font-medium max-w-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                      We eliminate bloat at the compiler level. Every byte is optimized for sub-100ms response times globally.
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block space-y-6">
                  <div className="flex items-center space-x-12">
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">0.4s</div>
                      <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Avg_LCP</div>
                    </div>
                    <div className="w-[1px] h-10 bg-white/10"></div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-[#10b981]">100/100</div>
                      <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Perf_Score</div>
                    </div>
                  </div>
                  <div className="h-32 w-48 bg-white/5 rounded-3xl border border-white/10 p-6 flex items-center justify-center group-hover:border-[#10b981]/40 transition-colors">
                    <Activity size={48} className="text-[#10b981] animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center space-y-1.5 md:space-y-0 md:space-x-6 mt-3 md:mt-2">
                <Link
                  href={`${base}#contact`}
                  className="w-full md:w-auto bg-white text-black px-4 md:px-10 py-2 md:py-4 rounded-lg md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-[#10b981] transition-all duration-500 text-center"
                >
                  Benchmark System
                </Link>
                <div className="flex items-center space-x-1.5 md:space-x-2 text-[8px] md:text-[10px] font-mono text-gray-500">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#10b981] animate-pulse"></div>
                  <span>Real-time Stream: Active</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#10b981] rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between items-center relative overflow-hidden group hover:scale-[1.03] transition-all duration-700 min-h-[200px] md:min-h-0">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[400px] h-[400px] border border-black rounded-full animate-ping"></div>
                <div className="absolute w-[200px] h-[200px] border border-black rounded-full"></div>
                <div className="absolute w-[300px] h-[300px] border border-black rounded-full opacity-50"></div>
              </div>

              <div className="relative z-10 w-full flex justify-between items-start">
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-black/10 backdrop-blur-xl flex items-center justify-center text-black">
                  <Radar size={14} className="md:w-7 md:h-7" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-black/40">Status</span>
                  <span className="text-[8px] md:text-xs font-bold text-black">OPERATIONAL</span>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-3xl md:text-7xl font-black tracking-tighter text-black leading-none mb-1.5 md:mb-4">99.9%</div>
                <div className="px-2.5 md:px-6 py-1 md:py-2 bg-black text-[#10b981] rounded-full text-[7px] md:text-[10px] font-black uppercase tracking-[0.4em] inline-block shadow-2xl">
                  SLA_Guaranteed
                </div>
              </div>

              <div className="relative z-10 w-full text-center space-y-0 md:space-y-1">
                <p className="text-black/60 font-bold text-[9px] md:text-xs">Uninterrupted Global Availability</p>
                <p className="text-[7px] md:text-[9px] font-mono text-black/30">Last Failover: N/A</p>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#0a0a0a] rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transition-all duration-700 min-h-[220px] md:min-h-0">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#10b981] shadow-[0_0_15px_#10b981] animate-[scan_6s_ease-in-out_infinite] opacity-40 z-20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_100%)]"></div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981]">
                  <ShieldCheck size={16} className="md:w-8 md:h-8" />
                </div>
                <div className="text-right">
                  <span className="text-[6px] md:text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Threat_Matrix</span>
                  <span className="text-[7px] md:text-[10px] font-black text-[#10b981] tracking-widest">SECURE</span>
                </div>
              </div>

              <div className="relative z-10 space-y-2 md:space-y-8">
                <div className="space-y-1.5 md:space-y-6">
                  <h3 className="text-base md:text-3xl lg:text-4xl font-black tracking-tighter leading-none">Hardened <br />Protocols.</h3>
                  <p className="text-gray-500 text-[10px] md:text-sm font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                    Beyond encryption. We implement zero-trust access control and real-time vulnerability mitigation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-1.5 md:gap-4">
                  <div className="p-2 md:p-4 rounded-lg md:rounded-2xl bg-white/5 border border-white/5 flex flex-col space-y-1 md:space-y-2">
                    <Lock size={10} className="text-emerald-400 md:w-4 md:h-4" />
                    <span className="text-[7px] md:text-[10px] font-mono text-white/40 uppercase">AES-256</span>
                  </div>
                  <div className="p-2 md:p-4 rounded-lg md:rounded-2xl bg-white/5 border border-white/5 flex flex-col space-y-1 md:space-y-2">
                    <span className="text-[7px] md:text-[10px] font-mono text-white/40 uppercase">2FA_CORE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-[#f8f9fa] border border-gray-100 rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between group hover:border-[#10b981]/40 transition-all duration-700 relative overflow-hidden shadow-inner min-h-[240px] md:min-h-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_rgba(16,185,129,0.02)_0%,_transparent_70%)]"></div>

              <div className="relative z-10 space-y-2 md:space-y-10 flex-grow">
                <div className="space-y-1.5 md:space-y-6">
                  <div className="flex items-center space-x-1.5 md:space-x-3 text-[7px] md:text-[10px] font-black text-[#10b981] uppercase tracking-[0.4em]">
                    <Share2 size={8} className="md:w-3 md:h-3" />
                    <span>Architectural_Flexibility</span>
                  </div>
                  <h3 className="text-base md:text-3xl lg:text-4xl font-black tracking-tighter leading-none">Modular <br />Ecosystem.</h3>
                  <p className="text-gray-500 text-[10px] md:text-sm font-medium max-w-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    Deploy micro-frontends and shared logic clusters that grow with your user base. Future-proof code without the legacy overhead.
                  </p>
                </div>

                <div className="flex space-x-5 md:space-x-12">
                  <div className="space-y-0 md:space-y-1">
                    <div className="text-base md:text-2xl font-black text-black tracking-tight">Zero</div>
                    <div className="text-[6px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Tech Debt</div>
                  </div>
                  <div className="w-[1px] h-5 md:h-12 bg-gray-200"></div>
                  <div className="space-y-0 md:space-y-1">
                    <div className="text-base md:text-2xl font-black text-black tracking-tight">100%</div>
                    <div className="text-[6px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Ownership</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full lg:w-[45%] aspect-square flex items-center justify-center mt-4 lg:mt-0 hidden md:flex">
                <div className="relative w-full h-full p-4">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-[3rem] shadow-2xl border border-gray-100 rotate-[-12deg] flex items-center justify-center group-hover:rotate-0 transition-transform duration-700">
                    <Server size={64} className="text-gray-100" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-[3rem] shadow-xl border border-gray-100 rotate-[-6deg] flex items-center justify-center group-hover:rotate-6 transition-transform duration-700">
                    <Database size={64} className="text-gray-200" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-[3rem] shadow-lg border border-gray-100 rotate-[0deg] flex items-center justify-center group-hover:rotate-[12deg] transition-transform duration-700">
                    <Layers size={80} className="text-[#10b981] group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-[#050505] text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">How it works</h2>
            <p className="text-gray-400 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Our engineering lifecycle is a synchronized progression from deep discovery to global optimization. We prioritize velocity without compromising stability.
            </p>
          </div>

          <div className="relative mb-16 sm:mb-24 lg:mb-40">
            <div className="absolute top-1.5 left-0 w-full h-[2px] bg-white/10 hidden lg:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 relative">
              {[
                { step: "Step 1", title: "Discovery Scan", desc: "Technical audit of infrastructure and architectural constraints." },
                { step: "Step 2", title: "Blueprint Phase", desc: "Modeling data structures and user flow hierarchies." },
                { step: "Step 3", title: "Core Sprints", desc: "Developing with CI/CD and real-time observability." },
                { step: "Step 4", title: "Final Deploy", desc: "Automated scaling tests and global CDN propagation." },
              ].map((item, i) => (
                <div key={i} className="space-y-6 relative">
                  <div className="hidden lg:flex absolute -top-1 left-0 w-4 h-4 rounded-full bg-[#10b981] shadow-[0_0_15px_#10b981] z-10"></div>
                  <div className="pt-8 lg:pt-12 space-y-4">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#10b981]">
                      {item.step}
                    </span>
                    <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-white/5 border border-white/5 rounded-[4rem] p-6 sm:p-8 lg:p-12 xl:p-20 overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
              <div className="flex flex-col space-y-4 lg:w-[20%]">
                {[
                  { label: "Infra Audit", icon: <FileSearch size={14} /> },
                  { label: "Logic Mapping", icon: <Share2 size={14} /> },
                  { label: "Data Schema", icon: <Database size={14} /> },
                  { label: "Sec Audit", icon: <Lock size={14} /> },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between group/card hover:bg-[#10b981]/5 hover:border-[#10b981]/30 transition-all">
                    <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover/card:text-white">{item.label}</span>
                    <div className="text-[#10b981] opacity-50 group-hover/card:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block absolute left-[22%] top-1/2 -translate-y-1/2 w-[15%] h-full pointer-events-none opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 100 400" preserveAspectRatio="none">
                  <path d="M0,100 C50,100 50,200 100,200" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
                  <path d="M0,166 C50,166 50,200 100,200" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse delay-100" />
                  <path d="M0,233 C50,233 50,200 100,200" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse delay-200" />
                  <path d="M0,300 C50,300 50,200 100,200" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse delay-300" />
                </svg>
              </div>

              <div className="lg:w-[35%] bg-black border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center space-y-6 relative shadow-2xl z-20">
                <div className="flex space-x-4">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center space-y-3 flex-1 min-w-[140px]">
                    <PenTool size={20} className="text-[#10b981] mx-auto" />
                    <span className="block text-[9px] font-black uppercase tracking-widest text-white/50">Architectural</span>
                    <div className="text-xs font-bold">Blueprint</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center space-y-3 flex-1 min-w-[140px]">
                    <GitBranch size={20} className="text-[#10b981] mx-auto" />
                    <span className="block text-[9px] font-black uppercase tracking-widest text-white/50">Sprint</span>
                    <div className="text-xs font-bold">Roadmap</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#10b981] animate-pulse"></div>
                </div>
              </div>

              <div className="hidden lg:block absolute right-[22%] top-1/2 -translate-y-1/2 w-[15%] h-full pointer-events-none opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 100 400" preserveAspectRatio="none">
                  <path d="M0,200 C50,200 50,140 100,140" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
                  <path d="M0,200 C50,200 50,260 100,260" fill="none" stroke="#10b981" strokeWidth="2" className="animate-pulse delay-500" />
                </svg>
              </div>

              <div className="flex flex-col space-y-8 lg:w-[22%] relative">
                <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 space-y-6 relative overflow-hidden group/output">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-center space-y-2">
                    <h5 className="text-3xl font-black text-[#10b981] tracking-tighter">Scalable_A</h5>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Staging Environment</span>
                  </div>
                </div>
                <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 space-y-6 relative overflow-hidden group/output">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-center space-y-2">
                    <h5 className="text-3xl font-black text-[#10b981] tracking-tighter">Scalable_B</h5>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Production Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 md:py-28 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#10b981] tracking-tight mb-3">
            {t("methodology_heading")}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-[#111] mb-8 sm:mb-12 lg:mb-14">
            {t("methodology_subheading")}
          </p>
          <div className="relative pl-2">
            <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-gray-200" style={{ transform: "translateX(-50%)" }} aria-hidden />
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative flex gap-6 pb-12 last:pb-0 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f4f6f8] border-2 border-gray-200 flex items-center justify-center text-[#10b981] font-black text-sm z-10">
                  {step.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-black text-[#111] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-600 font-medium text-center">
            {t("methodology_conclusion")}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-24 space-y-4 sm:space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#10b981]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-[2rem] bg-gray-50 border border-gray-100 flex items-center justify-center text-[#10b981] shadow-sm transform group-hover:scale-105 transition-transform">
                <Search size={32} strokeWidth={2.5} />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">System Queries <span className="text-[#10b981]">(FAQ)</span></h2>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">Technical Deep-Dive & Logistics Protocol</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "Do you cut corners to hit deadlines?", a: "We don’t. We’d rather be upfront about timing than ship something that’s hard to change later. If we see shortcuts that will hurt you in a year, we’ll say so and suggest a better path. Our goal is code your team can actually maintain and build on." },
              { q: "Can you build features that feel live and up to date?", a: "Yes. We use proven patterns—event-driven backends, real-time sync—so users see updates quickly without things feeling fragile. We’ll pick the right approach for your scale and explain how it works in plain terms." },
              { q: "We have an old system that can’t afford downtime. Can you still help?", a: "Absolutely. We modernize in stages: we build new pieces alongside the old one and move traffic over gradually. Your team keeps working. There’s no big-bang weekend cutover. We’ve done this with systems that had to stay up 24/7." },
              { q: "Who owns the code when we’re done?", a: "You do. When the project wraps, you get full ownership of the repositories, docs, and any infra scripts. No lock-in, no “you can’t take it with you.” We want you to own and run what we build." },
            ].map((faq, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-[2.5rem] border-2 transition-all duration-500 ${activeFaq === i ? "border-[#10b981] bg-[#f0fdf9] shadow-2xl shadow-[#10b981]/5" : "border-gray-100 bg-white hover:border-gray-200"}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-10 py-5 text-left"
                >
                  <span className="text-xl font-black tracking-tight text-[#111] pr-8">{faq.q}</span>
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 shrink-0 ${activeFaq === i ? "bg-black border-black text-[#10b981] rotate-45" : "border-gray-100 text-gray-300"}`}
                  >
                    <Plus size={20} strokeWidth={3} />
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${activeFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="p-10 pt-0">
                      <div className="h-[1px] w-full bg-gray-200/50 mb-8"></div>
                      <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-2xl">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-[4rem] p-8 sm:p-12 lg:p-16 xl:p-24 text-center relative overflow-hidden group shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000"><Terminal size={400} /></div>

            <div className="relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50">Consultation_Session_Open</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[5.5rem] font-black tracking-tighter leading-[0.85] text-white">
                  Let&apos;s Build <br />
                  The <span className="text-[#10b981]">Next Level.</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg font-medium max-w-xl mx-auto">
                  Skip the agencies. Talk directly to the architects who will own your system&apos;s trajectory.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                <Link
                  href={`${base}#contact`}
                  className="w-full sm:w-auto bg-[#10b981] text-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-[#10b981]/30 flex items-center justify-center space-x-4"
                >
                  <span>Initiate Engineering Brief</span>
                  <Maximize2 size={16} />
                </Link>
                <Link
                  href={`${base}/portfolio`}
                  className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center"
                >
                  Review Deployments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(380px); }
        }
      `}</style>
    </div>
  );
}
