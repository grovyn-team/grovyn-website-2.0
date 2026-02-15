"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  CheckCircle2,
  Upload,
  Send,
  MapPin,
  Share2,
  Linkedin,
  Shield,
  Lock,
  Briefcase,
} from "lucide-react";
import { submitCareerApplication, fetchJobOpeningBySlug, type JobOpening } from "@/lib/api";

const WHAT_WE_OFFER = [
  "Competitive Base + Performance Bonus",
  "Early-stage Learning support",
  "Flexible Remote-First Environment",
  "High-Performance M3 Max Hardware",
  "Health, Wellness & Clear ownerships",
  "Annual Offsites in Global Tech Hubs",
];

export default function CareerDetailContent({ slug }: { slug: string }) {
  const t = useTranslations("careers");
  const locale = useLocale();
  const base = `/${locale}`;
  const [job, setJob] = useState<JobOpening | null>(null);
  const [jobLoading, setJobLoading] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    resume: null as File | null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchJobOpeningBySlug(slug, locale).then((data) => {
      if (!cancelled) {
        setJob(data ?? null);
        setJobLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug, locale]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.dataTransfer.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume || !job) return;
    setSubmitError(null);
    setIsSubmitting(true);
    const result = await submitCareerApplication({
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined,
      position: job.title,
      message: formData.message.trim() || undefined,
      resume: formData.resume,
    });
    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSubmitError(result.message);
    }
  };

  if (jobLoading) {
    return (
      <div className="min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col items-center justify-center px-6 bg-[#fcfcfc]">
        <p className="text-gray-500 font-medium">{t("loading")}</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col items-center justify-center px-6 bg-[#fcfcfc]">
        <h1 className="text-2xl font-black text-[#111] mb-4">{t("opening_not_found")}</h1>
        <Link
          href={`${base}/careers`}
          className="text-[#10b981] font-bold hover:underline inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          {t("back_to_careers")}
        </Link>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex flex-col items-center justify-center text-center space-y-12 pt-40 pb-32 bg-white">
        <div className="w-24 h-24 rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-2xl shadow-[#10b981]/40">
          <CheckCircle2 size={48} />
        </div>
        <div className="space-y-4 max-w-xl px-6">
          <h2 className="text-5xl font-black text-[#111] tracking-tighter">
            {t("detail_success_title")}
          </h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            {t("detail_success_message", { title: job.title })}
          </p>
        </div>
        <Link
          href={`${base}/careers`}
          className="bg-black text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#10b981] hover:text-black transition-all"
        >
          {t("back_to_roles")}
        </Link>
      </div>
    );
  }

  const requirements = job.requirements ?? [];

  return (
    <div className="bg-[#fcfcfc] overflow-x-hidden selection:bg-[#10b981] selection:text-white">
      <section className="bg-black text-white py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.1)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href={`${base}/careers`}
            className="inline-flex items-center space-x-3 text-gray-400 hover:text-[#10b981] transition-colors mb-12 text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            <span>{t("all_openings")}</span>
          </Link>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="px-4 py-1.5 bg-[#10b981] text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                  {job.team}
                </span>
                {job.location && (
                  <div className="flex items-center space-x-2 text-white/40 text-[10px] font-black uppercase tracking-widest">
                    <MapPin size={12} />
                    <span>{job.location}</span>
                  </div>
                )}
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
                {job.title}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#10b981] hover:text-black transition-all"
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
              <button
                type="button"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#10b981] hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 space-y-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-[#111] tracking-tight border-l-4 border-[#10b981] pl-6">
                {t("detail_mission_title")}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                {t("detail_mission_body", { title: job.title })}
              </p>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-xl font-black text-[#111] uppercase tracking-widest flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-[#10b981]" />
                  <span>{t("detail_requirements_title")}</span>
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {requirements.map((req, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm group hover:border-[#10b981]/30 transition-all"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981] font-bold text-xs shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-gray-600 font-medium leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-black text-[#111] uppercase tracking-widest flex items-center space-x-3">
                  <Shield size={20} className="text-[#10b981]" />
                  <span>{t("detail_offer_title")}</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {WHAT_WE_OFFER.map((perk, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-4 p-4 rounded-xl border border-gray-50 bg-white"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#10b981] shrink-0" />
                      <span className="text-sm font-bold text-gray-700">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="sticky top-32 bg-[#111] rounded-[3.5rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-white/5 space-y-10 text-white overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                <Briefcase size={350} />
              </div>

              <div className="space-y-2 relative z-10">
                <h3 className="text-4xl font-black tracking-tight italic">
                  {t("detail_form_heading")}
                </h3>
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest">
                  {t("detail_form_subheading")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Janmejay S."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:bg-white/10 focus:border-[#10b981] transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="janmejay@grovyn.in"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:bg-white/10 focus:border-[#10b981] transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 73549 72920"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:bg-white/10 focus:border-[#10b981] transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                      {t("detail_position_label")}
                    </label>
                    <div className="w-full bg-[#10b981]/10 border border-[#10b981]/30 rounded-2xl px-6 py-4 text-sm font-black text-[#10b981] cursor-not-allowed flex justify-between items-center h-[54px]">
                      <span>{job.title}</span>
                      <Lock size={14} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Cover Letter / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("detail_message_placeholder")}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:bg-white/10 focus:border-[#10b981] transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {submitError && (
                  <p className="text-sm font-medium text-red-400 bg-red-500/10 border border-red-500/20 rounded-2xl px-6 py-4">
                    {submitError}
                  </p>
                )}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Resume / CV *
                  </label>
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-[2.5rem] p-12 transition-all flex flex-col items-center justify-center space-y-4 cursor-pointer text-center
                      ${
                        dragActive
                          ? "border-[#10b981] bg-[#10b981]/10"
                          : "border-white/10 hover:border-[#10b981]/30 hover:bg-white/5"
                      }
                      ${formData.resume ? "border-[#10b981] bg-[#10b981]/5" : ""}`}
                  >
                    <input
                      type="file"
                      required
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          resume: e.target.files?.[0] || null,
                        })
                      }
                    />
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                        formData.resume ? "bg-[#10b981] text-black" : "bg-white/5 text-gray-400"
                      }`}
                    >
                      <Upload size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-black">
                        {formData.resume
                          ? formData.resume.name
                          : t("detail_resume_drop")}
                      </p>
                      <p className="text-[10px] font-medium text-gray-500 mt-1 uppercase tracking-widest">
                        {t("detail_resume_browse")}
                      </p>
                    </div>
                    <p className="text-[9px] font-bold text-gray-600">
                      {t("detail_resume_formats")}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#10b981] text-black py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-4 hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#10b981]/20 disabled:opacity-60 disabled:pointer-events-none"
                >
                  <span>{isSubmitting ? t("detail_submitting") : t("detail_submit")}</span>
                  <Send size={18} />
                </button>
              </form>

              <div className="pt-6 flex justify-center">
                <div className="inline-flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-gray-600">
                  <Shield size={12} />
                  <span>{t("detail_secure")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
