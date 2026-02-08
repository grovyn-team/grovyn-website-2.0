"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Metrics() {
  const t = useTranslations("metrics");
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10b981] mb-4 sm:mb-6 tracking-tight">
          HOW WE WORK
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-xs sm:text-[13px] leading-relaxed font-medium px-4">
          We focus on clear communication, realistic timelines, and building systems that continue to work well as your business grows.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {/* Card 1: 25+ Projects */}
          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col border border-gray-50 h-full">
            <div className="mb-auto">
              <h3 className="text-4xl sm:text-5xl font-black mb-3 sm:mb-4">25+</h3>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-6">
                PROJECTS SHIPPED
              </p>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                We have delivered digital systems across different stages of growth. Each project is approached with care, structure, and accountability rather than speed for the sake of speed.
              </p>
            </div>
          </div>

          {/* Card 2: Clear Pricing */}
          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-50 flex flex-col h-full">
            <div className="mb-auto">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 leading-tight">
                Clear pricing upfront
              </h4>
              <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
                We define scope, responsibilities, and costs before work begins. This reduces uncertainty, avoids surprises, and helps teams make decisions with confidence.
              </p>
            </div>
            <Link
              href="#contact"
              className="w-full bg-black text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full flex justify-between items-center text-xs sm:text-sm font-bold group hover:bg-[#10b981] transition-colors"
            >
              <span>Talk to us</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>

          {/* Card 3: Teams Across Time Zones */}
          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-50 flex flex-col h-full">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 leading-tight">
              Teams across time zones
            </h4>
            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4 sm:mb-6">
              Our teams collaborate across regions while maintaining consistent communication and shared standards. You always know who is responsible and where things stand.
            </p>
            <div className="grid grid-cols-3 gap-2 mt-auto">
              <div className="col-span-3 aspect-video bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden mb-1 relative w-full">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg sm:rounded-xl overflow-hidden relative w-full">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=150"
                  alt="Meeting"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg sm:rounded-xl overflow-hidden relative w-full">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=150"
                  alt="Collaboration"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg sm:rounded-xl overflow-hidden relative w-full">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=150"
                  alt="Office"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
          </div>

          {/* Card 4: 2-4 weeks */}
          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-50 flex flex-col h-full">
            <div className="mb-auto">
              <h3 className="text-3xl sm:text-4xl font-black mb-2 sm:mb-3">2–4 weeks</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">
                TYPICAL PROJECT START
              </p>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Most MVP engagements are delivered within this timeframe once scope and priorities are clearly defined. The focus is on building a stable foundation that can be extended, not rushing incomplete solutions.
              </p>
            </div>
          </div>

          {/* Card 5: 45 days */}
          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-50 flex flex-col h-full">
            <div className="mb-auto">
              <h3 className="text-3xl sm:text-4xl font-black mb-2 sm:mb-3">45 days</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">
                SUPPORT INCLUDED
              </p>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                After delivery, we provide structured support to ensure stability, address issues, and support a smooth transition. This period is designed to help teams move forward with confidence.
              </p>
            </div>
          </div>

          {/* Card 6: Ownership - spans 3 columns */}
          <div className="bg-[#F6F6F6] p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-center border border-gray-50 md:col-span-2 lg:col-span-3 h-full">
            <h3 className="text-2xl sm:text-3xl font-black leading-[1.2] text-[#111] mb-3 sm:mb-4">
              You own everything we build
            </h3>
            <p className="text-gray-600 text-base font-medium leading-relaxed">
              All code, systems, and deliverables belong to you. There is no lock-in. No dependency. No hidden control.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-y border-gray-100 py-4 sm:py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {['Reliable systems', 'Clear ownership', 'Thoughtful execution', 'Long-term thinking', 'Calm delivery', 'Practical engineering', 'Trusted partnerships'].map((item, i) => (
            <div
              key={i}
              className="flex items-center mx-6 sm:mx-10 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-[#111]"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#10b981] rounded-full mr-3 sm:mr-4" />
             {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
