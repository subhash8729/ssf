import React from "react";

interface SkeletonBoxProps {
  className?: string;
  accent?: boolean;
}

export function SkeletonBox({ className = "", accent = false }: SkeletonBoxProps) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-lg ${accent ? "skeleton-shimmer-accent" : "skeleton-shimmer"} ${className}`}
    />
  );
}

export function SkeletonPill({ className = "", textWidth = "w-28", accent = true }: { className?: string; textWidth?: string; accent?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200/60 bg-white/80 shadow-2xs ${className}`}
    >
      <SkeletonBox className={`w-3.5 h-3.5 rounded-full ${accent ? "bg-[#AA331D]/20" : ""}`} accent={accent} />
      <SkeletonBox className={`h-2.5 ${textWidth} rounded-sm`} accent={accent} />
    </div>
  );
}

export function SkeletonHeading({
  className = "",
  lines = 1,
  size = "lg",
}: {
  className?: string;
  lines?: number;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const heightClass =
    size === "xl" ? "h-10 sm:h-12" : size === "lg" ? "h-7 sm:h-9" : size === "md" ? "h-5 sm:h-6" : "h-4";

  return (
    <div aria-hidden="true" className={`space-y-2.5 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox
          key={i}
          className={`${heightClass} rounded-md ${
            lines > 1 && i === lines - 1 ? "w-3/5" : "w-full"
          }`}
        />
      ))}
    </div>
  );
}

export function SkeletonText({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) {
  const widths = ["w-full", "w-11/12", "w-4/5", "w-5/6", "w-2/3"];

  return (
    <div aria-hidden="true" className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox
          key={i}
          className={`h-3 sm:h-3.5 rounded-sm ${widths[i % widths.length]}`}
        />
      ))}
    </div>
  );
}

export function SkeletonButton({
  variant = "primary",
  className = "",
  width = "w-36",
}: {
  variant?: "primary" | "secondary";
  className?: string;
  width?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`h-11 sm:h-12 rounded-xl flex items-center justify-center gap-2 px-5 ${
        variant === "primary"
          ? "skeleton-shimmer-accent bg-[#FDF2F0] border border-[#F5D5CE]"
          : "skeleton-shimmer border border-stone-200"
      } ${width} ${className}`}
    >
      <SkeletonBox
        className={`w-4 h-4 rounded-full ${variant === "primary" ? "bg-[#AA331D]/30" : "bg-stone-300"}`}
      />
      <SkeletonBox
        className={`h-3.5 w-20 rounded-sm ${variant === "primary" ? "bg-[#AA331D]/20" : "bg-stone-300"}`}
      />
    </div>
  );
}

export function SkeletonCard({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-2xl sm:rounded-3xl border border-stone-200/80 bg-white/95 p-5 sm:p-7 shadow-xs ${className}`}
    >
      {children}
    </div>
  );
}
