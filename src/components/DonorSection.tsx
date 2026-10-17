"use client";

import React from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import SectionHeading from "./SectionHeading";
import { topDonors, allDonors } from "@/data/donors";
import { Award, Heart, Shield, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DonorSection() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <section id="supporters" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.supporters.badge}
          title={t.supporters.heading}
          subtitle={t.supporters.gratitudeSubtitle}
        />

        {/* Top 3 Donors */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE]">
              <Award className="w-3.5 h-3.5" />
              {isHindi ? "विशिष्ट दानदाता" : "Honored Benefactors"}
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
              {t.supporters.heading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {topDonors.map((donor, idx) => (
              <div
                key={donor.id}
                className="relative rounded-2xl bg-gradient-to-b from-[#FDFBF7] to-white border-2 border-[#F5D5CE] p-7 shadow-xs hover:border-[#AA331D] hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between"
              >
                {/* Ranking & Photo Emblem */}
                {donor.image ? (
                  <div className="relative mx-auto w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#AA331D] shadow-sm p-0.5 bg-white ring-4 ring-[#FDF2F0]">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <ImageWithSkeleton
                        src={donor.image}
                        alt={donor.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                        containerClassName="w-full h-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#AA331D] text-white font-serif font-bold flex items-center justify-center text-lg shadow-2xs mb-4">
                    0{idx + 1}
                  </div>
                )}

                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#AA331D] block mb-1">
                    {donor.badge || (isHindi ? "शिक्षा संरक्षक" : "Education Patron")}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    {donor.name}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {donor.category || donor.citation}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-center gap-1.5 text-xs text-stone-500 font-medium">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isHindi ? "सत्यापित योगदान" : "Verified Contribution"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Valued Donors Grid */}
        <div className="border-t border-stone-200 pt-12">
          <div className="text-center mb-8">
            <h4 className="text-lg font-serif font-bold text-stone-900 flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-[#AA331D]" />
              {isHindi ? "अन्य उदार दानदाता एवं संरक्षक" : "Other Generous Contributors"}
            </h4>
            <p className="text-xs text-stone-600 mt-1 max-w-xl mx-auto">
              {isHindi
                ? "हम उन सभी समर्थकों के प्रति हृदय से आभारी हैं जो शिक्षा के इस पवित्र कार्य में अपनी आहुति दे रहे हैं।"
                : "Every donation directly supports a student's examination fees, textbooks, and educational equipment."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {allDonors.map((donor) => (
              <div
                key={donor.id}
                className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-3.5 text-center hover:bg-white hover:border-[#AA331D] hover:shadow-2xs transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#FDF2F0] text-[#AA331D] mx-auto mb-2 flex items-center justify-center text-xs font-bold font-serif">
                  {donor.name.charAt(0)}
                </div>
                <div className="font-serif font-semibold text-stone-900 text-xs sm:text-sm truncate">
                  {donor.name}
                </div>
                <div className="text-[11px] text-stone-500 truncate mt-0.5">
                  {donor.category || (isHindi ? "दानदाता" : "Contributor")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
