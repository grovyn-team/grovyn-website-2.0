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
    <div className="bg-[#050505] text-white min-h-screen pt-20 overflow-x-hidden selection:bg-[#10b981] selection:text-black font-sans">
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#10b981]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Box size={14} className="text-[#10b981]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Platform Protocol 5.0</span>
              </div>
              <h1 className="text-5xl lg:text-[5.5rem] font-black tracking-[-0.06em] leading-[0.85] text-white">
                Platform <br />
                <span className="text-[#10b981]">Engineering</span> <br />
                Authority.
              </h1>
              <p className="text-gray-400 text-base lg:text-lg font-medium max-w-xl leading-relaxed">
                We design the foundational digital ecosystems that support millions of users and billions of events per hour.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href={`${base}#contact`}
                className="bg-white text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-4 hover:bg-[#10b981] transition-all duration-500 group"
              >
                <span>Request Architectural Review</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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

      <section className="py-40 px-6 lg:px-12 bg-[#fafafa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em]">System Architecture</span>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-tight text-[#111]">The Three Layers of <br />Digital Ecosystems.</h2>
            </div>
            <div className="space-y-4">
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

      <section className="py-40 px-6 lg:px-12 bg-white text-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-4">
              <Command size={14} className="text-gray-300" />
              <h2 className="text-5xl lg:text-[5rem] font-black tracking-tighter leading-[0.85]">
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[380px]">
            <div className="md:col-span-8 group relative bg-[#050505] rounded-[3.5rem] p-12 overflow-hidden flex flex-col justify-between border border-white/5 shadow-2xl">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-[1.8rem] bg-[#10b981] flex items-center justify-center text-black">
                    <Zap size={32} strokeWidth={2.5} />
                  </div>
                  <div className="text-white text-xs font-bold uppercase tracking-widest">High-Throughput Core</div>
                </div>
                <h3 className="text-3xl lg:text-5xl font-black text-white leading-none">Billions of <br />Events.</h3>
                <p className="text-gray-500 text-sm font-medium max-w-sm">Our platform backends are designed to process massive concurrent data streams with zero packet loss.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#10b981] rounded-[3.5rem] p-12 flex flex-col justify-between items-center relative overflow-hidden group">
              <div className="text-7xl font-black text-black leading-none">99.9%</div>
              <p className="text-black font-bold uppercase tracking-widest">Platform Uptime</p>
            </div>

            <div className="md:col-span-5 bg-[#0a0a0a] rounded-[3.5rem] p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <ShieldCheck size={32} className="text-[#10b981]" />
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-black tracking-tighter leading-none">Security <br />Enclave.</h3>
                <p className="text-gray-500 text-sm">Hardened infrastructure with Zero-Trust access and automated threat mitigation patterns.</p>
              </div>
            </div>

            <div className="md:col-span-7 bg-[#f8f9fa] border border-gray-100 rounded-[3.5rem] p-12 flex flex-col lg:flex-row items-center justify-between shadow-inner">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-black text-black tracking-tighter">Modular <br />Design.</h3>
                <p className="text-gray-500 text-sm font-medium max-w-xs">Pluggable architectures that allow you to add features without compromising system stability.</p>
              </div>
              <div className="w-48 h-48 bg-white rounded-[3rem] shadow-lg border border-gray-100 flex items-center justify-center">
                <Layers size={80} className="text-[#10b981]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-32">
          <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em]">The Grovyn Protocol</span>
          <h2 className="text-4xl lg:text-[5rem] font-black tracking-tighter leading-[0.9] mt-4">Platform Lifecycle.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
          {[
            { id: "01", title: "Domain Audit", desc: "Technical audit of requirements and architectural constraints.", icon: <Search size={20} /> },
            { id: "02", title: "Core Blueprint", desc: "Modeling data structures and distributed event flows.", icon: <Box size={20} /> },
            { id: "03", title: "Platform Sprints", desc: "Building modular services with real-time observability.", icon: <Terminal size={20} /> },
            { id: "04", title: "Global Deploy", desc: "Automated scaling tests and multi-region propagation.", icon: <Rocket size={20} /> },
          ].map((step, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-[3rem] p-10 space-y-8 group hover:border-[#10b981]/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all">
                {step.icon}
              </div>
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#10b981] tracking-widest">{step.id}</div>
                <h4 className="text-2xl font-black tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#10b981] tracking-tight mb-3">
            {t("methodology_heading")}
          </h2>
          <p className="text-xl font-bold text-[#111] mb-14">
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

      <section className="py-40 px-6 lg:px-12 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl font-black mb-24 tracking-tight">System Queries <span className="text-[#10b981]">(FAQ)</span></h2>
          <div className="space-y-6">
            {[
              { q: "Can you migrate legacy systems?", a: "Yes, we specialize in modernizing legacy monoliths into distributed platform architectures without disrupting operations." },
              { q: "How do you ensure data security at scale?", a: "We implement Zero-Trust models and end-to-end encryption across all internal and external communication channels." },
              { q: "What is your approach to multi-cloud?", a: "We use Infrastructure as Code (Terraform) to ensure that your platform remains cloud-agnostic and resilient to provider outages." },
            ].map((faq, i) => (
              <div key={i} className={`rounded-[2.5rem] border-2 p-10 transition-all ${activeFaq === i ? "border-[#10b981] bg-[#f0fdf9]" : "border-gray-100"}`}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center text-xl font-black text-left">
                  <span>{faq.q}</span>
                  <Plus size={20} className={activeFaq === i ? "rotate-45" : ""} />
                </button>
                {activeFaq === i && <p className="mt-8 text-gray-600 font-medium text-lg leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden group">
            <h2 className="text-5xl lg:text-[5.5rem] font-black text-white leading-tight">The Foundation of <span className="text-[#10b981]">Modern Business.</span></h2>
            <Link href={`${base}#contact`} className="bg-[#10b981] text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest mt-12 hover:scale-105 transition-transform inline-block">Consult Platform Leads</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
