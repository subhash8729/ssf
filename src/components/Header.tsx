"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FoundationLogo from "./FoundationLogo";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" },
    { label: "Students", href: "/students" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
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
                    key={link.label}
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
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                href="/donate"
                className="px-3.5 py-2 text-xs xl:text-sm font-medium text-[#AA331D] border border-[#F5D5CE] hover:border-[#AA331D] hover:bg-[#FDF2F0] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Support a Student</span>
              </Link>
              <Link
                href="/apply"
                className="px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-[#AA331D] hover:bg-[#8F2B18] shadow-xs hover:shadow-md rounded-lg transition-all flex items-center gap-1.5 group"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for ACCA Support</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/apply"
                className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#AA331D] rounded-md"
              >
                Apply
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:text-[#AA331D] hover:bg-stone-100 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="space-y-4">
              <div className="pb-3 border-b border-stone-100">
                <span className="text-xs uppercase font-bold tracking-wider text-[#AA331D]">
                  Navigation
                </span>
              </div>
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                        active
                          ? "bg-[#FDF2F0] text-[#AA331D] font-semibold"
                          : "text-stone-800 hover:bg-stone-50 hover:text-[#AA331D]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#AA331D]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-3">
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-lg bg-[#AA331D] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for ACCA Support</span>
              </Link>
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-lg border border-[#F5D5CE] text-[#AA331D] font-medium text-center flex items-center justify-center gap-2 hover:bg-[#FDF2F0]"
              >
                <span>Support a Student</span>
              </Link>
              <div className="text-center pt-2">
                <p className="text-xs text-stone-500">
                  Headquartered in Dehradun, Uttarakhand
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Associated with Amit Dharaniya Global Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
