"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FoundationLogo from "./FoundationLogo";
import Sidebar from "./Sidebar";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.mission, href: "/mission" },
    { label: t.nav.students, href: "/students" },
    { label: t.nav.donate, href: "/donate" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          isScrolled
            ? "shadow-sm border-b border-stone-200 py-3"
            : "border-b border-stone-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo on Left */}
            <div className="shrink-0">
              <FoundationLogo variant="header" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      active
                        ? "text-[#AA331D] font-semibold"
                        : "text-stone-700 hover:text-[#AA331D] hover:bg-[#FDF2F0]/60"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#AA331D] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
              <Link
                href="/donate"
                className="px-3.5 py-2 text-xs xl:text-sm font-medium text-[#AA331D] border border-[#F5D5CE] hover:border-[#AA331D] hover:bg-[#FDF2F0] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>{t.nav.support}</span>
              </Link>
              <Link
                href="/apply"
                className="px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-[#AA331D] hover:bg-[#8F2B18] shadow-xs hover:shadow-md rounded-lg transition-all flex items-center gap-1.5 group"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{t.nav.apply}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Actions: Apply CTA, Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/apply"
                className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#AA331D] rounded-md"
              >
                {t.nav.apply}
              </Link>
              <button
                ref={triggerButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:text-[#AA331D] hover:bg-stone-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#AA331D]/40 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-sidebar"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Polish & Dedicated Mobile Sidebar Component */}
      <Sidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
        triggerRef={triggerButtonRef}
      />
    </>
  );
}
