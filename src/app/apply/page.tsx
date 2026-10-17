import React from "react";
import type { Metadata } from "next";
import ApplyContent from "@/components/ApplyContent";

export const metadata: Metadata = {
  title: "Apply for Free ACCA Education | Shri Sushil Sharda Foundation",
  description:
    "Apply for 100% free ACCA tuition with Shri Sushil Sharda Foundation. Open for Class X/XII students with 90+ in English and Maths/Accounts needing financial support.",
};

export default function ApplyPage() {
  return <ApplyContent />;
}
