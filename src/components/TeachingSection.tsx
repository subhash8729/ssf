"use client";

import React from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { MonitorPlay, Video, BookMarked, Users, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TeachingSection() {
  const { t } = useLanguage();

  const highlights = [
    { title: t.teaching.feature1Title, desc: t.teaching.feature1Desc, icon: Video },
    { title: t.teaching.feature2Title, desc: t.teaching.feature2Desc, icon: MonitorPlay },
    { title: t.teaching.feature3Title, desc: t.teaching.feature3Desc, icon: BookMarked },
    { title: t.teaching.feature4Title, desc: t.teaching.feature4Desc, icon: Users },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F5D5CE] shadow-lg bg-white p-2">
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-stone-100">
                <ImageWithSkeleton
                  src="/images/classroom-training.webp"
                  alt="Instructor teaching students ACCA concepts in classroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                  containerClassName="w-full h-full"
                />
              </div>

              {/* Floating secondary badge showcasing real classroom - mobile-friendly */}
              <div className="absolute -bottom-3 right-3 sm:-bottom-4 sm:right-6 bg-white p-1.5 sm:p-2 rounded-2xl border border-stone-200 shadow-md max-w-xs flex items-center gap-2.5 sm:gap-3">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-stone-100">
                  <ImageWithSkeleton
                    src="/images/academy-classroom.jpg"
                    alt="Classroom students"
                    fill
                    sizes="56px"
                    className="object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">{t.teaching.classroomTitle}</p>
                  <p className="text-[10px] sm:text-[11px] text-stone-500">{t.teaching.classroomSubtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                {t.teaching.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {t.teaching.heading}
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                {t.about.whoText3}
              </p>
            </div>

            {/* Teaching Capabilities 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs hover:border-[#AA331D]/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-[#FDF2F0] text-[#AA331D]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-stone-900 text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
