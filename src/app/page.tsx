import React from "react";
import Hero from "@/components/Hero";
import FoundationIntro from "@/components/FoundationIntro";
import WhatWeOffer from "@/components/WhatWeOffer";
import Eligibility from "@/components/Eligibility";
import StudentSection from "@/components/StudentSection";
import MentorSection from "@/components/MentorSection";
import TeachingSection from "@/components/TeachingSection";
import HowSupportHelps from "@/components/HowSupportHelps";
import DonationSection from "@/components/DonationSection";
import DonorSection from "@/components/DonorSection";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Foundation Introduction */}
      <FoundationIntro />

      {/* 3. What We Offer */}
      <WhatWeOffer />

      {/* 4. Eligibility Section */}
      <Eligibility />

      {/* 5. Student Narrative & Storytelling */}
      <StudentSection />

      {/* 6. Mentor Section */}
      <MentorSection />

      {/* 7. Teaching / Learning Section */}
      <TeachingSection />

      {/* 8. How Support Helps */}
      <HowSupportHelps />

      {/* 9. Donation Section */}
      <DonationSection />

      {/* 10. Top 3 Donors & Supporters Roll */}
      <DonorSection />

      {/* 11. Application Form */}
      <ApplicationForm />
    </main>
  );
}
