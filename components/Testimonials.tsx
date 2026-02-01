"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    id: 1,
    name: "P V Joseph",
    role: "Founder, CEO of Stigma Healthcare",
    text: "Grovyn helped us move from idea to a production-ready MVP in weeks. What stood out was their focus on clean architecture and future scalability, even at an early stage.",
    rating: "4.0/5",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO of NexGen Fintech",
    text: "The integration capabilities of the Grovyn team are unmatched. They seamlessly plugged in CometChat and Sendbird into our existing infrastructure with zero downtime.",
    rating: "5.0/5",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Product Lead at Velocity SaaS",
    text: "They don't just write code; they engineer growth. Our user base tripled, and the system Grovyn built handled the load without breaking a sweat.",
    rating: "4.5/5",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const t = useTranslations("testimonials");
  return (
    <section className="py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-2/5 space-y-8">
          <h2 className="text-6xl font-black leading-[1.1] text-[#111]">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md">
            {t("subtitle")}
          </p>
        </div>

        <div className="lg:w-3/5 flex flex-col items-center">
          <div className="relative w-full min-h-[500px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              let position = index - activeIndex;
              if (position < 0) position += testimonials.length;

              const isMain = position === 0;
              const isSecond = position === 1;
              const isThird = position === 2;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-full max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.23, 1, 0.32, 1)] ${
                    isMain ? "z-30 opacity-100 scale-100 translate-x-0 rotate-0" : ""
                  } ${isSecond ? "z-20 opacity-40 scale-95 translate-x-12 rotate-[3deg]" : ""} ${
                    isThird ? "z-10 opacity-10 scale-90 translate-x-24 rotate-[6deg]" : ""
                  } ${!isMain && !isSecond && !isThird ? "z-0 opacity-0 scale-75" : ""}`}
                  style={{ pointerEvents: isMain ? "auto" : "none" }}
                >
                  <div className="bg-[#FFF5F5] rounded-[3rem] p-10 lg:p-14 shadow-2xl border border-pink-50/50 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/30 rounded-full blur-3xl -mr-16 -mt-16" />

                    <div className="w-full md:w-1/3 flex flex-col items-center">
                      <div className="relative w-40 h-40 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white mb-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="160px"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-gray-800">{testimonial.rating}</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              fill={
                                i < Math.floor(parseFloat(testimonial.rating)) ? "currentColor" : "none"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                      <div className="relative">
                        <span className="absolute -top-6 -left-4 text-pink-200 text-8xl font-serif select-none opacity-50">
                          &quot;
                        </span>
                        <p className="text-gray-700 text-xl leading-relaxed font-medium mb-12 relative z-10">
                          {testimonial.text}
                        </p>
                      </div>
                      <div className="text-right">
                        <h4 className="text-2xl font-black text-[#111]">{testimonial.name}</h4>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center space-y-6">
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handlePrev}
                className="p-4 rounded-full border border-gray-200 bg-white hover:bg-black hover:text-white transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-4 rounded-full border border-gray-200 bg-white hover:bg-black hover:text-white transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-10 bg-emerald-500" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
