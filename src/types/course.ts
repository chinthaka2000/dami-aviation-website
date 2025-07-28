import { ReactNode } from 'react';

/**
 * Course Information Model
 * Represents the complete structure of a course offering
 */
export interface CourseInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  qualification: string;
  registrationFee: number;
  totalFee: number;
  currency: string;
  modules: CourseModule[];
  requirements: EntryRequirement[];
  jobOpportunities: JobOpportunity[];
  features: string[];
}

/**
 * Course Module Model
 * Represents a specific module within a course
 */
export interface CourseModule {
  id: string;
  title: string;
  type: 'theoretical' | 'practical';
  description: string;
  topics: string[];
  duration?: string;
  icon: React.ComponentType<any> | ReactNode;
}

/**
 * Entry Requirement Model
 * Represents eligibility criteria for course enrollment
 */
export interface EntryRequirement {
  category: 'age' | 'academic' | 'physical' | 'communication' | 'legal' | 'training' | 'other';
  title: string;
  description: string;
  criteria: string[];
  icon: string;
}

/**
 * Job Opportunity Model
 * Represents career prospects after course completion
 */
export interface JobOpportunity {
  title: string;
  description: string;
  employers: string[];
  salaryRange?: string;
  icon: string;
}

/**
 * Pricing Tier Model
 * Represents course pricing information
 */
export interface PricingTier {
  name: string;
  registrationFee: number;
  totalFee: number;
  currency: string;
  features: string[];
  highlighted?: boolean;
}

/**
 * Testimonial Model
 * Represents student feedback and testimonials
 */
export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  role?: string;
  company?: string;
  rating: number;
  review: string;
  courseCompleted: string;
  graduationYear: number;
  location?: string;
}

/**
 * Registration Data Model
 * Represents the complete registration information for a student
 */
export interface RegistrationData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: 'male' | 'female';
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  qualifications: {
    education: string;
    gceResults: string;
    englishProficiency: string;
  };
  physicalInfo: {
    height: number;
    weight: number;
    colorVision: boolean;
  };
  documents: File[];
  paymentInfo: {
    registrationFeePaid: boolean;
    paymentMethod: string;
    transactionId?: string;
  };
}

/**
 * Form Validation Error Model
 * Represents validation errors for form fields
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Form Field Model
 * Represents a form field with validation rules
 */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'file';
  required: boolean;
  validation?: {
    pattern?: RegExp;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    customValidator?: (value: any, formData?: any) => boolean;
  };
  options?: Array<{
    label: string;
    value: string | number | boolean;
  }>;
  placeholder?: string;
  errorMessage?: string;
}

/**
 * Gallery Image Model
 * Represents an image in the gallery with support for Google Drive/Photos
 */
export interface GalleryImage {
  src: string;
  title: string;
  description: string;
  category: string;
  type: 'image' | 'video';
  googleLink?: string; // Optional Google Drive or Google Photos link
}

/**
 * Gallery Category Model
 * Represents a category in the gallery
 */
export interface GalleryCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  coverImage: string;
  googleCoverLink?: string; // Optional Google Drive or Google Photos link for cover image
}