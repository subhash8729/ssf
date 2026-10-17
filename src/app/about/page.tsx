import React from "react";
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Shri Sushil Sharda Foundation",
  description:
    "Learn about Shri Sushil Sharda Foundation, our mission to provide free ACCA education to deserving students, and our commitment to empowerment through education.",
};

export default function AboutPage() {
  return <AboutContent />;
}
