"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { foundationDetails } from "@/data/foundation";
import { useLanguage } from "@/context/LanguageContext";

export default function DisclaimerPage() {
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
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900">
            {t.legal.disclaimerTitle}
          </h1>
        </div>

        <div className="prose prose-stone max-w-none text-stone-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#F5D5CE]">
            <p className="font-semibold text-stone-900">
              {t.legal.disclaimerEntityNote}
            </p>
          </div>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            {t.legal.disclaimerSec1Title}
          </h2>
          <p>
            {t.legal.disclaimerSec1Text}
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            {t.legal.disclaimerSec2Title}
          </h2>
          <p>
            {t.legal.disclaimerSec2Text}
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            {t.legal.disclaimerSec3Title}
          </h2>
          <p>
            {t.legal.disclaimerSec3Text}
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            {t.legal.disclaimerSec4Title}
          </h2>
          <p>
            {t.legal.disclaimerSec4Text}
          </p>
        </div>
      </div>
    </main>
  );
}
