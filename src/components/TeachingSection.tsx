import React from "react";
import Image from "next/image";
import { MonitorPlay, Video, BookMarked, Users, Check } from "lucide-react";

export default function TeachingSection() {
  const highlights = [
    { title: "Live Online", desc: "Interactive lectures with real-time academic discussion and queries.", icon: Video },
    { title: "Recorded Classes", desc: "Flexible access to past lectures for thorough revision at your own pace.", icon: MonitorPlay },
    { title: "Structured ACCA Learning", desc: "Syllabus mapped directly to ACCA global standards and exam criteria.", icon: BookMarked },
    { title: "Mentorship", desc: "Guidance from experienced finance educators and industry professionals.", icon: Users },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F5D5CE] shadow-lg bg-white p-2">
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src="/images/classroom-training.webp"
                  alt="Instructor teaching students ACCA concepts in classroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              {/* Floating secondary badge showcasing real classroom */}
              <div className="absolute -bottom-4 right-4 sm:right-6 bg-white p-2 rounded-2xl border border-stone-200 shadow-md max-w-xs hidden sm:flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-stone-100">
                  <Image
                    src="/images/academy-classroom.jpg"
                    alt="Classroom students"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Classroom @ ADGA</p>
                  <p className="text-[11px] text-stone-500">Global Accountancy Training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                Instructional Methodology
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              Learning That Reaches Students
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Quality instruction should never be a privilege reserved only for those who can pay high commercial tuition rates. The foundation combines rigorous academic delivery with modern digital access so that every worthy student can master difficult financial concepts.
              </p>
              <p className="text-stone-600 text-base">
                Whether attending live virtual sessions, re-watching complex accounting modules, or practicing structured examination problems, our students receive continuous mentorship and academic guidance tailored to global benchmarks.
              </p>
            </div>

            {/* 4 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:border-[#AA331D]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-stone-900 text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pl-9">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
