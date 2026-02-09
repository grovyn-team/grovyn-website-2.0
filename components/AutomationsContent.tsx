"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  Bot,
  Search,
  MessageSquare,
  FileText,
  CheckCircle2,
  Activity,
  Brain,
  Clock,
  BarChart3,
  ShieldCheck,
  Plus,
  Zap,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import ContactForm from "@/components/ContactForm";
import "@/app/automations.css";

export default function AutomationsContent() {
  const t = useTranslations("automations");
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rightScrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const casesRaw = t.raw("use_cases") as Array<{
    id: string;
    title: string;
    agent: string;
    desc: string;
    outcome: string;
    accent: string;
    color: string;
  }>;

  const cases = casesRaw;

  useEffect(() => {
    if (!rightScrollRef.current) return;

    const scrollContainer = rightScrollRef.current;
    const options = {
      root: scrollContainer,
      rootMargin: "-35% 0px -35% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) {
            setActiveIndex(idx);
          }
        }
      });
    }, options);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [cases.length]);

  const scrollToItem = useCallback((index: number) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const resultsCardsRaw = t.raw("results_cards") as Array<{ title: string; desc: string }>;
  const resultsCards = [
    { ...resultsCardsRaw[0], icon: Brain },
    { ...resultsCardsRaw[1], icon: Clock },
    { ...resultsCardsRaw[2], icon: BarChart3 },
  ];

  return (
    <div className="bg-white text-black min-h-screen selection:bg-[#10b981] selection:text-white font-sans overflow-x-hidden">
      <motion.section
        ref={heroRef}
        className="relative min-h-[55vh] sm:min-h-[60vh] lg:min-h-[65vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-[#fafafa] via-white to-[#f0fdf4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute top-[20%] left-[5%] sm:left-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#10b981]/5 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: useTransform(useMotionValue(mousePosition.x), [-1, 1], [-20, 20]),
            y: useTransform(useMotionValue(mousePosition.y), [-1, 1], [-20, 20]),
          }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] sm:right-[15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            x: useTransform(useMotionValue(mousePosition.x), [-1, 1], [20, -20]),
            y: useTransform(useMotionValue(mousePosition.y), [-1, 1], [20, -20]),
          }}
        />
        
        <motion.div
          className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-black tracking-tight leading-[0.95] sm:leading-[0.9] text-[#111] px-2 sm:px-0">
                {t("hero_title_1")} <br />
                {t("hero_title_2")} <br />
                <span className="text-[#10b981] relative inline-block">
                  {t("hero_title_highlight")}
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-[#10b981]/20 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </span>
              </h1>
              <p className="text-gray-500 text-base sm:text-xl md:text-2xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                {t("hero_subtitle")}
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 pt-4 px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href={`/${locale}#contact`}
                  className="bg-[#111] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#10b981] transition-colors shadow-2xl flex items-center justify-center space-x-3 sm:space-x-4 group"
                >
                  <span>{t("hero_cta")}</span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/${locale}/portfolio`}
                  className="border-2 border-gray-200 text-[#111] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-[#10b981] hover:text-[#10b981] transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>View Projects</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="pt-10 flex items-center justify-center lg:justify-start space-x-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle2 size={14} className="text-[#10b981]" />
              </motion.div>
              <span>{t("hero_trust")}</span>
            </motion.div>
          </div>

          <div className="relative h-[550px] lg:h-[750px] flex items-center justify-center hidden md:flex">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                </linearGradient>
                <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {[
                { x2: "20%", y2: "20%", gradient: "line-gradient-1", delay: 0.3 },
                { x2: "80%", y2: "15%", gradient: "line-gradient-2", delay: 0.4 },
                { x2: "85%", y2: "50%", gradient: "line-gradient-1", delay: 0.5 },
                { x2: "15%", y2: "65%", gradient: "line-gradient-2", delay: 0.6 },
                { x2: "50%", y2: "85%", gradient: "line-gradient-1", delay: 0.7 },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={line.x2}
                  y2={line.y2}
                  stroke={`url(#${line.gradient})`}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 1.5, delay: line.delay, ease: "easeInOut" },
                    opacity: { duration: 0.3, delay: line.delay },
                  }}
                />
              ))}
            </svg>

            <motion.div
              className="relative z-30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              style={{
                x: useSpring(mousePosition.x * 15, { stiffness: 150, damping: 15 }),
                y: useSpring(mousePosition.y * 15, { stiffness: 150, damping: 15 }),
              }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#111] px-12 py-6 rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(16,185,129,0.4)] border border-[#10b981]/30 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 40px 100px -20px rgba(16,185,129,0.6)" }}
                animate={{
                  boxShadow: [
                    "0 30px 80px -20px rgba(16,185,129,0.4)",
                    "0 35px 90px -20px rgba(16,185,129,0.5)",
                    "0 30px 80px -20px rgba(16,185,129,0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.6)]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot size={22} className="text-white" />
                  </motion.div>
                  <span className="text-white font-black text-2xl tracking-tight uppercase">AI Core</span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-[2.5rem] border-2 border-[#10b981]/20"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-[2.5rem] border-2 border-[#10b981]/20"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                />
              </motion.div>
            </motion.div>

            {[
              { icon: ShieldCheck, label: "Fraud Detection", color: "from-orange-400 to-yellow-500", pos: "top-[8%] left-[35%]", delay: 0.5, textColor: "text-orange-600", float: { y: [-10, 10] } },
              { icon: MessageSquare, label: "Voice AI", color: "from-cyan-400 to-teal-500", pos: "top-[25%] left-[8%]", delay: 0.6, textColor: "text-cyan-600", float: { y: [-15, 5] } },
              { icon: BarChart3, label: "Marketing Intelligence", color: "from-slate-400 to-slate-600", pos: "top-[15%] right-[12%]", delay: 0.7, textColor: "text-slate-600", float: { y: [-8, 12] } },
              { icon: MessageSquare, label: "Chatbots", color: "from-rose-400 to-red-500", pos: "top-[45%] right-[5%]", delay: 0.8, textColor: "text-rose-600", float: { y: [-12, 8] } },
              { icon: Search, label: "Computer Vision", color: "from-blue-400 to-blue-600", pos: "bottom-[28%] left-[5%]", delay: 0.9, textColor: "text-blue-600", float: { y: [-10, 10] } },
              { icon: Brain, label: "Predictive Analytics", color: "from-purple-400 to-purple-600", pos: "bottom-[20%] right-[15%]", delay: 1.0, textColor: "text-purple-600", float: { y: [-14, 6] } },
              { icon: Zap, label: "Automation", color: "from-pink-400 to-pink-600", pos: "bottom-[8%] left-[38%]", delay: 1.1, textColor: "text-pink-600", float: { y: [-9, 11] } },
              { icon: CheckCircle2, label: "Recommendation Systems", color: "from-indigo-400 to-blue-500", pos: "top-[42%] left-[-2%]", delay: 1.2, textColor: "text-indigo-600", float: { y: [-11, 9] } },
            ].map((sat, i) => (
              <motion.div
                key={i}
                className={`absolute ${sat.pos}`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: sat.float.y }}
                transition={{
                  opacity: { duration: 0.6, delay: sat.delay },
                  scale: { duration: 0.8, delay: sat.delay, type: "spring", stiffness: 200 },
                  rotate: { duration: 0.8, delay: sat.delay, type: "spring" },
                  y: {
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: sat.delay,
                  },
                }}
              >
                <motion.div
                  className="flex items-center space-x-3 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 cursor-pointer group"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 25px 60px -15px rgba(16,185,129,0.4)",
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${sat.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <sat.icon size={18} className="text-white" />
                  </motion.div>
                  <span className={`text-xs font-bold ${sat.textColor} whitespace-nowrap`}>{sat.label}</span>
                </motion.div>
              </motion.div>
            ))}

            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#3b82f6" : "#a855f7",
                  top: `${10 + (i * 7) % 80}%`,
                  left: `${5 + (i * 11) % 90}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0, 1.5, 0.8, 1.2, 0],
                  x: [0, (i % 3 - 1) * 20],
                  y: [0, (i % 2 === 0 ? -20 : 20)],
                }}
                transition={{
                  duration: 3 + (i % 5) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-[350px] h-[350px] border border-gray-200/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.1)",
                }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 w-2 h-2 bg-[#10b981]/60 rounded-full -ml-1"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute w-[500px] h-[500px] border border-gray-200/25 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.08)",
                }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-blue-500/50 rounded-full -ml-1.5"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-8 sm:py-10">
        <motion.div
          className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-24 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="space-y-1 sm:space-y-2">
              {cases.map((useCase, idx) => (
                <motion.button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setActiveIndex(idx);
                    scrollToItem(idx);
                  }}
                  className="w-full text-left focus:outline-none"
                  whileHover={{ x: activeIndex !== idx ? 10 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8"
                    animate={{
                      scale: activeIndex === idx ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className={`text-lg sm:text-xl font-black transition-all duration-500 ${activeIndex === idx ? "text-[#111]" : "text-gray-200"}`}
                      animate={{
                        color: activeIndex === idx ? "#111" : "#e5e5e5",
                      }}
                    >
                      {useCase.id}
                    </motion.span>
                    <motion.h3
                      className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter`}
                      animate={{
                        color: activeIndex === idx ? "#111" : "#e5e5e5",
                        x: activeIndex === idx ? 5 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {useCase.title}
                    </motion.h3>
                  </motion.div>
                  <div
                    className={`grid transition-all duration-700 ease-in-out ${activeIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden space-y-4 sm:space-y-6 pl-10 sm:pl-12 lg:pl-14 pb-6 sm:pb-8">
                      <p className="text-gray-500 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-md">
                        {useCase.desc}
                      </p>
                      <div className="flex items-center space-x-3 sm:space-x-4 text-[#10b981] pt-2">
                        <CheckCircle2 size={16} className="sm:w-4.5 sm:h-4.5" />
                        <span className="font-black text-[10px] sm:text-[11px] uppercase tracking-widest">{useCase.outcome}</span>
                      </div>
                      <div className="pt-3 sm:pt-4 flex items-center space-x-3 sm:space-x-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gray-50 flex items-center justify-center text-[#10b981] border border-gray-100">
                          <Bot size={18} className="sm:w-5 sm:h-5" />
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400">
                          {t("deployed_agent")} <span className="text-[#111]">{useCase.agent}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div
              ref={rightScrollRef}
              className="lg:max-h-[85vh] overflow-y-auto scroll-smooth snap-y snap-mandatory automations-hide-scrollbar lg:pr-4 lg:-mr-4 space-y-12 sm:space-y-16 lg:space-y-32 py-4 sm:py-6 lg:py-10"
            >
              {cases.map((useCase, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className="snap-center pt-3"
                >
                  <div className="bg-white rounded-[3.5rem] border border-gray-100 overflow-hidden transform transition-all duration-700">
                    <div className="bg-[#fafafa] border-b border-gray-100 px-8 py-6 flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                        <div className="w-3 h-3 rounded-full bg-[#10b981]/20" />
                      </div>
                      <div className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-gray-300">
                        {t("session_label")}_0{idx + 1}
                      </div>
                    </div>

                    <div className="p-10 lg:p-10 space-y-2">
                      <div className="flex items-center justify-between pb-8 border-b border-gray-50">
                        <div className="flex items-center space-x-6">
                          <div className="relative w-20 h-20 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white shrink-0">
                            <Image
                              src={`https://i.pravatar.cc/150?u=${idx + 15}`}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-3xl font-black text-[#111] leading-none tracking-tighter">
                              {t("dashboard_title")}
                            </h4>
                            <p className="text-gray-400 font-bold uppercase text-[9px] tracking-widest">
                              {t("dashboard_updated")}
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#10b981]/5 text-[#10b981] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#10b981]/20 shrink-0">
                          {t("system_operational")}
                        </div>
                      </div>

                      <div className="relative aspect-video rounded-[3rem] bg-gradient-to-br from-gray-50 to-white border border-gray-100 overflow-hidden group/viz shadow-inner">
                        <div className="absolute inset-0">
                          <Image
                            src={
                              idx === 0 ? "/assets/chatbot-use-case.png" :
                              idx === 1 ? "/assets/voice-ai-use-case.png" :
                              idx === 2 ? "/assets/fraud-detection-use-case.png" :
                              idx === 3 ? "/assets/recommendation-systems-use-case.png" :
                              idx === 4 ? "/assets/automations-use-case.png" :
                              "/assets/marketing-intelligence-use-case.png"
                            }
                            alt={useCase.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                          />
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        <div className="absolute top-8 left-10 flex items-center space-x-3 z-10">
                          <motion.div
                            className="w-2 h-2 bg-[#10b981] rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white drop-shadow-lg">
                            {t("processing_label")}
                          </div>
                        </div>
                        
                        <motion.div
                          className="absolute bottom-8 left-10 right-10 z-10"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
                            <div className="flex items-center space-x-4">
                              <motion.div
                                className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center text-white shadow-lg"
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              >
                                {idx === 0 ? <MessageSquare size={24} /> :
                                 idx === 1 ? <Activity size={24} /> :
                                 idx === 2 ? <ShieldCheck size={24} /> :
                                 idx === 3 ? <CheckCircle2 size={24} /> :
                                 idx === 4 ? <Zap size={24} /> :
                                 <BarChart3 size={24} />}
                              </motion.div>
                              <div className="flex-1">
                                <h5 className="text-lg font-black text-[#111] tracking-tight">
                                  {useCase.agent} {t("agent_active")}
                                </h5>
                                <p className="text-gray-500 text-xs font-medium">
                                  Real-time processing and analysis
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <Activity size={18} className="text-[#10b981] animate-pulse" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                            {t("latest_logs")}
                          </span>
                        </div>
                        <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 italic text-gray-500 font-medium leading-relaxed">
                          &ldquo;{t("log_template", { title: useCase.title })}&rdquo;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-10 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', 
            backgroundSize: '24px 24px' 
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-28 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-gray-50 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex gap-1">
                <motion.span 
                  className="w-1 h-1 rounded-full bg-[#10b981]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.span 
                  className="w-1 h-1 rounded-full bg-[#10b981]/60"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
              </div>
              <span className="text-[#10b981] font-black uppercase tracking-[0.4em] text-[8px]">
                The Architecture
              </span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[4.5rem] font-black tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Accelerated <span className="text-[#10b981]">Integration</span>
            </motion.h2>
            <motion.p
              className="text-gray-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Deploy advanced neural infrastructure with a streamlined pipeline designed for the modern enterprise.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[35px] left-0 right-0 h-[100px] pointer-events-none">
              <svg viewBox="0 0 1200 100" fill="none" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <defs>
                  <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0" />
                    <stop offset="20%" stopColor="#D1D5DB" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="80%" stopColor="#D1D5DB" />
                    <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0" />
                  </linearGradient>
                  <filter id="packetGlow">
                    <feGaussianBlur stdDeviation="2.5" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path 
                  d="M 150,50 C 300,50 300,65 450,65 C 600,65 600,35 750,35 C 900,35 900,50 1050,50" 
                  stroke="#F9FAFB" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M 150,50 C 300,50 300,65 450,65 C 600,65 600,35 750,35 C 900,35 900,50 1050,50" 
                  stroke="url(#fiberGrad)" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeDasharray="1 4" 
                />

                <motion.path 
                  d="M 450,65 C 600,65 600,35 750,35" 
                  stroke="#10b981" 
                  strokeWidth="3" 
                  initial={{ strokeOpacity: 0.1 }}
                  animate={{ strokeOpacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {[...Array(4)].map((_, i) => (
                  <g key={i}>
                    <circle r="2.5" fill="#10b981" filter="url(#packetGlow)">
                      <animateMotion
                        dur={`${4 + i}s`}
                        repeatCount="indefinite"
                        path="M 150,50 C 300,50 300,65 450,65 C 600,65 600,35 750,35 C 900,35 900,50 1050,50"
                        begin={`${i * 1.2}s`}
                      />
                    </circle>
                    <rect width="12" height="1" fill="#10b981" opacity="0.4">
                      <animateMotion
                        dur={`${4 + i}s`}
                        repeatCount="indefinite"
                        path="M 150,50 C 300,50 300,65 450,65 C 600,65 600,35 750,35 C 900,35 900,50 1050,50"
                        begin={`${i * 1.2}s`}
                      />
                    </rect>
                  </g>
                ))}
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "Intelligence Audit",
                  description: "Our neural scanners analyze your architecture to map out high-velocity AI injection points.",
                  telemetry: "LATENCY: 12ms",
                  icon: Brain,
                  active: false,
                },
                {
                  number: "02",
                  title: "Kernel Selection",
                  description: "Deploy from our library of proprietary LLMs or fine-tune custom weights for vertical-specific precision.",
                  telemetry: "SYNC: READY",
                  icon: Sparkles,
                  active: false,
                },
                {
                  number: "03",
                  title: "Neural Sync",
                  description: "Low-latency integration via our Enterprise API, featuring 45ms average response times across global edge nodes.",
                  telemetry: "FLOW: ACTIVE",
                  icon: Activity,
                  active: true,
                },
                {
                  number: "04",
                  title: "Autonomous Ops",
                  description: "Live production scaling with self-healing feedback loops and real-time inference optimization.",
                  telemetry: "UPTIME: 99.9%",
                  icon: Zap,
                  active: false,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="group relative flex flex-col items-center lg:items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.15, 
                    type: "spring", 
                    stiffness: 100 
                  }}
                >
                  <motion.div 
                    className="absolute -top-10 lg:left-0"
                    initial={{ opacity: 0, y: 2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                  >
                    <span className="text-[7px] font-black text-[#10b981] bg-[#10b981]/5 px-2 py-0.5 rounded border border-[#10b981]/20 tracking-widest uppercase">
                      {step.telemetry}
                    </span>
                  </motion.div>

                  <div className="w-24 h-24 mb-10 relative flex items-center justify-center">
                    <motion.div
                      className={`absolute inset-1 rounded-[1.8rem] ${
                        step.active 
                          ? 'bg-[#10b981]' 
                          : 'bg-gray-200 group-hover:bg-[#10b981]/40'
                      }`}
                      initial={{ opacity: 0.2, rotate: 6 }}
                      whileInView={{ 
                        opacity: step.active ? 0.4 : 0.2,
                        rotate: 6,
                      }}
                      whileHover={{ 
                        opacity: 0.4, 
                        rotate: 12,
                        scale: 1.05,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    />

                    <motion.div
                      className={`relative w-20 h-20 bg-white border rounded-[1.8rem] flex flex-col items-center justify-center ${
                        step.active
                          ? 'border-[#10b981] shadow-[0_20px_40px_rgba(16,185,129,0.15)] z-20'
                          : 'border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group-hover:border-[#10b981]/30'
                      }`}
                      initial={{ 
                        scale: step.active ? 1.1 : 1, 
                        y: step.active ? -8 : 0 
                      }}
                      whileInView={{ 
                        scale: step.active ? 1.1 : 1, 
                        y: step.active ? -8 : 0 
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.1,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent opacity-50 rounded-[1.8rem]" />

                      <motion.div
                        animate={step.active ? { 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <step.icon 
                          size={28} 
                          className={`${
                            step.active 
                              ? 'text-[#10b981]' 
                              : 'text-gray-300 group-hover:text-[#10b981]/70'
                          } transition-colors duration-500`}
                          strokeWidth={2.5}
                        />
                      </motion.div>

                      <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-gradient-to-br from-[#111] to-[#333] text-white text-xs font-black flex items-center justify-center border-2 border-white shadow-lg ${
                        step.active ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                      } transition-opacity`}>
                        {step.number}
                      </span>

                      <div className="relative mt-2 w-8 h-0.5 bg-gray-50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#10b981]"
                          initial={{ width: step.active ? '100%' : '0%' }}
                          whileInView={{ width: step.active ? '100%' : '0%' }}
                          whileHover={{ width: '50%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.15 + 0.5 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-1 w-2 h-2 rounded-full blur-[2px] bg-[#10b981]"
                      initial={{ opacity: step.active ? 1 : 0 }}
                      whileInView={{ opacity: step.active ? 1 : 0 }}
                      whileHover={{ opacity: 1 }}
                      animate={step.active ? {
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1]
                      } : {}}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <motion.div 
                    className="text-center lg:text-left px-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.4 }}
                  >
                    <h3 className={`text-xl font-black mb-3 tracking-tight transition-colors duration-300 ${
                      step.active 
                        ? 'text-[#10b981]' 
                        : 'text-gray-900 group-hover:text-[#10b981]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.description}
                    </p>
                  </motion.div>

                  {i < 3 && (
                    <motion.div 
                      className="lg:hidden my-12 opacity-20"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 0.2, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.6 }}
                    >
                      <svg className="w-8 h-8 rotate-90 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>

          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex items-center space-x-8 bg-gray-50 px-10 py-6 rounded-full border border-gray-100 shadow-sm">
              {[
                { value: "2-4", label: "Weeks to Deploy" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "10x", label: "ROI Average" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-black text-[#10b981]"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(16, 185, 129, 0)",
                        "0 0 20px rgba(16, 185, 129, 0.3)",
                        "0 0 0px rgba(16, 185, 129, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
