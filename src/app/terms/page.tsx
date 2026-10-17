"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { foundationDetails } from "@/data/foundation";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#AA331D] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.legal.backHome}</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900">
            {t.legal.termsTitle}
          </h1>
        </div>

        <div className="prose prose-stone max-w-none text-stone-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            {t.legal.termsIntro}
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            {t.legal.termsSec1Title}
          </h2>
          <p>
            {t.legal.termsSec1Text}
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            {t.legal.termsSec2Title}
          </h2>
          <p>
            {t.legal.termsSec2Text}
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            {t.legal.termsSec3Title}
          </h2>
          <p>
            {t.legal.termsSec3Text}
          </p>
        </div>
      </div>
    </main>
  );
}
