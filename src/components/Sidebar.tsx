  "use client";
import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { X, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";
import FoundationLogo from "./FoundationLogo";
import { useLanguage } from "@/context/LanguageContext";
export interface NavLinkItem {
  label: string;
  href: string;
}
interface SidebarProps {
isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
  isActive: (href: string) => boolean;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}
export default function Sidebar({
  isOpen,
  onClose,
  navLinks,
  isActive,
  triggerRef,
}: SidebarProps) {
  const { t } = useLanguage();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // 1. Body scroll locking: lock background scrolling when open, restore when closed
  useEffect(() => {
    if (!isOpen) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen]);
  // 2. Focus management & Escape key handling
  useEffect(() => {
    if (isOpen) {
      // Focus close button on open
      const focusTimer = setTimeout(() => {
        closeButtonRef.current?.focus();
 }, 50);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
          return;
        }
        // Trap Tab navigation inside drawer dialog
        if (e.key === "Tab" && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };
window.addEventListener("keydown", handleKeyDown);
      return () => {
        clearTimeout(focusTimer);
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      // Return focus to trigger button when closed
      triggerRef?.current?.focus();
    }
  }, [isOpen, onClose, triggerRef]);
  // Navigation click: close smoothly
  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);
  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isOpen
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Subtle Backdrop with fade animation */}
      <div
        className={`fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Sidebar Drawer Panel: Smooth right-to-left slide transition */}
      <aside
        ref={drawerRef}
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.navigation}
        className={`fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-sm md:max-w-md bg-white shadow-2xl border-l border-stone-200/90 flex flex-col justify-between overflow-y-auto z-[100] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="p-5 sm:p-6 border-b border-stone-100 bg-[#FAF9F6] sticky top-0 z-10 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <FoundationLogo variant="footer" />
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 sm:p-2.5 rounded-xl text-stone-600 hover:text-[#AA331D] hover:bg-[#FDF2F0] active:scale-95 transition-all duration-150 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D]/40 cursor-pointer shrink-0"
          >
            <X className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </button>
        </div>
        {/* Drawer Nav Links */}
        <div className="flex-1 px-4 sm:px-6 py-5 overflow-y-auto space-y-4">
          <div className="px-2">
            <span className="text-[11px] uppercase font-bold tracking-wider text-[#AA331D]">
              {t.nav.navigation}
            </span>
          </div>
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  tabIndex={isOpen ? 0 : -1}
                  className={`group px-3.5 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-all duration-200 ${
                    active
                      ? "bg-[#FDF2F0] text-[#AA331D] font-bold shadow-2xs border border-[#F5D5CE]"
                      : "text-stone-800 hover:bg-stone-50 hover:text-[#AA331D] hover:translate-x-1"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {active && <span className="w-2 h-2 rounded-full bg-[#AA331D]" />}
                    <span>{link.label}</span>
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      active
                        ? "text-[#AA331D] opacity-100 translate-x-0"
                        : "text-stone-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

{/* Drawer Bottom Actions & Institutional Footer */}
        <div className="p-5 sm:p-6 border-t border-stone-200 bg-[#FAF9F6] space-y-3.5 shrink-0">
          <Link
            href="/apply"
            onClick={handleLinkClick}
            tabIndex={isOpen ? 0 : -1}
            className="w-full py-3.5 px-4 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] active:scale-[0.99] text-white font-semibold text-sm sm:text-base text-center flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t.nav.apply}</span>
          </Link>
          <Link
            href="/donate"
            onClick={handleLinkClick}
            tabIndex={isOpen ? 0 : -1}
            className="w-full py-3 px-4 rounded-xl border border-[#F5D5CE] text-[#AA331D] bg-white hover:bg-[#FDF2F0] active:scale-[0.99] font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all duration-200"
          >
            <span>{t.nav.support}</span>
          </Link>
          <div className="text-center pt-2 space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#AA331D]" />
              <span>{t.nav.headquartersNote}</span>
            </div>
            <p className="text-[11px] text-stone-500">
              {t.nav.associationNote}
            </p>
            <p className="text-[10px] text-[#AA331D] font-semibold pt-0.5">
              शिक्षा से सशक्तिकरण • Empowerment through Education
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
