"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FAQItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  // Allow opening/closing by index. Keep first item open by default for immediate context.
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#F5D5CE] shadow-sm ring-1 ring-[#AA331D]/15"
                : "bg-[#FAF9F6] border-stone-200/80 hover:bg-white hover:border-stone-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#AA331D] text-white"
                      : "bg-white text-stone-500 border border-stone-200"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <span className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                  {item.q}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#AA331D]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed pl-14 sm:pl-16 border-t border-stone-100/80 bg-white/50">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
