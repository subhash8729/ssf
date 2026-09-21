import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { foundationDetails } from "@/data/foundation";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#AA331D] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900">
            Terms of Use
          </h1>
        </div>

        <div className="prose prose-stone max-w-none text-stone-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to the official portal of <strong>{foundationDetails.name}</strong>. By accessing or using this website, you agree to comply with the terms and conditions outlined below.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            1. Use of Content
          </h2>
          <p>
            All text, branding, and educational materials published on this portal are protected by copyright and intellectual property principles. You may view and reference information for personal, non-commercial educational purposes only.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            2. Student Code of Conduct
          </h2>
          <p>
            Students admitted to the free tuition program agree to maintain academic integrity, attend required live or recorded sessions, and treat mentors and fellow students with respect.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            3. Accuracy of Application Submissions
          </h2>
          <p>
            Applicants must provide truthful academic marks and background details. The foundation reserves the right to request official board mark sheets and revoke free tuition privileges if misrepresentations are identified.
          </p>
        </div>
      </div>
    </main>
  );
}
