import React from "react";
import {
  SkeletonBox,
  SkeletonPill,
  SkeletonHeading,
  SkeletonText,
} from "./SkeletonPrimitives";

export default function GenericSkeleton() {
  return (
    <div className="w-full bg-white animate-in fade-in duration-200">
      <div className="bg-gradient-to-b from-[#FDFBF7] to-white py-12 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <SkeletonBox className="h-4 w-24 rounded-sm" />
          <SkeletonBox className="h-9 sm:h-11 w-3/4 rounded-lg" />
          <SkeletonBox className="h-3.5 w-48 rounded-sm" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3">
            <SkeletonBox className="h-6 w-48 rounded-md" />
            <SkeletonText lines={3} />
          </div>
        ))}
      </div>
    </div>
  );
}
