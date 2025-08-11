import {
  Calendar,
  GraduationCap,
  Activity,
  User,
  Eye,
  Ruler,
  Weight,
  UserCheck
} from 'lucide-react';
import { EntryRequirement } from '../types/course';

/**
 * Entry Requirements for Aviation Cabin Crew Training Course
 * Based on international aviation standards and industry requirements
 */
export const entryRequirements: EntryRequirement[] = [
  {
    category: 'age',
    title: 'Age Requirements',
    description: 'Age limits for enrollment in the aviation cabin crew training program.',
    icon: 'Calendar',
    criteria: [
      'Age between 16-27 years at the time of enrollment',
      'Age verification through valid government-issued identification',
      'Must maintain age eligibility throughout the course duration'
    ]
  },
  {
    category: 'academic',
    title: 'Educational Qualifications',
    description: 'Academic requirements and qualifications necessary for course enrollment.',
    icon: 'GraduationCap',
    criteria: [
      'Successful completion of GCE O/L with 6 passes in one sitting',
      'Minimum 3 credit passes',
      'English credit pass in any sitting',
      'Additional language skills are advantageous',
      'Academic transcripts and certificates must be verified'
    ]
  },
  {
    category: 'physical',
    title: 'Physical Requirements',
    description: 'Physical fitness and health standards required for aviation cabin crew positions.',
    icon: 'Activity',
    criteria: [
      'Female candidates: Minimum height 157.5cm or arm reach of 212cm (on tip toes)',
      'Male candidates: Minimum height 170.2cm or arm reach of 212cm (on tip toes)',
      'Weight proportionate to height, meeting BMI standards',
      'Good overall health with ability to pass medical examination',
      'Well-groomed and professional appearance',
      'No visible tattoos,Scars or piercings while in uniform'
    ]
  },
  {
    category: 'communication',
    title: 'Communication & Interpersonal Skills',
    description: 'Communication abilities and interpersonal skills required for cabin crew.',
    icon: 'UserCheck',
    criteria: [
      'Excellent verbal and written communication abilities',
      'Strong interpersonal skills with focus on customer service',
      'Ability to work effectively in multicultural team environment',
      'Friendly, positive attitude with customer-service orientation',
      'Adaptability and resilience for handling stress and emergencies'
    ]
  },
  {
    category: 'legal',
    title: 'Legal & Travel Eligibility',
    description: 'Legal requirements and travel documentation needed for international aviation.',
    icon: 'User',
    criteria: [
      'Valid passport but not mandatory',
      'Ability to obtain necessary visas for international travel',
      'Clear criminal record subject to thorough background checks',
      'Professional references may be required',
      'Previous customer service experience is an asset but not mandatory'
    ]
  },
  {
    category: 'training',
    title: 'Training Commitment',
    description: 'Commitment requirements for intensive aviation training program.',
    icon: 'GraduationCap',
    criteria: [
      'Willingness to undergo intensive training in safety procedures',
      'Commitment to first aid and emergency response training',
      'Dedication to inflight service and hospitality training',
      'Team player with collaborative mindset',
      'Flexibility for irregular hours and international travel'
    ]
  }
];

/**
 * Icon mapping for entry requirements
 */
export const requirementIcons = {
  Calendar,
  GraduationCap,
  Activity,
  User,
  Eye,
  Ruler,
  Weight,
  UserCheck
};

/**
 * Get requirements by category
 */
export const getRequirementsByCategory = (category: EntryRequirement['category']): EntryRequirement[] => {
  return entryRequirements.filter(req => req.category === category);
};

/**
 * Get requirement by category (single)
 */
export const getRequirementByCategory = (category: EntryRequirement['category']): EntryRequirement | undefined => {
  return entryRequirements.find(req => req.category === category);
};

/**
 * Get all entry requirements
 */
export const getAllEntryRequirements = (): EntryRequirement[] => {
  return entryRequirements;
};

/**
 * Requirement validation rules for interactive assessment
 */
export const requirementValidationRules = {
  age: {
    min: 16,
    max: 27,
    validator: (age: number) => age >= 18 && age <= 26
  },
  height: {
    female: {
      min: 157.5,
      validator: (height: number) => height >= 157.5
    },
    male: {
      min: 170.2,
      validator: (height: number) => height >= 170.2
    }
  },
  bmi: {
    min: 18.5,
    max: 24.9,
    validator: (bmi: number) => bmi >= 18.5 && bmi <= 24.9
  },
  academic: {
    olPasses: {
      min: 6,
      validator: (passes: number) => passes >= 6
    },
    olCredits: {
      min: 3,
      validator: (credits: number) => credits >= 3
    },
    englishCredit: {
      required: false,
      validator: (hasCredit: boolean) => hasCredit === true
    }
  }
};

/**
 * Calculate BMI
 */
export const calculateBMI = (weight: number, height: number): number => {
  // Height should be in meters, weight in kg
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

/**
 * Validate age requirement
 */
export const validateAge = (age: number): boolean => {
  return requirementValidationRules.age.validator(age);
};

/**
 * Validate height requirement
 */
export const validateHeight = (height: number, gender: 'male' | 'female'): boolean => {
  return requirementValidationRules.height[gender].validator(height);
};

/**
 * Validate BMI requirement
 */
export const validateBMI = (bmi: number): boolean => {
  return requirementValidationRules.bmi.validator(bmi);
};

/**
 * Get requirement status message
 */
export const getRequirementStatusMessage = (
  category: EntryRequirement['category'],
  value: any,
  additionalData?: any
): { status: 'pass' | 'fail' | 'pending'; message: string } => {
  switch (category) {
    case 'age':
      const ageValid = validateAge(value);
      return {
        status: ageValid ? 'pass' : 'fail',
        message: ageValid
          ? 'Age requirement met'
          : `Age must be between ${requirementValidationRules.age.min} and ${requirementValidationRules.age.max} years`
      };

    case 'physical':
      if (additionalData?.type === 'height') {
        const heightValid = validateHeight(value, additionalData.gender);
        const minHeight = requirementValidationRules.height[additionalData.gender].min;
        return {
          status: heightValid ? 'pass' : 'fail',
          message: heightValid
            ? 'Height requirement met'
            : `Minimum height required: ${minHeight}cm for ${additionalData.gender}s`
        };
      }
      if (additionalData?.type === 'bmi') {
        const bmiValid = validateBMI(value);
        return {
          status: bmiValid ? 'pass' : 'fail',
          message: bmiValid
            ? 'BMI within normal range'
            : `BMI must be between ${requirementValidationRules.bmi.min} and ${requirementValidationRules.bmi.max}`
        };
      }
      break;

    case 'academic':
      if (additionalData?.type === 'olPasses') {
        const passesValid = requirementValidationRules.academic.olPasses.validator(value);
        return {
          status: passesValid ? 'pass' : 'fail',
          message: passesValid
            ? 'Academic requirement met'
            : `Minimum ${requirementValidationRules.academic.olPasses.min} O/L passes required`
        };
      }
      if (additionalData?.type === 'englishCredit') {
        const englishValid = requirementValidationRules.academic.englishCredit.validator(value);
        return {
          status: englishValid ? 'pass' : 'fail',
          message: englishValid
            ? 'English credit requirement met'
            : 'English credit pass is mandatory'
        };
      }
      break;

    default:
      return {
        status: 'pending',
        message: 'Verification pending'
      };
  }

  return {
    status: 'pending',
    message: 'Verification pending'
  };
};