import React from "react";
import DonationSection from "@/components/DonationSection";
import DonorSection from "@/components/DonorSection";
import HowSupportHelps from "@/components/HowSupportHelps";
import { ShieldCheck, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate & Support a Student | Shri Sushil Sharda Foundation",
  description:
    "Directly support deserving ACCA students with examination fees, study books, and annual subscriptions through official bank transfer.",
};

export default function DonatePage() {
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
              <Heart className="w-3.5 h-3.5" />
              Direct Student Empowerment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Support a Deserving ACCA Scholar
            </h1>
            <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
              Tuition classes at Shri Sushil Sharda Foundation are 100% free. Your generous support helps students manage essential external costs such as official examination sittings, textbooks, and professional subscription charges.
            </p>
          </div>
        </div>
      </div>

      {/* Main Donation Section with Copy Functionality */}
      <DonationSection />

      {/* Breakdown of External Costs */}
      <HowSupportHelps />

      {/* Transparent Governance Pledge */}
      <section className="py-14 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center mx-auto mb-2">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Our Transparency Commitment
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            All voluntary contributions are credited directly into the registered State Bank of India account of <strong>Shri Sushil Sharda Foundation</strong>. We maintain rigorous internal accounting to ensure every rupee dedicated to student welfare directly assists eligible scholars.
          </p>
          <div className="pt-2 text-xs text-stone-500">
            Headquartered in Dehradun, Uttarakhand • Established 30th May 2025
          </div>
        </div>
      </section>

      {/* Donor Roll */}
      <DonorSection />
    </main>
  );
}
