"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Search,
  ArrowRight,
  Filter,
  Mail,
  Layers,
  Zap,
  Terminal,
  Server,
  Rocket,
  Cpu,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Scaling PostgreSQL for 2.5M Concurrent Global Users",
    excerpt:
      "How we engineered a multi-region synchronization engine that maintains ACID compliance while slashing latency to <20ms.",
    category: "Engineering",
    date: "Feb 24, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
    isFeatured: true,
  },
  {
    id: "2",
    title: "The Evolution of Cross-Platform Mobile Bridging",
    excerpt:
      "Exploring the new architectural boundaries of Flutter and Native modules to achieve liquid-smooth 120fps animations.",
    category: "Product Updates",
    date: "Feb 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Implementing Zero-Trust Security in Hybrid SaaS",
    excerpt:
      "A deep dive into Grovyn's security protocols for isolating sensitive user data across diverse cloud environments.",
    category: "Spotlight",
    date: "Feb 10, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    title: "Micro-Frontend Orchestration: Lessons Learned",
    excerpt:
      "Scaling large-scale web dashboards without the overhead of monolithic bundles or CSS collisions.",
    category: "Infrastructure",
    date: "Jan 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    title: "AI Agent Workflows: From Prompt to Production",
    excerpt:
      "How we integrate LLM-driven logic directly into mission-critical SaaS platforms without sacrificing reliability.",
    category: "Productivity",
    date: "Jan 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    title: "The Future of Edge Computing in 2025",
    excerpt:
      "Moving logic closer to the user: A technical retrospective on our latest global node deployment.",
    category: "Spotlight",
    date: "Jan 05, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
];

const categories = [
  { name: "All Articles", icon: <Layers size={14} /> },
  { name: "Spotlight", icon: <Zap size={14} /> },
  { name: "Product Updates", icon: <Rocket size={14} /> },
  { name: "Engineering", icon: <Terminal size={14} /> },
  { name: "Infrastructure", icon: <Server size={14} /> },
  { name: "Productivity", icon: <Cpu size={14} /> },
];

export default function BlogContent() {
  const t = useTranslations("blog");
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All Articles" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-white overflow-x-hidden selection:bg-[#10b981] selection:text-white">
      <section className="py-12 px-6 bg-[#fafafa] text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
              {t("badge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-[4.5rem] font-black text-[#111] tracking-tighter italic">
            {t("title_line1")} <span className="text-[#10b981]">{t("title_highlight")}</span> {t("title_line2")}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative w-full lg:w-96 group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#10b981] transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-transparent rounded-2xl px-12 py-3.5 text-sm font-bold focus:outline-none focus:bg-white focus:border-[#10b981] transition-all"
            />
          </div>
          <div className="flex items-center space-x-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide w-full lg:w-auto justify-start lg:justify-end">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 border ${
                  activeCategory === cat.name
                    ? "bg-black text-white border-black shadow-lg"
                    : "bg-white border-gray-100 text-gray-400 hover:border-[#10b981]/40"
                }`}
              >
                <span className={activeCategory === cat.name ? "text-[#10b981]" : ""}>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight text-[#111]">All Articles</h2>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              Find tools and insights built to last.
            </p>
          </div>
          <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-300">
            <Filter size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {filteredPosts
            .filter((p) => p.isFeatured)
            .slice(0, 2)
            .map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative rounded-[3.5rem] overflow-hidden aspect-[16/10] mb-8 shadow-2xl border-4 border-gray-50">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-1.5 bg-[#10b981] text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="space-y-4 px-4">
                  <div className="flex items-center space-x-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-black text-[#111] tracking-tight group-hover:text-[#10b981] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center space-x-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#111] group-hover:translate-x-2 transition-transform">
                    <span>{t("read_more")}</span>
                    <ArrowRight size={16} className="text-[#10b981]" />
                  </div>
                </div>
              </article>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts
            .filter((p) => !p.isFeatured || filteredPosts.length <= 2)
            .map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[16/11] mb-6 shadow-xl border-4 border-gray-50">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-5 left-5">
                    <div className="px-3 py-1 bg-black text-white text-[8px] font-black uppercase tracking-widest rounded-full border border-white/20">
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center space-x-3 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#111] tracking-tight group-hover:text-[#10b981] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="pt-2 flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-[#111]">
                    <span>Read Dossier</span>
                    <ArrowRight size={14} className="text-[#10b981] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </article>
            ))}
        </div>

        <div className="mt-24 text-center">
          <button
            type="button"
            className="px-16 py-5 rounded-[2rem] border-2 border-gray-100 font-black text-[11px] uppercase tracking-widest text-[#111] hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
          >
            View More
          </button>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-gray-50 mt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl text-center space-y-10 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 pointer-events-none">
            <Mail size={300} />
          </div>
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-[#111] tracking-tighter italic">
              The Engineering <span className="text-[#10b981]">Newsletter.</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-xl mx-auto">
              Elevate your projects effortlessly with our technical blueprints and user-friendly customization advice.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-80 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 text-sm font-bold focus:outline-none focus:border-[#10b981] transition-all"
            />
            <button
              type="button"
              className="w-full sm:w-auto bg-[#10b981] text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl"
            >
              Subscribe
            </button>
          </div>
          <div className="pt-8 flex justify-center items-center space-x-6 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              Trusted by 10k+ engineers
            </span>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
