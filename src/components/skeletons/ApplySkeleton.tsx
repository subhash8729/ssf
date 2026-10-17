import React from "react";
import {
  SkeletonBox,
  SkeletonPill,
  SkeletonHeading,
  SkeletonText,
  SkeletonButton,
  SkeletonCard,
} from "./SkeletonPrimitives";

export default function ApplySkeleton() {
  return (
    <div className="w-full bg-white animate-in fade-in duration-200">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-b from-[#FDFBF7] to-white py-8 sm:py-10 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkeletonBox className="h-4 w-28 rounded-sm mb-3" />
          <div className="max-w-3xl space-y-2">
            <SkeletonPill textWidth="w-44" accent={true} />
            <SkeletonBox className="h-9 sm:h-11 w-4/5 rounded-lg" />
            <SkeletonText lines={2} className="max-w-2xl pt-1" />
          </div>
        </div>
      </div>

      {/* 2. Main Form & Eligibility Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Eligibility Snapshot Card */}
        <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#F5D5CE] space-y-3">
          <SkeletonPill textWidth="w-32" accent={true} />
          <SkeletonBox className="h-6 w-60 rounded-md" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 bg-white rounded-xl border border-stone-200/80 space-y-1">
                <SkeletonBox className="h-4 w-20 rounded-sm skeleton-shimmer-accent" />
                <SkeletonBox className="h-3 w-28 rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Box */}
        <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-1.5 pb-4 border-b border-stone-100">
            <SkeletonBox className="h-6 w-52 rounded-md" />
            <SkeletonBox className="h-3.5 w-72 rounded-sm" />
          </div>

          {/* Form Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-2">
                <SkeletonBox className="h-3.5 w-28 rounded-sm" />
                <SkeletonBox className="h-11 w-full rounded-xl" />
              </div>
            ))}
          </div>

          {/* Marksheet Upload Dropzone Placeholder */}
          <div className="space-y-2">
            <SkeletonBox className="h-3.5 w-36 rounded-sm" />
            <div className="h-32 rounded-2xl border-2 border-dashed border-stone-200 bg-[#FAF9F6] flex flex-col items-center justify-center p-4 space-y-2">
              <SkeletonBox className="w-10 h-10 rounded-full skeleton-shimmer-accent" />
              <SkeletonBox className="h-3.5 w-48 rounded-sm" />
              <SkeletonBox className="h-2.5 w-32 rounded-sm" />
            </div>
          </div>

          {/* Terms checkbox & Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <SkeletonBox className="w-5 h-5 rounded-md" />
              <SkeletonBox className="h-3 w-56 rounded-sm" />
            </div>
            <SkeletonButton variant="primary" width="w-full sm:w-52" />
          </div>
        </div>

        {/* FAQs Accordion Skeleton */}
        <div className="space-y-4 pt-6">
          <SkeletonBox className="h-6 w-40 rounded-md" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-xl border border-stone-200/80 bg-white flex items-center justify-between gap-4">
              <SkeletonBox className="h-4 w-3/4 rounded-sm" />
              <SkeletonBox className="w-5 h-5 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
