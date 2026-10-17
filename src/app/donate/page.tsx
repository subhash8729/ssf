import React from "react";
import type { Metadata } from "next";
import DonateContent from "@/components/DonateContent";

export const metadata: Metadata = {
  title: "Donate & Support a Student | Shri Sushil Sharda Foundation",
  description:
    "Directly support deserving ACCA students with examination fees, study books, and annual subscriptions through official bank transfer.",
};

export default function DonatePage() {
  return <DonateContent />;
}
