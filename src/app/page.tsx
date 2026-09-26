import React from "react";
import Hero from "@/components/Hero";
import TopSupportersMinimal from "@/components/TopSupportersMinimal";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Award,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { mentorDetails } from "@/data/foundation";

export default function Home() {
  const highlights = [
    {
      title: "100% Free Tuition",
      tag: "Zero Coaching Fee",
      desc: "Complete fee waiver across live and recorded ACCA modules for meritorious scholars.",
      icon: BookOpen,
    },
    {
      title: "Senior CA Mentorship",
      tag: "35+ Years Experience",
      desc: "Faculty mentorship led by Amit Dharaniya (ex-KPMG, BDO, TMF Group).",
      icon: Award,
    },
    {
      title: "Global Recognition",
      tag: "180+ Countries",
      desc: "Prestigious Chartered Accountancy qualifications opening doors to Big-4 firms and MNCs.",
      icon: Globe2,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section with Top Building Accent, Clean Copy & Mobile-First CTAs */}
      <Hero />

      {/* 2. Key Highlights (Short, Punchy 3-Card Grid with Interactive Hover) */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="group p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 hover:border-[#AA331D]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#AA331D] flex items-center justify-center shadow-2xs border border-stone-200 mb-3.5 group-hover:bg-[#AA331D] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA331D] block mb-1">
                      {h.tag}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-stone-900 mb-1.5 group-hover:text-[#AA331D] transition-colors">
                      {h.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Concise Eligibility Card (High-Impact, Mobile-First) */}
      <section className="py-8 sm:py-12 bg-[#FAF9F6] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#F5D5CE] shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF2F0] text-[#AA331D] text-xs font-bold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Eligibility Snapshot</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug">
                Scored 90%+ in Class X or XII?
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
                If you scored 90%+ in English & Maths/Accounts and face financial limitations, the foundation will cover 100% of your ACCA coaching fees.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch gap-2.5">
              <Link
                href="/apply"
                className="px-5 py-3 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] active:scale-95 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all"
              >
                <span>Apply for Free Tuition</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/students"
                className="px-4 py-3 rounded-xl bg-[#FAF9F6] hover:bg-stone-100 text-stone-700 text-xs sm:text-sm font-medium text-center border border-stone-200 transition-colors"
              >
                View Syllabus & Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Prominent Mentorship Section with Big Image of Amit Dharaniya Sir (Like Previous) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] border border-[#F5D5CE]/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Big Prominent Mentor Image (Like Previous) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 sm:w-72 md:w-80 aspect-4/5 rounded-2xl overflow-hidden bg-white border-2 border-[#F5D5CE] shadow-lg flex items-center justify-center p-3 transition-transform duration-300 hover:scale-102">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-t from-stone-100 to-white">
                    <Image
                      src="/images/mentor-amit-dharaniya.webp"
                      alt="Amit Dharaniya - Lead Faculty Mentor"
                      fill
                      sizes="(max-width: 768px) 300px, 384px"
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>

                  {/* Experience Tag Floating Badge */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-stone-200 shadow-xs flex items-center gap-1.5 animate-pulse-soft">
                    <Award className="w-3.5 h-3.5 text-[#AA331D]" />
                    <span className="text-xs font-bold text-stone-800">35+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Mentor Background & Experience Info */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE]">
                  Lead Academic Mentorship
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
                  Guided by Experience. Driven by Purpose.
                </h2>

                <div className="border-b border-stone-200 pb-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#AA331D]">
                    {mentorDetails.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-stone-600 mt-0.5">
                    {mentorDetails.title}
                  </p>
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {mentorDetails.bio}
                </p>

                {/* Professional Corporate Background Badges */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] uppercase font-bold text-stone-500 tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#AA331D]" />
                    Corporate Background & Practice
                  </span>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {mentorDetails.background.map((org, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white text-xs font-semibold text-stone-700 rounded-md border border-stone-200 shadow-2xs flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#AA331D]" />
                        {org}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span>About Amit Dharaniya Academy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://amitdharaniya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#AA331D] hover:underline font-semibold"
                  >
                    <span>Visit Academy Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Minimal Top 3 Supporters (Image Top-Left, Name Side-Wise, Location Below, Nothing Else) */}
      <TopSupportersMinimal />
    </main>
  );
}
