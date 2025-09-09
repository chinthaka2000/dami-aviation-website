/**
 * Other Services Data for DAMI Aviation
 * Additional services beyond main training programs
 */

export interface OtherService {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  currency: string;
  icon: string;
  category:
  | "exam-prep"
  | "career-services"
  | "consultation"
  | "documents"
  | "packages";
  whatsappMessage: string;
  popular?: boolean;
}

export const otherServices: OtherService[] = [
  {
    id: "cv-800",
    title: "Professional CV Creation Service (Colour Coded)",
    description:
      "Visually striking, colour-coded CV tailored for aviation industry roles, highlighting objectives, skills, and interests.",
    features: [
      "Colour-coded sections (Objectives, Skills, Interests)",
      "Aviation industry-optimized format",
      "Professional design & ATS-friendly keywords",
      "Multiple formats (PDF, Word)",
      "Cover letter template included",
      "2 rounds of revisions",
      "48-hour delivery",
      "Reviewed by aviation industry experts",
    ],
    price: 800,
    currency: "Rs",
    icon: "📄",
    category: "career-services",
    whatsappMessage:
      "Hi! I'm interested in a professionally designed, colour-coded CV for aviation positions (Rs. 800). Please assist me.",
  },
  {
    id: "cover-300",
    title: "Custom Cover Letter Writing (Colour Themed)",
    description:
      "Personalized, professionally written cover letter with matching colour themes, highlighting your objectives, skills, and interests.",
    features: [
      "Colour-coded design (Objectives, Skills, Interests)",
      "Tailored for aviation job applications",
      "Professional structure & impact",
      "ATS-friendly optimization",
      "Editable Word & PDF formats",
    ],
    price: 300,
    currency: "Rs",
    icon: "📝",
    category: "career-services",
    whatsappMessage:
      "Hi! I'm interested in a custom aviation cover letter (Rs. 300). Please provide more details.",
  },
  {
    id: "cv-cover-bundle",
    title: "CV + Cover Letter Bundle",
    description:
      "Get both a professional CV and matching cover letter at a discounted price.",
    features: [
      "Professional CV (colour-coded)",
      "Custom cover letter (matching design)",
      "Objectives, Skills, Interests highlighted",
      "ATS-optimized keywords",
      "Multiple file formats",
    ],
    price: 1000,
    currency: "Rs",
    icon: "📑",
    category: "career-services",
    whatsappMessage:
      "Hi! I'd like to order the CV + Cover Letter bundle (Rs. 1000). Please provide more details.",
    popular: true,
  },
  {
    id: "interview-ready-pack",
    title: "Interview Ready Pack",
    description:
      "Comprehensive preparation pack to excel in aviation job interviews.",
    features: [
      "100+ interview questions",
      "15 main questions with 3 examples each",
      "Audio recordings for examples",
      "30+ special PDFs for interview prep",
      "Grooming & makeup guidance",
      "Path development (education, vocational, career)",
      "25+ professional audio resources",
      "Zoom guidance (2 hours)",
    ],
    price: 6000,
    currency: "Rs",
    icon: "🎤",
    category: "packages",
    whatsappMessage:
      "Hi! I'm interested in the Interview Ready Pack (Rs. 6000). Please provide details.",
  },
  {
    id: "assessment-pack",
    title: "Special Assessment Pack",
    description:
      "Complete assessment preparation pack covering multiple aviation-related subjects.",
    features: [
      "General English",
      "General Maths",
      "General Aviation Knowledge",
      "Airline knowledge (SriLankan, Qatar, Emirates, etc.)",
      "General IQ",
      "Special airport exam preparation",
    ],
    price: 4000,
    currency: "Rs",
    icon: "📋",
    category: "exam-prep",
    whatsappMessage:
      "Hi! I'm interested in the Special Assessment Pack (Rs. 4000). Please provide details.",
  },
  {
    id: "english-pack",
    title: "English Proficiency Pack",
    description:
      "Specialized English training for aviation and airline job applications.",
    features: [
      "ICAO English proficiency standards",
      "Speaking & listening practice",
      "Aviation-specific vocabulary",
      "100+ spoken English PDFs",
      "Mock sessions & recordings",
      "Progress assessment",
    ],
    price: 3000,
    currency: "Rs",
    icon: "🗣️",
    category: "exam-prep",
    whatsappMessage:
      "Hi! I'm interested in the English Proficiency Pack (Rs. 3000). Please provide details.",
  },
  {
    id: "all-packages",
    title: "All 3 Packages",
    description:
      "Get Interview Ready Pack + Assessment Pack + English Pack together.",
    features: [
      "Interview Ready Pack",
      "Assessment Pack",
      "English Pack",
      "Full preparation for aviation jobs",
      "Discounted combo price",
    ],
    price: 10000,
    currency: "Rs",
    icon: "⭐",
    category: "packages",
    whatsappMessage:
      "Hi! I'd like to order the full package (Interview, Assessment, English) for Rs. 10,000. Please provide details.",
  },
  {
    id: "interview-assessment-combo",
    title: "Interview + Assessment Combo",
    description: "Bundle of Interview Ready Pack + Assessment Pack.",
    features: [
      "Full interview preparation",
      "Assessment subjects included",
      "Discounted price for combo",
    ],
    price: 8000,
    currency: "Rs",
    icon: "🎯",
    category: "packages",
    whatsappMessage:
      "Hi! I'd like to order the Interview Ready + Assessment Pack combo (Rs. 8000). Please provide details.",
  },
  {
    id: "airline-application-service",
    title: "Airline Application Service",
    description:
      "Apply directly to airline job vacancies with guided assistance.",
    features: [
      "Applications for major airlines",
      "Emirates – Rs. 500",
      "Qatar – Rs. 500",
      "SriLankan – Rs. 500",
      "Air Arabia – Rs. 500",
      "Etihad – Rs. 300",
      "Cabin crew & other positions",
      "Vacancy monitoring & updates",
    ],
    price: 500, // base price
    currency: "Rs",
    icon: "✈️",
    category: "documents",
    whatsappMessage:
      "Hi! I'd like help applying to airline vacancies. Please provide details.",
  },
  {
    id: "document-verification",
    title: "Document Verification & Guidance",
    description:
      "Assistance with aviation job application documents and verification.",
    features: [
      "Document checklist",
      "Cover letters preparation",
      "Certificates & credential verification",
      "Background color & size corrections",
      "Submission guidance",
      "Compliance checks",
    ],
    price: 1000,
    currency: "Rs",
    icon: "📂",
    category: "documents",
    whatsappMessage:
      "Hi! I need assistance with aviation document verification (Rs. 1000). Please provide more details.",
  },
  {
    id: "aviation-career-consultation",
    title: "Aviation Career Consultation",
    description:
      "Personalized 2-hour Zoom consultation covering interview preparation, grooming, and career path development.",
    features: [
      "2-hour Zoom session",
      "5 interview-ready questions",
      "Grooming and makeup readiness",
      "Path development",
      "Education path guidance",
      "Vocational path guidance"
    ],
    price: 5000,
    currency: "Rs",
    icon: "🎯",
    category: "consultation",
    whatsappMessage:
      "Hi! I'm interested in Aviation Career Consultation (Rs. 5000). Please provide details.",
  },
];

export const serviceCategories = [
  {
    id: "exam-prep",
    name: "Exam Preparation",
    description: "Comprehensive preparation packages for aviation exams",
    icon: "📚",
  },
  {
    id: "career-services",
    name: "Career Services",
    description: "Professional CV, cover letters, and job application support",
    icon: "💼",
  },
  {
    id: "consultation",
    name: "Consultation",
    description: "Expert guidance and personalized advice",
    icon: "🎯",
  },
  {
    id: "documents",
    name: "Documentation",
    description: "Document preparation, verification, and airline applications",
    icon: "📋",
  },
  {
    id: "packages",
    name: "Packages & Bundles",
    description: "Special bundled training and preparation packs",
    icon: "📦",
  },
];

// 💳 Payment Info
export const paymentDetails = {
  accountNumber: "1195 5212 2167",
  accountName: "P.L.D. Isuru Lakshan",
  bank: "Sampath Bank - Nawalapitiya",
  note: "Please send payment slip after transaction 😊",
};
