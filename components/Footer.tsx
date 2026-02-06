"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const base = `/${locale}`;
  return (
    <footer className="bg-[#111] text-gray-500 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 rounded-full border border-emerald-500 flex items-center justify-center font-bold text-emerald-500">
                G
              </div>
              <span className="text-xl font-semibold tracking-tight">grovyn</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center space-x-3 text-[11px] font-medium group">
                <Mail size={14} className="text-emerald-500 shrink-0" />
                <a
                  href="mailto:contact@grovyn.in"
                  className="hover:text-white transition-colors"
                >
                  contact@grovyn.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[11px] font-medium group">
                <Phone size={14} className="text-emerald-500 shrink-0" />
                <a href="tel:+917354972920" className="hover:text-white transition-colors">
                  +91 73549 72920
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[11px] font-medium group">
                <MapPin size={14} className="text-emerald-500 shrink-0" />
                <span>{t("location")}</span>
              </div>
              <div className="flex items-center space-x-3 text-[11px] font-medium group">
                <Clock size={14} className="text-emerald-500 shrink-0" />
                <span>{t("hours")}</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-6">{t("services_heading")}</h5>
            <ul className="text-xs space-y-4">
              <li>
                <Link href={`${base}#web-dev`} className="hover:text-emerald-500 transition-colors">
                  {t("web_dev")}
                </Link>
              </li>
              <li>
                <Link href={`${base}#mobile-apps`} className="hover:text-emerald-500 transition-colors">
                  {t("mobile_eng")}
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="hover:text-emerald-500 transition-colors">
                  {t("ui_ux")}
                </Link>
              </li>
              <li>
                <Link href={`${base}#backend-cloud`} className="hover:text-emerald-500 transition-colors">
                  {t("cloud_arch")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-6">{t("company_heading")}</h5>
            <ul className="text-xs space-y-4">
              <li>
                <Link href={`${base}/about`} className="hover:text-emerald-500 transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href={`${base}/careers`} className="hover:text-emerald-500 transition-colors">
                  {t("careers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-6">{t("resources_heading")}</h5>
            <ul className="text-xs space-y-4">
              <li>
                <Link href={`${base}/blog`} className="hover:text-emerald-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`${base}#contact`} className="hover:text-emerald-500 transition-colors">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href={`${base}/privacy`} className="hover:text-emerald-500 transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href={`${base}/terms`} className="hover:text-emerald-500 transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/grovynsystems/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                >
                  {t("linkedin")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex justify-between items-center text-[10px] uppercase tracking-[0.1em] font-bold">
          <p>© {new Date().getFullYear()} {t("copyright")}</p>
          <div className="flex space-x-8">
            <Link href={`${base}/privacy`} className="hover:text-white">
              {t("privacy")}
            </Link>
            <Link href={`${base}/terms`} className="hover:text-white">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
