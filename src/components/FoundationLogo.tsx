"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface FoundationLogoProps {
  variant?: "header" | "footer" | "hero";
  className?: string;
}

export default function FoundationLogo({ variant = "header", className = "" }: FoundationLogoProps) {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Shri Sushil Sharda Foundation Home"
    >
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden border border-[#F5D5CE] shadow-xs bg-white flex items-center justify-center p-0.5">
        <Image
          src="/images/foundation-logo.jpeg"
          alt="Shri Sushil Sharda Foundation Emblem"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-serif tracking-tight font-bold text-[#1A1A1A] group-hover:text-[#AA331D] transition-colors ${
            variant === "footer" ? "text-xs text-white group-hover:text-white" : "text-xs leading-snug"
          }`}
        >
          {isHindi ? t.brand.hindiName : t.brand.name}
        </span>
        <span
          className={`text-xs font-medium tracking-wide flex items-center gap-1.5 ${
            variant === "footer" ? "text-stone-300" : "text-[#AA331D]"
          }`}
        >
          <span>{isHindi ? t.brand.tagline : t.brand.hindiTagline}</span>
        </span>
      </div>
    </Link>
  );
}
