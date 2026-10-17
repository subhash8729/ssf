"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { foundationDetails } from "@/data/foundation";
import { useLanguage } from "@/context/LanguageContext";

export default function Eligibility() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <section id="eligibility" className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.apply.criteriaBadge}
          title={isHindi ? "कौन आवेदन कर सकता है?" : "Who Can Apply?"}
          subtitle={isHindi
            ? "हम विश्लेषणात्मक और भाषाई कौशल में मजबूत नींव रखने वाले मेधावी विद्यार्थियों की पहचान करने पर ध्यान केंद्रित करते हैं।"
            : "We focus on identifying academically driven students with strong foundations in analytical and language skills."}
        />

        <div className="max-w-4xl mx-auto">
          {/* Highlighted Eligibility Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#FDF2F0] via-white to-[#FAF9F6] border-2 border-[#AA331D] p-6 sm:p-8 shadow-sm overflow-hidden">
            {/* Background motif */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#AA331D]/5 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-[#F5D5CE]">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#AA331D] text-white mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {isHindi ? "प्राथमिक पात्रता मानदंड" : "Primary Eligibility Benchmark"}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug">
                  {isHindi
                    ? "कक्षा 10वीं या 12वीं में 90%+ अंक (विशेष रूप से अंग्रेजी और गणित/अकाउंटेंसी में)"
                    : foundationDetails.eligibilityCriteria}
                </h3>
              </div>

              <div className="shrink-0 bg-white px-4 py-2.5 rounded-2xl border border-stone-200 shadow-2xs text-center">
                <span className="text-[11px] uppercase font-bold text-stone-500 block">
                  {isHindi ? "न्यूनतम अंक" : "Minimum Score"}
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#AA331D]">90%+</span>
              </div>
            </div>

            <div className="relative z-10 pt-4 space-y-3 text-stone-700">
              <h4 className="font-semibold text-stone-900 text-sm">
                {isHindi ? "आवेदन संदर्भ और उद्देश्य:" : "Application Context & Intent:"}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                {isHindi
                  ? "श्री सुशील शारदा फाउंडेशन विशेष रूप से उन जरूरतमंद छात्रों को अवसर प्रदान करता है जो वित्तीय बाधाओं के कारण वैश्विक चार्टर्ड अकाउंटेंसी की महंगी शिक्षा प्राप्त करने में असमर्थ हैं।"
                  : foundationDetails.eligibilityNote}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isHindi
                  ? "यदि आपने अपनी 10वीं या 12वीं कक्षा की बोर्ड परीक्षा में उत्कृष्ट प्रदर्शन किया है और वित्त, ऑडिटिंग या वैश्विक व्यापार रिपोर्टिंग में करियर बनाने की तीव्र लगन है, तो फाउंडेशन आपके आवेदन का स्वागत करता है।"
                  : "If you have demonstrated academic excellence in your Class X or Class XII board exams and have a passion for finance, auditing, and global business reporting, the foundation welcomes your application."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-800 bg-white/70 p-2.5 rounded-xl border border-stone-200/70">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0" />
                  <span>
                    {isHindi
                      ? "अंग्रेजी व गणित / अकाउंट्स में 90%+ अंक"
                      : "Strong English & Mathematical/Accounting Aptitude"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-800 bg-white/70 p-2.5 rounded-xl border border-stone-200/70">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0" />
                  <span>
                    {isHindi
                      ? "वास्तविक वित्तीय सहायता की आवश्यकता"
                      : "Demonstrated Genuine Financial Need"}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-[#AA331D] shrink-0" />
                <span>
                  {isHindi
                    ? "100% निःशुल्क ट्यूशन • कोई गुप्त शुल्क नहीं"
                    : "100% Free Tuition • No hidden charges"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
