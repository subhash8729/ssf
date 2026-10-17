"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { foundationDetails } from "@/data/foundation";
import { Globe, Loader2, AlertCircle, X } from "lucide-react";

export default function FloatingActions() {
  const { language, toggleLanguage, isLanguageLoading, languageError, clearLanguageError, t } =
    useLanguage();
  const [isNearTop, setIsNearTop] = useState(true);

  const isHindi = language === "hi";

  // Lightweight, passive scroll listener to show buttons ONLY near top of page (threshold ~80-100px)
  useEffect(() => {
    const threshold = 90;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsNearTop(window.scrollY < threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run once on mount to capture initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp link configuration
  const whatsappNumber = (foundationDetails.contactWhatsApp || "+919876543210").replace(/[^0-9]/g, "");
  const defaultMsg = isHindi
    ? "नमस्ते, मैं श्री सुशील शारदा फाउंडेशन की निःशुल्क ACCA कोचिंग के बारे में जानकारी प्राप्त करना चाहता हूँ।"
    : (foundationDetails.defaultWhatsAppMessage || "Hello Shri Sushil Sharda Foundation, I would like to inquire about free ACCA coaching.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

  const langButtonLabel = isHindi ? "English" : "हिंदी";
  const langTooltip = isLanguageLoading
    ? (isHindi ? "भाषा बदली जा रही है..." : "Switching language...")
    : (isHindi ? "Switch to English" : "हिंदी में बदलें (Switch to Hindi)");

  return (
    <aside
      aria-label="Floating Actions"
      className={`fixed right-4 bottom-5 sm:right-6 sm:bottom-7 z-40 flex flex-col items-center gap-3 transition-all duration-300 ease-out select-none ${
        isNearTop
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Optional Error Popover if language loading fails */}
      {languageError && (
        <div
          role="alert"
          className="absolute right-0 bottom-full mb-3 p-3 bg-red-600 text-white text-xs rounded-xl shadow-xl flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="leading-tight">{languageError}</span>
          <button
            type="button"
            onClick={clearLanguageError}
            className="p-1 hover:bg-white/20 rounded-md transition-colors"
            aria-label="Dismiss error"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 1. Language Toggle Button (Stacked Directly Above WhatsApp) */}
      <div className="relative group flex items-center">
        {/* Subtle Tooltip on Left */}
        <span
          role="tooltip"
          className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-stone-900/90 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block"
        >
          {langTooltip}
        </span>

        <button
          type="button"
          onClick={toggleLanguage}
          disabled={isLanguageLoading}
          aria-label={langTooltip}
          title={langTooltip}
          className={`w-14 h-14 sm:w-15 sm:h-15 rounded-full flex flex-col items-center justify-center font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white cursor-pointer focus:outline-hidden focus:ring-4 ${
            isHindi
              ? "bg-white text-[#AA331D] hover:bg-[#FDF2F0] focus:ring-[#AA331D]/30"
              : "bg-[#AA331D] text-white hover:bg-[#8F2B18] focus:ring-[#AA331D]/40"
          } ${isLanguageLoading ? "opacity-90 cursor-wait" : ""}`}
        >
          {isLanguageLoading ? (
            <div className="flex flex-col items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-[9px] font-semibold tracking-tighter mt-0.5">
                {isHindi ? "बदल रहा है" : "Switching"}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center leading-none">
              <Globe className="w-4 h-4 mb-1 opacity-90" />
              <span className="text-xs sm:text-[13px] font-serif font-bold tracking-tight">
                {langButtonLabel}
              </span>
            </div>
          )}
        </button>
      </div>

      {/* 2. WhatsApp Button (Directly Beneath Language Button) */}
      <div className="relative group flex items-center">
        {/* Tooltip on Left */}
        <span
          role="tooltip"
          className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-stone-900/90 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block"
        >
          {isHindi ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp"}
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isHindi ? "श्री सुशील शारदा फाउंडेशन से व्हाट्सएप पर चैट करें" : "Chat with Shri Sushil Sharda Foundation on WhatsApp"}
          title={isHindi ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp"}
          className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        >
          <div className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 shrink-0 flex items-center justify-center">
            <Image
              src="/images/whatsapp.svg"
              alt=""
              width={34}
              height={34}
              className="w-full h-full object-contain filter drop-shadow-xs"
              priority={false}
            />
          </div>
        </a>
      </div>
    </aside>
  );
}
