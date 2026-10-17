import React from "react";
import {
  SkeletonBox,
  SkeletonPill,
  SkeletonHeading,
  SkeletonText,
  SkeletonButton,
  SkeletonCard,
} from "./SkeletonPrimitives";

export default function AboutSkeleton() {
  return (
    <div className="w-full bg-white animate-in fade-in duration-200">
      {/* 1. Page Hero Banner */}
      <section className="bg-gradient-to-b from-[#FDFBF7] via-white to-white py-16 sm:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <SkeletonPill textWidth="w-36" accent={true} className="mb-4" />
          <SkeletonBox className="h-10 sm:h-12 w-3/4 max-w-xl rounded-lg mb-4" />
          <SkeletonBox className="h-4 sm:h-5 w-2/3 max-w-lg rounded-sm mb-4" />
          <div className="flex items-center justify-center gap-2">
            <SkeletonBox className="h-3 w-28 rounded-sm skeleton-shimmer-accent" />
            <span className="text-stone-300">•</span>
            <SkeletonBox className="h-3 w-40 rounded-sm skeleton-shimmer-accent" />
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <SkeletonPill textWidth="w-32" accent={true} />
            <SkeletonBox className="h-8 w-56 rounded-md" />
            <SkeletonBox className="h-4 w-96 rounded-sm" />
          </div>

          <div className="space-y-4">
            <SkeletonBox className="h-6 w-full max-w-2xl rounded-sm" />
            <SkeletonText lines={4} />
            <SkeletonText lines={3} />
          </div>

          {/* Highlight Callout Box */}
          <div className="p-6 rounded-2xl bg-[#FDF2F0] border border-[#F5D5CE] space-y-3">
            <SkeletonBox className="h-5 w-48 rounded-sm skeleton-shimmer-accent" />
            <SkeletonText lines={2} />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision 2-Card Grid */}
      <section className="py-12 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <SkeletonCard key={i} className="p-6 space-y-4">
                <SkeletonBox className="w-12 h-12 rounded-xl skeleton-shimmer-accent" />
                <SkeletonBox className="h-6 w-40 rounded-md" />
                <SkeletonText lines={3} />
              </SkeletonCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why ACCA Careers 6-Card Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <SkeletonPill textWidth="w-28" accent={true} className="mx-auto" />
            <SkeletonBox className="h-8 w-64 rounded-md mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-3">
                <SkeletonBox className="w-8 h-8 rounded-lg skeleton-shimmer-accent" />
                <SkeletonBox className="h-5 w-48 rounded-md" />
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
