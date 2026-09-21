import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Award, CheckCircle } from "lucide-react";
import { mentorDetails } from "@/data/foundation";

export default function MentorSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] border border-[#F5D5CE]/80 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Mentor Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-4/5 rounded-2xl overflow-hidden bg-white border-2 border-[#F5D5CE] shadow-lg flex items-center justify-center p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-t from-stone-100 to-white">
                  <Image
                    src="/images/mentor-amit-dharaniya.webp"
                    alt="Amit Dharaniya - Mentor and Finance Educator"
                    fill
                    sizes="(max-width: 768px) 300px, 384px"
                    className="object-contain object-bottom"
                    priority
                  />
                </div>

                {/* Experience Tag */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full border border-stone-200 shadow-xs flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#AA331D]" />
                  <span className="text-xs font-bold text-stone-800">35+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Mentor Copy & Institutional Background */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE]">
                Mentorship & Leadership
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Guided by Experience. Driven by Purpose.
              </h2>

              <div className="border-b border-stone-200 pb-4">
                <h3 className="text-2xl font-serif font-bold text-[#AA331D]">
                  {mentorDetails.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-stone-600 mt-1">
                  {mentorDetails.title}
                </p>
              </div>

              <p className="text-stone-700 text-base leading-relaxed">
                {mentorDetails.bio}
              </p>

              <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200/90 shadow-2xs">
                <p className="text-stone-800 text-sm sm:text-base font-medium leading-relaxed italic border-l-2 border-[#AA331D] pl-3">
                  &ldquo;{mentorDetails.vision}&rdquo;
                </p>
              </div>

              {/* Notable Organizations */}
              <div className="space-y-2.5">
                <span className="text-xs uppercase font-bold text-stone-500 tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#AA331D]" />
                  Professional Background & Experience
                </span>
                <div className="flex flex-wrap gap-2">
                  {mentorDetails.background.map((org, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-xs font-semibold text-stone-700 rounded-md border border-stone-200 shadow-2xs flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-[#AA331D]" />
                      {org}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about#mission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold text-sm shadow-xs transition-colors group"
                >
                  <span>Learn About Our Mission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
