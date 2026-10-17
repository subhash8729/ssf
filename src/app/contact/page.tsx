import React from "react";
import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Shri Sushil Sharda Foundation",
  description:
    "Get in touch with Shri Sushil Sharda Foundation in Dehradun, Uttarakhand. Connect regarding free ACCA coaching and student sponsorship opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
