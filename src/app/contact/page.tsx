import React from "react";
import Link from "next/link";
import { MapPin, Building, GraduationCap, HeartHandshake, ArrowLeft, ExternalLink } from "lucide-react";
import { foundationDetails, donationDetails } from "@/data/foundation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shri Sushil Sharda Foundation",
  description:
    "Get in touch with Shri Sushil Sharda Foundation in Dehradun, Uttarakhand. Connect regarding free ACCA coaching and student sponsorship opportunities.",
};

export default function ContactPage() {
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
              Institutional Connect
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Contact Shri Sushil Sharda Foundation
            </h1>
            <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
              Reach out to our administrative office for information regarding student admissions, sponsorship queries, or academic partnerships.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Official Entity & Location Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                Headquarters & Registration
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Shri Sushil Sharda Foundation operates in the field of education as a non-governmental and private organization.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-stone-200">
                  <MapPin className="w-5 h-5 text-[#AA331D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-stone-900 block">Registered Headquarters</strong>
                    <span className="text-sm text-stone-600">{foundationDetails.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-stone-200">
                  <Building className="w-5 h-5 text-[#AA331D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-stone-900 block">Corporate Classification</strong>
                    <span className="text-sm text-stone-600">{foundationDetails.organizationType}</span>
                    <span className="text-xs text-stone-500 block mt-0.5">Established on {foundationDetails.establishedDate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-stone-200">
                  <GraduationCap className="w-5 h-5 text-[#AA331D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-semibold text-stone-900 block">Associated Academy</strong>
                    <span className="text-sm text-stone-600">{foundationDetails.associatedAcademy}</span>
                    <div className="mt-1">
                      <a
                        href={foundationDetails.academyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#AA331D] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Visit Academy Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FDF2F0] to-white border border-[#F5D5CE]">
              <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                Looking to Apply for Free Coaching?
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Eligible students who scored 90+ in English and Maths/Accounts can submit their application online through our dedicated portal.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#AA331D] text-white text-xs font-semibold hover:bg-[#8F2B18] transition-colors"
              >
                <span>Go to Student Application</span>
              </Link>
            </div>
          </div>

          {/* Supporter & Bank Details Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-stone-200 shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">
                    Official Banking Channel
                  </h3>
                  <p className="text-xs text-stone-500">For verified wire transfers and student sponsorship</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Direct all student support contributions strictly to the foundation&apos;s verified State Bank of India account:
              </p>

              <div className="bg-white p-5 rounded-2xl border border-stone-300 space-y-3 font-mono text-sm">
                <div>
                  <span className="text-xs font-sans text-stone-500 block">Bank Name</span>
                  <span className="font-bold text-stone-900">{donationDetails.bankName}</span>
                </div>
                <div>
                  <span className="text-xs font-sans text-stone-500 block">Account Beneficiary</span>
                  <span className="font-bold text-stone-900">{donationDetails.accountName}</span>
                </div>
                <div>
                  <span className="text-xs font-sans text-stone-500 block">Account Number</span>
                  <span className="font-bold text-stone-900 text-base">{donationDetails.accountNumber}</span>
                </div>
                <div>
                  <span className="text-xs font-sans text-stone-500 block">IFSC Code</span>
                  <span className="font-bold text-[#AA331D] text-base">{donationDetails.ifsc}</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 italic">
                {donationDetails.note} For remittance confirmations, please retain your transaction reference ID.
              </p>

              <div className="pt-2">
                <Link
                  href="/donate"
                  className="w-full py-3 px-4 rounded-xl bg-white border border-[#F5D5CE] text-[#AA331D] hover:bg-[#FDF2F0] text-center text-xs font-semibold block transition-colors"
                >
                  View Full Donation & Supporter Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
