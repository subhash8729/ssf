import React from "react";
import ApplicationForm from "@/components/ApplicationForm";
import Eligibility from "@/components/Eligibility";
import { ArrowLeft, CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Free ACCA Education | Shri Sushil Sharda Foundation",
  description:
    "Apply for 100% free ACCA tuition with Shri Sushil Sharda Foundation. Open for Class X/XII students with 90+ in English and Maths/Accounts needing financial support.",
};

export default function ApplyPage() {
  const faqs = [
    {
      q: "Is tuition really 100% free?",
      a: "Yes. Shri Sushil Sharda Foundation does not charge any tuition or coaching fees from selected students. All lectures, live sessions, and recordings are provided free of cost.",
    },
    {
      q: "What costs are not covered by tuition?",
      a: "Tuition is free. However, external examination fees, official books, and annual subscription charges levied directly by the global ACCA body are separate.",
    },
    {
      q: "What is the primary eligibility criteria?",
      a: "The foundation focuses on Class X or XII students scoring 90% or above in English and Mathematics/Accountancy who come from financially disadvantaged backgrounds.",
    },
    {
      q: "How are classes conducted?",
      a: "Classes are delivered through live online interactive sessions, live recorded revision archives, and structured pre-recorded modules accessible from anywhere in India.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#FDFBF7] to-white py-12 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#AA331D] mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE] mb-3">
              Free ACCA Education Application
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Begin Your Journey to Global Accountancy
            </h1>
            <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
              If you have demonstrated strong academic results in Class X or XII and need financial assistance to pursue professional qualifications, apply today for 100% free tuition.
            </p>
          </div>
        </div>
      </div>

      {/* Highlighted Eligibility */}
      <Eligibility />

      {/* Main Interactive Application Form */}
      <ApplicationForm />

      {/* Application FAQs */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#AA331D]" />
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Application & Enrollment Clarifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80">
                <h3 className="font-serif font-bold text-stone-900 text-base mb-2 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#AA331D] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
