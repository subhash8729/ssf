import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? "text-center mx-auto" : "text-left"} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? "justify-center" : ""}`}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FDF2F0] text-[#AA331D] border border-[#F5D5CE]">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg text-stone-600 font-normal leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative accent divider line */}
      <div className={`mt-4 flex items-center gap-1.5 ${isCenter ? "justify-center" : "justify-start"}`}>
        <span className="w-8 h-1 bg-[#AA331D] rounded-full" />
        <span className="w-2 h-1 bg-[#AA331D]/40 rounded-full" />
      </div>
    </div>
  );
}
