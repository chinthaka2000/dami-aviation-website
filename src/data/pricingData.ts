import { PricingTier } from '../types/course';

/**
 * Aviation Cabin Crew Training Course Pricing Data
 * Based on international aviation standards and industry requirements
 */
export const aviationCoursePricing: PricingTier[] = [
  {
    name: 'Aviation Cabin Crew Training',
    registrationFee: 1000,
    totalFee: 50000,
    currency: 'Rs',
    highlighted: true,
    features: [
      'International Certification & Academic Transcript',
      '3-Month Comprehensive Training Program',
      'Theoretical & Practical Training Modules',
      'International Grooming Standards Training',
      'Safety & Emergency Procedures (SEP Training)',
      'Customer Service Excellence Training',
      'Interview Skills & Career Guidance',
      'Airport Familiarization Program',
      'Air Traffic Control Familiarization',
      'Meal Service & Catering Training',
      'Professional Development Sessions',
      'Industry Expert Instructors',
      'Job Placement Assistance',
      'Lifetime Alumni Network Access'
    ]
  }
];

/**
 * Payment Plan Options
 */
export const paymentPlans = [
  {
    name: 'Full Payment',
    description: 'Pay the complete course fee upfront',
    discount: 5,
    installments: 1
  },
  {
    name: 'Two Installments',
    description: 'Split payment into 2 equal parts',
    discount: 0,
    installments: 2
  },
  {
    name: 'Monthly Plan',
    description: 'Pay in 3 monthly installments',
    discount: 0,
    installments: 3
  }
];

/**
 * Fee Breakdown Structure
 */
export const feeBreakdown = {
  registrationFee: 1000,
  tuitionFee: 40000,
  materialsFee: 5000,
  certificationFee: 3000,
  practicalTrainingFee: 2000,
  total: 50000,
  currency: 'Rs'
};

/**
 * Currency formatting utility
 */
export const formatCurrency = (amount: number, currency: string = 'Rs'): string => {
  return `${currency} ${amount.toLocaleString()}`;
};

/**
 * Calculate installment amount
 */
export const calculateInstallment = (
  totalAmount: number,
  installments: number,
  discountPercent: number = 0
): number => {
  const discountedAmount = totalAmount - (totalAmount * discountPercent / 100);
  return Math.ceil(discountedAmount / installments);
};