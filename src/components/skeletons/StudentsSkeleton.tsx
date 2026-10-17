import React from "react";
import {
  SkeletonBox,
  SkeletonPill,
  SkeletonHeading,
  SkeletonText,
  SkeletonButton,
  SkeletonCard,
} from "./SkeletonPrimitives";

export default function StudentsSkeleton() {
  return (
    <div className="w-full bg-white animate-in fade-in duration-200">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-b from-[#FDFBF7] to-white py-14 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <SkeletonPill textWidth="w-36" accent={true} className="mb-3" />
          <SkeletonBox className="h-10 sm:h-12 w-4/5 max-w-2xl rounded-lg mb-3" />
          <SkeletonText lines={2} className="max-w-xl mx-auto" />
        </div>
      </div>

      {/* 2. 4-Step Student Journey Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <SkeletonPill textWidth="w-28" accent={true} className="mx-auto" />
            <SkeletonBox className="h-8 w-60 rounded-md mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <SkeletonBox className="w-8 h-8 rounded-lg skeleton-shimmer-accent" />
                  <SkeletonBox className="h-4 w-8 rounded-sm" />
                </div>
                <SkeletonBox className="h-5 w-36 rounded-md" />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 3 Exam Levels Breakdown */}
      <section className="py-14 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <SkeletonPill textWidth="w-32" accent={true} className="mx-auto" />
            <SkeletonBox className="h-8 w-72 rounded-md mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-4">
                <SkeletonBox className="h-4 w-24 rounded-full skeleton-shimmer-accent" />
                <SkeletonBox className="h-6 w-44 rounded-md" />
                <SkeletonBox className="h-3.5 w-20 rounded-sm" />
                <SkeletonText lines={3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#FDF2F0] border border-[#F5D5CE] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <SkeletonBox className="h-7 w-64 rounded-md skeleton-shimmer-accent" />
              <SkeletonBox className="h-4 w-80 rounded-sm" />
            </div>
            <SkeletonButton variant="primary" width="w-48" />
          </div>
        </div>
      </section>
    </div>
  );
}
