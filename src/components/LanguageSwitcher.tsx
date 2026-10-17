"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export default function LanguageSwitcher({
  className = "",
  variant = "desktop",
}: LanguageSwitcherProps) {
  const { language, toggleLanguage, isLanguageLoading } = useLanguage();

  const isHindi = language === "hi";
  const buttonLabel = isHindi ? "English" : "हिंदी";
  const ariaLabel = isHindi
    ? "Switch language to English"
    : "हिंदी में बदलें (Switch website to Hindi)";

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        disabled={isLanguageLoading}
        aria-label={ariaLabel}
        className={`w-full py-2.5 px-4 rounded-xl border border-[#F5D5CE] bg-[#FAF9F6] hover:bg-[#FDF2F0] text-stone-900 font-semibold text-sm flex items-center justify-between transition-all duration-200 cursor-pointer ${className}`}
      >
        <span className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#AA331D]" />
          <span>भाषा / Language</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#AA331D] text-white text-xs font-bold shadow-2xs">
          {buttonLabel}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      disabled={isLanguageLoading}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border cursor-pointer ${
        isHindi
          ? "border-stone-300 bg-white text-stone-800 hover:border-[#AA331D] hover:text-[#AA331D]"
          : "border-[#F5D5CE] bg-[#FDF2F0] text-[#AA331D] hover:bg-[#AA331D] hover:text-white"
      } shadow-2xs hover:shadow-xs active:scale-95 ${className}`}
    >
      <Globe className="w-3.5 h-3.5 shrink-0" />
      <span>{buttonLabel}</span>
      {isLanguageLoading && (
        <span className="w-2 h-2 rounded-full bg-current animate-ping" />
      )}
    </button>
  );
}
