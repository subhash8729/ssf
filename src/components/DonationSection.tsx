"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Copy, Check, Building, ShieldCheck, AlertCircle, Sparkles } from "lucide-react";
import { donationDetails } from "@/data/foundation";

export default function DonationSection() {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: "account" | "ifsc" | "all") => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopyError(null);
      if (type === "account") {
        setCopiedAccount(true);
        setTimeout(() => setCopiedAccount(false), 2500);
      } else if (type === "ifsc") {
        setCopiedIfsc(true);
        setTimeout(() => setCopiedIfsc(false), 2500);
      } else if (type === "all") {
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 2500);
      }
    } catch {
      setCopyError("Could not copy automatically. Please select and copy manually.");
      setTimeout(() => setCopyError(null), 4000);
    }
  };

  const allBankDetailsText = `Bank: ${donationDetails.bankName}\nAccount Name: ${donationDetails.accountName}\nAccount Number: ${donationDetails.accountNumber}\nIFSC: ${donationDetails.ifsc}`;

  return (
    <section id="donate" className="py-16 sm:py-24 bg-gradient-to-b from-[#FDFBF7] to-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Support Our Scholars"
          title="Help a Student Reach a Global Career"
          subtitle="Your contribution can help a deserving student continue their ACCA journey by supporting the costs that remain outside free tuition."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Context Card with Graphic */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#F5D5CE] bg-white p-3 shadow-md">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src="/images/student-campus.png"
                  alt="Students supported by Shri Sushil Sharda Foundation"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4 bg-[#FAF9F6] rounded-xl mt-3 border border-stone-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#AA331D] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Direct Educational Assistance</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Support helps deserving scholars manage registration, examination sittings, and official textbooks with full transparency.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs space-y-2">
              <h4 className="text-sm font-serif font-bold text-stone-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#AA331D]" />
                Direct Foundation Account
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                All donations are received directly into the official bank account of <strong>Shri Sushil Sharda Foundation</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Bank Details Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white border-2 border-[#AA331D]/40 p-6 sm:p-9 shadow-xl overflow-hidden">
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#AA331D]" />

              <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center border border-[#F5D5CE]">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      Official Bank Transfer Details
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                      {donationDetails.bankName}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE]">
                  NEFT / RTGS / IMPS
                </span>
              </div>

              {copyError && (
                <div className="mt-4 p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                  {copyError}
                </div>
              )}

              {/* Bank Credentials List */}
              <div className="py-6 space-y-4">
                {/* Account Name */}
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-stone-200/80">
                  <span className="text-xs font-medium text-stone-500 block mb-0.5">Account Beneficiary Name</span>
                  <span className="text-base sm:text-lg font-semibold text-stone-900 font-serif">
                    {donationDetails.accountName}
                  </span>
                </div>

                {/* Account Number with Copy */}
                <div className="p-4 rounded-xl bg-white border border-stone-300 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-medium text-stone-500 block mb-0.5">Account Number</span>
                    <span className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-stone-900">
                      {donationDetails.accountNumber}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(donationDetails.accountNumber, "account")}
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                      copiedAccount
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-[#AA331D] hover:bg-[#8F2B18] text-white shadow-2xs"
                    }`}
                    aria-label="Copy Account Number"
                  >
                    {copiedAccount ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Account Number</span>
                      </>
                    )}
                  </button>
                </div>

                {/* IFSC Code with Copy */}
                <div className="p-4 rounded-xl bg-white border border-stone-300 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-medium text-stone-500 block mb-0.5">IFSC Code</span>
                    <span className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-[#AA331D]">
                      {donationDetails.ifsc}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(donationDetails.ifsc, "ifsc")}
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                      copiedIfsc
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-[#FAF9F6] text-[#AA331D] border border-[#F5D5CE] hover:bg-[#FDF2F0]"
                    }`}
                    aria-label="Copy IFSC Code"
                  >
                    {copiedIfsc ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy IFSC</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Copy All Details Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(allBankDetailsText, "all")}
                  className={`w-full py-3 px-5 rounded-xl text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 border ${
                    copiedAll
                      ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                      : "bg-[#FAF9F6] border-stone-200 text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  {copiedAll ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>All Bank Details Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#AA331D]" />
                      <span>Copy All Bank Details</span>
                    </>
                  )}
                </button>
              </div>

              {/* Verification & Compliance Note */}
              <div className="mt-6 p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong className="font-semibold text-stone-800">Verification Advisory: </strong>
                  {donationDetails.note} Please double check the account number and IFSC code in your banking app before initiating wire transfers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
