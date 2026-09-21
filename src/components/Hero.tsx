import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-100">
      {/* Subtle background decorative motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDF2F0]/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAF9F6] rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#AA331D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                Shri Sushil Sharda Foundation
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl/tight font-serif font-bold text-stone-900 tracking-tight">
              Empowering Students Through{" "}
              <span className="relative inline-block text-[#AA331D]">
                Free ACCA Education
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-[#AA331D]/25"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl font-medium text-stone-700 leading-relaxed max-w-2xl">
              We believe financial limitations should never stop a deserving student from building a global career in accountancy.
            </p>

            {/* Additional Foundation Statement */}
            <p className="text-base text-stone-600 leading-relaxed max-w-2xl bg-white/80 p-4 rounded-xl border border-stone-200/80 shadow-2xs">
              The foundation provides free ACCA tuition to worthy students who cannot afford the high cost of professional education. Through live and structured classes, we open doors to the global accounting profession.
            </p>

            {/* Key trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0" />
                <span>Zero Tuition Fees</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0" />
                <span>Live & Recorded Classes</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0" />
                <span>Global Curriculum</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/apply"
                className="px-7 py-3.5 rounded-lg bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Apply for Free ACCA Education</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/donate"
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-[#FAF9F6] text-[#AA331D] border-2 border-[#AA331D] font-semibold text-base transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <HeartHandshake className="w-5 h-5 text-[#AA331D]" />
                <span>Support a Student</span>
              </Link>
            </div>

            {/* Associative note */}
            <p className="text-xs text-stone-500 pt-1">
              Associated with <strong className="text-stone-700">Amit Dharaniya Global Academy</strong> • Headquartered in Dehradun, Uttarakhand
            </p>
          </div>

          {/* Right Column: Student Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Soft decorative background card & shapes */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-3/4 flex items-center justify-center">
              {/* Subtle background glow & geometrical accents */}
              <div className="absolute inset-4 sm:inset-6 rounded-3xl bg-gradient-to-tr from-[#FDF2F0] via-white to-[#FAF9F6] border border-[#F5D5CE]/60 shadow-lg -rotate-1" />
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl bg-[#AA331D]/5 border border-[#AA331D]/15 rotate-12 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full bg-[#AA331D]/5 pointer-events-none" />

              {/* Main Cutout Student Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center px-4 pb-2">
                <Image
                  src="/images/student-acca.png"
                  alt="Student holding ACCA book - Shri Sushil Sharda Foundation"
                  width={520}
                  height={680}
                  priority
                  className="object-contain max-h-[500px] sm:max-h-[560px] drop-shadow-md select-none transition-transform hover:scale-[1.01] duration-300"
                />
              </div>

              {/* Floating Highlight Badge: Zero Tuition */}
              <div className="absolute top-6 left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-xs border border-stone-200/80 rounded-xl py-2.5 px-3.5 shadow-md flex items-center gap-2.5 animate-in fade-in duration-500">
                <div className="w-8 h-8 rounded-lg bg-[#AA331D] text-white flex items-center justify-center font-bold text-xs">
                  FREE
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">100% Free Tuition</p>
                  <p className="text-[11px] text-stone-500">Merit & Need Based</p>
                </div>
              </div>

              {/* Floating Highlight Badge: Motto */}
              <div className="absolute bottom-6 right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-xs border border-[#F5D5CE] rounded-xl py-2.5 px-4 shadow-md flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#AA331D] animate-pulse" />
                <div>
                  <p className="text-xs font-bold text-[#AA331D] leading-tight">शिक्षा से सशक्तिकरण</p>
                  <p className="text-[11px] text-stone-600">Empowerment through Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
