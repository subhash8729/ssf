import React from "react";
import {
  SkeletonBox,
  SkeletonPill,
  SkeletonHeading,
  SkeletonText,
  SkeletonButton,
  SkeletonCard,
} from "./SkeletonPrimitives";

export default function HomeSkeleton() {
  return (
    <div className="w-full bg-white animate-in fade-in duration-200">
      {/* 1. Hero Section Skeleton */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-14 lg:pb-20 bg-white border-b border-stone-200/80">
        {/* Subtle header building accent placeholder */}
        <div className="absolute top-0 inset-x-0 h-36 sm:h-48 md:h-56 z-0 skeleton-shimmer opacity-25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Eyebrow, Headings, Feature Pills, Buttons */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Eyebrow Badge */}
              <SkeletonPill textWidth="w-48" accent={true} />

              {/* Main Headline (3 lines with #AA331D accent block) */}
              <div className="space-y-3 w-full max-w-xl">
                <SkeletonBox className="h-9 sm:h-12 w-4/5 rounded-lg mx-auto lg:mx-0" />
                <SkeletonBox className="h-9 sm:h-12 w-full rounded-lg skeleton-shimmer-accent mx-auto lg:mx-0" />
                <SkeletonBox className="h-9 sm:h-12 w-3/5 rounded-lg mx-auto lg:mx-0" />
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <SkeletonBox className="h-8 w-32 rounded-lg" />
                <SkeletonBox className="h-8 w-44 rounded-lg" />
                <SkeletonBox className="h-8 w-36 rounded-lg" />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
                <SkeletonButton variant="primary" width="w-full sm:w-56" />
                <SkeletonButton variant="secondary" width="w-full sm:w-48" />
              </div>

              {/* Micro Tagline */}
              <SkeletonBox className="h-3 w-64 rounded-sm mx-auto lg:mx-0 pt-1" />
            </div>

            {/* Right Column: Student Image Visual Frame with Floating Badges */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-4/5 flex items-center justify-center">
                
                {/* Background decorative frame */}
                <div className="absolute inset-2 sm:inset-4 rounded-3xl border border-[#F5D5CE]/80 bg-[#FAF9F6] shadow-md" />

                {/* Inner Cutout Placeholder */}
                <div className="relative z-10 w-4/5 h-4/5 rounded-2xl skeleton-shimmer flex items-end justify-center p-6">
                  <div className="w-3/4 h-5/6 rounded-xl bg-white/40 skeleton-shimmer-accent" />
                </div>

                {/* Floating Top Badge Placeholder */}
                <div className="absolute top-4 left-0 sm:-left-3 z-20 bg-white/95 border border-stone-200/90 rounded-xl py-2 px-3 shadow-md flex items-center gap-2.5">
                  <SkeletonBox className="w-7 h-7 rounded-lg skeleton-shimmer-accent" />
                  <div className="space-y-1">
                    <SkeletonBox className="h-3 w-20 rounded-sm" />
                    <SkeletonBox className="h-2.5 w-16 rounded-sm" />
                  </div>
                </div>

                {/* Floating Bottom Badge Placeholder */}
                <div className="absolute bottom-4 right-0 sm:-right-3 z-20 bg-white/95 border border-[#F5D5CE] rounded-xl py-2 px-3 shadow-md flex items-center gap-2">
                  <SkeletonBox className="w-2.5 h-2.5 rounded-full skeleton-shimmer-accent" />
                  <div className="space-y-1">
                    <SkeletonBox className="h-3 w-24 rounded-sm skeleton-shimmer-accent" />
                    <SkeletonBox className="h-2 w-20 rounded-sm" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Highlights 3-Card Grid */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 flex flex-col justify-between space-y-4"
              >
                <div>
                  <SkeletonBox className="w-10 h-10 rounded-xl mb-3.5 skeleton-shimmer-accent" />
                  <SkeletonBox className="h-2.5 w-24 rounded-sm mb-2 skeleton-shimmer-accent" />
                  <SkeletonBox className="h-5 w-40 rounded-md mb-2.5" />
                  <SkeletonText lines={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Concise Eligibility Snapshot Banner */}
      <section className="py-8 sm:py-12 bg-[#FAF9F6] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#F5D5CE] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <SkeletonPill textWidth="w-28" accent={true} />
              <SkeletonBox className="h-7 w-72 rounded-md" />
              <SkeletonText lines={2} />
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row items-stretch gap-2.5">
              <SkeletonButton variant="primary" width="w-48" />
              <SkeletonButton variant="secondary" width="w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mentorship Section with Big Image Card */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] border border-[#F5D5CE]/80 rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Mentor 4:5 Image Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 sm:w-72 md:w-80 aspect-4/5 rounded-2xl bg-white border-2 border-[#F5D5CE] shadow-lg p-3">
                  <SkeletonBox className="w-full h-full rounded-xl skeleton-shimmer" />
                  <div className="absolute top-5 left-5 bg-white/95 px-3 py-1.5 rounded-full border border-stone-200 shadow-xs flex items-center gap-2">
                    <SkeletonBox className="w-3.5 h-3.5 rounded-full skeleton-shimmer-accent" />
                    <SkeletonBox className="h-3 w-28 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Mentor Info */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <SkeletonPill textWidth="w-40" accent={true} />
                <SkeletonBox className="h-8 sm:h-10 w-4/5 rounded-md mx-auto lg:mx-0" />
                <SkeletonText lines={4} />
                <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
                  <SkeletonBox className="h-8 w-28 rounded-lg" />
                  <SkeletonBox className="h-8 w-32 rounded-lg" />
                  <SkeletonBox className="h-8 w-24 rounded-lg" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Top Supporters Section */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FAF9F6] to-white border-t border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7 sm:mb-9 space-y-2">
            <SkeletonPill textWidth="w-24" accent={true} className="mx-auto" />
            <SkeletonBox className="h-7 w-48 rounded-md mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs"
              >
                <SkeletonBox className="w-16 h-16 rounded-full shrink-0 skeleton-shimmer-accent" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <SkeletonBox className="h-4 w-28 rounded-sm" />
                  <SkeletonBox className="h-3 w-20 rounded-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
