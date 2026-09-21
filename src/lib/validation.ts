export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentClass: string;
  institution: string;
  englishMarks: string;
  mathsMarks: string;
  reasonForSupport: string;
  message?: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function sanitizeInput(str: string): string {
  if (!str) return "";
  return str
    .replace(/[<>]/g, "") // basic html stripping
    .trim()
    .slice(0, 2000); // sensible max length
}

export function validateApplicationForm(data: Partial<ApplicationFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Full Name
  const fullName = sanitizeInput(data.fullName || "");
  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2 || fullName.length > 80) {
    errors.fullName = "Full name must be between 2 and 80 characters.";
  }

  // Email
  const email = (data.email || "").trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(email) || email.length > 100) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone
  const phone = (data.phone || "").trim().replace(/[\s-]/g, "");
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[0-9]{6,12}$/;
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(phone)) {
    errors.phone = "Please enter a valid phone number (10-14 digits).";
  }

  // City
  const city = sanitizeInput(data.city || "");
  if (!city) {
    errors.city = "City / Town is required.";
  } else if (city.length < 2 || city.length > 60) {
    errors.city = "City must be between 2 and 60 characters.";
  }

  // Current Class
  const currentClass = sanitizeInput(data.currentClass || "");
  if (!currentClass) {
    errors.currentClass = "Please select or enter your current educational status.";
  }

  // Institution / School
  const institution = sanitizeInput(data.institution || "");
  if (!institution) {
    errors.institution = "School / College name is required.";
  } else if (institution.length < 2 || institution.length > 120) {
    errors.institution = "School/College name must be between 2 and 120 characters.";
  }

  // English Marks
  const englishMarks = (data.englishMarks || "").trim();
  const engNum = parseFloat(englishMarks);
  if (!englishMarks) {
    errors.englishMarks = "English marks/percentage is required.";
  } else if (isNaN(engNum) || engNum < 0 || engNum > 100) {
    errors.englishMarks = "Enter a valid percentage/score between 0 and 100.";
  }

  // Maths / Accounts Marks
  const mathsMarks = (data.mathsMarks || "").trim();
  const mathNum = parseFloat(mathsMarks);
  if (!mathsMarks) {
    errors.mathsMarks = "Maths/Accounts marks/percentage is required.";
  } else if (isNaN(mathNum) || mathNum < 0 || mathNum > 100) {
    errors.mathsMarks = "Enter a valid percentage/score between 0 and 100.";
  }

  // Reason for Support
  const reason = sanitizeInput(data.reasonForSupport || "");
  if (!reason) {
    errors.reasonForSupport = "Please explain why you need financial assistance.";
  } else if (reason.length < 20) {
    errors.reasonForSupport = "Please provide at least a brief explanation (minimum 20 characters).";
  }

  // Consent
  if (!data.consent) {
    errors.consent = "You must confirm that the details provided are accurate and true.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
