"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Plus,
  Play,
  Star,
  Terminal,
  History,
  Linkedin,
  Github,
  Zap,
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200";
const MISSION_IMG_1 = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600";
const MISSION_IMG_2 = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600";
const VISION_IMG_1 = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000";
const VISION_IMG_2 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600";
const HISTORY_IMG = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200";
const HISTORY_DETAIL_IMG = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600";
const PROCESS_VIDEO_IMG = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200";

const stats = [
  { label: "Production Systems", value: "150+" },
  { label: "Engineering Leads", value: "45+" },
  { label: "Platform Audits", value: "200+" },
  { label: "Uptime Score", value: "99.9%" },
];

const team = [
  { name: "Alex Sterling", role: "Chief Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Sarah Jenkins", role: "Head of Mobile", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  { name: "David Chen", role: "Infra Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
  { name: "Elena Rodriguez", role: "UI/UX Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
];

export default function AboutContent() {
  const locale = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden selection:bg-[#10b981] selection:text-white">
      <section className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          <div className={`lg:w-1/2 space-y-6 sm:space-y-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400">
              <Link href={`/${locale}`} className="hover:text-[#10b981] transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-[#10b981]">About Us</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.5rem] font-black tracking-tighter leading-[0.95] sm:leading-[0.9] text-[#111]">
              Crafting Digital <br />
              <span className="text-[#10b981]">Excellence Together.</span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed max-w-xl italic border-l-4 border-[#10b981] pl-4 sm:pl-6">
              &quot;At Grovyn, we believe in the power of engineering collaboration to achieve outstanding results.
              With a team of elite specialists, we build systems that stand the test of time.&quot;
            </p>

            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center justify-center space-x-3 sm:space-x-4 bg-black text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#10b981] hover:text-black transition-all shadow-2xl group"
            >
              <span>Learn Our Strategy</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="lg:w-1/2 w-full relative group mt-12 lg:mt-0">
            <div className="relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-gray-50 aspect-[1] md:aspect-square">
              <Image
                src={HERO_IMG}
                alt="Team Collaboration"
                fill
                className="object-cover transition-transform duration-[4s] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="hidden sm:block absolute -bottom-8 -left-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 max-w-[200px]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#10b981] flex items-center justify-center text-white shadow-lg">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <div className="text-3xl font-black text-[#111]">150+</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-1">
                    Projects Shipped
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50 border-y border-gray-100 text-center">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-gray-600 italic px-2 sm:px-0">
            At Grovyn we are committed to revolutionizing the <span className="text-[#10b981] font-black">SaaS industry</span> with
            innovative, sustainable, and cost-effective solutions. We combine{" "}
            <span className="text-black font-black">state-of-the-art technology</span> to bring visions to life.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pt-8 sm:pt-12">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111] tracking-tighter">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[400px] sm:h-[600px] bg-gradient-to-b from-[#10b981]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[#10b981] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                Founder&apos;s Note
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-20 shadow-2xl border border-gray-100 relative">
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-12 md:left-12 text-[#10b981]/10 text-[6rem] sm:text-[8rem] md:text-[12rem] font-serif leading-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative space-y-6 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#111] tracking-tight leading-tight">
                  Trust is the most valuable thing in the world.
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 leading-relaxed">
                  It must be earned and carefully upheld.
                </p>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#10b981] to-transparent" />
                <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-200 to-transparent" />
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed italic border-l-4 border-[#10b981] pl-4 sm:pl-8">
                &quot;At Grovyn, we believe trust is built through integrity, consistency, and doing the right thing even when it is harder. 
                It is earned over time and forms the foundation of everything we build and every partnership we commit to.&quot;
              </blockquote>

              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="h-[2px] w-12 sm:w-16 bg-[#10b981]" />
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#111] tracking-tight">
                      Grovyn Founder
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 pl-14 sm:pl-20">
                    Engineering Excellence
                  </p>
                </div>
                
                <div className="bg-[#10b981]/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 border border-[#10b981]/20">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#10b981] flex items-center justify-center">
                      <Check size={18} strokeWidth={3} className="text-white sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-[#111]">Trust First</div>
                      <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-gray-400">
                        Our Core Value
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981]/30" />
              <div className="w-2 h-2 rounded-full bg-[#10b981]/50" />
              <div className="w-2 h-2 rounded-full bg-[#10b981]" />
              <div className="w-2 h-2 rounded-full bg-[#10b981]/50" />
              <div className="w-2 h-2 rounded-full bg-[#10b981]/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
              <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl translate-y-8 sm:translate-y-12 relative">
                <Image src={MISSION_IMG_1} alt="Mission 01" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative">
                  <Image src={MISSION_IMG_2} alt="Mission 02" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl bg-[#10b981]/10 flex items-center justify-center border-4 border-[#10b981]/20">
                  <Terminal size={36} className="text-[#10b981] sm:w-12 sm:h-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 sm:space-y-10 mt-12 lg:mt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 text-[#10b981] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                <div className="w-6 sm:w-8 h-[2px] bg-[#10b981]" />
                <span>Core Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-none italic text-[#111]">
                Our <span className="text-[#10b981]">Mission.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed">
              To provide exceptional engineering services that exceed client expectations through innovation, quality
              craftsmanship, and a commitment to longevity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {["Fostering Sustainable Growth", "Innovating for the Future", "Customer-Centric Architecture", "Building Scalable Ecosystems"].map(
                (item) => (
                  <div key={item} className="flex items-center space-x-3 sm:space-x-4 group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-all flex-shrink-0">
                      <Check size={12} strokeWidth={3} className="sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="font-bold text-gray-700 text-sm">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 sm:gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative w-full">
            <div className="relative">
              <div className="rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden aspect-[4/3] shadow-2xl relative z-10 border-4 sm:border-8 border-white bg-white">
                <Image src={VISION_IMG_1} alt="Vision 01 - Strategic Planning" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-15 sm:-bottom-16 -left-2 sm:-left-16 w-2/3 rounded-[2rem] sm:rounded-[3rem] overflow-hidden aspect-square shadow-2xl z-20 border-4 sm:border-8 border-white bg-white">
                <Image src={VISION_IMG_2} alt="Vision 02 - Implementation" fill className="object-cover" sizes="40vw" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 sm:space-y-10 mt-16 sm:mt-20 lg:mt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 text-[#10b981] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                <div className="w-6 sm:w-8 h-[2px] bg-[#10b981]" />
                <span>Global Outlook</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-none italic text-[#111]">
                Our <span className="text-[#10b981]">Vision.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed">
              At Grovyn, our vision is to redefine the future of SaaS through cutting-edge technology and eco-friendly
              practices. We strive to lead the industry toward a smarter future.
            </p>
            <div className="space-y-4 sm:space-y-6">
              {["Inspiring Modern Architecture", "Pioneering Sustainable Systems", "Empowering Global Innovators"].map((item) => (
                <div key={item} className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#10b981] flex items-center justify-center text-white flex-shrink-0">
                    <Check size={12} strokeWidth={3} className="sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="font-bold text-[#111] text-base sm:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative group w-full">
            <div className="rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden aspect-video shadow-2xl border-4 sm:border-8 border-gray-100 mb-6 sm:mb-8 relative">
              <Image
                src={HISTORY_IMG}
                alt="History"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-1 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-square shadow-xl relative">
                <Image src={HISTORY_DETAIL_IMG} alt="History Detail" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 20vw" />
              </div>
              <div className="flex-[1.5] bg-black rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between text-white">
                <History size={32} className="text-[#10b981] sm:w-10 sm:h-10" />
                <div>
                  <div className="text-2xl sm:text-3xl font-black">2025</div>
                  <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">Foundation Year</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 text-[#10b981] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                <div className="w-6 sm:w-8 h-[2px] bg-[#10b981]" />
                <span>Archive & Growth</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-none italic text-[#111]">
                Our <span className="text-[#10b981]">History.</span>
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-gray-600 text-sm sm:text-base font-medium leading-relaxed">
              <p>
                Grovyn began with a simple intention. To make engineering smoother, more reliable, and easier to scale for growing teams.
              </p>

              <p>
                We saw founders and businesses spending too much time managing complexity instead of building what truly mattered. 
                Engineering felt heavy, slow, and fragmented. Decisions made early often became obstacles later.
              </p>

              <p className="text-gray-900 font-bold">
                We set out to change that.
              </p>

              <p>
                Today, we help teams simplify their engineering journey through clean software, well structured systems, and practical AI automation. 
                From core product development to LLM powered workflows, our goal remains the same. Reduce friction, improve clarity, and build 
                technology that works well today and continues to work as teams and products grow.
              </p>

              <p className="text-gray-900 font-bold pt-2">
                Grovyn is built on the belief that good technology should support progress, not slow it down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic text-[#111]">
            How We <span className="text-[#10b981]">Work.</span>
          </h2>
          <div className="relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden aspect-video shadow-2xl group cursor-pointer">
            <Image
              src={PROCESS_VIDEO_IMG}
              alt="Process Video"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 800px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#10b981] flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-6 sm:gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter italic text-[#111]">
              Crafting Excellence as a <span className="text-[#10b981]">Team.</span>
            </h2>
            <button
              type="button"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-[#10b981]/10 text-[#10b981] rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-[#10b981]/20 transition-colors shrink-0"
            >
              Explore All Squads
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, i) => (
              <div key={i} className="group flex flex-col space-y-4 sm:space-y-6">
                <div className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden aspect-[1] max-w-[400px] shadow-xl border-4 border-white">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-col space-y-2 sm:space-y-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Linkedin size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Github size={14} className="sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#111]">{member.name}</h4>
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#10b981] mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', 
            backgroundSize: '32px 32px' 
          }}
        />

        <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#10b981]/5 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/5 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-24">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#10b981]/10 text-[#10b981] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] border border-[#10b981]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>Our Values</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter leading-none text-[#111] px-4">
              GROW <span className="text-[#10b981] mx-2 sm:mx-4">×</span> WIN
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111] tracking-tight">
                  GROW
                </h3>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 sm:w-12 h-[2px] bg-[#10b981]" />
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-400">
                    How We Build
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Grounded Growth",
                    desc: "We prioritise steady, responsible growth over rushed outcomes."
                  },
                  {
                    title: "Resilient Health",
                    desc: "We build healthy systems, teams, and partnerships designed to last."
                  },
                  {
                    title: "Owned Ambition",
                    desc: "We set high standards and take full responsibility for meeting them."
                  },
                  {
                    title: "With the Customer",
                    desc: "We work closely with our customers, building alongside them with openness and respect."
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 hover:border-[#10b981]/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div className="space-y-1.5 sm:space-y-2">
                        <h4 className="text-lg sm:text-xl font-black text-[#111] group-hover:text-[#10b981] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111] tracking-tight">
                  WIN
                </h3>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 sm:w-12 h-[2px] bg-[#10b981]" />
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-400">
                    Why It Works
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {[
                  "We succeed when our clients succeed.",
                  "When products scale smoothly.",
                  "When technology becomes a strength, not a bottleneck.",
                  "When trust deepens over time."
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10b981] flex-shrink-0 group-hover:bg-[#10b981] group-hover:text-white transition-all">
                      <Check size={12} strokeWidth={3} className="sm:w-3.5 sm:h-3.5" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed group-hover:text-[#111] transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-4 sm:space-y-6 shadow-xl hover:shadow-2xl transition-all">
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                    Ready to Grow & Win Together?
                  </h4>
                  <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed">
                    Let's build systems that scale, teams that thrive, and products that win in the market.
                  </p>
                </div>
                <Link
                  href={`/${locale}#contact`}
                  className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white text-[#10b981] px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl group w-full sm:w-auto"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
