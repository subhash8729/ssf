"use client";

import React from "react";
import Link from "next/link";
import FoundationLogo from "./FoundationLogo";
import { foundationDetails } from "@/data/foundation";
import { MapPin, Building, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.mission, href: "/mission" },
    { label: t.nav.students, href: "/students" },
    { label: t.nav.donate, href: "/donate" },
    { label: t.nav.apply, href: "/apply" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t-4 border-[#AA331D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Purpose */}
          <div className="lg:col-span-7 space-y-4">
            <FoundationLogo variant="footer" />

            <p className="text-sm text-stone-400 leading-relaxed max-w-md pt-2">
              {t.about.whoText2}
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#AA331D]" />
                <span>{t.nav.headquartersNote}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#AA331D]" />
                <span>{t.footer.pvtLtdNotice}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={foundationDetails.academyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#F5D5CE] hover:text-white transition-colors"
              >
                <span>{t.nav.associationNote}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white border-l-2 border-[#AA331D] pl-2.5">
              {t.nav.navigation}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statutory Disclaimer & Legal Links */}
        <div className="pt-8 space-y-4 text-xs text-stone-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              <p className="text-stone-500">
                © {new Date().getFullYear()} {t.brand.name}. {t.footer.rightsReserved}
              </p>
              <p className="text-[11px] text-[#AA331D] mt-0.5">
                {t.footer.taglineBottom}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="hover:text-stone-200 transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-stone-200 transition-colors">
                {t.footer.termsOfUse}
              </Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-stone-200 transition-colors">
                {t.footer.disclaimer}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
