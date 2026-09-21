export interface DonationDetails {
  bankName: string;
  accountNumber: string;
  ifsc: string;
  accountName: string;
  branch?: string;
  note: string;
}

export interface MentorDetails {
  name: string;
  title: string;
  experience: string;
  background: string[];
  bio: string;
  vision: string;
}

export const foundationDetails = {
  name: "Shri Sushil Sharda Foundation",
  hindiName: "श्री सुशील शारदा फाउंडेशन",
  tagline: "Empowerment through Education",
  hindiTagline: "शिक्षा से सशक्तिकरण",
  establishedDate: "30th May 2025",
  headquarters: "Dehradun, Uttarakhand, India",
  organizationType: "Indian private limited company (Non-governmental & private organization operating in education)",
  associatedAcademy: "Amit Dharaniya Global Academy",
  academyUrl: "https://www.amitdharaniya.com/",

  introHeading: "Education Should Not Be Limited by Affordability",
  introParagraph1:
    "Shri Sushil Sharda Foundation is an Indian private limited company, established on 30th May 2025. It primarily operates in the field of education and is headquartered in Dehradun, Uttarakhand, India. The foundation functions as a non-governmental and private organization.",
  introParagraph2:
    "This institution is committed to promoting empowerment through education and contributing to social development and progress.",
  introParagraph3:
    "The primary objective of Shri Sushil Sharda Foundation is to assist underprivileged and marginalized communities in becoming globally recognized Chartered Accountants. The foundation strives to provide opportunities through education and empowerment, enabling individuals to achieve professional qualifications and succeed in the global chartered accountancy profession. Its mission is to bridge the gap among disadvantaged sections by offering quality education and essential resources.",

  offerStatement:
    "We offer free tuition classes for ACCA through live online, live recorded and pre-recorded classes and do not charge anything from the worthy student.",
  feeNotice:
    "Tuition is free. Students may still need support for ACCA examination fees, books and annual subscription fees charged by the ACCA body.",

  eligibilityCriteria: "X/XII students scoring 90+ in English and Maths/Accounts",
  eligibilityNote:
    "Applications are intended for deserving students who need financial support to pursue ACCA education. No fees are charged for foundation tuition.",
};

export const donationDetails: DonationDetails = {
  bankName: "State Bank of India",
  accountNumber: "44267165553",
  ifsc: "SBIN0014199",
  accountName: "Shri Sushil Sharda Foundation",
  note: "Please verify the banking details before making a donation.",
};

export const mentorDetails: MentorDetails = {
  name: "Amit Dharaniya",
  title: "Finance Educator, IFRS Corporate Trainer & Mentor",
  experience: "35+ Years of Industry & Mentorship Experience",
  background: ["KPMG", "TMF Group", "Axis Risk Consulting", "BDO India"],
  bio: "Amit Dharaniya is a distinguished finance educator, IFRS corporate trainer, and mentor with more than 35 years of professional experience across global accounting and advisory organizations including KPMG, TMF Group, Axis Risk Consulting, and BDO India.",
  vision:
    "The foundation builds on the vision of providing deserving students with access to quality professional education and the guidance needed to pursue global accountancy careers.",
};

export const whatWeOffer = [
  {
    title: "LIVE ONLINE",
    description: "Learn through instructor-led online classes with interactive doubt resolution.",
    icon: "Video",
  },
  {
    title: "LIVE RECORDED",
    description: "Access recorded classroom sessions for revision and flexible learning anytime.",
    icon: "PlaySquare",
  },
  {
    title: "PRE-RECORDED",
    description: "Study structured learning content at your own pace with modular lesson plans.",
    icon: "BookOpen",
  },
];

export const supportImpactAreas = [
  {
    title: "EXAM FEES",
    description: "Help deserving students appear for their professional ACCA examinations.",
    icon: "FileCheck",
  },
  {
    title: "BOOKS & STUDY MATERIAL",
    description: "Help students access the official learning resources required to prepare effectively.",
    icon: "BookMarked",
  },
  {
    title: "ANNUAL SUBSCRIPTION",
    description: "Help students manage annual subscription costs charged directly by the ACCA body.",
    icon: "CalendarCheck",
  },
];
