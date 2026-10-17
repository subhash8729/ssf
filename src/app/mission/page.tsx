import React from "react";
import type { Metadata } from "next";
import MissionContent from "@/components/MissionContent";

export const metadata: Metadata = {
  title: "Our Mission & Vision | Shri Sushil Sharda Foundation",
  description:
    "Discover the mission, vision, and guiding philosophy of Shri Sushil Sharda Foundation—empowering meritorious students with free ACCA education.",
};

export default function MissionPage() {
  return <MissionContent />;
}
