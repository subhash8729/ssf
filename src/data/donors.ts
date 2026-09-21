export interface Donor {
  id: string;
  name: string;
  category?: string;
  badge?: string;
  location?: string;
  amountDisplay?: string; // Optional display amount if provided by foundation
  isTopDonor?: boolean;
  citation?: string;
}

/**
 * ============================================================================
 * PLACEHOLDER DONOR DATA (Clearly marked for replacement)
 * ============================================================================
 * The actual donor names and details are not yet provided.
 * You can easily update the array below with confirmed donor names,
 * voluntary contributions, or recognitions. No database required.
 */
export const topDonors: Donor[] = [
  {
    id: "top-1",
    name: "Top Supporter 1",
    badge: "Champion of Education",
    category: "Student Education Patron",
    location: "India",
    citation: "Committed to sponsoring ACCA exam fees for worthy students from underserved communities.",
    isTopDonor: true,
  },
  {
    id: "top-2",
    name: "Top Supporter 2",
    badge: "Academic Benefactor",
    category: "Study Resources Benefactor",
    location: "India",
    citation: "Supporting essential ACCA study books and preparatory materials for high-achieving scholars.",
    isTopDonor: true,
  },
  {
    id: "top-3",
    name: "Top Supporter 3",
    badge: "Foundation Pillar",
    category: "Student Assistance Sponsor",
    location: "India",
    citation: "Dedicated to assisting young talents in overcoming professional certification barriers.",
    isTopDonor: true,
  },
];

export const allDonors: Donor[] = [
  ...topDonors,
  {
    id: "donor-4",
    name: "Supporter 4",
    category: "Education Well-Wisher",
    location: "Dehradun",
    citation: "Contributed towards student learning enablement.",
  },
  {
    id: "donor-5",
    name: "Supporter 5",
    category: "Professional Mentor & Friend",
    location: "Delhi NCR",
    citation: "Supporting young aspirants pursuing chartered accountancy.",
  },
  {
    id: "donor-6",
    name: "Supporter 6",
    category: "Education Well-Wisher",
    location: "Mumbai",
    citation: "Encouraging equal educational opportunity for all deserving minds.",
  },
  {
    id: "donor-7",
    name: "Supporter 7",
    category: "Alumni & Friend",
    location: "Bengaluru",
    citation: "Empowering next-generation accounting leaders.",
  },
  {
    id: "donor-8",
    name: "Supporter 8",
    category: "Education Well-Wisher",
    location: "Kolkata",
    citation: "Helping deserving candidates bridge educational cost hurdles.",
  },
];
