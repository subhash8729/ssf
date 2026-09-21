import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { foundationDetails } from "@/data/foundation";

export default function PrivacyPolicyPage() {
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
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900">
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-stone max-w-none text-stone-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            This Privacy Policy sets out how <strong>{foundationDetails.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) handles personal information submitted through our official website and student application forms.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            1. Information We Collect
          </h2>
          <p>
            When students apply for free ACCA tuition, we collect basic contact and academic information including full name, email address, phone number, city, academic scores (English and Maths/Accounts), current class, institution, and a brief statement of financial need.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            2. How We Use Student Information
          </h2>
          <p>
            Information submitted is used solely for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Evaluating eligibility for free ACCA tuition coaching;</li>
            <li>Contacting candidates regarding enrollment and orientation;</li>
            <li>Providing classroom access and academic communications.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            3. Zero Sale or Commercialization of Data
          </h2>
          <p>
            We do not sell, lease, or commercially distribute student or donor data to third parties. We do not store student application data permanently on public databases.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            4. Contact
          </h2>
          <p>
            For any queries concerning this policy, please reach out via our contact page.
          </p>
        </div>
      </div>
    </main>
  );
}
