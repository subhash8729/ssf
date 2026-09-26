import React from "react";
import Link from "next/link";
import {
  Target,
  Eye,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { foundationDetails } from "@/data/foundation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission & Vision | Shri Sushil Sharda Foundation",
  description:
    "Discover the mission, vision, and guiding philosophy of Shri Sushil Sharda Foundation—empowering meritorious students with free ACCA education.",
};

export default function MissionPage() {
  const pillars = [
    {
      number: "01",
      title: "Unconditional Equal Opportunity",
      desc: "Merit and dedication should determine a student's destiny, not their financial standing. We completely eliminate tuition fees so talented youth can compete globally.",
      icon: Target,
    },
    {
      number: "02",
      title: "Pedagogical & Corporate Rigor",
      desc: "Education without caliber is incomplete. Through our association with Amit Dharaniya Global Academy, scholars receive the same rigorous training given to Big-4 corporate teams.",
      icon: Compass,
    },
    {
      number: "03",
      title: "Integrity & Moral Governance",
      desc: "Chartered accountancy is the bedrock of public trust. We cultivate unwavering ethics, transparent reporting values, and professional honor in every scholar.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Generational Social Transformation",
      desc: "When one deserving student earns a global qualification, they don't just gain employment—they permanently lift their families and inspire their entire communities.",
      icon: Sparkles,
    },
  ];

  const milestones = [
    { label: "100% Tuition Waiver", detail: "Committed to zero coaching charges for eligible scholars." },
    { label: "180+ Country Validity", detail: "ACCA credential universally recognized across world economies." },
    { label: "35+ Years Faculty Pedigree", detail: "Led by seasoned accounting educators from KPMG, BDO & TMF." },
    { label: "Direct Student Impact", detail: "100% of external donor contributions go to student exam/book costs." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Distinctive Mission Header Banner with Classic Theme */}
      <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-stone-200/80 py-14 sm:py-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDF2F0]/80 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#AA331D]/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#AA331D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
              Guiding Purpose & Philosophy
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Our Mission & Vision
          </h1>

          <p className="mt-4 text-lg sm:text-xl font-serif italic text-[#AA331D]">
            &ldquo;{foundationDetails.hindiTagline}&rdquo; — {foundationDetails.tagline}
          </p>

          <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Founded on the belief that financial limitations must never stop an exceptional mind from achieving global excellence in accountancy.
          </p>
        </div>
      </section>

      {/* Side-by-Side Monumental Mission & Vision Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Mission Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FDF2F0] via-white to-white p-8 sm:p-10 border-2 border-[#F5D5CE] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#AA331D] text-white flex items-center justify-center shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D] block">
                  The Foundation&apos;s Mandate
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Our Mission
                </h2>
                <div className="p-4 rounded-xl bg-white border border-[#F5D5CE]/80 shadow-2xs">
                  <p className="font-serif italic text-lg sm:text-xl text-[#AA331D] leading-snug">
                    &ldquo;To reduce financial barriers and expand access to quality ACCA education for deserving students.&rdquo;
                  </p>
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  We provide 100% free tuition, comprehensive syllabus coverage, doubt resolution, and career mentorship so that socio-economically disadvantaged youth have an equal launchpad toward internationally accredited chartered qualifications.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center gap-2 text-xs font-semibold text-stone-600">
                <CheckCircle2 className="w-4 h-4 text-[#AA331D]" />
                <span>Zero Tuition Fees • Merit-driven Selection</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FAF9F6] via-white to-white p-8 sm:p-10 border-2 border-stone-300 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-sm">
                  <Eye className="w-7 h-7 text-[#F5D5CE]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
                  The Long-Term Aspiration
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Our Vision
                </h2>
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                  <p className="font-serif italic text-lg sm:text-xl text-stone-900 leading-snug">
                    &ldquo;An environment where financial circumstances do not prevent talented students from pursuing globally relevant professional education.&rdquo;
                  </p>
                </div>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  We look forward to an India where every meritorious student from every district can become an internationally recognized finance leader, representing their community with dignity at global accounting firms and enterprises.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center gap-2 text-xs font-semibold text-stone-600">
                <CheckCircle2 className="w-4 h-4 text-stone-800" />
                <span>Global Mobility • Long-Term Community Dignity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars of Transformation */}
      <section className="py-14 sm:py-20 bg-[#FAF9F6] border-y border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D] block mb-1">
              Foundational Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              The Four Pillars of Our Approach
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              How Shri Sushil Sharda Foundation turns educational aspiration into concrete career achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-[#AA331D]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-serif font-bold text-stone-300">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Foundation Commitments Matrix */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200/80">
                <p className="font-serif font-bold text-lg sm:text-xl text-[#AA331D] mb-1">
                  {m.label}
                </p>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Inspirational Quote Card */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4">
              <Quote className="w-8 h-8 text-[#F5D5CE] mx-auto opacity-75" />
              <blockquote className="font-serif italic text-lg sm:text-2xl leading-relaxed text-stone-100">
                &ldquo;Real empowerment occurs when education imparts universally recognized competence, enabling scholars to stand tall in any boardroom in the world.&rdquo;
              </blockquote>
              <div className="pt-2 text-xs font-semibold text-[#F5D5CE] tracking-wider uppercase">
                Shri Sushil Sharda Foundation • Dehradun, Uttarakhand
              </div>
            </div>
          </div>

          {/* Bottom Dual Action */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply for ACCA Coaching</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/students"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-stone-300 text-stone-800 hover:bg-[#FAF9F6] font-semibold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore Students Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
