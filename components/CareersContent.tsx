"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Code2,
  Users,
  Upload,
  Send,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Map,
  Activity,
  MousePointer2,
} from "lucide-react";

type Opening = { title: string; type: string; team: string };

export default function CareersContent() {
  const t = useTranslations("careers");
  const openings = (t.raw("openings") as Opening[]) ?? [];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null as File | null,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-32 flex flex-col items-center justify-center text-center space-y-12 min-h-screen bg-white">
        <div className="relative">
          <div className="absolute inset-0 bg-[#10b981]/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="relative w-24 h-24 rounded-full bg-black flex items-center justify-center text-[#10b981] shadow-2xl">
            <CheckCircle2 size={48} />
          </div>
        </div>
        <div className="space-y-4 max-w-xl px-6">
          <h2 className="text-5xl font-black text-[#111] tracking-tighter">
            {t("success_title")}
          </h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            {t("success_message")}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="bg-black text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#10b981] hover:text-black transition-all"
        >
          {t("return_btn")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden px-6">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
              alt="Cyber Engineering"
              fill
              className="object-cover mix-blend-overlay"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-white" />
        </div>
        <div
          className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="inline-flex mt-3 items-center space-x-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
              {t("badge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-[4.4rem] font-black text-white tracking-tighter leading-[0.85] mb-8">
            {t("title_line1")} <br />
            <span className="text-[#10b981]">{t("title_highlight")}</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed px-4">
            {t("subtitle")}
          </p>
          <div className="mt-16 flex justify-center">
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#10b981] to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">
                {t("culture_badge")}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#111] tracking-tighter leading-none">
                {t("culture_title")} <span className="text-[#10b981]">{t("culture_highlight")}</span>
              </h2>
              <div className="absolute -right-8 -top-8 animate-bounce hidden md:block">
                <Sparkles className="text-[#10b981]" size={28} />
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-base font-medium max-w-2xl mx-auto leading-relaxed">
              {t("culture_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(260px,_auto)]">
            <div className="md:col-span-7 group relative bg-[#f9f9f9] rounded-2xl p-6 lg:p-8 overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-2xl">
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-[#10b981] flex items-center justify-center text-black shadow-lg shadow-[#10b981]/20">
                    <Map size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#10b981]">
                      {t("remote_badge")}
                    </span>
                    <h3 className="text-2xl font-black text-[#111] tracking-tighter mt-1">
                      {t("remote_title")}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-sm">
                    {t("remote_desc")}
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Map className="w-full h-full object-contain p-6" strokeWidth={1} />
              </div>
            </div>

            <div className="md:col-span-5 group bg-black rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-700 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent" />
              <div className="relative z-10 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981]">
                  <Activity size={20} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {t("rhythm_title")}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  {t("rhythm_desc")}
                </p>
              </div>
              <div className="h-14 flex items-end justify-between space-x-1 relative z-10">
                {[30, 60, 45, 90, 60, 80, 50, 95, 40, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#10b981]/20 rounded-t-sm group-hover:bg-[#10b981] transition-all duration-500"
                    style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-6 group border border-gray-100 hover:bg-black bg-[#21453c] rounded-2xl p-6 lg:p-8 flex items-center justify-between transition-all duration-500">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 group-hover:text-[#10b981] text-white text-[9px] font-black uppercase tracking-widest">
                  <Code2 size={12} />
                  <span className="group-hover:text-[#10b981]">{t("agency_badge")}</span>
                </div>
                <h4 className="text-2xl font-black group-hover:text-white text-white">{t("agency_title")}</h4>
                <p className="text-white text-sm font-medium max-w-xs">
                  {t("agency_desc")}
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-all duration-500 shrink-0">
                <MousePointer2 size={22} />
              </div>
            </div>

            <div className="md:col-span-6 group border border-gray-100 rounded-2xl p-6 lg:p-8 flex items-center justify-between transition-all duration-500 hover:scale-[0.99]">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-black group-hover:text-[#10b981] text-[9px] font-black uppercase tracking-widest">
                  <ShieldCheck size={12} />
                  <span>{t("trust_badge")}</span>
                </div>
                <h4 className="text-2xl font-black text-black transition-colors">
                  {t("trust_title")}
                </h4>
                <p className="text-black/50 text-sm font-medium max-w-xs transition-colors">
                  {t("trust_desc")}
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-black group-hover:bg-[#10b981] flex items-center justify-center text-[#10b981] group-hover:text-black transition-all duration-500 shrink-0">
                <Users size={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.2em] mb-3">
              {t("openings_sub")}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#111] tracking-tighter">
              {t("openings_title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openings.map((job, i) => (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onClick={() =>
                  document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-300 hover:bg-black hover:border-[#10b981]/40 hover:shadow-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-black text-[#111] group-hover:text-white transition-colors tracking-tight leading-tight">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#10b981] transition-colors">
                    <span>{job.team}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#10b981] shrink-0" aria-hidden />
                    <span>{job.type}</span>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto px-4 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#10b981]/10 text-[#10b981] group-hover:bg-[#10b981] group-hover:text-black transition-all duration-300 border border-[#10b981]/20 group-hover:border-[#10b981] pointer-events-none">
                  {t("apply")}
                  <ExternalLink size={12} strokeWidth={2.5} />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-sm font-medium">
              {t("no_fit")}
            </p>
            <button
              type="button"
              onClick={() =>
                document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-3 inline-flex items-center gap-2 text-[#10b981] font-bold text-xs uppercase tracking-wider hover:underline underline-offset-4 transition-opacity hover:opacity-90"
            >
              {t("general_app")}
              <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </section>

      <section id="apply-form" className="py-24 md:py-32 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-2/5 space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-black text-[#10b981] text-[10px] font-black uppercase tracking-widest">
                {t("form_badge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#111] tracking-tighter leading-tight">
                {t("form_title")}
              </h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {t("form_subtitle")}
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" aria-hidden />
                  {t("review_24h")}
                </li>
                <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" aria-hidden />
                  {t("direct_access")}
                </li>
              </ul>
            </div>

            <div className="lg:w-3/5">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 lg:p-10 rounded-3xl shadow-lg border border-gray-100 space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#10b981]/5 rounded-full blur-3xl -mr-20 -mt-20" aria-hidden />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
                  <div className="space-y-1.5">
                    <label htmlFor="careers-fullname" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                      {t("identity")}
                    </label>
                    <input
                      id="careers-fullname"
                      required
                      type="text"
                      placeholder={t("full_name_placeholder")}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-[#111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="careers-email" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                      {t("communication")}
                    </label>
                    <input
                      id="careers-email"
                      required
                      type="email"
                      placeholder={t("email_placeholder")}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-[#111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1.5 relative">
                  <label htmlFor="careers-role" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                    {t("target_role")}
                  </label>
                  <div className="relative">
                    <select
                      id="careers-role"
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-[#111] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent appearance-none cursor-pointer transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                    >
                      <option value="">{t("select_domain")}</option>
                      <option value="frontend">{t("option_frontend")}</option>
                      <option value="backend">{t("option_backend")}</option>
                      <option value="mobile">{t("option_mobile")}</option>
                      <option value="infra">{t("option_infra")}</option>
                      <option value="design">{t("option_design")}</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                      size={16}
                    />
                  </div>
                </div>
                <div className="space-y-1.5 relative">
                  <label htmlFor="careers-brief" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                    {t("technical_brief")}
                  </label>
                  <textarea
                    id="careers-brief"
                    rows={4}
                    placeholder={t("technical_brief_placeholder")}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-[#111] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent resize-none transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                    {t("resume_label")}
                  </label>
                  <label className="flex flex-col items-center justify-center min-h-[140px] rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/80 hover:border-[#10b981] hover:bg-[#10b981]/5 focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all cursor-pointer group/upload">
                    <input
                      type="file"
                      required
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          resume: e.target.files?.[0] || null,
                        })
                      }
                    />
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover/upload:bg-[#10b981] group-hover/upload:text-white group-hover/upload:border-[#10b981] transition-colors duration-200 shadow-sm">
                      <Upload size={20} strokeWidth={2} />
                    </div>
                    <div className="mt-3 text-center px-4">
                      <p className="text-sm font-bold text-[#111]">
                        {formData.resume ? formData.resume.name : t("resume_placeholder")}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {t("resume_hint")}
                      </p>
                    </div>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#10b981] text-black py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 transition-all shadow-lg shadow-[#10b981]/25 hover:shadow-xl hover:shadow-black/10"
                >
                  <span>{t("submit_btn")}</span>
                  <Send size={18} strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
