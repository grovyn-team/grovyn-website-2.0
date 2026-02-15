"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
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
  Zap,
  Calendar,
  Sparkles,
  Rocket,
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200";
const MISSION_IMG_1 = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600";
const MISSION_IMG_2 = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600";
const VISION_IMG_1 = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000";
const VISION_IMG_2 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600";
const HISTORY_IMG = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200";
const HISTORY_DETAIL_IMG = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600";
const team = [
  { name: "Aman K.A", roleKey: "team_role_ceo", img: "/assets/aman-slack.jpeg", linkedin: "https://www.linkedin.com/in/aman-k-a-303561183" },
  { name: "Gaurav Singh", roleKey: "team_role_cto", img: "https://media.licdn.com/dms/image/v2/D5603AQExg7d-EHaDFQ/profile-displayphoto-scale_200_200/B56ZpZmsT_HAAY-/0/1762439913466?e=1772064000&v=beta&t=HBm55F47ucAYKcaCJh_Dfh2eJsWt32ZOmFHYG1Gy8Gg", linkedin: "https://www.linkedin.com/in/thakurgaurav273" },
  { name: "Janmejay Singh", roleKey: "team_role_hoe", img: "/assets/jj.png", linkedin: "https://www.linkedin.com/in/sjanmejay1" },
  { name: "Navya Pandey", roleKey: "team_role_sales", img: "https://media.licdn.com/dms/image/v2/D5603AQHjDD7ouJil5Q/profile-displayphoto-scale_400_400/B56ZuwrHG5IgAg-/0/1768195658607?e=1772064000&v=beta&t=ZL-0bMmseT4xLWxV1EIoTfImQsEN5KDob5g1VDsyt6U", linkedin: "https://www.linkedin.com/in/navya-pandey-22techinnovative" },
];

