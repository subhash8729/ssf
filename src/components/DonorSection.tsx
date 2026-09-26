import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { topDonors, allDonors } from "@/data/donors";
import { Award, Heart, Shield, Users } from "lucide-react";

export default function DonorSection() {
  return (
    <section id="supporters" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patrons & Well-Wishers"
          title="Our Supporters"
          subtitle="We extend our deepest gratitude to our benevolent patrons and well-wishers whose ongoing contributions help sustain student examination and educational requirements."
        />

        {/* Top 3 Donors */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE]">
              <Award className="w-3.5 h-3.5" />
              Honored Benefactors
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
              Top Supporters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {topDonors.map((donor, idx) => (
              <div
                key={donor.id}
                className="relative rounded-2xl bg-gradient-to-b from-[#FDFBF7] to-white border-2 border-[#F5D5CE] p-7 shadow-xs hover:border-[#AA331D] hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between"
              >
                {/* Ranking & Photo Emblem */}
                {donor.image ? (
                  <div className="relative mx-auto w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#AA331D] shadow-sm p-0.5 bg-white ring-4 ring-[#FDF2F0]">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={donor.image}
                        alt={donor.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#AA331D] text-white font-serif font-bold flex items-center justify-center text-lg shadow-2xs mb-4">
                    0{idx + 1}
                  </div>
                )}

                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#AA331D] block mb-1">
                    {donor.badge || "Education Patron"}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    {donor.name}
                  </h4>
                  <p className="text-xs font-medium text-stone-500 mb-3">
                    {donor.category} • {donor.location}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed italic bg-white p-3 rounded-lg border border-stone-200/80">
                    &ldquo;{donor.citation}&rdquo;
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-center gap-1.5 text-xs text-stone-500 font-medium">
                  <Heart className="w-3.5 h-3.5 text-[#AA331D]" />
                  <span>Honored Supporter</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Donors Section */}
        <div className="max-w-4xl mx-auto bg-[#FAF9F6] border border-stone-200/80 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#AA331D]" />
              <h4 className="text-lg font-serif font-bold text-stone-900">
                All Supporters & Contributors
              </h4>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              Sorted by contribution date
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {allDonors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white p-4 rounded-xl border border-stone-200/70 hover:border-stone-300 transition-colors flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-stone-900 truncate">{donor.name}</p>
                  <p className="text-xs text-stone-500">{donor.category} • {donor.location}</p>
                  {donor.citation && (
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-1 italic">
                      {donor.citation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-stone-500 text-center mt-6">
            Note: Donor information is managed in static local configuration. If you have contributed and would like your acknowledgment updated, please reach out to our team.
          </p>
        </div>
      </div>
    </section>
  );
}
