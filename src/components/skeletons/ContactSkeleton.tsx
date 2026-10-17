import React from "react";
import {
  SkeletonBox,
  SkeletonPill,
  SkeletonHeading,
  SkeletonText,
  SkeletonButton,
  SkeletonCard,
} from "./SkeletonPrimitives";

export default function ContactSkeleton() {
  return (
    <div className="w-full bg-white animate-in fade-in duration-200">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-b from-[#FDFBF7] to-white py-12 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonBox className="h-4 w-28 rounded-sm mb-6" />
          <div className="max-w-3xl space-y-3">
            <SkeletonPill textWidth="w-36" accent={true} />
            <SkeletonBox className="h-10 sm:h-12 w-4/5 rounded-lg" />
            <SkeletonText lines={2} className="max-w-2xl pt-1" />
          </div>
        </div>
      </div>

      {/* 2. 2-Column Information Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Headquarters & Registration */}
          <div className="lg:col-span-6 space-y-6">
            <SkeletonBox className="h-7 w-64 rounded-md" />
            <SkeletonText lines={2} />

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-stone-200">
                  <SkeletonBox className="w-6 h-6 rounded-lg skeleton-shimmer-accent shrink-0 mt-0.5" />
                  <div className="space-y-1.5 flex-1">
                    <SkeletonBox className="h-4 w-36 rounded-sm" />
                    <SkeletonBox className="h-3.5 w-full rounded-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Connect & Action Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-[#F5D5CE] space-y-6">
              <SkeletonBox className="h-6 w-48 rounded-md skeleton-shimmer-accent" />
              <SkeletonText lines={3} />
              <div className="space-y-3 pt-2">
                <SkeletonButton variant="primary" width="w-full" />
                <SkeletonButton variant="secondary" width="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
