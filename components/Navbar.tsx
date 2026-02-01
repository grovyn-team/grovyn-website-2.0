"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Phone, ChevronDown, Monitor, Smartphone, Database, Box, LayoutGrid, Users, Briefcase, Mail, Shield, FileCheck, X } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n/config";

export default function Navbar() {
  const t = useTranslations("navbar");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const prevBody = document.body.style.overflow;
      const prevHtml = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevBody;
        document.documentElement.style.overflow = prevHtml;
      };
    }
  }, [mobileMenuOpen]);

  const isHome = pathname === `/${locale}` || pathname === "/";
  const isDarkNav = !isScrolled && isHome;

  const serviceItems = [
    { title: t("menus.web"), desc: t("menus.web_desc"), icon: <Monitor size={20} />, slug: "web" },
    { title: t("menus.mobile"), desc: t("menus.mobile_desc"), icon: <Smartphone size={20} />, slug: "mobile" },
    { title: t("menus.backend"), desc: t("menus.backend_desc"), icon: <Database size={20} />, slug: "backend" },
    { title: t("menus.ai"), desc: t("menus.ai_desc"), icon: <Box size={20} />, slug: "ai" },
  ];

  const solutionItems = [
    { title: t("solutions_menu.industries"), desc: t("solutions_menu.industries_desc"), icon: <LayoutGrid size={20} />, href: `/${locale}/solutions/industries` },
  ];

  const resourceItems = [
    { title: t("about"), href: `/${locale}/about`, icon: <Users size={20} /> },
    { title: t("careers"), href: `/${locale}/careers`, icon: <Briefcase size={20} /> },
    { title: t("resources_menu.contact"), href: `/${locale}#contact`, icon: <Mail size={20} /> },
    { title: t("privacy"), href: `/${locale}/privacy`, icon: <Shield size={20} /> },
    { title: t("terms"), href: `/${locale}/terms`, icon: <FileCheck size={20} /> },
  ];

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`;
    router.push(newPath);
    setLocaleOpen(false);
  };

  const navClass = `h-20 fixed top-0 w-full z-[100] transition-all duration-300 ${
    isScrolled
      ? "bg-white/95 backdrop-blur-md text-[#111] border-b border-gray-100 shadow-sm"
      : isDarkNav
        ? "bg-black text-white"
        : "bg-white text-[#111]"
  }`;

  const linkClass = (active?: boolean) =>
    `hover:text-[#10b981] transition-colors py-2 ${active ? "text-[#10b981]" : ""}`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex justify-between items-center">
        <Link href={`/${locale}`} className="flex items-center space-x-3 group">
          <Image
            src="/grovyn_logo.png"
            alt="Grovyn"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10 text-sm font-bold h-full">
          <div
            className="relative group flex items-center h-full"
            onMouseEnter={() => setActiveMenu("services")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="relative h-full flex items-center">
              <button
                className={`flex items-center space-x-1.5 transition-colors py-2 ${linkClass(activeMenu === "services")}`}
              >
                <span>{t("services")}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 opacity-60 ${activeMenu === "services" ? "rotate-180 opacity-100" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 transform origin-top ${
                  activeMenu === "services"
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible -translate-y-2 scale-95"
                }`}
              >
                <div className="bg-white text-[#111] border border-gray-100 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-8 w-[600px] grid grid-cols-2 gap-x-10 gap-y-8">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${locale}/services/${service.slug}`}
                      className="flex items-start space-x-4 group/item hover:bg-gray-50/50 p-2 -m-2 rounded-2xl transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#10b981] group-hover/item:text-white transition-all">
                        {service.icon}
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-[#111] font-black text-sm">{service.title}</h5>
                        <p className="text-gray-400 text-[11px] font-medium leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative group flex items-center h-full"
            onMouseEnter={() => setActiveMenu("solutions")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="relative h-full flex items-center">
              <button
                className={`flex items-center space-x-1.5 transition-colors py-2 ${linkClass(activeMenu === "solutions")}`}
              >
                <span>{t("solutions")}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 opacity-60 ${activeMenu === "solutions" ? "rotate-180 opacity-100" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 transform origin-top ${
                  activeMenu === "solutions"
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible -translate-y-2 scale-95"
                }`}
              >
                <div className="bg-white text-[#111] border border-gray-100 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-6 w-[320px]">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start space-x-4 group/item hover:bg-gray-50/50 p-3 -m-3 rounded-2xl transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0 group-hover/item:bg-[#10b981] group-hover/item:text-white transition-all">
                        {item.icon}
                      </div>
                      <div className="space-y-0.5">
                        <h5 className="text-[#111] font-black text-sm">{item.title}</h5>
                        <p className="text-gray-400 text-[11px] font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative group flex items-center h-full"
            onMouseEnter={() => setActiveMenu("resources")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="relative h-full flex items-center">
              <button
                className={`flex items-center space-x-1.5 transition-colors py-2 ${linkClass(activeMenu === "resources")}`}
              >
                <span>{t("resources")}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 opacity-60 ${activeMenu === "resources" ? "rotate-180 opacity-100" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 transform origin-top ${
                  activeMenu === "resources"
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible -translate-y-2 scale-95"
                }`}
              >
                <div className="bg-white text-[#111] border border-gray-100 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-4 w-[240px] space-y-0.5">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 transition-all font-bold text-sm"
                      onClick={() => setActiveMenu(null)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                        {item.icon}
                      </div>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLocaleOpen(!localeOpen)}
              className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-1"
            >
              {localeNames[locale as Locale]}
              <ChevronDown size={12} className={localeOpen ? "rotate-180" : ""} />
            </button>
            {localeOpen && (
              <>
                <div
                  className="fixed inset-0 z-[90]"
                  onClick={() => setLocaleOpen(false)}
                  aria-hidden
                />
                <div className="absolute top-full right-0 mt-1 py-2 bg-white text-[#111] border border-gray-100 rounded-xl shadow-xl z-[95] min-w-[140px]">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => switchLocale(loc)}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors ${locale === loc ? "text-[#10b981]" : ""}`}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <Link
            href={`/${locale}#contact`}
            className="flex items-center space-x-2.5 px-6 py-3 rounded-xl border border-[#10b981]/40 text-[#10b981] font-bold text-sm hover:bg-[#10b981] hover:text-black transition-all group"
          >
            <Phone size={16} className="group-hover:animate-bounce" />
            <span>{t("cta")}</span>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer p-2 z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 transition-all ${isScrolled || !isHome ? "bg-black" : "bg-white"}`}
          />
          <div
            className={`w-6 h-0.5 transition-all ${isScrolled || !isHome ? "bg-black" : "bg-white"}`}
          />
          <div
            className={`w-4 h-0.5 transition-all self-end ${isScrolled || !isHome ? "bg-black" : "bg-white"}`}
          />
        </button>
      </div>

      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className={`md:hidden fixed inset-0 z-[9999] transition-all duration-300 ${
              mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 z-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden
            />
            <div
              className={`absolute top-0 right-0 z-10 h-full w-[80%] max-w-[400px] bg-white shadow-2xl p-8 transform transition-transform duration-300 ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              } [dir=rtl]:left-0 [dir=rtl]:right-auto [dir=rtl]:translate-x-0 ${
                mobileMenuOpen ? "[dir=rtl]:translate-x-0" : "[dir=rtl]:-translate-x-full"
              }`}
            >
              <div className="flex flex-col gap-8 h-full text-[#111]">
                <div className="flex items-center justify-between w-full shrink-0 bg-white">
                  <Link
                    href={`/${locale}`}
                    className="flex items-center space-x-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/grovyn_logo.png"
                      alt="Grovyn"
                      width={100}
                      height={34}
                      className="h-8 w-auto object-contain"
                      style={{ width: "auto" }}
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-lg text-[#111] hover:bg-gray-50 cursor-pointer transition-colors shrink-0"
                    aria-label="Close menu"
                  >
                    <X size={22} strokeWidth={2.5} />
                  </button>
                </div>
                <div className="flex flex-col gap-6 mt-2 overflow-y-auto">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {t("services")}
                  </p>
                  {serviceItems.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${locale}/services/${s.slug}`}
                      className="flex items-center gap-4 font-bold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                        {s.icon}
                      </div>
                      {s.title}
                    </Link>
                  ))}
                  <hr className="border-gray-100" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {t("solutions")}
                  </p>
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-4 font-bold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                        {item.icon}
                      </div>
                      {item.title}
                    </Link>
                  ))}
                  <hr className="border-gray-100" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {t("resources")}
                  </p>
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-4 font-bold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                        {item.icon}
                      </div>
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          switchLocale(loc);
                          setMobileMenuOpen(false);
                        }}
                        className={`px-3 py-2 rounded-lg text-sm font-bold border transition-colors ${
                          locale === loc
                            ? "bg-[#10b981] text-white border-[#10b981]"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        {localeNames[loc]}
                      </button>
                    ))}
                  </div>
                  <Link
                    href={`/${locale}#contact`}
                    className="w-full flex items-center justify-center gap-2 bg-[#10b981] text-black py-4 rounded-xl font-bold text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone size={16} />
                    {t("cta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
}
