"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Activity,
  Maximize2,
  ShieldCheck,
  Command,
  Radar,
  Share2,
  Rocket,
  Smartphone,
  Wifi,
  Plus,
  AppWindow,
  ScanFace,
} from "lucide-react";

const architecturalLayers = [
  {
    title: "The Native UX Layer",
    tech: "FLUTTER / SWIFT / KOTLIN",
    desc: "Fluid, platform-aware interfaces that leverage native hardware acceleration for a premium look and feel across iOS and Android.",
    features: ["Native Bridging", "60 FPS Animation", "Gesture Recognition"],
    icon: <Smartphone className="text-[#10b981]" />,
  },
  {
    title: "The Logic & Sync Engine",
    tech: "DART / RUST / SQLITE",
    desc: "Efficient background processing and local data synchronization ensuring 100% offline functionality and data integrity.",
    features: ["Conflict Resolution", "Background Workers", "Encryption at Rest"],
    icon: <Cpu className="text-[#10b981]" />,
  },
  {
    title: "The Edge Connector",
    tech: "GRAPHQL / GRPC / WEBSOCKETS",
    desc: "Ultra-fast binary protocols and real-time streams connecting the device to global cloud infrastructure with minimal overhead.",
    features: ["Delta Sync", "Payload Compression", "Retry Strategies"],
    icon: <Wifi className="text-[#10b981]" />,
  },
];

