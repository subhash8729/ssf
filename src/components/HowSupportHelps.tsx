"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { FileCheck, BookMarked, CalendarCheck } from "lucide-react";
import { supportImpactAreas } from "@/data/foundation";
import { useLanguage } from "@/context/LanguageContext";

export default function HowSupportHelps() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const icons = [FileCheck, BookMarked, CalendarCheck];

  const localizedAreas = [
    {
      title: isHindi ? "आधिकारिक ACCA परीक्षा शुल्क" : supportImpactAreas[0].title,
      description: isHindi
        ? "वैश्विक स्तर पर मान्यता प्राप्त ACCA परीक्षाओं का शुल्क यूके की आधिकारिक संस्था द्वारा पाउंड में लिया जाता है, जो विद्यार्थियों के लिए एक बड़ा खर्च होता है।"
        : supportImpactAreas[0].description,
    },
    {
      title: isHindi ? "आधिकारिक अध्ययन सामग्री एवं पुस्तकें" : supportImpactAreas[1].title,
      description: isHindi
        ? "कपलान (Kaplan) और BPP द्वारा अनुमोदित प्रामाणिक अध्ययन सामग्री, अभ्यास प्रश्न बैंक और मॉक टेस्ट सामग्री।"
        : supportImpactAreas[1].description,
    },
    {
      title: isHindi ? "वार्षिक छात्र सदस्यता शुल्क" : supportImpactAreas[2].title,
      description: isHindi
        ? "ACCA पोर्टल पर विद्यार्थी पंजीकरण और वैश्विक विद्यार्थी स्थिति को सक्रिय रखने हेतु अनिवार्य वार्षिक शुल्क।"
        : supportImpactAreas[2].description,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={isHindi ? "निःशुल्क ट्यूशन के अतिरिक्त" : "Beyond Free Tuition"}
          title={isHindi ? "आपका सहयोग कहाँ सहायक बनता है" : "Where Your Support Makes a Difference"}
          subtitle={isHindi
            ? "यद्यपि फाउंडेशन 100% निःशुल्क कोचिंग प्रदान करता है, फिर भी अंतरराष्ट्रीय पेशेवर योग्यता के लिए कुछ बाहरी शैक्षणिक खर्च आवश्यक होते हैं।"
            : "While the foundation provides tuition 100% free of charge, external educational expenses remain for students pursuing international qualifications."}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {localizedAreas.map((area, idx) => {
            const Icon = icons[idx] || FileCheck;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-[#F5D5CE]/80 rounded-2xl p-7 hover:border-[#AA331D] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#F5D5CE] text-[#AA331D] flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-500">
                    {isHindi ? `सहयोग क्षेत्र 0${idx + 1}` : `Impact Area 0${idx + 1}`}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
