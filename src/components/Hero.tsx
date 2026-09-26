import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-14 lg:pb-20 bg-white border-b border-stone-200/80">
      {/* Building Image strictly at Top Part with Subtle Height & Smooth Bottom Fade */}
      <div className="absolute top-0 inset-x-0 h-36 sm:h-48 md:h-56 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="Academy architecture header"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-30"
        />
        {/* Smooth downward fade to solid background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#FDFBF7]/85 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Copy & Mobile-First CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#F5D5CE] shadow-2xs transition-transform duration-300 hover:scale-105 cursor-default">
              <Sparkles className="w-3.5 h-3.5 text-[#AA331D] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                Shri Sushil Sharda Foundation • Dehradun
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-stone-900 tracking-tight leading-[1.18]">
              Empowering Students Through{" "}
              <span className="relative inline-block text-[#AA331D] transition-colors duration-300 hover:text-[#8F2B18]">
                Free ACCA Education
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2 text-[#AA331D]/35"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Mobile-Friendly Feature Pills with Interactive Hover */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-stone-200 text-xs font-semibold text-stone-800 shadow-2xs hover:border-[#AA331D]/40 hover:bg-[#FDF2F0]/60 transition-all duration-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AA331D]" />
                100% Free Tuition
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-stone-200 text-xs font-semibold text-stone-800 shadow-2xs hover:border-[#AA331D]/40 hover:bg-[#FDF2F0]/60 transition-all duration-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AA331D]" />
                Big-4 Veteran Mentorship
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-stone-200 text-xs font-semibold text-stone-800 shadow-2xs hover:border-[#AA331D]/40 hover:bg-[#FDF2F0]/60 transition-all duration-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#AA331D]" />
                Global Career Path
              </span>
            </div>

            {/* Mobile-First Big Touch CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/apply"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] active:scale-95 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>Apply for Free Coaching</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/donate"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#FDF2F0] active:scale-95 text-[#AA331D] border-2 border-[#AA331D] font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-2xs hover:shadow-md cursor-pointer"
              >
                <HeartHandshake className="w-5 h-5 text-[#AA331D] transition-transform duration-300 hover:scale-110" />
                <span>Support a Student</span>
              </Link>
            </div>

            {/* Quick Micro Tagline */}
            <p className="text-xs text-stone-500 pt-1">
              Affiliated with <strong className="text-stone-700">Amit Dharaniya Global Academy</strong> • Indian Pvt Ltd Co.
            </p>
          </div>

          {/* Student Visual Composition with Floating Micro-Badges & Interactive Tilt */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-4/5 flex items-center justify-center">
              
              {/* Soft decorative background frame */}
              <div className="absolute inset-2 sm:inset-4 rounded-3xl bg-gradient-to-tr from-white/95 via-[#FDF2F0]/80 to-white/95 border border-[#F5D5CE] shadow-lg backdrop-blur-xs" />
              
              {/* Cutout Student Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center px-4 pb-2">
                <Image
                  src="/images/student-acca.png"
                  alt="ACCA Student - Shri Sushil Sharda Foundation"
                  width={460}
                  height={580}
                  priority
                  className="object-contain max-h-[380px] sm:max-h-[460px] drop-shadow-md select-none transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Floating Top Badge with Float Animation */}
              <div className="absolute top-4 left-0 sm:-left-3 z-20 bg-white/95 backdrop-blur-xs border border-stone-200/90 rounded-xl py-2 px-3 sm:px-3.5 shadow-md flex items-center gap-2.5 animate-float hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-lg bg-[#AA331D] text-white flex items-center justify-center font-bold text-[11px] shadow-2xs">
                  100%
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Zero Tuition Fee</p>
                  <p className="text-[10px] text-stone-500">Merit & Need Based</p>
                </div>
              </div>

              {/* Floating Bottom Badge with Pulse Animation */}
              <div className="absolute bottom-4 right-0 sm:-right-3 z-20 bg-white/95 backdrop-blur-xs border border-[#F5D5CE] rounded-xl py-2 px-3 sm:px-3.5 shadow-md flex items-center gap-2 animate-pulse-soft hover:scale-105 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-[#AA331D] animate-ping" />
                <div>
                  <p className="text-xs font-bold text-[#AA331D] leading-tight">शिक्षा से सशक्तिकरण</p>
                  <p className="text-[10px] text-stone-600">Empowerment via Education</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
