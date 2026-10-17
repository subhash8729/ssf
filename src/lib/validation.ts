export interface FileAttachmentData {
  name: string;
  size: number;
  type: string;
  dataUrl?: string; // base64 data url for preview and submission
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentClass: string;
  institution: string;
  marksheet10th?: FileAttachmentData | null;
  marksheet12th?: FileAttachmentData | null;
  reasonForSupport: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

export function validateFileAttachment(
  file?: FileAttachmentData | null,
  lang: "en" | "hi" = "en"
): string | null {
  if (!file) return null;
  const isHi = lang === "hi";

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return isHi
      ? "फ़ाइल का आकार 5MB से अधिक नहीं होना चाहिए।"
      : "File size must not exceed 5MB.";
  }

  const isValidType =
    ALLOWED_FILE_TYPES.includes(file.type) ||
    file.name.toLowerCase().endsWith(".pdf") ||
    file.name.toLowerCase().endsWith(".jpg") ||
    file.name.toLowerCase().endsWith(".jpeg") ||
    file.name.toLowerCase().endsWith(".png") ||
    file.name.toLowerCase().endsWith(".webp");

  if (!isValidType) {
    return isHi
      ? "केवल PDF, JPG, PNG या WEBP फाइलें ही मान्य हैं।"
      : "Only PDF, JPG, PNG, or WEBP files are allowed.";
  }

  return null;
}

export function sanitizeInput(str: string): string {
  if (!str) return "";
  return str
    .replace(/[<>]/g, "") // basic html stripping
    .trim()
    .slice(0, 2000); // sensible max length
}

export function validateApplicationForm(
  data: Partial<ApplicationFormData>,
  lang: "en" | "hi" = "en"
): ValidationResult {
  const errors: Record<string, string> = {};
  const isHi = lang === "hi";

  // Full Name
  const fullName = sanitizeInput(data.fullName || "");
  if (!fullName) {
    errors.fullName = isHi ? "पूरा नाम दर्ज करना अनिवार्य है।" : "Full name is required.";
  } else if (fullName.length < 2 || fullName.length > 80) {
    errors.fullName = isHi
      ? "पूरा नाम 2 से 80 अक्षरों के बीच होना चाहिए।"
      : "Full name must be between 2 and 80 characters.";
  }

  // Email
  const email = (data.email || "").trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = isHi ? "ईमेल पता दर्ज करना अनिवार्य है।" : "Email address is required.";
  } else if (!emailRegex.test(email) || email.length > 100) {
    errors.email = isHi
      ? "कृपया एक मान्य ईमेल पता दर्ज करें।"
      : "Please enter a valid email address.";
  }

  // Phone
  const phone = (data.phone || "").trim().replace(/[\s-]/g, "");
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[0-9]{6,12}$/;
  if (!phone) {
    errors.phone = isHi ? "फोन नंबर दर्ज करना अनिवार्य है।" : "Phone number is required.";
  } else if (!phoneRegex.test(phone)) {
    errors.phone = isHi
      ? "कृपया एक मान्य फोन नंबर दर्ज करें (10-14 अंक)।"
      : "Please enter a valid phone number (10-14 digits).";
  }

  // City
  const city = sanitizeInput(data.city || "");
  if (!city) {
    errors.city = isHi ? "शहर / कस्बा दर्ज करना अनिवार्य है।" : "City / Town is required.";
  } else if (city.length < 2 || city.length > 60) {
    errors.city = isHi
      ? "शहर का नाम 2 से 60 अक्षरों के बीच होना चाहिए।"
      : "City must be between 2 and 60 characters.";
  }

  // Current Class
  const currentClass = sanitizeInput(data.currentClass || "");
  if (!currentClass) {
    errors.currentClass = isHi
      ? "कृपया अपनी वर्तमान कक्षा या शैक्षिक स्तर चुनें।"
      : "Please select or enter your current educational status.";
  }

  // Institution / School
  const institution = sanitizeInput(data.institution || "");
  if (!institution) {
    errors.institution = isHi
      ? "स्कूल / कॉलेज का नाम दर्ज करना अनिवार्य है।"
      : "School / College name is required.";
  } else if (institution.length < 2 || institution.length > 120) {
    errors.institution = isHi
      ? "संस्थान का नाम 2 से 120 अक्षरों के बीच होना चाहिए।"
      : "School/College name must be between 2 and 120 characters.";
  }

  // 10th Marksheet (Required)
  if (!data.marksheet10th) {
    errors.marksheet10th = isHi
      ? "कृपया कक्षा 10वीं की अंकतालिका (मार्कशीट) अपलोड करें।"
      : "Please upload your Class 10th marksheet (Image or PDF).";
  } else {
    const fileErr = validateFileAttachment(data.marksheet10th, lang);
    if (fileErr) errors.marksheet10th = fileErr;
  }

  // 12th Marksheet (Optional if Class 10/11, validated if provided)
  if (data.marksheet12th) {
    const fileErr = validateFileAttachment(data.marksheet12th, lang);
    if (fileErr) errors.marksheet12th = fileErr;
  }

  // Reason for Support
  const reason = sanitizeInput(data.reasonForSupport || "");
  if (!reason) {
    errors.reasonForSupport = isHi
      ? "कृपया वित्तीय सहायता की आवश्यकता का विवरण दें।"
      : "Please explain why you need financial assistance.";
  } else if (reason.length < 20) {
    errors.reasonForSupport = isHi
      ? "कृपया कम से कम 20 अक्षरों में संक्षिप्त विवरण प्रदान करें।"
      : "Please provide at least a brief explanation (minimum 20 characters).";
  }

  // Consent
  if (!data.consent) {
    errors.consent = isHi
      ? "आपको पुष्टि करनी होगी कि प्रदान किया गया विवरण सत्य और सटीक है।"
      : "You must confirm that the details provided are accurate and true.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
