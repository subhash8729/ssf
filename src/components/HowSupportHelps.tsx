import React from "react";
import SectionHeading from "./SectionHeading";
import { FileCheck, BookMarked, CalendarCheck } from "lucide-react";
import { supportImpactAreas } from "@/data/foundation";

export default function HowSupportHelps() {
  const icons = [FileCheck, BookMarked, CalendarCheck];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Beyond Free Tuition"
          title="Where Your Support Makes a Difference"
          subtitle="While the foundation provides tuition 100% free of charge, external educational expenses remain for students pursuing international qualifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {supportImpactAreas.map((area, idx) => {
            const Icon = icons[idx] || FileCheck;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-[#F5D5CE]/80 rounded-2xl p-7 hover:border-[#AA331D] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#F5D5CE] text-[#AA331D] flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500">
                    Impact Area 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/80">
                  <span className="text-xs font-semibold text-[#AA331D] flex items-center gap-1">
                    Direct Student Assistance Focus
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
