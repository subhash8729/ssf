import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import {
  GraduationCap,
  Target,
  Eye,
  Sparkles,
  CheckCircle2,
  Building2,
  Users,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { foundationDetails, mentorDetails } from "@/data/foundation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shri Sushil Sharda Foundation",
  description:
    "Learn about Shri Sushil Sharda Foundation, our mission to provide free ACCA education to deserving students, and our commitment to empowerment through education.",
};

export default function AboutPage() {
  const whyAccaCareers = [
    { title: "Financial Accounting & Reporting", desc: "Mastering international accounting frameworks (IFRS) and financial statements." },
    { title: "Statutory & Internal Audit", desc: "Evaluating operational systems, internal controls, and enterprise risks." },
    { title: "Taxation & Compliance", desc: "Navigating corporate tax systems, global treaties, and fiscal regulations." },
    { title: "Corporate Finance & Strategy", desc: "Guiding capital allocation, valuations, mergers, and financial planning." },
    { title: "Management Accounting", desc: "Driving cost analysis, budgeting, and performance management for businesses." },
    { title: "Advisory & Consulting", desc: "Solving cross-border financial, regulatory, and corporate challenges." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#FDFBF7] via-white to-white py-16 sm:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
              Foundation Overview
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            About Shri Sushil Sharda Foundation
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto font-medium">
            Bridging financial barriers to provide deserving minds with high-caliber coaching for global Chartered Accountancy qualifications.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#AA331D] font-semibold">
            <span>शिक्षा से सशक्तिकरण</span>
            <span>•</span>
            <span>Empowerment through Education</span>
          </div>
        </div>
      </section>

      {/* 1. Who We Are */}
      <section id="who-we-are" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Identity"
            title="1. Who We Are"
            subtitle="A non-governmental, private education initiative dedicated to social development."
            align="left"
          />

          <div className="space-y-5 text-stone-700 leading-relaxed text-base sm:text-lg">
            <p className="text-xl font-medium text-stone-900 leading-snug">
              {foundationDetails.introParagraph1}
            </p>
            <p>
              {foundationDetails.introParagraph2}
            </p>
            <p>
              {foundationDetails.introParagraph3}
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-[#FAF9F6] border border-[#F5D5CE] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">Entity</span>
                <p className="font-semibold text-stone-900">Indian Private Limited Company</p>
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">Established</span>
                <p className="font-semibold text-stone-900">30th May 2025</p>
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">Headquarters</span>
                <p className="font-semibold text-stone-900">Dehradun, Uttarakhand, India</p>
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">Affiliated Academy</span>
                <p className="font-semibold text-stone-900">Amit Dharaniya Global Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Mission & Vision */}
      <section id="mission" className="py-16 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#F5D5CE] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">Our Purpose</span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1 mb-4">
                  2. Our Mission
                </h2>
                <p className="text-stone-700 text-lg leading-relaxed font-medium">
                  &ldquo;To reduce financial barriers and expand access to quality ACCA education for deserving students.&rdquo;
                </p>
                <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                  We strive to level the playing field by offering full tuition fee waivers, structured course delivery, and comprehensive academic coaching so that ambitious students from disadvantaged backgrounds can achieve globally respected qualifications.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl border-2 border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-[#AA331D]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Our Aspiration</span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1 mb-4">
                  3. Our Vision
                </h2>
                <p className="text-stone-700 text-lg leading-relaxed font-medium">
                  &ldquo;An environment where financial circumstances do not prevent talented students from pursuing globally relevant professional education.&rdquo;
                </p>
                <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                  We envision a society where meritorious scholars have unconditional access to elite financial education, enabling them to represent India with distinction across global accounting firms, multinational enterprises, and financial institutions.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#AA331D] text-white text-xs sm:text-sm font-semibold hover:bg-[#8F2B18] transition-colors shadow-xs"
            >
              <span>Read Our Full Mission & Philosophy Manifesto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Education as Empowerment & 5. Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 4. Education as Empowerment */}
          <div>
            <SectionHeading
              badge="Core Philosophy"
              title="4. Education as Empowerment"
              subtitle="Knowledge and recognized professional qualification build generational self-reliance."
              align="left"
            />
            <div className="space-y-4 text-stone-700 text-base leading-relaxed">
              <p>
                At Shri Sushil Sharda Foundation, education is not simply an academic milestone; it is an instrument of dignity, self-sufficiency, and social transformation. By mastering global accountancy, students acquire skills that are universally valued, opening avenues for sustainable personal and community advancement.
              </p>
              <p>
                When a deserving student clears rigorous international board examinations, it transforms not just an individual life, but uplifts their entire family and inspires their community to value academic discipline.
              </p>
            </div>
          </div>

          {/* 5. Our Approach */}
          <div>
            <SectionHeading
              badge="Pedagogy & Support"
              title="5. Our Approach"
              subtitle="A systematic, mentor-driven model prioritizing academic excellence."
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-white text-[#AA331D] flex items-center justify-center font-bold text-sm shadow-2xs mb-3">
                  01
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">Merit Identification</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Welcoming candidates with 90%+ in English and Maths/Accounts from Class X/XII who demonstrate genuine financial need.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-white text-[#AA331D] flex items-center justify-center font-bold text-sm shadow-2xs mb-3">
                  02
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">100% Free Tuition</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  No tuition charges whatsoever for approved scholars across live online, live recorded, and structured modules.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-white text-[#AA331D] flex items-center justify-center font-bold text-sm shadow-2xs mb-3">
                  03
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">Senior Mentorship</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Guidance from veteran finance leaders with decades of global corporate and Big 4 accounting experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why ACCA */}
      <section id="why-acca" className="py-16 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Global Qualification"
            title="6. Why ACCA?"
            subtitle="The Association of Chartered Certified Accountants (ACCA) is an internationally recognized professional accountancy body with members in over 180 countries."
            align="left"
          />

          <div className="space-y-4 text-stone-700 text-base leading-relaxed mb-10">
            <p>
              ACCA equips students with strategic finance, technical accounting, ethical governance, and management acumen. Because of its global curriculum, the qualification supports diverse functional pathways across the financial world:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {whyAccaCareers.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#AA331D] mb-2 uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Domain Focus</span>
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-600">
            <strong className="text-stone-800">Educational Note: </strong>
            ACCA is a professional certification program. Shri Sushil Sharda Foundation provides rigorous academic preparation and coaching; we do not guarantee specific salaries, employment placements, or migration outcomes.
          </div>
        </div>
      </section>

      {/* 7. The Role of Amit Dharaniya Global Academy */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Academic Partnership"
            title="7. The Role of Amit Dharaniya Global Academy"
            subtitle="Providing pedagogical foundation, structured content, and senior faculty mentorship."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4 text-stone-700 leading-relaxed text-base">
              <p>
                The foundation operates in close association with <strong>Amit Dharaniya Global Academy (ADGA)</strong>, leveraging its robust teaching infrastructure, learning management systems, and specialized ACCA curriculum.
              </p>
              <p>
                Led by <strong>Amit Dharaniya</strong>—a finance educator and IFRS corporate trainer with over 35 years of experience with leading institutions including KPMG, TMF Group, Axis Risk Consulting, and BDO India—the academy ensures foundation scholars receive the exact same academic rigor and mentorship afforded to corporate trainees.
              </p>

              <div className="pt-2">
                <a
                  href={foundationDetails.academyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#AA331D] hover:underline"
                >
                  <span>Visit Amit Dharaniya Global Academy Official Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#F5D5CE] shadow-md p-2 bg-[#FAF9F6]">
                <Image
                  src="/images/mentor-amit-dharaniya.webp"
                  alt="Amit Dharaniya - Mentor"
                  fill
                  sizes="200px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. How Students Can Benefit & 9. How Supporters Can Help */}
      <section className="py-16 bg-[#FAF9F6] border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 8. How Students Can Benefit */}
          <div>
            <SectionHeading
              badge="Student Opportunity"
              title="8. How Students Can Benefit"
              subtitle="Comprehensive tuition fee waiver combined with access to top-tier coaching."
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">Complete Tuition Exemption</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Students never pay any coaching fees to the foundation for attended live or recorded classes.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">Flexible Learning Modes</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Study online with live interactive sessions or access recorded modules to fit your schedule.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">Doubt Resolution & Guidance</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Direct interaction with experienced accounting educators who clarify concepts thoroughly.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">Ethical & Professional Standards</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Preparation rooted in global accounting ethics, financial transparency, and professional rigor.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#AA331D] text-white text-sm font-semibold hover:bg-[#8F2B18] transition-colors"
              >
                <span>Apply for ACCA Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 9. How Supporters Can Help */}
          <div className="pt-8 border-t border-stone-200">
            <SectionHeading
              badge="Supporter Engagement"
              title="9. How Supporters Can Help"
              subtitle="Partner with us to cover the external costs that remain outside free tuition."
              align="left"
            />
            <p className="text-stone-700 text-base leading-relaxed mb-6">
              Even with 100% free tuition, external costs such as official ACCA body exam fees, textbooks, and annual student registrations can remain a heavy hurdle for underprivileged students. Supporters can directly fund these components through our bank transfer program.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="px-6 py-3 rounded-lg bg-[#AA331D] text-white text-sm font-semibold hover:bg-[#8F2B18] transition-colors flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>View Bank Transfer Details</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                <span>Contact Foundation Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
