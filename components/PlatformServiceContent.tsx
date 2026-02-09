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
  Search,
  Terminal,
  Workflow,
  Box,
  Lock,
  Maximize2,
  ShieldCheck,
  Command,
  Radar,
  Rocket,
  Layers,
  Hexagon,
  Network,
  Plus,
} from "lucide-react";

const architecturalLayers = [
  {
    title: "Ecosystem Orchestration",
    tech: "EVENT MESH / API GATEWAY",
    desc: "Centralized governance and traffic management allowing thousands of microservices to communicate securely with unified logging.",
    features: ["Dynamic Routing", "Quota Management", "Service Discovery"],
    icon: <Layers className="text-[#10b981]" />,
  },
  {
    title: "Distributed Core",
    tech: "KUBERNETES / GO / RUST",
    desc: "Fault-tolerant, auto-scaling compute clusters that maintain high availability across global regions and cloud providers.",
    features: ["Self-healing Nodes", "Zero-downtime Rollouts", "Resource Packing"],
    icon: <Hexagon className="text-[#10b981]" />,
  },
  {
    title: "The Data Lake",
    tech: "SNOWFLAKE / KAFKA / S3",
    desc: "Petabyte-scale storage and real-time analytical processing for data-driven decision making and historical auditing.",
    features: ["Stream Processing", "Cold/Warm Tiering", "Granular Access"],
    icon: <Network className="text-[#10b981]" />,
  },
];

