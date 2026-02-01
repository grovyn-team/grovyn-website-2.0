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
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.85] mb-8">
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

      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-block relative">
              <span className="text-[#10b981] font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">
                {t("culture_badge")}
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-[#111] tracking-tighter leading-none">
                {t("culture_title")} <span className="text-[#10b981]">{t("culture_highlight")}</span>
              </h2>
              <div className="absolute -right-8 -top-8 animate-bounce hidden md:block">
                <Sparkles className="text-[#10b981]" size={32} />
              </div>
            </div>
            <p className="mt-8 text-gray-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              {t("culture_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(320px,_auto)]">
            <div className="md:col-span-7 group relative bg-[#f9f9f9] rounded-[2.5rem] p-10 lg:p-14 overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-2xl">
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#10b981] flex items-center justify-center text-black shadow-lg shadow-[#10b981]/20">
                    <Map size={28} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#10b981]">
                      {t("remote_badge")}
                    </span>
                    <h3 className="text-3xl font-black text-[#111] tracking-tighter mt-1">
                      {t("remote_title")}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-sm">
                    {t("remote_desc")}
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Map className="w-full h-full object-contain p-8" strokeWidth={1} />
              </div>
            </div>

            <div className="md:col-span-5 group bg-black rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-700 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10b981]">
                  <Activity size={24} />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">
                  {t("rhythm_title")}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  {t("rhythm_desc")}
                </p>
              </div>
              <div className="h-20 flex items-end justify-between space-x-1 relative z-10">
                {[30, 60, 45, 90, 60, 80, 50, 95, 40, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#10b981]/20 rounded-t-sm group-hover:bg-[#10b981] transition-all duration-500"
                    style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-6 group bg-white border border-gray-100 rounded-[2.5rem] p-10 flex items-center justify-between hover:bg-gray-50 transition-all duration-500">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-[#10b981] text-[9px] font-black uppercase tracking-widest">
                  <Code2 size={14} />
                  <span>{t("agency_badge")}</span>
                </div>
                <h4 className="text-3xl font-black text-[#111]">{t("agency_title")}</h4>
                <p className="text-gray-400 text-sm font-medium max-w-xs">
                  {t("agency_desc")}
                </p>
              </div>
              <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-all duration-500">
                <MousePointer2 size={28} />
              </div>
            </div>

            <div className="md:col-span-6 group bg-[#10b981] rounded-[2.5rem] p-10 flex items-center justify-between hover:bg-black transition-all duration-500 hover:scale-[0.99]">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-black group-hover:text-[#10b981] text-[9px] font-black uppercase tracking-widest">
                  <ShieldCheck size={14} />
                  <span>{t("trust_badge")}</span>
                </div>
                <h4 className="text-3xl font-black text-black group-hover:text-white transition-colors">
                  {t("trust_title")}
                </h4>
                <p className="text-black/50 group-hover:text-white/40 text-sm font-medium max-w-xs transition-colors">
                  {t("trust_desc")}
                </p>
              </div>
              <div className="w-16 h-16 rounded-3xl bg-black group-hover:bg-[#10b981] flex items-center justify-center text-[#10b981] group-hover:text-black transition-all duration-500">
                <Users size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#111] tracking-tighter">
              {t("openings_title")}
            </h2>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
              {t("openings_sub")}
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <div
                key={i}
                className="group bg-gray-50/50 hover:bg-black p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-center transition-all duration-500 cursor-pointer border border-transparent hover:border-[#10b981]/50"
              >
                <div className="space-y-1 mb-6 md:mb-0 text-center md:text-left">
                  <h4 className="text-xl font-black text-[#111] group-hover:text-white transition-colors tracking-tight">
                    {job.title}
                  </h4>
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#10b981] transition-colors">
                    <span>{job.team}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#10b981]" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center space-x-3 text-[11px] font-black uppercase tracking-widest text-[#10b981] group-hover:text-white group-hover:underline underline-offset-4"
                >
                  <span>{t("apply")}</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-sm font-medium">
              {t("no_fit")}
            </p>
            <button
              type="button"
              onClick={() =>
                document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-4 text-[#10b981] font-black text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
            >
              {t("general_app")}
            </button>
          </div>
        </div>
      </section>

      <section id="apply-form" className="py-40 px-6 bg-[#fcfcfc]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-black text-[#10b981] text-[10px] font-black uppercase tracking-widest">
                {t("form_badge")}
              </div>
              <h2 className="text-4xl font-black text-[#111] tracking-tighter leading-none">
                {t("form_title")}
              </h2>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                {t("form_subtitle")}
              </p>
              <div className="pt-8 space-y-4">
                <div className="flex items-center space-x-3 text-[11px] font-black uppercase tracking-widest text-gray-800">
                  <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>{t("review_24h")}</span>
                </div>
                <div className="flex items-center space-x-3 text-[11px] font-black uppercase tracking-widest text-gray-800">
                  <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>{t("direct_access")}</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 lg:p-14 rounded-[3.5rem] shadow-2xl border border-gray-100 space-y-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/5 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {t("identity")}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t("full_name_placeholder")}
                      className="w-full bg-gray-50/50 border border-transparent rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:bg-white focus:border-[#10b981] transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {t("communication")}
                    </label>
                    <input
                      required
                      type="email"
                      placeholder={t("email_placeholder")}
                      className="w-full bg-gray-50/50 border border-transparent rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:bg-white focus:border-[#10b981] transition-all"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {t("target_role")}
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full bg-gray-50/50 border border-transparent rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:bg-white focus:border-[#10b981] transition-all appearance-none cursor-pointer"
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
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {t("technical_brief")}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t("technical_brief_placeholder")}
                    className="w-full bg-gray-50/50 border border-transparent rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all resize-none"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {t("resume_label")}
                  </label>
                  <div className="relative border-2 border-dashed border-gray-100 rounded-[2.5rem] p-12 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-all group/upload flex flex-col items-center justify-center space-y-4 cursor-pointer">
                    <input
                      type="file"
                      required
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          resume: e.target.files?.[0] || null,
                        })
                      }
                    />
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover/upload:bg-[#10b981] group-hover/upload:text-white transition-all duration-500">
                      <Upload size={24} />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-black text-[#111]">
                        {formData.resume ? formData.resume.name : t("resume_placeholder")}
                      </p>
                      <p className="text-xs font-medium text-gray-400 mt-1">
                        {t("resume_hint")}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#10b981] text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-4 hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#10b981]/20 group/btn"
                >
                  <span>{t("submit_btn")}</span>
                  <Send
                    size={18}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
