"use client";

import React from "react";
import ApplicationForm from "@/components/ApplicationForm";
import Eligibility from "@/components/Eligibility";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ApplyContent() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const faqs = [
    {
      q: isHindi ? "क्या कोचिंग वास्तव में 100% निःशुल्क है?" : "Is tuition really 100% free?",
      a: isHindi
        ? "हाँ। श्री सुशील शारदा फाउंडेशन चयनित छात्रों से कोई ट्यूशन या कोचिंग शुल्क नहीं लेता है। सभी लाइव व्याख्यान, रिकॉर्डेड कक्षाएं और अध्ययन मार्गदर्शन पूरी तरह निःशुल्क प्रदान किया जाता है।"
        : "Yes. Shri Sushil Sharda Foundation does not charge any tuition or coaching fees from selected students. All lectures, live sessions, and recordings are provided free of cost.",
    },
    {
      q: isHindi ? "ट्यूशन में कौन-से खर्च शामिल नहीं हैं?" : "What costs are not covered by tuition?",
      a: isHindi
        ? "ट्यूशन पूरी तरह निःशुल्क है। हालांकि, यूके स्थित वैश्विक ACCA संस्था द्वारा सीधे लिए जाने वाले बाह्य परीक्षा शुल्क, आधिकारिक पुस्तकें और वार्षिक छात्र सदस्यता शुल्क अलग होते हैं।"
        : "Tuition is free. However, external examination fees, official books, and annual subscription charges levied directly by the global ACCA body are separate.",
    },
    {
      q: isHindi ? "आवेदन हेतु प्राथमिक पात्रता क्या है?" : "What is the primary eligibility criteria?",
      a: isHindi
        ? "फाउंडेशन उन विद्यार्थियों पर ध्यान केंद्रित करता है जिन्होंने 10वीं या 12वीं में अंग्रेजी और गणित/अकाउंट्स में 90% या अधिक अंक प्राप्त किए हैं और जो आर्थिक रूप से कमजोर पृष्ठभूमि से आते हैं।"
        : "The foundation focuses on Class X or XII students scoring 90% or above in English and Mathematics/Accountancy who come from financially disadvantaged backgrounds.",
    },
    {
      q: isHindi ? "कक्षाएं किस प्रकार संचालित की जाती हैं?" : "How are classes conducted?",
      a: isHindi
        ? "कक्षाएं लाइव ऑनलाइन इंटरएक्टिव सत्रों, रिकॉर्डेड रिवीजन आर्काइव्स और सुव्यवस्थित शिक्षण मॉड्यूल के माध्यम से संचालित की जाती हैं, जिन्हें भारत में कहीं से भी एक्सेस किया जा सकता है।"
        : "Classes are delivered through live online interactive sessions, live recorded revision archives, and structured pre-recorded modules accessible from anywhere in India.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#FDFBF7] to-white py-8 sm:py-10 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#AA331D] mb-3 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.apply.backHome}</span>
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE] mb-2">
              {t.apply.badge}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {t.apply.heading}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
              {t.apply.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Highlighted Eligibility */}
      <Eligibility />

      {/* Main Interactive Application Form */}
      <ApplicationForm />

      {/* Application FAQs with Interactive Accordion */}
      <section className="py-10 sm:py-14 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#AA331D]" />
              {t.apply.faqTitle}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              {isHindi ? "प्रवेश एवं आवेदन संबंधी अक्सर पूछे जाने वाले प्रश्न" : "Application & Enrollment Clarifications"}
            </h2>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}