export default function PlatformServiceContent() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const t = useTranslations("services_detail.platform");
  const locale = useLocale();
  const base = `/${locale}`;
  const processSteps = t.raw("process_steps") as { step: string; title: string; desc: string }[];

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden selection:bg-[#10b981] selection:text-black font-sans">
      <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col justify-center py-16 md:py-20 lg:py-24 px-3 md:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#10b981]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center relative z-10">
          <div className="space-y-4 md:space-y-8 lg:space-y-10">
            <div className="space-y-3 md:space-y-6">
              <div className="inline-flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Box size={12} className="text-[#10b981] md:w-3.5 md:h-3.5" />
                <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400">Platform Protocol 5.0</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-[5.5rem] font-black tracking-[-0.06em] leading-[0.85] text-white">
                Platform <br />
                <span className="text-[#10b981]">Engineering</span> <br />
                Authority.
              </h1>
              <p className="text-gray-400 text-xs md:text-base lg:text-lg font-medium max-w-xl leading-relaxed">
                We design the foundational digital ecosystems that support millions of users and billions of events per hour.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
              <Link
                href={`${base}#contact`}
                className="w-full sm:w-auto bg-white text-black px-6 md:px-12 py-3 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center space-x-3 md:space-x-4 hover:bg-[#10b981] transition-all duration-500 group"
              >
                <span>Request Architectural Review</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform md:w-[18px] md:h-[18px]" />
              </Link>
            </div>
          </div>
          <div className="relative group hidden lg:block">
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Active</span>
                </div>
              </div>
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Node Status</span>
                    <div className="text-3xl font-black text-[#10b981]">Active</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Availability</span>
                    <div className="text-3xl font-black text-[#10b981]">Multi-AZ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-40 px-3 md:px-6 lg:px-12 bg-[#fafafa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24 items-center">
          <div className="space-y-6 md:space-y-10 lg:space-y-12">
            <div className="space-y-3 md:space-y-6">
              <span className="text-[#10b981] font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.6em]">System Architecture</span>
              <h2 className="text-lg md:text-3xl lg:text-4xl font-black tracking-tighter leading-tight text-[#111]">The Three Layers of <br />Digital Ecosystems.</h2>
            </div>
            <div className="space-y-3 md:space-y-6">
              {architecturalLayers.map((layer, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveLayer(i)}
                  className={`w-full text-left p-3 md:p-8 rounded-xl md:rounded-[2.5rem] border transition-all duration-500 flex items-center justify-between group ${activeLayer === i ? "bg-white border-gray-200 shadow-xl shadow-gray-200/50" : "bg-gray-100/60 border-gray-100 opacity-80 hover:opacity-100 hover:bg-gray-100"}`}
                >
                  <div className="flex items-center space-x-2 md:space-x-6">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm flex-shrink-0">
                      <div className="scale-75 md:scale-100">{layer.icon}</div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs md:text-xl font-black tracking-tight text-[#111] truncate">{layer.title}</h4>
                      <p className="text-[7px] md:text-[10px] font-mono uppercase tracking-wider md:tracking-widest text-gray-500 mt-0.5 md:mt-1 truncate">{layer.tech}</p>
                    </div>
                  </div>
                  <div className={`transition-transform duration-500 flex-shrink-0 ${activeLayer === i ? "rotate-90" : ""}`}>
                    <ArrowRight size={16} className="text-gray-500 md:w-5 md:h-5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-2xl md:rounded-[4rem] p-6 md:p-12 lg:p-20 relative overflow-hidden group shadow-xl shadow-gray-200/50">
              <div className="absolute top-0 right-0 p-6 md:p-12 text-gray-300 opacity-[0.08] hidden md:block"><Workflow size={200} /></div>
              <div className="relative z-10 space-y-4 md:space-y-8 animate-in fade-in duration-1000" key={activeLayer}>
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#10b981]">
                  <div className="scale-75 md:scale-100">{architecturalLayers[activeLayer].icon}</div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-lg md:text-3xl font-black tracking-tighter text-[#111]">{architecturalLayers[activeLayer].title}</h3>
                  <p className="text-gray-600 text-xs md:text-lg font-medium leading-relaxed">
                    {architecturalLayers[activeLayer].desc}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2 md:gap-4">
                  {architecturalLayers[activeLayer].features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-2 md:space-x-3 p-2 md:p-4 bg-gray-50 rounded-lg md:rounded-2xl border border-gray-100">
                      <CheckCircle2 size={12} className="text-[#10b981] md:w-4 md:h-4 flex-shrink-0" />
                      <span className="text-[10px] md:text-xs font-bold text-gray-700">{f}</span>
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
              <Command size={14} className="text-gray-300" />
              <h2 className="text-3xl xl:text-[3rem] font-black tracking-tighter leading-[0.85]">
                Engineered <br />
                for <span className="text-[#10b981]">Scale.</span>
              </h2>
            </div>
            <div className="lg:w-1/3 space-y-6">
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Platforms require foresight. We build systems that are horizontally scalable by default and modular by design.
              </p>
              <div className="flex space-x-2">
                <div className="h-1.5 w-12 bg-[#10b981] rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-100 rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 lg:gap-8 md:auto-rows-[380px]">
            <div className="md:col-span-8 group relative bg-[#050505] rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-between border border-white/5 shadow-2xl min-h-[240px] md:min-h-0">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#10b981] rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              <div className="relative z-10 space-y-3 md:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-[1.8rem] bg-[#10b981] flex items-center justify-center text-black">
                      <Zap size={20} strokeWidth={2.5} className="md:w-8 md:h-8" />
                    </div>
                    <div>
                      <div className="text-white text-[9px] md:text-xs font-bold uppercase tracking-widest">High-Throughput Core</div>
                      <div className="text-[#10b981] text-[7px] md:text-[9px] font-mono mt-0.5 md:mt-1">REALTIME_PROCESSING</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-base md:text-3xl lg:text-5xl font-black text-white leading-none">Billions of <br />Events.</h3>
                <p className="text-gray-500 text-[10px] md:text-sm font-medium max-w-sm">Our platform backends are designed to process massive concurrent data streams with zero packet loss.</p>
              </div>
              
              <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-0">
                <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-2 md:p-3">
                  <div className="text-[#10b981] text-xs md:text-lg font-black">10B+</div>
                  <div className="text-white/40 text-[7px] md:text-[9px] font-mono uppercase">Events/Day</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-2 md:p-3">
                  <div className="text-[#10b981] text-xs md:text-lg font-black">&lt;5ms</div>
                  <div className="text-white/40 text-[7px] md:text-[9px] font-mono uppercase">Latency</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg md:rounded-xl p-2 md:p-3">
                  <div className="text-[#10b981] text-xs md:text-lg font-black">0%</div>
                  <div className="text-white/40 text-[7px] md:text-[9px] font-mono uppercase">Data Loss</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#10b981] rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between items-center relative overflow-hidden group min-h-[240px] md:min-h-0">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-4 right-4 w-20 h-20 md:w-40 md:h-40 border-4 border-black rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 md:w-32 md:h-32 border-4 border-black rounded-lg rotate-12"></div>
              </div>
              
              <div className="relative z-10 w-full flex justify-between items-start mb-auto">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-black/10 flex items-center justify-center">
                  <Radar size={14} className="text-black md:w-6 md:h-6" />
                </div>
                <div className="text-right">
                  <div className="text-[7px] md:text-[9px] font-black uppercase tracking-wider text-black/40">Reliability</div>
                  <div className="text-[8px] md:text-xs font-black uppercase text-black">TIER_1</div>
                </div>
              </div>
              
              <div className="relative z-10 text-center my-auto">
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-none mb-2 md:mb-4">99.9%</div>
                <div className="px-3 md:px-6 py-1.5 md:py-2 bg-black text-[#10b981] rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest inline-block">
                  Platform Uptime
                </div>
              </div>
              
              <div className="relative z-10 w-full grid grid-cols-2 gap-2 mt-auto">
                <div className="text-center">
                  <div className="text-black text-xs md:text-xl font-black">24/7</div>
                  <div className="text-black/60 text-[7px] md:text-[9px] font-bold uppercase">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-black text-xs md:text-xl font-black">&lt;1min</div>
                  <div className="text-black/60 text-[7px] md:text-[9px] font-bold uppercase">Recovery</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#0a0a0a] rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden min-h-[240px] md:min-h-0">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#10b981] shadow-[0_0_20px_#10b981] animate-[scan_3s_ease-in-out_infinite]"></div>
              
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-[#10b981] rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-[1.8rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981]">
                  <ShieldCheck size={20} className="md:w-8 md:h-8" />
                </div>
                <div className="text-right">
                  <div className="text-[7px] md:text-[9px] font-mono text-gray-500 uppercase tracking-wider">Biometric_Protocol</div>
                  <div className="text-[8px] md:text-[10px] font-black text-[#10b981] tracking-wider mt-0.5 md:mt-1">ENCRYPTED</div>
                </div>
              </div>
              
              <div className="relative z-10 space-y-2 md:space-y-4">
                <h3 className="text-base md:text-3xl lg:text-4xl font-black tracking-tighter leading-none">Security <br />Enclave.</h3>
                <p className="text-gray-500 text-[10px] md:text-sm font-medium">Hardened infrastructure with Zero-Trust access and automated threat mitigation patterns.</p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-1.5 md:gap-2">
                <div className="flex items-center gap-1 px-2 md:px-2.5 py-1 bg-white/5 border border-white/10 rounded-md md:rounded-lg text-[8px] md:text-[9px] font-bold text-white/80">
                  <Lock size={8} className="text-[#10b981] md:w-2.5 md:h-2.5" />
                  Zero Trust
                </div>
                <div className="flex items-center gap-1 px-2 md:px-2.5 py-1 bg-white/5 border border-white/10 rounded-md md:rounded-lg text-[8px] md:text-[9px] font-bold text-white/80">
                  <ShieldCheck size={8} className="text-[#10b981] md:w-2.5 md:h-2.5" />
                  E2E Encrypted
                </div>
                <div className="flex items-center gap-1 px-2 md:px-2.5 py-1 bg-white/5 border border-white/10 rounded-md md:rounded-lg text-[8px] md:text-[9px] font-bold text-white/80">
                  <Radar size={8} className="text-[#10b981] md:w-2.5 md:h-2.5" />
                  Threat Detection
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-[#f8f9fa] border border-gray-100 rounded-xl md:rounded-[3.5rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between shadow-inner min-h-[200px] md:min-h-0 gap-3 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-4 right-4 w-16 h-16 md:w-32 md:h-32 border-2 border-gray-900 rounded-lg md:rounded-2xl rotate-12"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 md:w-24 md:h-24 border-2 border-gray-900 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 border-2 border-gray-900 rounded"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-3 md:mb-0">
                  <div className="space-y-1.5 md:space-y-4 flex-1">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <Layers size={14} className="text-[#10b981] md:w-6 md:h-6" />
                      </div>
                      <span className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-wider">Pluggable_System</span>
                    </div>
                    <h3 className="text-base md:text-3xl lg:text-4xl font-black text-black tracking-tighter leading-tight">Modular <br />Design.</h3>
                    <p className="text-gray-500 text-[10px] md:text-sm font-medium max-w-xs">Pluggable architectures that allow you to add features without compromising system stability.</p>
                  </div>
                  <div className="w-16 h-16 md:w-48 md:h-48 bg-white rounded-xl md:rounded-[3rem] shadow-lg border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Layers size={28} className="text-[#10b981] md:w-20 md:h-20" />
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-1.5 md:gap-2">
                <div className="inline-flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white border border-gray-200 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-gray-700">
                  <Box size={10} className="text-[#10b981] md:w-3 md:h-3" />
                  <span>Hot Reload</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white border border-gray-200 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-gray-700">
                  <Hexagon size={10} className="text-[#10b981] md:w-3 md:h-3" />
                  <span>Zero Lock-in</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white border border-gray-200 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-gray-700">
                  <Network size={10} className="text-[#10b981] md:w-3 md:h-3" />
                  <span>API-First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-8 md:mb-20 lg:mb-32 px-3 md:px-6">
          <span className="text-[#10b981] font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.6em]">The Grovyn Protocol</span>
          <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-[5rem] font-black tracking-tighter leading-[0.9] mt-2 md:mt-4">Platform Lifecycle.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-3 md:px-6 lg:px-12">
          {[
            { id: "01", title: "Domain Audit", desc: "Technical audit of requirements and architectural constraints.", icon: <Search size={20} /> },
            { id: "02", title: "Core Blueprint", desc: "Modeling data structures and distributed event flows.", icon: <Box size={20} /> },
            { id: "03", title: "Platform Sprints", desc: "Building modular services with real-time observability.", icon: <Terminal size={20} /> },
            { id: "04", title: "Global Deploy", desc: "Automated scaling tests and multi-region propagation.", icon: <Rocket size={20} /> },
          ].map((step, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-xl md:rounded-[3rem] p-4 md:p-10 space-y-4 md:space-y-8 group hover:border-[#10b981]/30 transition-all">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all">
                <div className="scale-75 md:scale-100">{step.icon}</div>
              </div>
              <div className="space-y-1.5 md:space-y-3">
                <div className="text-[9px] md:text-xs font-mono text-[#10b981] tracking-widest">{step.id}</div>
                <h4 className="text-base md:text-2xl font-black tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-[10px] md:text-xs font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
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

      <section className="py-12 md:py-24 lg:py-40 px-3 md:px-6 lg:px-12 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-lg md:text-3xl lg:text-4xl font-black mb-8 md:mb-16 lg:mb-24 tracking-tight">System Queries <span className="text-[#10b981]">(FAQ)</span></h2>
          <div className="space-y-3 md:space-y-6">
            {[
              { q: "Our current platform is a monolith. Can you help us evolve it without breaking things?", a: "Yes. We’re used to working with existing systems. We introduce new services and move responsibility over step by step so operations stay stable. No “rip and replace” unless that’s what you actually want." },
              { q: "How do you keep our data secure as we scale?", a: "We design for security from the start: least-privilege access, encryption in transit and at rest, and clear boundaries between services. We’ll align with your compliance needs and explain what’s in place so your team can own it." },
              { q: "What if we want to switch clouds or avoid depending on one provider?", a: "We build with that in mind. Using infrastructure-as-code and cloud-agnostic patterns, we keep your platform portable. If a provider has an outage or you want to move, you’re not stuck." },
            ].map((faq, i) => (
              <div key={i} className={`rounded-xl md:rounded-[2.5rem] border-2 p-4 md:p-10 transition-all ${activeFaq === i ? "border-[#10b981] bg-[#f0fdf9]" : "border-gray-100"}`}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center text-xs md:text-xl font-black text-left gap-3">
                  <span>{faq.q}</span>
                  <Plus size={16} className={`flex-shrink-0 md:w-5 md:h-5 ${activeFaq === i ? "rotate-45" : ""}`} />
                </button>
                {activeFaq === i && <p className="mt-3 md:mt-8 text-gray-600 font-medium text-[10px] md:text-lg leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-[4rem] p-8 sm:p-12 lg:p-16 xl:p-24 text-center relative overflow-hidden group">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[5.5rem] font-black text-white leading-tight">The Foundation of <span className="text-[#10b981]">Modern Business.</span></h2>
            <Link href={`${base}#contact`} className="w-full sm:w-auto bg-[#10b981] text-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest mt-8 sm:mt-10 lg:mt-12 hover:scale-105 transition-transform inline-block">Consult Platform Leads</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
