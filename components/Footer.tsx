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
            <h5 className="text-white text-sm font-bold mb-6">{t("capabilities")}</h5>
            <ul className="text-xs space-y-4">
              <li>
                <Link href={`${base}#web-dev`} className="hover:text-emerald-500 transition-colors">
                  {t("web_dev")}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}#mobile-apps`}
                  className="hover:text-emerald-500 transition-colors"
                >
                  {t("mobile_eng")}
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="hover:text-emerald-500 transition-colors">
                  {t("ui_ux")}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}#backend-cloud`}
                  className="hover:text-emerald-500 transition-colors"
                >
                  {t("cloud_arch")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-6">{t("integrations")}</h5>
            <ul className="text-xs space-y-4">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  CometChat SDK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Sendbird UIKit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Payment Gateways
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  Third-party APIs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold mb-6">{t("connect")}</h5>
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
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href={`${base}#contact`} className="hover:text-emerald-500 transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex justify-between items-center text-[10px] uppercase tracking-[0.1em] font-bold">
          <p>© {new Date().getFullYear()} {t("copyright")}</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">
              {t("privacy")}
            </a>
            <a href="#" className="hover:text-white">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
