"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithSkeletonProps extends ImageProps {
  containerClassName?: string;
  skeletonClassName?: string;
}

export default function ImageWithSkeleton({
  className = "",
  containerClassName = "",
  skeletonClassName = "",
  alt = "",
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Smooth shimmer skeleton loader until image finishes loading */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-10 bg-gradient-to-r from-stone-100 via-stone-200/70 to-stone-100 animate-pulse ${skeletonClassName}`}
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      )}

      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}
