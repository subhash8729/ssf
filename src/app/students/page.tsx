import React from "react";
import type { Metadata } from "next";
import StudentsContent from "@/components/StudentsContent";

export const metadata: Metadata = {
  title: "Students Hub & ACCA Coaching | Shri Sushil Sharda Foundation",
  description:
    "Comprehensive guide for students pursuing free ACCA coaching with Shri Sushil Sharda Foundation. Eligibility, syllabus, teaching methods, and career pathways.",
};

export default function StudentsPage() {
  return <StudentsContent />;
}