export default function AboutContent() {
  const locale = useLocale();
  const t = useTranslations("about");
  const [isVisible, setIsVisible] = useState(false);

  const stats = useMemo(
    () => [
      { label: t("stat_projects_delivered"), value: "25+" },
      { label: t("stat_team_members"), value: "15+" },
      { label: t("stat_founders"), value: "2" },
      { label: t("stat_designers"), value: "3+" },
    ],
    [t]
  );

  const processSteps = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6].map((i) => ({
        title: t(`process_${i}_title`),
        duration: t(`process_${i}_duration`),
        activities: [t(`process_${i}_activity_1`), t(`process_${i}_activity_2`), t(`process_${i}_activity_3`)],
        outcome: t(`process_${i}_outcome`),
      })),
    [t]
  );

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden selection:bg-[#10b981] selection:text-white">
      <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col justify-center py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          <div className={`lg:w-1/2 space-y-5 sm:space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <nav className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400">
              <Link href={`/${locale}`} className="hover:text-[#10b981] transition-colors">
                {t("page_nav_home")}
              </Link>
              <ChevronRight size={14} className="text-gray-300" />
              <span className="text-[#10b981]">{t("page_nav_about_us")}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] lg:text-[3.75rem] font-black tracking-tight leading-[1.05] text-[#111]">
              {t("page_hero_title")}
              <br />
              <span className="text-[#10b981]">{t("page_hero_highlight")}</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed max-w-xl border-l-4 border-[#10b981]/60 pl-5 sm:pl-6">
              {t("page_hero_subtitle")}
            </p>

            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center gap-3 bg-[#111] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-sm tracking-tight hover:bg-[#10b981] transition-colors duration-300 shadow-lg shadow-black/5 group"
            >
              <span>{t("page_cta")}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:w-1/2 w-full relative mt-6 lg:mt-0">
            <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/5 aspect-[4/5] sm:aspect-square max-w-lg mx-auto lg:max-w-none">
              <Image
                src={HERO_IMG}
                alt="Team collaboration"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="hidden sm:flex absolute -bottom-6 -left-4 lg:-left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-[200px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10b981] flex items-center justify-center text-white shrink-0">
                  <Zap size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#111] leading-none">25+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">
                    {t("projects_shipped")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#fafafa] border-y border-gray-100/80">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-16">
            {t("commitment_para_1")} <span className="text-[#10b981] font-semibold">{t("commitment_para_2")}</span> {t("commitment_para_3")}
            <span className="text-[#111] font-semibold"> {t("commitment_para_4")}</span> {t("commitment_para_5")}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center py-4 sm:py-6 px-4 rounded-2xl bg-white/80 border border-gray-100/80 shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#111] tracking-tight">{stat.value}</div>
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note - matches reference: pinstripe bg, avatar+pill, title with underline, quote, blockquote with large decorative quotes */}
      <section
        className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12"
        style={{
          backgroundColor: "#ebeae8",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 3px)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative overflow-hidden rounded-2xl bg-white px-8 sm:px-10 lg:px-12 py-8 sm:py-10"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {/* Top left: circular avatar (dark green border) + oval FOUNDER & CEO tag */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2"
                style={{ borderColor: "#346800" }}
              >
                <Image
                  src="/aman.png"
                  alt="Aman K A - Founder & CEO"
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                  loading="lazy"
                />
              </div>
              <span
                className="px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white rounded-full"
                style={{ backgroundColor: "#346800" }}
              >
                {t("founder_badge")}
              </span>
            </div>

            <div className="text-center mb-8">
              <h2 className="font-founder-heading text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "#121212" }}>
                {t("founder_note_title")}
              </h2>
              <div className="mt-2 mx-auto w-16 h-0.5 rounded-full" style={{ backgroundColor: "#346800" }} aria-hidden />
            </div>

            <div className="text-center mb-2">
              <p className="text-base sm:text-lg font-bold" style={{ color: "#121212" }}>
                {t("founder_quote_1")}
              </p>
            </div>
            <p className="text-center text-sm sm:text-base italic mb-8" style={{ color: "#9ca3af" }}>
              {t("founder_quote_2")}
            </p>

            <div className="relative pl-10 sm:pl-12">
              <span
                className="absolute left-4 top-0 font-serif text-4xl sm:text-5xl font-bold leading-none select-none"
                style={{ color: "#d1d5db" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="text-base sm:text-lg leading-[1.7] text-left" style={{ color: "#374151" }}>
                {t("founder_blockquote")}
              </p>
            </div>

            <p className="mt-8 text-right text-xs sm:text-sm font-medium" style={{ color: "#9ca3af" }}>
              - {t("founder_attribution")}
            </p>
          </motion.article>
        </div>
      </section>


      
      {/* comment out for now */}
      {/* <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
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
      </section> */}
      {/* comment out for now */}
      {/* <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 bg-gray-50">
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
      </section> */}

      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-14 sm:gap-20 lg:gap-24">
          <div className="lg:w-1/2 w-full relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video shadow-lg ring-1 ring-black/5 mb-6">
              <Image
                src={HISTORY_IMG}
                alt="Our journey"
                fill
                className="object-cover grayscale-[20%] transition-all duration-500 hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1 rounded-2xl overflow-hidden aspect-square shadow-md ring-1 ring-black/5 relative">
                <Image src={HISTORY_DETAIL_IMG} alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 20vw" loading="lazy" />
              </div>
              <div className="flex-[1.4] rounded-2xl p-6 sm:p-8 bg-[#111] text-white ring-1 ring-white/10 shadow-xl flex flex-col justify-center">
                <div className="w-11 h-11 rounded-xl bg-[#10b981]/20 flex items-center justify-center mb-4">
                  <History className="text-[#10b981] w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black tracking-tight">{t("foundation_year")}</div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#10b981] mt-1">{t("foundation_label")}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#10b981] mb-3">{t("story_badge")}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111]">
                {t("story_title")} <span className="text-[#10b981]">{t("story_highlight")}</span>
              </h2>
            </div>
            <div className="space-y-5 text-gray-600 text-[15px] sm:text-base font-medium leading-relaxed">
              <p>{t("story_para_1")}</p>
              <p>{t("story_para_2")}</p>
              <p className="text-[#111] font-semibold">{t("story_para_3")}</p>
              <p>{t("story_para_4")}</p>
              <p className="text-[#111] font-semibold">{t("story_para_5")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#10b981] mb-3">The people</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111]">
              Crafting excellence as a <span className="text-[#10b981]">team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {team.map((member, i) => (
              <div key={i} className="group flex flex-col">
                <div className="relative rounded-2xl overflow-hidden aspect-square max-w-[320px] shadow-md ring-1 ring-black/5 mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#111] hover:bg-white transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#111]">{member.name}</h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#10b981] mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#10b981] mb-3">Our values</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-[#111]">
              GROW <span className="text-[#10b981] mx-2">×</span> WIN
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111] mb-1">GROW</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-8">How we build</p>
              <div className="space-y-4">
                {[
                  { title: "Grounded growth", desc: "We prioritise steady, responsible growth over rushed outcomes." },
                  { title: "Resilient health", desc: "We build healthy systems, teams, and partnerships designed to last." },
                  { title: "Owned ambition", desc: "We set high standards and take full responsibility for meeting them." },
                  { title: "With the customer", desc: "We work closely with our customers, building alongside them with openness and respect." }
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl bg-[#fafafa] border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all">
                    <h4 className="font-bold text-[#111] mb-1.5">{item.title}</h4>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111] mb-1">WIN</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-8">Why it works</p>
              <ul className="space-y-4 mb-12">
                {[
                  "We succeed when our clients succeed.",
                  "When products scale smoothly.",
                  "When technology becomes a strength, not a bottleneck.",
                  "When trust deepens over time."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#10b981]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#10b981]" strokeWidth={2.5} />
                    </span>
                    <span className="text-gray-600 text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-[#10b981] p-8 sm:p-10 text-white shadow-lg">
                <h4 className="text-xl sm:text-2xl font-bold mb-3">Let’s have a thoughtful conversation</h4>
                <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed mb-6">
                  If you’re planning a product or improving an existing system, we’re happy to talk through the technical considerations and see whether working together makes sense.
                </p>
                <Link
                  href={`/${locale}#contact`}
                  className="inline-flex items-center gap-2 bg-white text-[#10b981] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors group"
                >
                  <span>{t("start_project_cta")}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Framework - 6-step premium process */}
      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <header className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#10b981] mb-3">
              {t("delivery_badge")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-[#111] mb-4">
              {t("delivery_title")} <span className="text-[#10b981]">{t("delivery_highlight")}</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
              {t("delivery_sub")}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 items-stretch">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="group relative rounded-[1rem] sm:rounded-[1.25rem] lg:rounded-[1.5rem] bg-white p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] hover:translate-y-[-2px]"
              >
                <div className="flex flex-wrap items-start gap-3 mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#10b981]/15 flex items-center justify-center text-[#10b981] font-black text-lg sm:text-xl transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[#10b981]/25 group-hover:scale-[1.05] shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-500 bg-gray-100/90 px-3 py-1.5 rounded-full shrink-0">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#111] tracking-tight mb-4 leading-tight">
                  {step.title}
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {step.activities.slice(0, 3).map((activity, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-gray-600 text-sm font-medium leading-snug">
                      <span className="w-4 h-4 rounded-full bg-[#10b981]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-[#10b981]" strokeWidth={2.5} />
                      </span>
                      {activity}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium leading-snug">
                    <span className="text-[#10b981] font-semibold font-mono text-[11px] uppercase tracking-wider">{t("outcome_label")}</span>{" "}
                    <span className="text-gray-700">{step.outcome}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
