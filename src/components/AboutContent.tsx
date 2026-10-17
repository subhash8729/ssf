"use client";

import React from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import {
  Target,
  Eye,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { foundationDetails } from "@/data/foundation";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t, language } = useLanguage();

  const isHindi = language === "hi";

  const whyAccaCareers = [
    {
      title: isHindi ? "वित्तीय लेखांकन और रिपोर्टिंग" : "Financial Accounting & Reporting",
      desc: isHindi
        ? "अंतर्राष्ट्रीय लेखांकन मानकों (IFRS) और वित्तीय विवरणों में महारत।"
        : "Mastering international accounting frameworks (IFRS) and financial statements.",
    },
    {
      title: isHindi ? "वैधानिक एवं आंतरिक ऑडिट" : "Statutory & Internal Audit",
      desc: isHindi
        ? "परिचालन प्रणालियों, आंतरिक नियंत्रणों और व्यावसायिक जोखिमों का मूल्यांकन।"
        : "Evaluating operational systems, internal controls, and enterprise risks.",
    },
    {
      title: isHindi ? "कराधान और विनियामक अनुपालन" : "Taxation & Compliance",
      desc: isHindi
        ? "कॉर्पोरेट टैक्स सिस्टम, वैश्विक संधियों और वित्तीय नियमों का सटीक अनुपालन।"
        : "Navigating corporate tax systems, global treaties, and fiscal regulations.",
    },
    {
      title: isHindi ? "कॉर्पोरेट वित्त और रणनीति" : "Corporate Finance & Strategy",
      desc: isHindi
        ? "पूंजी आवंटन, मूल्यांकन, विलय और रणनीतिक वित्तीय योजना का मार्गदर्शन।"
        : "Guiding capital allocation, valuations, mergers, and financial planning.",
    },
    {
      title: isHindi ? "प्रबंधन लेखांकन (मैनेजमेंट अकाउंटिंग)" : "Management Accounting",
      desc: isHindi
        ? "लागत विश्लेषण, बजट निर्माण और व्यावसायिक प्रदर्शन प्रबंधन।"
        : "Driving cost analysis, budgeting, and performance management for businesses.",
    },
    {
      title: isHindi ? "वित्तीय परामर्श और सलाहकार" : "Advisory & Consulting",
      desc: isHindi
        ? "सीमा पार वित्तीय, नियामक और कॉर्पोरेट चुनौतियों का समाधान।"
        : "Solving cross-border financial, regulatory, and corporate challenges.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#FDFBF7] via-white to-white py-16 sm:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
              {t.about.badge}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            {t.about.title}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto font-medium">
            {t.about.subtitle}
          </p>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#AA331D] font-semibold">
            <span>शिक्षा से सशक्तिकरण</span>
            <span>•</span>
            <span>Empowerment through Education</span>
          </div>
        </div>
      </section>

      {/* 1. Who We Are */}
      <section id="who-we-are" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={isHindi ? "संस्थागत पहचान" : "Institutional Identity"}
            title={t.about.whoTitle}
            subtitle={t.about.whoSubtitle}
            align="left"
          />

          <div className="space-y-5 text-stone-700 leading-relaxed text-base sm:text-lg">
            <p className="text-xl font-medium text-stone-900 leading-snug">
              {t.about.whoText1}
            </p>
            <p>
              {t.about.whoText2}
            </p>
            <p>
              {t.about.whoText3}
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-[#FAF9F6] border border-[#F5D5CE] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  {isHindi ? "संस्था का स्वरूप" : "Entity"}
                </span>
                <p className="font-semibold text-stone-900">
                  {isHindi ? "भारतीय प्राइवेट लिमिटेड कंपनी" : "Indian Private Limited Company"}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  {isHindi ? "स्थापना तिथि" : "Established"}
                </span>
                <p className="font-semibold text-stone-900">
                  {isHindi ? "30 मई 2025" : "30th May 2025"}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  {isHindi ? "मुख्यालय" : "Headquarters"}
                </span>
                <p className="font-semibold text-stone-900">
                  {isHindi ? "देहरादून, उत्तराखंड, भारत" : "Dehradun, Uttarakhand, India"}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  {isHindi ? "संबद्ध अकादमी" : "Affiliated Academy"}
                </span>
                <p className="font-semibold text-stone-900">Amit Dharaniya Global Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Mission & Vision */}
      <section id="mission" className="py-16 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#F5D5CE] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FDF2F0] text-[#AA331D] flex items-center justify-center mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                  {isHindi ? "हमारा उद्देश्य" : "Our Purpose"}
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1 mb-4">
                  {t.about.missionTitle}
                </h2>
                <p className="text-stone-700 text-lg leading-relaxed font-medium">
                  &ldquo;{t.about.missionDesc}&rdquo;
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl border-2 border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-[#AA331D]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  {isHindi ? "हमारी दूरदर्शिता" : "Our Aspiration"}
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1 mb-4">
                  {t.about.visionTitle}
                </h2>
                <p className="text-stone-700 text-lg leading-relaxed font-medium">
                  &ldquo;{t.about.visionDesc}&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#AA331D] text-white text-xs sm:text-sm font-semibold hover:bg-[#8F2B18] transition-colors shadow-xs"
            >
              <span>{isHindi ? "हमारा संपूर्ण मिशन और घोषणापत्र पढ़ें" : "Read Our Full Mission & Philosophy Manifesto"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Education as Empowerment & 5. Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 4. Education as Empowerment */}
          <div>
            <SectionHeading
              badge={isHindi ? "मूल दर्शन" : "Core Philosophy"}
              title={isHindi ? "4. शिक्षा द्वारा सशक्तिकरण" : "4. Education as Empowerment"}
              subtitle={isHindi ? "ज्ञान और मान्यता प्राप्त पेशेवर योग्यताएं आत्म-निर्भरता का निर्माण करती हैं।" : "Knowledge and recognized professional qualification build generational self-reliance."}
              align="left"
            />
            <div className="space-y-4 text-stone-700 text-base leading-relaxed">
              <p>
                {isHindi
                  ? "श्री सुशील शारदा फाउंडेशन में शिक्षा केवल एक डिग्री प्राप्त करना नहीं, बल्कि सम्मान, स्वावलंबन और सामाजिक परिवर्तन का शक्तिशाली माध्यम है। वैश्विक चार्टर्ड अकाउंटेंसी में दक्षता हासिल कर विद्यार्थी अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त कौशल अर्जित करते हैं।"
                  : "At Shri Sushil Sharda Foundation, education is not simply an academic milestone; it is an instrument of dignity, self-sufficiency, and social transformation. By mastering global accountancy, students acquire skills that are universally valued, opening avenues for sustainable personal and community advancement."}
              </p>
              <p>
                {isHindi
                  ? "जब एक योग्य छात्र अंतरराष्ट्रीय परीक्षाओं में सफलता प्राप्त करता है, तो यह केवल एक जीवन नहीं बदलता, बल्कि पूरे परिवार को सशक्त बनाता है और समुदाय में शिक्षा के प्रति विश्वास जगाता है।"
                  : "When a deserving student clears rigorous international board examinations, it transforms not just an individual life, but uplifts their entire family and inspires their community to value academic discipline."}
              </p>
            </div>
          </div>

          {/* 5. Our Approach */}
          <div>
            <SectionHeading
              badge={isHindi ? "शिक्षण पद्धति और सहयोग" : "Pedagogy & Support"}
              title={isHindi ? "5. हमारी कार्यप्रणाली" : "5. Our Approach"}
              subtitle={isHindi ? "एक व्यवस्थित, मार्गदर्शक-संचालित मॉडल जो शैक्षणिक उत्कृष्टता को प्राथमिकता देता है।" : "A systematic, mentor-driven model prioritizing academic excellence."}
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-white text-[#AA331D] flex items-center justify-center font-bold text-sm shadow-2xs mb-3">
                  01
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {isHindi ? "प्रतिभा चयन" : "Merit Identification"}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHindi
                    ? "10वीं/12वीं में 90%+ अंक तथा वित्तीय सहायता की आवश्यकता वाले मेधावी विद्यार्थियों का चयन।"
                    : "Welcoming candidates with 90%+ in English and Maths/Accounts from Class X/XII who demonstrate genuine financial need."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-white text-[#AA331D] flex items-center justify-center font-bold text-sm shadow-2xs mb-3">
                  02
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {isHindi ? "100% निःशुल्क ट्यूशन" : "100% Free Tuition"}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHindi
                    ? "चयनित विद्यार्थियों से लाइव ऑनलाइन, रिकॉर्डेड सत्रों और अध्ययन सामग्री के लिए कोई शुल्क नहीं।"
                    : "No tuition charges whatsoever for approved scholars across live online, live recorded, and structured modules."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-white text-[#AA331D] flex items-center justify-center font-bold text-sm shadow-2xs mb-3">
                  03
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {isHindi ? "वरिष्ठ नेतृत्व में मेंटरशिप" : "Senior Mentorship"}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHindi
                    ? "KPMG, BDO व Big 4 के 35+ वर्षों के कारपोरेट अनुभव प्राप्त विशेषज्ञों द्वारा सीधा मार्गदर्शन।"
                    : "Guidance from veteran finance leaders with decades of global corporate and Big 4 accounting experience."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why ACCA */}
      <section id="why-acca" className="py-16 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={isHindi ? "वैश्विक योग्यता" : "Global Qualification"}
            title={t.about.careersHeading}
            subtitle={t.about.careersSubheading}
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {whyAccaCareers.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#AA331D] mb-2 uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isHindi ? "विशेषज्ञता क्षेत्र" : "Domain Focus"}</span>
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-600">
            <strong className="text-stone-800">{isHindi ? "शैक्षिक सूचना: " : "Educational Note: "}</strong>
            {isHindi
              ? "ACCA एक वैश्विक पेशेवर योग्यता है। श्री सुशील शारदा फाउंडेशन केवल उच्च स्तरीय शैक्षणिक कोचिंग प्रदान करता है; हम किसी विशिष्ट वेतन या नौकरी की गारंटी नहीं देते हैं।"
              : "ACCA is a professional certification program. Shri Sushil Sharda Foundation provides rigorous academic preparation and coaching; we do not guarantee specific salaries, employment placements, or migration outcomes."}
          </div>
        </div>
      </section>

      {/* 7. The Role of Amit Dharaniya Global Academy */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={isHindi ? "शैक्षणिक साझेदारी" : "Academic Partnership"}
            title={isHindi ? "7. अमित धरनिया ग्लोबल अकादमी की भूमिका" : "7. The Role of Amit Dharaniya Global Academy"}
            subtitle={isHindi ? "मजबूत शिक्षण आधारभूत ढांचा, संरचित पाठ्यक्रम और वरिष्ठ शिक्षकों का मेंटरशिप।" : "Providing pedagogical foundation, structured content, and senior faculty mentorship."}
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4 text-stone-700 leading-relaxed text-base">
              <p>
                {isHindi
                  ? "फाउंडेशन अमित धरनिया ग्लोबल अकादमी (ADGA) के सहयोग से संचालित होता है, जो अपने अत्याधुनिक शिक्षण बुनियादी ढांचे और विशेष ACCA पाठ्यक्रम का लाभ प्रदान करती है।"
                  : "The foundation operates in close association with Amit Dharaniya Global Academy (ADGA), leveraging its robust teaching infrastructure, learning management systems, and specialized ACCA curriculum."}
              </p>
              <p>
                {isHindi
                  ? "अमित धरनिया—KPMG, TMF Group, Axis Risk Consulting एवं BDO India के साथ 35 से अधिक वर्षों का कॉर्पोरेट व IFRS प्रशिक्षण अनुभव रखने वाले वरिष्ठ वित्त शिक्षक—के नेतृत्व में अकादमी यह सुनिश्चित करती है कि फाउंडेशन के विद्यार्थियों को शीर्ष स्तर का प्रशिक्षण प्राप्त हो।"
                  : "Led by Amit Dharaniya—a finance educator and IFRS corporate trainer with over 35 years of experience with leading institutions including KPMG, TMF Group, Axis Risk Consulting, and BDO India—the academy ensures foundation scholars receive the exact same academic rigor and mentorship afforded to corporate trainees."}
              </p>

              <div className="pt-2">
                <a
                  href={foundationDetails.academyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#AA331D] hover:underline"
                >
                  <span>{isHindi ? "अमित धरनिया ग्लोबल अकादमी की आधिकारिक वेबसाइट पर जाएं" : "Visit Amit Dharaniya Global Academy Official Website"}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#F5D5CE] shadow-md p-2 bg-[#FAF9F6]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-t from-stone-100 to-white">
                  <ImageWithSkeleton
                    src="/images/mentor-amit-dharaniya.webp"
                    alt="Amit Dharaniya - Mentor"
                    fill
                    sizes="200px"
                    className="object-contain object-bottom"
                    containerClassName="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. How Students Can Benefit & 9. How Supporters Can Help */}
      <section className="py-16 bg-[#FAF9F6] border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 8. How Students Can Benefit */}
          <div>
            <SectionHeading
              badge={isHindi ? "छात्र अवसर" : "Student Opportunity"}
              title={isHindi ? "8. विद्यार्थियों को लाभ" : "8. How Students Can Benefit"}
              subtitle={isHindi ? "पूरी तरह निःशुल्क ट्यूशन के साथ विश्वस्तरीय कोचिंग की सुविधा।" : "Comprehensive tuition fee waiver combined with access to top-tier coaching."}
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">
                  {isHindi ? "पूर्ण ट्यूशन छूट" : "Complete Tuition Exemption"}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHindi
                    ? "विद्यार्थियों को फाउंडेशन द्वारा आयोजित किसी भी क्लास के लिए कोई शुल्क नहीं देना होता।"
                    : "Students never pay any coaching fees to the foundation for attended live or recorded classes."}
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">
                  {isHindi ? "लचीले अध्ययन विकल्प" : "Flexible Learning Modes"}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHindi
                    ? "लाइव इंटरएक्टिव कक्षाओं के साथ-साथ रिकॉर्डेड मॉड्यूल से अपनी सुविधानुसार अध्ययन करें।"
                    : "Study online with live interactive sessions or access recorded modules to fit your schedule."}
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">
                  {isHindi ? "संदेह निवारण एवं मार्गदर्शन" : "Doubt Resolution & Guidance"}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHindi
                    ? "अनुभवी शिक्षकों से सीधे संवाद कर अपनी सभी शंकाओं का समाधान पाएं।"
                    : "Direct interaction with experienced accounting educators who clarify concepts thoroughly."}
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h4 className="font-semibold text-stone-900 text-base mb-1">
                  {isHindi ? "नैतिक एवं व्यावसायिक मूल्य" : "Ethical & Professional Standards"}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isHindi
                    ? "वैश्विक लेखांकन नैतिकता, वित्तीय पारदर्शिता और पेशेवर ईमानदारी पर आधारित तैयारी।"
                    : "Preparation rooted in global accounting ethics, financial transparency, and professional rigor."}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#AA331D] text-white text-sm font-semibold hover:bg-[#8F2B18] transition-colors"
              >
                <span>{t.nav.apply}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 9. How Supporters Can Help */}
          <div className="pt-8 border-t border-stone-200">
            <SectionHeading
              badge={isHindi ? "सहयोगियों की सहभागिता" : "Supporter Engagement"}
              title={isHindi ? "9. दानदाता और समर्थक कैसे सहयोग कर सकते हैं" : "9. How Supporters Can Help"}
              subtitle={isHindi ? "ट्यूशन के अलावा अन्य आवश्यक बाहरी शुल्कों को वहन करने में सहयोग करें।" : "Partner with us to cover the external costs that remain outside free tuition."}
              align="left"
            />
            <p className="text-stone-700 text-base leading-relaxed mb-6">
              {isHindi
                ? "100% निःशुल्क ट्यूशन के बावजूद, आधिकारिक ACCA परीक्षा शुल्क, पुस्तकें और वार्षिक पंजीकरण जैसी बाहरी लागतें आर्थिक रूप से कमजोर छात्रों के लिए एक चुनौती हो सकती हैं। समर्थक बैंक ट्रांसफर के माध्यम से इन खर्चों में सीधा योगदान दे सकते हैं।"
                : "Even with 100% free tuition, external costs such as official ACCA body exam fees, textbooks, and annual student registrations can remain a heavy hurdle for underprivileged students. Supporters can directly fund these components through our bank transfer program."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="px-6 py-3 rounded-lg bg-[#AA331D] text-white text-sm font-semibold hover:bg-[#8F2B18] transition-colors flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>{isHindi ? "बैंक खाता विवरण देखें" : "View Bank Transfer Details"}</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
              >
                <span>{t.nav.contact}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
