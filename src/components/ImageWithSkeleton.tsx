"use client";

import React, { useState, useEffect, useRef } from "react";
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
  fill,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Immediate check for cached / preloaded images so they don't get stuck hidden
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, []);

  // Root cause fix: If fill is true, the wrapper div MUST default to w-full h-full relative
  // so it never collapses to 0 height or 0 width when placed inside a sized parent.
  const baseContainerClasses = fill ? "w-full h-full relative" : "relative inline-block";

  return (
    <div
      className={`overflow-hidden ${baseContainerClasses} ${containerClassName}`}
    >
      {/* Smooth shimmer skeleton loader until image finishes loading */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-10 skeleton-shimmer ${skeletonClassName}`}
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      )}

      <Image
        {...props}
        ref={imgRef}
        fill={fill}
        alt={alt}
        className={`${className} transition-opacity duration-300 ease-in-out ${
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