export default function MobileServiceContent() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const t = useTranslations("services_detail.mobile");
  const locale = useLocale();
  const base = `/${locale}`;
  const processSteps = t.raw("process_steps") as { step: string; title: string; desc: string }[];

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-0 overflow-x-hidden selection:bg-[#10b981] selection:text-black font-sans">
      <section className="relative min-h-[55vh] sm:min-h-[60vh] lg:min-h-[65vh] flex flex-col justify-center py-15 sm:py-15 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=2000"
            fill
            className="object-cover opacity-15 grayscale scale-110"
            alt="Mobile Technology Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#10b981]/15 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Smartphone size={14} className="text-[#10b981]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Mobile Engineering Protocol 3.5</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[4.5rem] font-black tracking-[-0.07em] leading-[0.85] text-white">
                Mobile <br />
                <span className="text-[#10b981]">Engineering</span> <br />
                Suite.
              </h1>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium max-w-xl leading-relaxed opacity-80">
                High-performance iOS and Android experiences built for global scale. We bridge the gap between native hardware and user intent with sub-millisecond precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href={`${base}#contact`}
                className="w-full sm:w-auto bg-white text-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-4 hover:bg-[#10b981] transition-all duration-500 group"
              >
                <span>Talk to a Mobile Architect</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href={`${base}/portfolio`}
                className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-md px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-all text-center"
              >
                Case Dossier
              </Link>
            </div>
          </div>

          <div className="relative group hidden lg:block">
            <div className="absolute -inset-10 bg-[#10b981]/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-white/5 border border-white/10 rounded-[4rem] p-10 backdrop-blur-3xl shadow-2xl transform transition-transform duration-1000 group-hover:rotate-1 group-hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-8">
                <div className="flex space-x-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10b981]/40"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity size={18} className="text-[#10b981] animate-pulse" />
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.25em]">CORE_SYNC_ACTIVE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 space-y-4 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">App Launch</span>
                  <div className="text-5xl font-black text-[#10b981] tracking-tighter">0.8s</div>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 space-y-4 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Frame Rate</span>
                  <div className="text-5xl font-black text-[#10b981] tracking-tighter">60 FPS</div>
                </div>
              </div>

              <div className="h-56 w-full bg-black/60 rounded-[2.5rem] border border-white/5 overflow-hidden relative group/img">
                <Image
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=1200"
                  fill
                  className="object-cover opacity-70 group-hover/img:scale-105 transition-transform duration-[3s]"
                  alt="Smartphone Performance Architecture"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-5 left-8 flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
                  <span className="text-[9px] font-mono text-white/60 uppercase tracking-[0.3em]">Device_Render_Pipeline</span>
                </div>
                <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center">
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">A17 Pro / Snapdragon 8 Gen 3</div>
                  <div className="text-[10px] font-mono text-[#10b981] uppercase tracking-[0.2em]">60 FPS Ready</div>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter leading-tight text-[#111]">The Three Layers of <br />Premium Mobile Apps.</h2>
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
            <div className="bg-white border border-gray-200 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden group shadow-xl shadow-gray-200/50">
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
                <span>Mobile_Engineering_Authority</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[6.5rem] font-black tracking-tighter leading-[0.85]">
                Engineered <br />
                for <span className="text-[#10b981]">Mobility.</span>
              </h2>
            </div>
            <div className="lg:w-1/3 space-y-6">
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Mobile engineering is about resource management. We optimize for extreme battery life, offline reliability, and instant response.
              </p>
              <div className="flex space-x-2">
                <div className="h-1.5 w-12 bg-[#10b981] rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-100 rounded-full"></div>
                <div className="h-1.5 w-4 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 lg:gap-8 md:auto-rows-[440px]">
            <div className="md:col-span-8 group relative bg-[#050505] rounded-xl md:rounded-[4rem] p-4 md:p-8 lg:p-12 xl:p-16 overflow-hidden flex flex-col justify-between transition-all duration-700 shadow-2xl border border-white/5 hover:scale-[1.01] min-h-[240px] md:min-h-0">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1200"
                  fill
                  className="object-cover grayscale mix-blend-overlay opacity-30"
                  alt="Chip Architecture"
                />
                <svg className="absolute bottom-0 left-0 w-full h-1/2" viewBox="0 0 800 200">
                  <path d="M0 100 Q 100 0 200 100 T 400 100 T 600 100 T 800 100" fill="none" stroke="#10b981" strokeWidth="1" className="animate-[dash_5s_linear_infinite]" />
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-6 md:space-y-12">
                  <div className="flex items-center space-x-3 md:space-x-6">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-[2.2rem] bg-[#10b981] flex items-center justify-center text-black shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                      <Zap size={24} strokeWidth={2.5} className="md:w-10 md:h-10" />
                    </div>
                    <div className="space-y-0.5 md:space-y-1.5">
                      <span className="text-[8px] md:text-[10px] font-mono text-[#10b981] uppercase tracking-[0.25em] block">Execution_Matrix</span>
                      <div className="text-white text-[9px] md:text-xs font-black uppercase tracking-widest">Battery Optimized Execution</div>
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-6">
                    <h3 className="text-lg md:text-3xl lg:text-4xl xl:text-6xl font-black tracking-tight leading-[0.9] text-white">Sub-100ms <br />Response.</h3>
                    <p className="text-gray-500 text-[10px] md:text-sm lg:text-base font-medium max-w-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                      We minimize main-thread blocking to ensure liquid-smooth interactions even on low-end hardware.
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block space-y-8">
                  <div className="text-right">
                    <div className="text-4xl font-black text-white">0.8s</div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">First_Meaningful_Paint</div>
                  </div>
                  <div className="h-40 w-56 bg-white/5 rounded-[2.5rem] border border-white/10 p-8 flex flex-col items-center justify-center group-hover:border-[#10b981]/40 transition-colors">
                    <Activity size={56} className="text-[#10b981] animate-pulse" />
                    <span className="text-[9px] font-mono text-white/20 uppercase mt-4">UI_THREAD_READY</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center space-x-3 md:space-x-6 mt-4 md:mt-0">
                <div className="flex items-center space-x-1.5 md:space-x-2.5 text-[9px] md:text-[11px] font-mono text-[#10b981] font-black uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#10b981] animate-ping"></div>
                  <span>PERF_MONITOR: ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#10b981] rounded-xl md:rounded-[4rem] p-4 md:p-8 lg:p-12 flex flex-col justify-between items-center relative overflow-hidden group hover:scale-[1.03] transition-all duration-700 min-h-[200px] md:min-h-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>

              <div className="relative z-10 w-full flex justify-between items-start">
                <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-black/10 backdrop-blur-xl flex items-center justify-center text-black">
                  <Radar size={14} className="md:w-7 md:h-7" />
                </div>
                <div className="text-right">
                  <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-black/40">Reliability</span>
                  <span className="text-[8px] md:text-xs font-bold text-black block mt-0.5 md:mt-1">TIER_1</span>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-3xl md:text-6xl lg:text-8xl xl:text-[9.5rem] font-black tracking-tighter text-black leading-none mb-2 md:mb-6 drop-shadow-xl">98.5%</div>
                <div className="px-3 md:px-8 lg:px-10 py-1 md:py-3 bg-black text-[#10b981] rounded-full text-[7px] md:text-[11px] font-black uppercase tracking-[0.4em] inline-block shadow-2xl">
                  CRASH-FREE USERS
                </div>
              </div>

              <div className="relative z-10 w-full text-center">
                <p className="text-black/60 font-black text-[9px] md:text-xs uppercase tracking-widest">Stabilized Core Framework</p>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#0a0a0a] rounded-xl md:rounded-[4rem] p-4 md:p-8 lg:p-12 xl:p-16 text-white flex flex-col justify-between relative overflow-hidden group hover:bg-[#111] transition-all min-h-[220px] md:min-h-0">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#10b981] shadow-[0_0_20px_#10b981] animate-[scan_4s_ease-in-out_infinite] opacity-40 z-20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.08)_0%,_transparent_100%)]"></div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-[1.8rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981]">
                  <ShieldCheck size={20} className="md:w-10 md:h-10" />
                </div>
                <div className="text-right">
                  <span className="text-[7px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Biometric_Protocol</span>
                  <span className="text-[8px] md:text-[11px] font-black text-[#10b981] tracking-widest">ENCRYPTED</span>
                </div>
              </div>

              <div className="relative z-10 space-y-3 md:space-y-8">
                <div className="space-y-2 md:space-y-6">
                  <h3 className="text-base md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter leading-none">Biometric <br />Security.</h3>
                  <p className="text-gray-500 text-[10px] md:text-sm lg:text-base font-medium leading-relaxed max-w-xs line-clamp-2 md:line-clamp-none">
                    Deep integration with FaceID, Fingerprint sensors, and secure enclave storage for enterprise-grade data isolation.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-12 right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 hidden md:block">
                <ScanFace size={240} />
              </div>
            </div>

            <div className="md:col-span-7 bg-[#f8f9fa] border border-gray-100 rounded-xl md:rounded-[4rem] p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row items-center justify-between group hover:border-[#10b981]/40 transition-all duration-700 relative overflow-hidden shadow-inner min-h-[240px] md:min-h-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(16,185,129,0.03)_0%,_transparent_70%)]"></div>

              <div className="relative z-10 space-y-6 md:space-y-10 lg:space-y-12 flex-grow">
                <div className="space-y-3 md:space-y-6">
                  <div className="flex items-center space-x-2 md:space-x-3 text-[8px] md:text-[11px] font-black text-[#10b981] uppercase tracking-[0.5em]">
                    <AppWindow size={12} className="md:w-4 md:h-4" />
                    <span className="text-[7px] md:text-[11px]">Native_API_Integration</span>
                  </div>
                  <h3 className="text-lg md:text-3xl lg:text-4xl xl:text-[5rem] font-black text-black tracking-tighter leading-[0.9]">Native <br />Ecosystem.</h3>
                  <p className="text-gray-500 text-[10px] md:text-sm lg:text-base font-medium max-w-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    Full access to camera, location, and motion sensors with optimized permission handling and hardware-level performance.
                  </p>
                </div>

                <div className="flex space-x-6 md:space-x-12">
                  <div className="space-y-0.5 md:space-y-1">
                    <div className="text-xl md:text-3xl font-black text-black tracking-tight">100%</div>
                    <div className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Ownership</div>
                  </div>
                  <div className="w-[1px] h-10 md:h-14 bg-gray-200"></div>
                  <div className="space-y-0.5 md:space-y-1">
                    <div className="text-xl md:text-3xl font-black text-black tracking-tight">Tier 1</div>
                    <div className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Hardware Access</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full lg:w-[48%] aspect-square hidden md:flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-[4.5rem] overflow-hidden shadow-2xl border-4 border-white transform group-hover:rotate-6 transition-transform duration-700">
                    <Image
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
                      fill
                      className="object-cover"
                      alt="Modern Smartphone Engineering"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#10b981] rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] animate-bounce group-hover:animate-none">
                    <Smartphone size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20 lg:mb-32 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Workflow size={14} className="text-[#10b981]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">THE GROVYN PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[7rem] font-black tracking-[-0.05em] leading-[0.9]">Mobile Lifecycle.</h2>
            <p className="text-gray-500 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              A synchronized progression from deep user discovery to global store optimization.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="hidden lg:block col-span-4 h-0 relative overflow-visible">
              <div className="absolute top-[4rem] left-0 right-0 h-[2px] bg-gradient-to-r from-[#10b981]/30 via-[#10b981]/20 to-[#10b981]/30">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-[#10b981] animate-[moveThread_4s_linear_infinite]"></div>
              </div>
            </div>
              {[
                { id: "01", phase: "Discovery", title: "Human Research", desc: "Auditing user flows and defining native architectural constraints.", icon: <Search size={22} />, tasks: ["User Flow Audit", "Hardware Analysis", "Market Research"] },
                { id: "02", phase: "Blueprint", title: "Native Blueprint", desc: "Modeling state management and local storage schemas.", icon: <Box size={22} />, tasks: ["Data Modeling", "State Management", "API Design"] },
                { id: "03", phase: "Production", title: "Agile Sprints", desc: "Developing with automated UI tests and daily CI builds.", icon: <Terminal size={22} />, tasks: ["Daily CI Builds", "Automated UI Tests", "Logic Sprints"] },
                { id: "04", phase: "Execution", title: "Store Deploy", desc: "Automated submission to App Store and Play Store ecosystems.", icon: <Rocket size={22} />, tasks: ["Compliance Check", "Asset Bundling", "Store Review"] },
              ].map((step, i) => (
                <div key={i} className="group relative">
                  <div className="hidden lg:flex absolute top-[4rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#10b981] z-20 group-hover:bg-[#10b981] transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
                  <div className="bg-white/5 border border-white/5 rounded-[3rem] p-10 pt-16 lg:pt-24 space-y-8 transition-all duration-700 hover:bg-white/10 hover:border-[#10b981]/30 hover:-translate-y-2 group">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-[10px] font-mono text-[#10b981] uppercase tracking-[0.3em]">{step.phase}</div>
                        <div className="text-[10px] font-mono text-white/20 uppercase">PHASE_{step.id}</div>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all shadow-xl">
                        {step.icon}
                      </div>
                      <h4 className="text-2xl font-black tracking-tight">{step.title}</h4>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="pt-6 border-t border-white/5 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {step.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1 h-1 rounded-full bg-[#10b981]"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
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
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-black mb-12 sm:mb-16 lg:mb-24 tracking-tight">Mobile Queries <span className="text-[#10b981]">(FAQ)</span></h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "Native vs Hybrid: What do you recommend?", a: "For maximum performance and hardware access, we recommend native (Swift/Kotlin). For rapid cross-platform scaling with high fidelity, Flutter is our standard." },
              { q: "How do you handle offline synchronization?", a: "We implement robust local-first architectures using SQLite or Hive with sophisticated conflict resolution logic for cloud sync." },
              { q: "Do you handle App Store submissions?", a: "Yes. We manage the entire lifecycle from provisioning profiles to Store Review, ensuring your app meets all compliance guidelines." },
            ].map((faq, i) => (
              <div key={i} className={`rounded-[2.5rem] border-2 p-10 transition-all ${activeFaq === i ? "border-[#10b981] bg-[#f0fdf9]" : "border-gray-100"}`}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center text-xl font-black text-left">
                  <span>{faq.q}</span>
                  <Plus size={20} className={activeFaq === i ? "rotate-45" : ""} />
                </button>
                <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${activeFaq === i ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-gray-600 font-medium text-lg leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-[4rem] p-8 sm:p-12 lg:p-16 xl:p-24 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.1)_0%,_transparent_70%)]"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[7.5rem] font-black text-white leading-tight tracking-tighter relative z-10">Build the <br /><span className="text-[#10b981]">App of Tomorrow.</span></h2>
            <Link href={`${base}#contact`} className="w-full sm:w-auto bg-[#10b981] text-black px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl font-black text-xs uppercase tracking-widest mt-8 sm:mt-10 lg:mt-12 hover:scale-105 transition-transform shadow-[0_0_50px_rgba(16,185,129,0.3)] relative z-10 inline-block">Start Mobile Brief</Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(440px); }
        }
        @keyframes moveThread {
          0% { left: -25%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
