"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { CheckCircle, AlertCircle, Loader2, Send, GraduationCap, ShieldCheck } from "lucide-react";
import { validateApplicationForm, ApplicationFormData } from "@/lib/validation";

const initialFormData: ApplicationFormData = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  currentClass: "Class 12th (Appearing / Passed)",
  institution: "",
  englishMarks: "",
  mathsMarks: "",
  reasonForSupport: "",
  message: "",
  consent: false,
};

export default function ApplicationForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // 1. Client-side validation
    const validation = validateApplicationForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      // Scroll to the first error
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
        setServerError(data.message || "Failed to process application. Please check your entries.");
      }
    } catch {
      setServerError("Network error. Please verify your connection and try submitting again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Apply for Support"
          title="Take the First Step"
          subtitle="Submit your application for free ACCA tuition under the Shri Sushil Sharda Foundation program. Every worthy submission is reviewed thoroughly."
        />

        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-500 shadow-xl text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3">
                Application Successfully Received
              </h3>
              <p className="text-base sm:text-lg text-stone-700 max-w-lg mx-auto leading-relaxed mb-6">
                Thank you. Your application has been received. Our team will review your information and contact you.
              </p>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-stone-600 max-w-md mx-auto mb-8">
                <p>
                  Please ensure your contact email and phone number are reachable. Selected candidates will be notified regarding batch onboarding and orientation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-stone-200/90 shadow-xl">
              {/* Form Advisory Header */}
              <div className="pb-6 mb-6 border-b border-stone-100 flex items-start gap-3 bg-[#FDF2F0]/60 p-4 rounded-xl border border-[#F5D5CE]">
                <ShieldCheck className="w-5 h-5 text-[#AA331D] shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 leading-relaxed">
                  <strong className="text-stone-900 font-semibold">Eligibility Reminder: </strong>
                  Intended for X / XII students scoring 90+ in English and Maths/Accounts who require financial assistance. Tuition is 100% free for selected candidates.
                </div>
              </div>

              {serverError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                    Full Name <span className="text-[#AA331D]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your complete name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                      errors.fullName ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                    }`}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                      Email Address <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.email ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                      Phone Number <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.phone ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                {/* City & Current Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="city" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                      City / Town <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Dehradun, Delhi, Jaipur"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.city ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
                  </div>

                  <div>
                    <label htmlFor="currentClass" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                      Current Class / Level <span className="text-[#AA331D]">*</span>
                    </label>
                    <select
                      id="currentClass"
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all"
                    >
                      <option value="Class 10th (Passed)">Class 10th (Passed)</option>
                      <option value="Class 11th (Current)">Class 11th (Current)</option>
                      <option value="Class 12th (Appearing / Passed)">Class 12th (Appearing / Passed)</option>
                      <option value="Undergraduate (1st / 2nd Year)">Undergraduate (1st / 2nd Year)</option>
                      <option value="Other">Other Equivalent Qualification</option>
                    </select>
                  </div>
                </div>

                {/* School / College Name */}
                <div>
                  <label htmlFor="institution" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                    School / College Name <span className="text-[#AA331D]">*</span>
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Enter name of your school or college"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                      errors.institution ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                    }`}
                  />
                  {errors.institution && <p className="mt-1 text-xs text-red-600">{errors.institution}</p>}
                </div>

                {/* Academic Scores: English Marks & Maths/Accounts Marks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 bg-[#FAF9F6] rounded-2xl border border-stone-200/80">
                  <div>
                    <label htmlFor="englishMarks" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                      English Marks / % <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="englishMarks"
                      name="englishMarks"
                      type="number"
                      min="0"
                      max="100"
                      required
                      value={formData.englishMarks}
                      onChange={handleChange}
                      placeholder="e.g. 92"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.englishMarks ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    <span className="text-[11px] text-stone-500 mt-1 block">X or XII Board score (90+ preferred)</span>
                    {errors.englishMarks && <p className="mt-1 text-xs text-red-600">{errors.englishMarks}</p>}
                  </div>

                  <div>
                    <label htmlFor="mathsMarks" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                      Maths / Accounts Marks / % <span className="text-[#AA331D]">*</span>
                    </label>
                    <input
                      id="mathsMarks"
                      name="mathsMarks"
                      type="number"
                      min="0"
                      max="100"
                      required
                      value={formData.mathsMarks}
                      onChange={handleChange}
                      placeholder="e.g. 95"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                        errors.mathsMarks ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                      }`}
                    />
                    <span className="text-[11px] text-stone-500 mt-1 block">Mathematics or Accountancy score</span>
                    {errors.mathsMarks && <p className="mt-1 text-xs text-red-600">{errors.mathsMarks}</p>}
                  </div>
                </div>

                {/* Why do you need financial support? */}
                <div>
                  <label htmlFor="reasonForSupport" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                    Why do you need financial support? <span className="text-[#AA331D]">*</span>
                  </label>
                  <textarea
                    id="reasonForSupport"
                    name="reasonForSupport"
                    rows={4}
                    required
                    value={formData.reasonForSupport}
                    onChange={handleChange}
                    placeholder="Briefly describe your household or economic circumstances and how free ACCA tuition will enable you to achieve your education goals..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all ${
                      errors.reasonForSupport ? "border-red-500 bg-red-50/20" : "border-stone-300 bg-white"
                    }`}
                  />
                  {errors.reasonForSupport && <p className="mt-1 text-xs text-red-600">{errors.reasonForSupport}</p>}
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase font-bold tracking-wider text-stone-700 mb-1.5">
                    Additional Message / Academic Goals <span className="text-stone-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any additional information regarding your academic aspirations or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#AA331D] transition-all"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded-sm text-[#AA331D] border-stone-300 focus:ring-[#AA331D]"
                    />
                    <span className="text-xs text-stone-600 leading-relaxed">
                      I declare that the academic scores and information provided above are accurate and true. I understand that the foundation provides free tuition classes to deserving candidates and does not charge any tuition fee. <span className="text-[#AA331D]">*</span>
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#AA331D] hover:bg-[#8F2B18] text-white font-semibold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Validating & Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <GraduationCap className="w-5 h-5" />
                        <span>Submit Application</span>
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
