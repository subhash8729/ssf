import React from "react";
import {
  SkeletonBox,
  SkeletonPill,
  SkeletonHeading,
  SkeletonText,
  SkeletonButton,
  SkeletonCard,
} from "./SkeletonPrimitives";

export default function DonateSkeleton() {
  return (
    <div className="w-full bg-white animate-in fade-in duration-200">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-b from-[#FDFBF7] to-white py-12 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonBox className="h-4 w-28 rounded-sm mb-6" />
          <div className="max-w-3xl space-y-3">
            <SkeletonPill textWidth="w-48" accent={true} />
            <SkeletonBox className="h-10 sm:h-12 w-4/5 rounded-lg" />
            <SkeletonText lines={2} className="max-w-2xl pt-1" />
          </div>
        </div>
      </div>

      {/* 2. Main Donation Bank Details Card */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-[#F5D5CE] bg-[#FAF9F6] p-6 sm:p-10 shadow-sm space-y-8">
            {/* Bank Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <SkeletonBox className="w-12 h-12 rounded-xl skeleton-shimmer-accent shrink-0" />
                <div className="space-y-1.5">
                  <SkeletonBox className="h-5 w-44 rounded-sm" />
                  <SkeletonBox className="h-3.5 w-32 rounded-sm" />
                </div>
              </div>
              <SkeletonBox className="h-8 w-36 rounded-full skeleton-shimmer-accent" />
            </div>

            {/* Bank Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
                  <SkeletonBox className="h-3 w-24 rounded-sm" />
                  <div className="flex items-center justify-between gap-2">
                    <SkeletonBox className="h-6 w-36 rounded-sm skeleton-shimmer-accent" />
                    <SkeletonBox className="h-7 w-16 rounded-md" />
                  </div>
                </div>
              ))}
            </div>

            {/* Note Callout */}
            <div className="p-4 rounded-xl bg-white border border-[#F5D5CE] space-y-2">
              <SkeletonBox className="h-4 w-32 rounded-sm skeleton-shimmer-accent" />
              <SkeletonText lines={2} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Support Helps 3-Card Grid */}
      <section className="py-12 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <SkeletonPill textWidth="w-36" accent={true} className="mx-auto" />
            <SkeletonBox className="h-8 w-64 rounded-md mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-stone-200/80 space-y-3">
                <SkeletonBox className="w-10 h-10 rounded-xl skeleton-shimmer-accent" />
                <SkeletonBox className="h-5 w-32 rounded-sm" />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Transparency Commitment */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SkeletonBox className="w-12 h-12 rounded-full mx-auto skeleton-shimmer-accent" />
          <SkeletonBox className="h-7 w-60 rounded-md mx-auto" />
          <SkeletonText lines={3} className="max-w-2xl mx-auto" />
        </div>
      </section>
    </div>
  );
}
