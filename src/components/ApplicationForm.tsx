"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import MarksheetUploader from "./MarksheetUploader";
import { CheckCircle, AlertCircle, Loader2, Send, GraduationCap, ShieldCheck } from "lucide-react";
import { validateApplicationForm, ApplicationFormData, FileAttachmentData } from "@/lib/validation";
import { useLanguage } from "@/context/LanguageContext";

const initialFormData: ApplicationFormData = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  currentClass: "Class 12th (Appearing / Passed)",
  institution: "",
  marksheet10th: null,
  marksheet12th: null,
  reasonForSupport: "",
  consent: false,
};

export default function ApplicationForm() {
  const { t, language } = useLanguage();
  const isHindi = language === "hi";
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for that field as user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handle10thFileSelect = (file: FileAttachmentData | null) => {
    setFormData((prev) => ({ ...prev, marksheet10th: file }));
    if (errors.marksheet10th) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.marksheet10th;
        return updated;
      });
    }
  };

  const handle12thFileSelect = (file: FileAttachmentData | null) => {
    setFormData((prev) => ({ ...prev, marksheet12th: file }));
    if (errors.marksheet12th) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.marksheet12th;
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // 1. Client-side validation
    const validation = validateApplicationForm(formData, language);
    if (!validation.isValid) {
      setErrors(validation.errors);
      // Scroll to the first error element smoothly
      const firstKey = Object.keys(validation.errors)[0];
      const element = document.getElementById(firstKey);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData(initialFormData);
        setErrors({});
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(
          data.message ||
            (isHindi
              ? "आवेदन संसाधित करने में विफल। कृपया अपनी प्रविष्टियों की जांच करें।"
              : "Failed to process application. Please check your entries.")
        );
      }
    } catch {
      setServerError(
        isHindi
          ? "नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।"
          : "Network error. Please verify your connection and try submitting again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-8 sm:py-14 bg-[#FAF9F6] border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={isHindi ? "निःशुल्क शिक्षा हेतु आवेदन" : "Apply for Support"}
          title={isHindi ? "सफलता की ओर पहला कदम बढ़ाएं" : "Take the First Step"}
          subtitle={isHindi
            ? "श्री सुशील शारदा फाउंडेशन के अंतर्गत 100% निःशुल्क ACCA ट्यूशन के लिए अपना आवेदन जमा करें। प्रत्येक योग्य आवेदन की निष्पक्ष समीक्षा की जाती है।"
            : "Submit your application for free ACCA tuition under the Shri Sushil Sharda Foundation program. Every worthy submission is reviewed thoroughly."}
        />

        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-500 shadow-xl text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
                {t.apply.successHeading}
              </h3>
              <p className="text-sm sm:text-base text-stone-700 max-w-lg mx-auto leading-relaxed mb-5">
                {t.apply.successText}
              </p>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 text-xs text-stone-600 max-w-md mx-auto mb-6">
                <p>
                  {isHindi
                    ? "कृपया सुनिश्चित करें कि आपका ईमेल और फोन नंबर सक्रिय है। चयनित विद्यार्थियों को बैच प्रारंभ होने की सूचना दी जाएगी।"
                    : "Please ensure your contact email and phone number are reachable. Selected candidates will be notified regarding batch onboarding and orientation."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                {isHindi ? "एक और आवेदन जमा करें" : "Submit Another Application"}
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-stone-200/90 shadow-lg">
              {/* Form Advisory Header */}
              <div className="pb-4 mb-4 border-b border-stone-100 flex items-start gap-2.5 bg-[#FDF2F0]/60 p-3.5 rounded-xl border border-[#F5D5CE]">
                <ShieldCheck className="w-4 h-4 text-[#AA331D] shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 leading-relaxed">
                  <strong className="text-stone-900 font-semibold">{isHindi ? "पात्रता स्मरण: " : "Eligibility Reminder: "}</strong>
                  {isHindi
                    ? "कक्षा 10वीं / 12वीं में अंग्रेजी एवं गणित/अकाउंट्स में 90%+ अंक वाले जरूरतमंद विद्यार्थियों के लिए। चयनित छात्रों हेतु 100% निःशुल्क ट्यूशन।"
                    : "Intended for X / XII students scoring 90+ in English and Maths/Accounts who require financial assistance. Tuition is 100% free for selected candidates."}
                </div>
              </div>

              {serverError && (
                <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-800 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1">
                    {t.apply.fullName} <span className="text-[#AA331D]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={isHindi ? "अपना पूरा नाम दर्ज करें" : "Enter your complete name"}
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                      errors.fullName ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                    }`}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1">
                      {t.apply.email} <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@example.com"
                      className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.email ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1">
                      {t.apply.phone} <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.phone ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                {/* City & Current Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="city" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1">
                      {t.apply.city} <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder={isHindi ? "उदा. देहरादून, दिल्ली, जयपुर" : "e.g. Dehradun, Delhi, Jaipur"}
                      className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.city ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
                  </div>

                  <div>
                    <label htmlFor="currentClass" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1">
                      {isHindi ? "वर्तमान कक्षा / स्तर" : "Current Class / Level"} <span className="text-[#AA331D]">*</span>
                    </label>
                    <select
                      id="currentClass"
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all"
                    >
                      <option value="Class 10th (Passed)">{isHindi ? "कक्षा 10वीं (उत्तीर्ण)" : "Class 10th (Passed)"}</option>
                      <option value="Class 11th (Current)">{isHindi ? "कक्षा 11वीं (अध्ययनरत)" : "Class 11th (Current)"}</option>
                      <option value="Class 12th (Appearing / Passed)">{isHindi ? "कक्षा 12वीं (प्रवेशी / उत्तीर्ण)" : "Class 12th (Appearing / Passed)"}</option>
                      <option value="Undergraduate (1st / 2nd Year)">{isHindi ? "स्नातक (प्रथम / द्वितीय वर्ष)" : "Undergraduate (1st / 2nd Year)"}</option>
                      <option value="Other">{isHindi ? "अन्य समकक्ष योग्यता" : "Other Equivalent Qualification"}</option>
                    </select>
                  </div>
                </div>

                {/* School / College Name */}
                <div>
                  <label htmlFor="institution" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1">
                    {isHindi ? "स्कूल / कॉलेज का नाम" : "School / College Name"} <span className="text-[#AA331D]">*</span>
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder={isHindi ? "अपने विद्यालय या कॉलेज का नाम लिखें" : "Enter name of your school or college"}
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                      errors.institution ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                    }`}
                  />
                  {errors.institution && <p className="mt-1 text-xs text-red-600">{errors.institution}</p>}
                </div>

                {/* Marksheets Upload Section: Replaces student marks fields */}
                <div className="pt-2 pb-1 space-y-3 sm:space-y-3.5">
                  <div className="border-t border-stone-200/80 pt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                        {isHindi ? "अंकतालिका (मार्कशीट) अपलोड" : "Academic Marksheets Upload"}
                      </span>
                      <span className="text-[11px] text-stone-500">
                        {isHindi ? "इमेज या पीडीएफ प्रारूप" : "Image or PDF formats"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* 10th Marksheet */}
                      <div>
                        <MarksheetUploader
                          id="marksheet10th"
                          label={isHindi ? "10वीं की अंकतालिका (मार्कशीट)" : "10th Marksheet"}
                          required={true}
                          file={formData.marksheet10th}
                          error={errors.marksheet10th}
                          onFileSelect={handle10thFileSelect}
                          onErrorChange={(err) => {
                            setErrors((prev) => {
                              const updated = { ...prev };
                              if (err) updated.marksheet10th = err;
                              else delete updated.marksheet10th;
                              return updated;
                            });
                          }}
                          helperText={isHindi ? "कक्षा 10 बोर्ड अंकतालिका (PDF या फोटो)" : "Class 10 Board Marksheet (PDF or Image)"}
                        />
                      </div>

                      {/* 12th Marksheet */}
                      <div>
                        <MarksheetUploader
                          id="marksheet12th"
                          label={isHindi ? "12वीं की अंकतालिका (मार्कशीट)" : "12th Marksheet"}
                          required={false}
                          file={formData.marksheet12th}
                          error={errors.marksheet12th}
                          onFileSelect={handle12thFileSelect}
                          onErrorChange={(err) => {
                            setErrors((prev) => {
                              const updated = { ...prev };
                              if (err) updated.marksheet12th = err;
                              else delete updated.marksheet12th;
                              return updated;
                            });
                          }}
                          helperText={isHindi ? "कक्षा 12 मार्कशीट (यदि 10वीं/11वीं में हैं तो वैकल्पिक)" : "Class 12 Marksheet (Optional if Class 10/11)"}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why do you need financial support? */}
                <div>
                  <label htmlFor="reasonForSupport" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1">
                    {t.apply.financialNeedLabel} <span className="text-[#AA331D]">*</span>
                  </label>
                  <textarea
                    id="reasonForSupport"
                    name="reasonForSupport"
                    rows={3}
                    required
                    value={formData.reasonForSupport}
                    onChange={handleChange}
                    placeholder={isHindi
                      ? "संक्षेप में अपनी पारिवारिक या आर्थिक स्थिति का विवरण दें और बताएं कि मुफ़्त ACCA कोचिंग आपके लक्ष्य को कैसे पूरा करेगी..."
                      : "Briefly describe your household or economic circumstances and how free ACCA tuition will enable you to achieve your education goals..."}
                    className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                      errors.reasonForSupport ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                    }`}
                  />
                  {errors.reasonForSupport && <p className="mt-1 text-xs text-red-600">{errors.reasonForSupport}</p>}
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 rounded-sm text-[#AA331D] border-stone-300 focus:ring-[#AA331D] cursor-pointer"
                    />
                    <span className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                      {t.apply.termsConsent} <span className="text-[#AA331D]">*</span>
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t.apply.submitting}</span>
                      </>
                    ) : (
                      <>
                        <GraduationCap className="w-5 h-5" />
                        <span>{t.apply.submitButton}</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
