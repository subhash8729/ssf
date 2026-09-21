import React from "react";
import SectionHeading from "./SectionHeading";
import { BookOpen, Globe2, Sparkles, Building2, MapPin, Calendar, Award } from "lucide-react";
import { foundationDetails } from "@/data/foundation";

export default function FoundationIntro() {
  const features = [
    {
      title: "Free Learning",
      tagline: "Accessible Quality Education",
      description:
        "High quality ACCA tuition delivered free of charge for worthy students through live online and recorded sessions.",
      icon: BookOpen,
    },
    {
      title: "Global Career Opportunity",
      tagline: "Chartered Accountancy",
      description:
        "Preparing students from underprivileged backgrounds for globally respected qualifications and international accounting careers.",
      icon: Globe2,
    },
    {
      title: "Education & Empowerment",
      tagline: "Social Progress & Dignity",
      description:
        "Bridging socioeconomic gaps by providing the academic coaching, mentorship, and guidance needed to succeed.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Foundation Purpose"
          title={foundationDetails.introHeading}
          subtitle="Dedicated to bridging socioeconomic barriers through high-standard professional education and mentorship."
        />

        {/* Narrative & Institutional Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Mission Text */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base sm:text-lg">
            <p className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug font-medium italic border-l-4 border-[#AA331D] pl-4 py-1">
              &ldquo;{foundationDetails.introParagraph2}&rdquo;
            </p>

            <p>{foundationDetails.introParagraph1}</p>

            <p className="text-stone-600 text-base">
              {foundationDetails.introParagraph3}
            </p>

            <div className="inline-flex items-center gap-2 pt-2 text-[#AA331D] font-semibold text-sm">
              <Award className="w-4 h-4" />
              <span>Core Motto: {foundationDetails.tagline} ({foundationDetails.hindiTagline})</span>
            </div>
          </div>

          {/* Institutional Details Summary Card */}
          <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#F5D5CE]/80 rounded-2xl p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 pb-3 border-b border-stone-200 flex items-center justify-between">
              <span>Institutional Profile</span>
              <span className="text-xs uppercase font-sans font-bold px-2 py-0.5 rounded-sm bg-[#FDF2F0] text-[#AA331D]">
                Official
              </span>
            </h3>

            <dl className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-stone-500 font-medium">Entity Type</dt>
                  <dd className="text-stone-800 font-semibold">Indian Private Limited Company</dd>
                  <dd className="text-xs text-stone-500">Non-governmental & private organization</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-stone-500 font-medium">Date of Establishment</dt>
                  <dd className="text-stone-800 font-semibold">{foundationDetails.establishedDate}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-stone-500 font-medium">Headquarters</dt>
                  <dd className="text-stone-800 font-semibold">{foundationDetails.headquarters}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-stone-200">
                <Award className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-stone-500 font-medium">Academic Affiliation</dt>
                  <dd className="text-stone-800 font-semibold">Amit Dharaniya Global Academy</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* 3 Pillars Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-stone-200/90 hover:border-[#AA331D]/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDF2F0] text-[#AA331D] group-hover:bg-[#AA331D] group-hover:text-white transition-colors flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#AA331D] mb-1">
                  {feature.tagline}
                </p>
                <h4 className="text-xl font-serif font-bold text-stone-900 mb-2.5">
                  {feature.title}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="w-10 h-0.5 bg-[#AA331D]/20 group-hover:w-full group-hover:bg-[#AA331D] transition-all duration-300 mt-5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
