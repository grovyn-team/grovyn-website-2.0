"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Target,
  Info,
  Rocket,
  Smartphone,
  Globe,
  Code,
  Clock,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { submitContact } from "@/lib/api";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectGoal: "",
    platform: [] as string[],
    timeline: "",
    details: "",
    budget: "",
  });

  const steps = [
    { id: 1, label: t("step_your_info"), icon: <Info size={20} /> },
    { id: 2, label: t("step_goal"), icon: <Target size={20} /> },
    { id: 3, label: t("step_details"), icon: <Rocket size={20} /> },
  ];

  const handlePlatformToggle = (plat: string) => {
    setFormData((prev) => ({
      ...prev,
      platform: prev.platform.includes(plat)
        ? prev.platform.filter((p) => p !== plat)
        : [...prev.platform, plat],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    const message =
      formData.details +
      (formData.platform.length ? "\n\nPlatforms of interest: " + formData.platform.join(", ") : "");
    const result = await submitContact({
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || undefined,
      projectType: formData.projectGoal.trim() || undefined,
      budget: formData.budget.trim() || undefined,
      timeline: formData.timeline.trim() || undefined,
      message: message.trim() || formData.details.trim(),
    });
    setIsSubmitting(false);
    if (result.success) {
      setIsSubmitted(true);
    } else {
      setSubmitError(result.message);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-8 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
      >
        <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#10b981] rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-[#10b981]/40">
            <Check size={32} strokeWidth={3} className="sm:w-12 sm:h-12 lg:w-12 lg:h-12" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111] tracking-tighter">
            {t("success_title")}
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl font-medium px-4">
            {t("success_message")}
          </p>
          <button
            type="button"
            onClick={() => {
              setStep(1);
              setIsSubmitted(false);
            }}
            className="text-[#10b981] font-black uppercase tracking-widest text-xs hover:underline"
          >
            {t("start_new")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-24">
        <div className="w-full lg:w-[60%] order-2 lg:order-1 lg:sticky lg:top-24">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-100 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] p-6 sm:p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 sm:mb-12 lg:mb-16 relative">
              <div className="absolute top-4 sm:top-5 left-0 w-full h-[1px] bg-gray-100 -z-0" />
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center group flex-1">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                      step === s.id
                        ? "bg-[#10b981] text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-110"
                        : step > s.id
                          ? "bg-[#10b981] text-white"
                          : "bg-white border border-gray-100 text-gray-300"
                    }`}
                  >
                    {step > s.id ? <Check size={12} className="sm:w-4 sm:h-4" /> : s.id}
                  </div>
                  <span
                    className={`mt-2 sm:mt-3 text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-colors text-center px-1 ${
                      step >= s.id ? "text-gray-800" : "text-gray-300"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-in slide-in-from-right-4 duration-500">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10b981] rounded-xl sm:rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Info size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#111]">
                      {t("your_info_title")}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium">
                      {t("your_info_sub")}
                    </p>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                        {t("full_name")}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-[#fcfcfc] border border-gray-100 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                        {t("email")}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#fcfcfc] border border-gray-100 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                      {t("company")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-[#fcfcfc] border border-gray-100 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-in slide-in-from-right-4 duration-500">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10b981] rounded-xl sm:rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Target size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#111]">
                      {t("project_goal_title")}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium">
                      {t("project_goal_sub")}
                    </p>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                      {t("i_want")}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { label: t("build_mvp"), icon: <Rocket size={16} /> },
                        { label: t("scale_platform"), icon: <Zap size={16} /> },
                        { label: t("integration"), icon: <Code size={16} /> },
                        { label: t("modernize"), icon: <Clock size={16} /> },
                      ].map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, projectGoal: opt.label })
                          }
                          className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl border font-bold text-xs sm:text-sm transition-all text-left w-full sm:w-auto ${
                            formData.projectGoal === opt.label
                              ? "bg-[#10b981]/5 border-[#10b981] text-[#111]"
                              : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                          }`}
                        >
                          <span
                            className={
                              formData.projectGoal === opt.label
                                ? "text-[#10b981]"
                                : "text-gray-300"
                            }
                          >
                            {opt.icon}
                          </span>
                          <span>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                      {t("target_platforms")}
                    </label>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {[
                        { id: "web", label: t("web_app"), icon: <Globe size={16} /> },
                        {
                          id: "mobile",
                          label: t("mobile_app"),
                          icon: <Smartphone size={16} />,
                        },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handlePlatformToggle(p.id)}
                          className={`flex items-center space-x-2 sm:space-x-3 px-5 sm:px-6 py-3 sm:py-4 rounded-xl border font-bold text-xs sm:text-sm transition-all w-full sm:w-auto ${
                            formData.platform.includes(p.id)
                              ? "bg-[#10b981]/5 border-[#10b981] text-[#111]"
                              : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                          }`}
                        >
                          <span
                            className={
                              formData.platform.includes(p.id)
                                ? "text-[#10b981]"
                                : "text-gray-300"
                            }
                          >
                            {p.icon}
                          </span>
                          <span>{p.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-in slide-in-from-right-4 duration-500">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10b981] rounded-xl sm:rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Rocket size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#111]">
                      {t("details_title")}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium">
                      {t("details_sub")}
                    </p>
                  </div>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                      {t("brief_desc")}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      placeholder={t("brief_placeholder")}
                      className="w-full bg-[#fcfcfc] border border-gray-100 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                        {t("budget")}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full bg-[#fcfcfc] border border-gray-100 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all appearance-none cursor-pointer"
                      >
                        <option value="">{t("select_range")}</option>
                        <option value="10-25k">$10k - $25k</option>
                        <option value="25-50k">$25k - $50k</option>
                        <option value="50-100k">$50k - $100k</option>
                        <option value="100k+">$100k+</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                        {t("timeline")}
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full bg-[#fcfcfc] border border-gray-100 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all appearance-none cursor-pointer"
                      >
                        <option value="">{t("select_timeline")}</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-months">1-2 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="long-term">Long Term Partner</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <p className="mt-4 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                {submitError}
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-0 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-50">
              <button
                type="button"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1 || isSubmitting}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-gray-100 text-xs sm:text-sm font-bold transition-all ${
                  step === 1 ? "opacity-0 pointer-events-none" : "hover:bg-gray-50"
                } ${isSubmitting ? "opacity-60 pointer-events-none" : ""}`}
              >
                {t("back")}
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#10b981] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 hover:bg-[#0d9488] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#10b981]/20 disabled:opacity-60 disabled:pointer-events-none"
                >
                  <span>{t("continue")}</span>
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#10b981] text-white px-10 sm:px-12 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 hover:bg-[#0d9488] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#10b981]/30 disabled:opacity-60 disabled:pointer-events-none"
                >
                  <span>{isSubmitting ? t("sending") : t("send_request")}</span>
                  <Check size={14} strokeWidth={3} className="sm:w-4 sm:h-4" />
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="w-full lg:w-[40%] space-y-8 sm:space-y-10 lg:space-y-12 order-1 lg:order-2">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#10b981]/10 text-[#10b981] text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
              {t("badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[4.5rem] font-black text-[#111] leading-[0.95] tracking-tighter">
              {t("title_line1")}
              <br />
              <span className="text-[#10b981]">{t("title_highlight")}</span>
              <br />
              {t("title_line2")}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-md">
              {t("subtitle")}
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {[
              { title: t("confidential"), desc: t("confidential_desc") },
              { title: t("nda"), desc: t("nda_desc") },
              { title: t("no_sales"), desc: t("no_sales_desc") },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 sm:space-x-5 group">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#10b981]/10 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#111] tracking-tight group-hover:text-[#10b981] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
