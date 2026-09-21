import React from "react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { CheckCircle2, ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";
import { foundationDetails } from "@/data/foundation";

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Candidate Criteria"
          title="Who Can Apply?"
          subtitle="We focus on identifying academically driven students with strong foundations in analytical and language skills."
        />

        <div className="max-w-4xl mx-auto">
          {/* Highlighted Eligibility Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#FDF2F0] via-white to-[#FAF9F6] border-2 border-[#AA331D] p-8 sm:p-10 shadow-md overflow-hidden">
            {/* Background motif */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#AA331D]/5 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#F5D5CE]">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#AA331D] text-white mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Primary Eligibility Benchmark
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-snug">
                  {foundationDetails.eligibilityCriteria}
                </h3>
              </div>

              <div className="shrink-0 bg-white px-5 py-3 rounded-2xl border border-stone-200 shadow-2xs text-center">
                <span className="text-xs uppercase font-bold text-stone-500 block">Minimum Score</span>
                <span className="text-3xl font-serif font-bold text-[#AA331D]">90%+</span>
              </div>
            </div>

            <div className="relative z-10 pt-6 space-y-4 text-stone-700">
              <h4 className="font-semibold text-stone-900 text-base">Application Context & Intent:</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                {foundationDetails.eligibilityNote}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                If you have demonstrated academic excellence in your Class X or Class XII board exams and have a passion for finance, auditing, and global business reporting, the foundation welcomes your application.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-stone-800 bg-white/70 p-3 rounded-xl border border-stone-200/70">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0" />
                  <span>Strong English & Mathematical/Accounting Aptitude</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-stone-800 bg-white/70 p-3 rounded-xl border border-stone-200/70">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0" />
                  <span>Demonstrated Genuine Financial Need</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/apply"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Check & Submit Application</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-stone-500 text-center sm:text-left">
                  Tuition is 100% free for selected candidates. No hidden application fees.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
