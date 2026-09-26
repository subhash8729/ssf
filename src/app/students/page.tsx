import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Video,
  FileCheck,
  Calendar,
  Layers,
  Briefcase,
  Compass,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Students Hub & ACCA Coaching | Shri Sushil Sharda Foundation",
  description:
    "Comprehensive guide for students pursuing free ACCA coaching with Shri Sushil Sharda Foundation. Eligibility, syllabus, teaching methods, and career pathways.",
};

export default function StudentsPage() {
  const journeySteps = [
    {
      step: "01",
      title: "Merit & Need Review",
      desc: "Class X or XII students with 90%+ in English and Maths/Accounts from financially modest backgrounds submit their application.",
      icon: FileCheck,
    },
    {
      step: "02",
      title: "100% Free Tuition",
      desc: "Selected candidates are onboarded into live online sessions and structured recorded archives with zero coaching fees.",
      icon: BookOpen,
    },
    {
      step: "03",
      title: "Mentorship & Mastery",
      desc: "Direct guidance by seasoned educators with 35+ years corporate and Big-4 accounting background.",
      icon: Users,
    },
    {
      step: "04",
      title: "Global ACCA Credentials",
      desc: "Clear international exams and step into prestigious careers in statutory audit, IFRS accounting, and corporate advisory.",
      icon: Award,
    },
  ];

  const levels = [
    {
      name: "Applied Knowledge",
      papers: "3 Papers",
      focus: "Foundational concepts of business management, financial accounting, and management costing.",
      status: "Starting Level",
    },
    {
      name: "Applied Skills",
      papers: "6 Papers",
      focus: "Core technical mastery across corporate law, taxation, audit, financial reporting, and financial management.",
      status: "Intermediate",
    },
    {
      name: "Strategic Professional",
      papers: "4 Papers",
      focus: "Advanced corporate leadership, strategic business reporting, ethics, and specialized financial advisory.",
      status: "Advanced",
    },
  ];

  const careerTracks = [
    { title: "Statutory & Internal Audit", desc: "Verifying financial fidelity for multinational corporations and listed entities." },
    { title: "IFRS & Financial Reporting", desc: "Preparing accounts adhering strictly to international accounting standards." },
    { title: "Corporate Finance & M&A", desc: "Capital valuations, strategic acquisitions, and corporate treasury management." },
    { title: "Taxation & International Law", desc: "Cross-border corporate tax compliance and regulatory management." },
  ];

  const studentFAQs = [
    {
      q: "Are the classes completely free?",
      a: "Yes. Shri Sushil Sharda Foundation does not charge any tuition or coaching fees from enrolled scholars. Every live session and study archive is 100% free.",
    },
    {
      q: "What expenses are not covered by tuition waiver?",
      a: "Tuition is free. External examination sitting fees, original study texts, and annual student subscriptions levied directly by the global ACCA UK body remain external. Patrons frequently help sponsor these for deserving scholars.",
    },
    {
      q: "Can I attend from any city in India?",
      a: "Yes. Classes are delivered via high-standard interactive online platforms, accompanied by 24/7 accessible recorded revision archives.",
    },
    {
      q: "What if I have doubts or questions during study?",
      a: "Regular live doubt-clearing sessions and faculty mentorship are integrated into the curriculum through Amit Dharaniya Global Academy.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Student Portal Header */}
      <section className="relative bg-[#FAF9F6] border-b border-stone-200/80 py-12 sm:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE] mb-3.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#AA331D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
              Scholars & Aspirants Portal
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Your Gateway to Global Accountancy
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Free coaching, senior faculty mentorship, and systematic exam preparation designed for India&apos;s brightest deserving minds.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/apply"
              className="px-6 py-3 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Submit Student Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#eligibility"
              className="px-5 py-3 rounded-xl bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 font-semibold text-xs sm:text-sm transition-all"
            >
              Check Eligibility Criteria
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Academic Journey */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D] block mb-1">
              Structured Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              How the Scholarship Works
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
              From application review to global qualification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {journeySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 relative flex flex-col justify-between hover:border-[#AA331D]/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#AA331D] flex items-center justify-center shadow-2xs border border-stone-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xl font-serif font-bold text-stone-300">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Eligibility Section */}
      <section id="eligibility" className="py-14 sm:py-18 bg-[#FAF9F6] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#F5D5CE] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Eligibility Criteria
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  Who Can Apply for Free Tuition?
                </h2>
              </div>
              <Link
                href="/apply"
                className="self-start md:self-auto px-6 py-3 rounded-xl bg-[#AA331D] text-white font-semibold text-xs sm:text-sm hover:bg-[#8F2B18] transition-colors flex items-center gap-1.5"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  1. Academic Merit Requirements
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span><strong>Class X or Class XII Students</strong> from any recognized central or state board in India.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span><strong>90% or above marks</strong> in English and Mathematics / Accountancy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>Demonstrated passion for numbers, business logic, and professional rigor.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  2. Socio-Economic Eligibility
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>Family circumstances where private professional coaching fees cannot be afforded.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>Submission of household income documentation or genuine statement of financial need.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>Strict commitment to full attendance, periodic tests, and disciplined study hours.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCA Curriculum Overview */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D] block mb-1">
              Curriculum Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              The Three ACCA Exam Levels
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
              Global qualification divided into structured learning milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((lvl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-white text-[#AA331D] border border-stone-200">
                      {lvl.status}
                    </span>
                    <span className="text-xs font-semibold text-stone-500">
                      {lvl.papers}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                    {lvl.name}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {lvl.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Career Opportunities */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FDF2F0] to-white border border-[#F5D5CE]">
            <h3 className="font-serif font-bold text-stone-900 text-xl mb-4 text-center">
              Where ACCA Credentials Take You
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careerTracks.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">{c.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classroom & Teaching Experience */}
      <section className="py-14 sm:py-18 bg-[#FAF9F6] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                Academic Rigor & Pedagogy
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Learning with Amit Dharaniya Global Academy
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Coaching for foundation scholars is powered by Amit Dharaniya Global Academy (ADGA). Students receive corporate-standard instruction from <strong>Amit Dharaniya</strong>, a veteran finance educator with over 35 years of senior corporate training experience across KPMG, BDO, and TMF Group.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D]" />
                  <span>Live interactive online classrooms with direct doubt resolution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D]" />
                  <span>Recorded video archives for revision anytime, anywhere</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D]" />
                  <span>Regular mock examinations and personalized exam technique mentorship</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#F5D5CE] shadow-lg bg-white p-2">
                <Image
                  src="/images/mentor-amit-dharaniya.webp"
                  alt="Amit Dharaniya - Faculty Mentor"
                  fill
                  sizes="240px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student FAQs */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#AA331D]" />
              Common Student Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Student Queries & Clarifications
            </h2>
          </div>

          <div className="space-y-4">
            {studentFAQs.map((faq, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-[#AA331D] text-white text-center shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
              Ready to Start Your ACCA Preparation?
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 max-w-lg mx-auto mb-5 leading-relaxed">
              If you meet the 90%+ merit criteria and come from a modest background, submit your details today.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#AA331D] font-bold text-xs sm:text-sm hover:bg-stone-100 transition-colors shadow-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Complete Student Application Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
