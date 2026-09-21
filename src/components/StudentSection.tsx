import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Sparkles } from "lucide-react";

export default function StudentSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FDFBF7] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Container */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-lg aspect-4/5 sm:aspect-5/6 rounded-3xl overflow-hidden border-2 border-[#F5D5CE] shadow-xl bg-white p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src="/images/student-campus.png"
                  alt="ACCA student on campus - Shri Sushil Sharda Foundation"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative overlay badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-stone-200/80 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#AA331D] text-white flex items-center justify-center font-bold shrink-0 text-sm">
                    श्री
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900">Sushil Sharda Foundation</p>
                    <p className="text-[11px] text-[#AA331D] font-medium">शिक्षा से सशक्तिकरण • Empowerment through Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE]">
              <Sparkles className="w-3.5 h-3.5 text-[#AA331D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                Student Story & Purpose
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Talent Should Never Be Stopped by Financial Barriers
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Every year, countless bright and dedicated young minds demonstrate outstanding analytical ability, discipline, and ambition. Yet, the formidable expense of international professional qualifications often forces them to abandon their aspirations.
              </p>

              <div className="p-4 rounded-xl bg-white border-l-4 border-[#AA331D] shadow-2xs">
                <p className="text-stone-800 italic text-base flex items-start gap-2">
                  <Quote className="w-4 h-4 text-[#AA331D] shrink-0 mt-1 rotate-180" />
                  <span>
                    A deserving student may have the talent, discipline and ambition to become a global accountant, but financial limitations should not decide their future.
                  </span>
                </p>
              </div>

              <p className="text-stone-600 text-base">
                Through comprehensive free tuition and structured guidance, the Shri Sushil Sharda Foundation ensures that economic background does not limit intellectual potential. We prepare our scholars to meet the exacting standards of the global chartered accountancy profession.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold shadow-xs hover:shadow-md transition-all group"
              >
                <span>Start Your Application</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
