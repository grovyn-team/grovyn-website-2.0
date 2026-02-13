"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  {
    value: "15+",
    label: "Production Deployments",
    meaning: "Proven real-world delivery with repeatable, low-risk releases",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    meaning: "Enterprise SLA-grade reliability and availability",
  },
  {
    value: "Multi-Cloud",
    label: "& Hybrid Expertise",
    meaning: "AWS, Azure, GCP and on-prem—right fit for your stack",
  },
  {
    value: "Security First",
    label: "Architecture",
    meaning: "Zero-trust, compliance-ready design from day one",
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  }),
};

const cardMotion = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function TrustCapabilityMetrics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative trust-metrics-noise bg-[#f7f8f9] py-16 md:py-24 lg:py-28 overflow-hidden"
      aria-labelledby="trust-metrics-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            id="trust-metrics-heading"
            className="text-sm md:text-base font-black uppercase tracking-[0.35em] md:tracking-[0.45em] text-[#10b981]/90"
          >
            Trust & Capability Metrics
          </h2>
          <p className="mt-3 text-gray-500 text-xs md:text-sm font-medium max-w-xl mx-auto">
            Numbers that reflect how we deliver for enterprises
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 xl:gap-16 justify-items-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="group flex flex-col items-center w-full max-w-[200px]"
              variants={cardMotion}
            >
              {/* Card wrapper: hover lift + glow */}
              <motion.div
                className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full trust-card-glow transition-shadow duration-500"
                style={{
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.12), 0 0 40px rgba(16, 185, 129, 0.06)",
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
                }}
              >
                {/* Rotating gradient ring (visible as thin stroke) */}
                <div
                  className="absolute inset-0 rounded-full animate-trust-ring"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, rgba(16, 185, 129, 0.45) 70deg, rgba(16, 185, 129, 0.9) 180deg, rgba(16, 185, 129, 0.45) 290deg, transparent 360deg)`,
                  }}
                  aria-hidden
                />
                {/* Inner mask: glass circle so ring shows */}
                <div
                  className="absolute inset-[3px] rounded-full flex flex-col items-center justify-center text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.78)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow:
                      "0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
                  }}
                >
                  <span className="font-black text-[#111] text-base md:text-lg lg:text-xl tracking-tight leading-tight px-2">
                    {metric.value}
                  </span>
                  <span
                    className="mt-0.5 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.18em] text-gray-500/90"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {metric.label}
                  </span>
                </div>
                {/* Subtle static ring glow (pulse) */}
                <div
                  className="absolute inset-[3px] rounded-full border border-[#10b981]/25 animate-trust-ring-pulse pointer-events-none"
                  aria-hidden
                />
              </motion.div>

              {/* Meaning: visible on desktop for context, available to screen readers on mobile */}
              <p className="mt-4 text-center text-[10px] md:text-xs text-gray-400 max-w-[180px] leading-snug hidden md:block">
                {metric.meaning}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
