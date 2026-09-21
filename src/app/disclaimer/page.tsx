import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { foundationDetails } from "@/data/foundation";

export default function DisclaimerPage() {
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
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-900">
            Disclaimer & Educational Disclosure
          </h1>
        </div>

        <div className="prose prose-stone max-w-none text-stone-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#F5D5CE]">
            <p className="font-semibold text-stone-900">
              {foundationDetails.name} is an Indian private limited company, established on 30th May 2025. It primarily operates in the field of education and is headquartered in Dehradun, Uttarakhand, India. The foundation functions as a non-governmental and private organization.
            </p>
          </div>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            1. Nature of Tuition & Free Offer
          </h2>
          <p>
            Shri Sushil Sharda Foundation provides free tuition coaching classes for ACCA (Association of Chartered Certified Accountants) to eligible students through live online, live recorded, and pre-recorded classes. The foundation does not charge tuition fees from selected eligible students.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            2. External ACCA Body Fees
          </h2>
          <p>
            Tuition provided by the foundation is free. However, external examination fees, official syllabus textbooks, and annual student subscription charges billed directly by the ACCA body remain the responsibility of the candidate unless specifically supported through verified sponsorship.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            3. No Career, Placement, or Migration Guarantees
          </h2>
          <p>
            The foundation provides educational coaching, mentorship, and exam preparation. We do not guarantee employment placements, salaries, job appointments, or international migration outcomes. Passing professional examinations is strictly dependent on the candidate&apos;s individual effort and the independent evaluation standards of the ACCA examining body.
          </p>

          <h2 className="text-xl font-serif font-bold text-stone-900 mt-6">
            4. Banking & Donation Disclosures
          </h2>
          <p>
            All voluntary financial contributions for student welfare must be remitted strictly to the official State Bank of India account (Account Number: 44267165553, IFSC: SBIN0014199) under the name of Shri Sushil Sharda Foundation. The foundation does not solicit cash or utilize unauthorized private accounts.
          </p>
        </div>
      </div>
    </main>
  );
}
