import React from "react";
import SectionHeading from "./SectionHeading";
import { Video, PlaySquare, BookOpen, AlertCircle, Check } from "lucide-react";
import { foundationDetails } from "@/data/foundation";

export default function WhatWeOffer() {
  const cards = [
    {
      title: "LIVE ONLINE",
      subtitle: "Interactive Virtual Classrooms",
      description: "Learn through instructor-led online classes with interactive doubt clearing and real-time conceptual discussions.",
      icon: Video,
      highlights: ["Direct interaction with educators", "Scheduled live batches", "Real-time query resolution"],
    },
    {
      title: "LIVE RECORDED",
      subtitle: "Comprehensive Classroom Archives",
      description: "Access recorded classroom sessions for revision, thorough note-taking, and flexible learning anytime.",
      icon: PlaySquare,
      highlights: ["Never miss a single session", "Revisit complex numericals", "Available throughout the term"],
    },
    {
      title: "PRE-RECORDED",
      subtitle: "Modular Self-Paced Courses",
      description: "Study structured learning content at your own pace with meticulously organized syllabus-aligned modules.",
      icon: BookOpen,
      highlights: ["Self-paced syllabus coverage", "Concept-by-concept breakdown", "Flexible study schedules"],
    },
  ];

  return (
    <section id="offer" className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum & Delivery"
          title="What We Offer"
          subtitle="Comprehensive, high-caliber ACCA coaching designed to give ambitious students the academic backing they need to succeed."
        />

        {/* Clear Foundation Offer Statement */}
        <div className="max-w-3xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-white border border-[#F5D5CE] shadow-2xs text-center">
          <p className="text-base sm:text-lg text-stone-800 font-medium leading-relaxed">
            &ldquo;{foundationDetails.offerStatement}&rdquo;
          </p>
          <p className="text-xs uppercase tracking-wider text-[#AA331D] font-bold mt-2">
            100% Free Tuition for Eligible Scholars
          </p>
        </div>

        {/* 3 Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-stone-200/90 hover:border-[#AA331D] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-stone-500">
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-2">
                  {card.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-stone-600">
                      <Check className="w-3.5 h-3.5 text-[#AA331D] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Transparency Note */}
        <div className="max-w-4xl mx-auto rounded-xl bg-amber-50/70 border border-amber-200/80 p-4 sm:p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong className="font-semibold text-amber-900">Important Note on Fees: </strong>
            {foundationDetails.feeNotice}
          </div>
        </div>
      </div>
    </section>
  );
}
