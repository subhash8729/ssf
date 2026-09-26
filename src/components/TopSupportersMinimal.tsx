"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { topDonors } from "@/data/donors";
import { Award, ArrowRight } from "lucide-react";

export default function TopSupportersMinimal() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FAF9F6] to-white border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="text-center mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF2F0] border border-[#F5D5CE] mb-2">
            <Award className="w-3.5 h-3.5 text-[#AA331D]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA331D]">
              Honored Patrons
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Our Top Supporters
          </h2>
        </div>

        {/* Top 3 Supporters: Image top-left, Name side-wise, Location below, nothing else */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {topDonors.map((supporter, index) => (
            <div
              key={supporter.id}
              className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-[#AA331D]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image at Top Left */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full shrink-0 p-0.5 bg-gradient-to-tr from-[#AA331D] to-[#D1B8B3] shadow-sm transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-stone-100">
                  <Image
                    src={supporter.image || `/images/supporter-${index + 1}.jpg`}
                    alt={supporter.name}
                    fill
                    sizes="72px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Name side-wise & Location nothing else */}
              <div className="min-w-0 flex-1 text-left">
                <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-[#AA331D] transition-colors leading-snug">
                  {supporter.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  {supporter.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Link */}
        <div className="mt-7 text-center">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#AA331D] transition-colors py-1 px-3 rounded-full hover:bg-[#FDF2F0]"
          >
            <span>Learn how you can sponsor a student</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
