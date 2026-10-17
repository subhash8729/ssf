"use client";

import React from "react";
import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Users,
  Award,
  FileCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StudentsContent() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";

  const journeySteps = [
    {
      step: "01",
      title: isHindi ? "योग्यता एवं वित्तीय समीक्षा" : t.students.step1Title,
      desc: isHindi
        ? "10वीं या 12वीं में 90%+ अंक (अंग्रेजी एवं गणित/अकाउंट्स) वाले जरूरतमंद छात्र अपना आवेदन जमा करते हैं।"
        : t.students.step1Desc,
      icon: FileCheck,
    },
    {
      step: "02",
      title: isHindi ? "100% निःशुल्क ट्यूशन" : t.students.step2Title,
      desc: isHindi
        ? "चयनित छात्रों को बिना किसी ट्यूशन शुल्क के लाइव ऑनलाइन कक्षाओं और रिकॉर्डेड आर्काइव्स में जोड़ा जाता है।"
        : t.students.step2Desc,
      icon: BookOpen,
    },
    {
      step: "03",
      title: isHindi ? "वरिष्ठ शिक्षकों का मार्गदर्शन" : t.students.step3Title,
      desc: isHindi
        ? "Big-4 एवं शीर्ष कॉर्पोरेट अनुभव वाले 35+ वर्ष अनुभवी वित्त शिक्षकों द्वारा व्यक्तिगत मार्गदर्शन।"
        : t.students.step3Desc,
      icon: Users,
    },
    {
      step: "04",
      title: isHindi ? "वैश्विक ACCA योग्यता" : t.students.step4Title,
      desc: isHindi
        ? "अंतरराष्ट्रीय परीक्षाएं उत्तीर्ण कर सांविधिक ऑडिट, IFRS लेखांकन और कॉर्पोरेट सलाहकार के रूप में करियर बनाएं।"
        : t.students.step4Desc,
      icon: Award,
    },
  ];

  const levels = [
    {
      name: isHindi ? "एप्लाइड नॉलेज (Applied Knowledge)" : t.students.level1Name,
      papers: isHindi ? "3 प्रश्नपत्र (Papers)" : t.students.level1Papers,
      focus: isHindi
        ? "व्यापार प्रबंधन, वित्तीय लेखांकन (Financial Accounting) और लागत प्रबंधन (Management Costing) के बुनियादी सिद्धांत।"
        : t.students.level1Desc,
      status: isHindi ? "आरंभिक स्तर" : "Starting Level",
    },
    {
      name: isHindi ? "एप्लाइड स्किल्स (Applied Skills)" : t.students.level2Name,
      papers: isHindi ? "6 प्रश्नपत्र (Papers)" : t.students.level2Papers,
      focus: isHindi
        ? "कॉर्पोरेट कानून, कराधान, ऑडिट, वित्तीय रिपोर्टिंग और वित्तीय प्रबंधन में तकनीकी दक्षता।"
        : t.students.level2Desc,
      status: isHindi ? "मध्यम स्तर" : "Intermediate",
    },
    {
      name: isHindi ? "स्ट्रेटेजिक प्रोफेशनल (Strategic Professional)" : t.students.level3Name,
      papers: isHindi ? "4 प्रश्नपत्र (Papers)" : t.students.level3Papers,
      focus: isHindi
        ? "उच्च स्तरीय नेतृत्व (Strategic Business Leader), रणनीतिक व्यापार रिपोर्टिंग (SBR), और चुने हुए उन्नत विकल्प।"
        : t.students.level3Desc,
      status: isHindi ? "उन्नत स्तर" : "Advanced",
    },
  ];

  const careerTracks = [
    {
      title: isHindi ? "सांविधिक एवं आंतरिक ऑडिट" : "Statutory & Internal Audit",
      desc: isHindi
        ? "बहुराष्ट्रीय कंपनियों और सूचीबद्ध संस्थाओं की वित्तीय सत्यनिष्ठा की जांच।"
        : "Verifying financial fidelity for multinational corporations and listed entities.",
    },
    {
      title: isHindi ? "IFRS एवं वित्तीय रिपोर्टिंग" : "IFRS & Financial Reporting",
      desc: isHindi
        ? "अंतरराष्ट्रीय लेखांकन मानकों का पालन करते हुए वैश्विक वित्तीय विवरण तैयार करना।"
        : "Preparing accounts adhering strictly to international accounting standards.",
    },
    {
      title: isHindi ? "कॉर्पोरेट वित्त एवं विलय (M&A)" : "Corporate Finance & M&A",
      desc: isHindi
        ? "पूंजी मूल्यांकन, रणनीतिक अधिग्रहण और कॉर्पोरेट ट्रेजरी प्रबंधन।"
        : "Capital valuations, strategic acquisitions, and corporate treasury management.",
    },
    {
      title: isHindi ? "अंतरराष्ट्रीय कराधान और कानून" : "Taxation & International Law",
      desc: isHindi
        ? "वैश्विक कॉर्पोरेट कर अनुपालन और अंतरराष्ट्रीय वित्तीय नियम।"
        : "Cross-border corporate tax compliance and regulatory management.",
    },
  ];

  const studentFAQs = [
    {
      q: isHindi ? "क्या कक्षाएं वास्तव में पूरी तरह निःशुल्क हैं?" : "Are the classes completely free?",
      a: isHindi
        ? "हाँ। श्री सुशील शारदा फाउंडेशन नामांकित छात्रों से कोई कोचिंग या ट्यूशन फीस नहीं लेता है। सभी लाइव क्लास और अध्ययन सामग्री 100% मुफ़्त है।"
        : "Yes. Shri Sushil Sharda Foundation does not charge any tuition or coaching fees from enrolled scholars. Every live session and study archive is 100% free.",
    },
    {
      q: isHindi ? "ट्यूशन छूट में कौन-से खर्च शामिल नहीं हैं?" : "What expenses are not covered by tuition waiver?",
      a: isHindi
        ? "ट्यूशन मुफ़्त है। बाहरी परीक्षा शुल्क, मूल अध्ययन पुस्तकें और वैश्विक ACCA संस्था द्वारा सीधे लिए जाने वाले वार्षिक सदस्यता शुल्क छात्र के अपने होते हैं (जिन्हें हमारे दानदाता अक्सर प्रायोजित करते हैं)।"
        : "Tuition is free. External examination sitting fees, original study texts, and annual student subscriptions levied directly by the global ACCA UK body remain external. Patrons frequently help sponsor these for deserving scholars.",
    },
    {
      q: isHindi ? "क्या मैं भारत के किसी भी शहर से भाग ले सकता हूँ?" : "Can I attend from any city in India?",
      a: isHindi
        ? "हाँ। कक्षाएं उच्च-गुणवत्ता वाले इंटरएक्टिव ऑनलाइन प्लेटफॉर्म और 24/7 उपलब्ध रिकॉर्डेड वीडियो आर्काइव के माध्यम से संचालित होती हैं।"
        : "Yes. Classes are delivered via high-standard interactive online platforms, accompanied by 24/7 accessible recorded revision archives.",
    },
    {
      q: isHindi ? "पढ़ाई के दौरान यदि कोई संदेह हो तो क्या करें?" : "What if I have doubts or questions during study?",
      a: isHindi
        ? "अमित धरनिया ग्लोबल अकादमी के माध्यम से नियमित लाइव शंका-समाधान सत्र और वरिष्ठ शिक्षकों का व्यक्तिगत मार्गदर्शन प्रदान किया जाता है।"
        : "Regular live doubt-clearing sessions and faculty mentorship are integrated into the curriculum through Amit Dharaniya Global Academy.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Student Portal Header */}
      <section className="relative bg-[#FAF9F6] border-b border-stone-200/80 py-12 sm:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F0] border border-[#F5D5CE] mb-3.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#AA331D]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
              {t.students.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            {t.students.heading}
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.students.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/apply"
              className="px-6 py-3 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.nav.apply}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#eligibility"
              className="px-5 py-3 rounded-xl bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 font-semibold text-xs sm:text-sm transition-all"
            >
              {isHindi ? "पात्रता मानदंड जांचें" : "Check Eligibility Criteria"}
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Academic Journey */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D] block mb-1">
              {isHindi ? "संरचित रोडमैप" : "Structured Roadmap"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {t.students.journeyTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
              {isHindi ? "आवेदन समीक्षा से लेकर वैश्विक योग्यता तक का सफर।" : "From application review to global qualification."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {journeySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 relative flex flex-col justify-between hover:border-[#AA331D]/40 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#AA331D] flex items-center justify-center shadow-2xs border border-stone-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xl font-serif font-bold text-stone-300">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Eligibility Section */}
      <section id="eligibility" className="py-14 sm:py-18 bg-[#FAF9F6] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#F5D5CE] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F0] text-[#AA331D] mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isHindi ? "पात्रता मानदंड" : "Eligibility Criteria"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  {isHindi ? "निःशुल्क ट्यूशन के लिए कौन पात्र है?" : "Who Can Apply for Free Tuition?"}
                </h2>
              </div>
              <Link
                href="/apply"
                className="self-start md:self-auto px-6 py-3 rounded-xl bg-[#AA331D] text-white font-semibold text-xs sm:text-sm hover:bg-[#8F2B18] transition-colors flex items-center gap-1.5"
              >
                <span>{t.nav.apply}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  {isHindi ? "1. शैक्षणिक योग्यता आवश्यकताएँ" : "1. Academic Merit Requirements"}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>
                      {isHindi
                        ? "भारत के किसी भी मान्यता प्राप्त केंद्रीय या राज्य बोर्ड से कक्षा 10वीं या 12वीं उत्तीर्ण छात्र।"
                        : "Class X or Class XII Students from any recognized central or state board in India."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>
                      {isHindi
                        ? "अंग्रेजी और गणित / अकाउंटेंसी में 90% या उससे अधिक अंक।"
                        : "90% or above marks in English and Mathematics / Accountancy."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>
                      {isHindi
                        ? "संख्याओं, व्यावसायिक तर्क और चार्टर्ड एकाउंटेंसी के प्रति स्वाभाविक रुचि।"
                        : "Demonstrated passion for numbers, business logic, and professional rigor."}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  {isHindi ? "2. सामाजिक-आर्थिक पृष्ठभूमि" : "2. Socio-Economic Eligibility"}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>
                      {isHindi
                        ? "पारिवारिक स्थिति जहां निजी कोचिंग की भारी फीस वहन नहीं की जा सकती।"
                        : "Family circumstances where private professional coaching fees cannot be afforded."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>
                      {isHindi
                        ? "आय प्रमाण या वास्तविक वित्तीय आवश्यकता का विवरण।"
                        : "Submission of household income documentation or genuine statement of financial need."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                    <span>
                      {isHindi
                        ? "कक्षाओं में 100% उपस्थिति, नियमित टेस्ट और कड़े अध्ययन अनुशासन की प्रतिबद्धता।"
                        : "Strict commitment to full attendance, periodic tests, and disciplined study hours."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCA Curriculum Overview */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D] block mb-1">
              {isHindi ? "पाठ्यक्रम संरचना" : "Curriculum Architecture"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {t.students.levelsTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
              {isHindi ? "वैश्विक योग्यता को तीन प्रमुख चरणों में विभाजित किया गया है।" : "Global qualification divided into structured learning milestones."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((lvl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-white text-[#AA331D] border border-stone-200">
                      {lvl.status}
                    </span>
                    <span className="text-xs font-semibold text-stone-500">
                      {lvl.papers}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                    {lvl.name}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {lvl.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Career Opportunities */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FDF2F0] to-white border border-[#F5D5CE]">
            <h3 className="font-serif font-bold text-stone-900 text-xl mb-4 text-center">
              {isHindi ? "ACCA योग्यता से खुलने वाले करियर अवसर" : "Where ACCA Credentials Take You"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careerTracks.map((c, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs">
                  <h4 className="font-semibold text-stone-900 text-sm mb-1">{c.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classroom & Teaching Experience */}
      <section className="py-14 sm:py-18 bg-[#FAF9F6] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#AA331D]">
                {isHindi ? "अकादमिक गुणवत्ता व शिक्षण" : "Academic Rigor & Pedagogy"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                {isHindi ? "अमित धरनिया ग्लोबल अकादमी के साथ अध्ययन" : "Learning with Amit Dharaniya Global Academy"}
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {isHindi
                  ? "फाउंडेशन के छात्रों के लिए कोचिंग अमित धरनिया ग्लोबल अकादमी (ADGA) द्वारा संचालित की जाती है। छात्रों को KPMG, BDO और TMF Group के 35+ वर्ष के अनुभव वाले वरिष्ठ वित्त शिक्षक अमित धरनिया से कॉर्पोरेट स्तर का प्रशिक्षण मिलता है।"
                  : "Coaching for foundation scholars is powered by Amit Dharaniya Global Academy (ADGA). Students receive corporate-standard instruction from Amit Dharaniya, a veteran finance educator with over 35 years of senior corporate training experience across KPMG, BDO, and TMF Group."}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D]" />
                  <span>
                    {isHindi
                      ? "लाइव इंटरएक्टिव ऑनलाइन क्लास और प्रत्यक्ष शंका निवारण"
                      : "Live interactive online classrooms with direct doubt resolution"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D]" />
                  <span>
                    {isHindi
                      ? "कभी भी, कहीं भी रिवीजन के लिए रिकॉर्डेड वीडियो आर्काइव"
                      : "Recorded video archives for revision anytime, anywhere"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#AA331D]" />
                  <span>
                    {isHindi
                      ? "नियमित मॉक परीक्षाएं और परीक्षा तकनीक का व्यक्तिगत विश्लेषण"
                      : "Regular mock examinations and personalized exam technique mentorship"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#F5D5CE] shadow-lg bg-white p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-t from-stone-100 to-white">
                  <ImageWithSkeleton
                    src="/images/mentor-amit-dharaniya.webp"
                    alt="Amit Dharaniya - Faculty Mentor"
                    fill
                    sizes="240px"
                    className="object-contain object-bottom"
                    containerClassName="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student FAQs */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#AA331D]" />
              {isHindi ? "छात्रों के सामान्य प्रश्न" : "Common Student Questions"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {isHindi ? "विद्यार्थी शंकाएं एवं स्पष्टीकरण" : "Student Queries & Clarifications"}
            </h2>
          </div>

          <div className="space-y-4">
            {studentFAQs.map((faq, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200">
                <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-[#AA331D] text-white text-center shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
              {isHindi ? "क्या आप अपनी ACCA तैयारी शुरू करने के लिए तैयार हैं?" : "Ready to Start Your ACCA Preparation?"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 max-w-lg mx-auto mb-5 leading-relaxed">
              {isHindi
                ? "यदि आप 90%+ अंक के मानदंड को पूरा करते हैं और आर्थिक रूप से कमजोर पृष्ठभूमि से आते हैं, तो आज ही आवेदन करें।"
                : "If you meet the 90%+ merit criteria and come from a modest background, submit your details today."}
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#AA331D] font-bold text-xs sm:text-sm hover:bg-stone-100 transition-colors shadow-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{isHindi ? "छात्र आवेदन फॉर्म भरें" : "Complete Student Application Form"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
