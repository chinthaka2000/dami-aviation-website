import { ValidationError, RegistrationData, FormField } from '../types/course';

/**
 * Validates a single form field based on its validation rules
 * @param field The form field definition
 * @param value The value to validate
 * @param formData Optional form data for context-aware validation
 * @returns ValidationError or null if valid
 */
export const validateField = (field: FormField, value: any, formData?: any): ValidationError | null => {
  // Check required fields
  if (field.required && (value === undefined || value === null || value === '')) {
    return {
      field: field.name,
      message: `${field.label} is required`
    };
  }

  // Skip further validation if field is empty and not required
  if (value === undefined || value === null || value === '') {
    return null;
  }

  const validation = field.validation;
  if (!validation) return null;

  // Check pattern validation
  if (validation.pattern && !validation.pattern.test(String(value))) {
    return {
      field: field.name,
      message: field.errorMessage || `${field.label} is not in a valid format`
    };
  }

  // Check min/max for numbers
  if (field.type === 'number') {
    const numValue = Number(value);
    if (validation.min !== undefined && numValue < validation.min) {
      return {
        field: field.name,
        message: `${field.label} must be at least ${validation.min}`
      };
    }
    if (validation.max !== undefined && numValue > validation.max) {
      return {
        field: field.name,
        message: `${field.label} must be at most ${validation.max}`
      };
    }
  }

  // Check min/max length for strings
  if (typeof value === 'string') {
    if (validation.minLength !== undefined && value.length < validation.minLength) {
      return {
        field: field.name,
        message: `${field.label} must be at least ${validation.minLength} characters`
      };
    }
    if (validation.maxLength !== undefined && value.length > validation.maxLength) {
      return {
        field: field.name,
        message: `${field.label} must be at most ${validation.maxLength} characters`
      };
    }
  }

  // Custom validator
  if (validation.customValidator && !validation.customValidator(value, formData)) {
    return {
      field: field.name,
      message: field.errorMessage || `${field.label} is invalid`
    };
  }

  return null;
};

/**
 * Validates a complete registration form
 * @param data The registration data to validate
 * @param fields The form field definitions
 * @returns Array of validation errors or empty array if valid
 */
export const validateRegistrationForm = (
  data: Partial<RegistrationData>,
  fields: FormField[]
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Flatten the nested structure for validation
  const flattenedData: Record<string, any> = {};

  // Personal info
  if (data.personalInfo) {
    Object.entries(data.personalInfo).forEach(([key, value]) => {
      flattenedData[`personalInfo.${key}`] = value;
    });
  }

  // Address
  if (data.address) {
    Object.entries(data.address).forEach(([key, value]) => {
      flattenedData[`address.${key}`] = value;
    });
  }

  // Qualifications
  if (data.qualifications) {
    Object.entries(data.qualifications).forEach(([key, value]) => {
      flattenedData[`qualifications.${key}`] = value;
    });
  }

  // Physical info
  if (data.physicalInfo) {
    Object.entries(data.physicalInfo).forEach(([key, value]) => {
      flattenedData[`physicalInfo.${key}`] = value;
    });
  }

  // Payment info
  if (data.paymentInfo) {
    Object.entries(data.paymentInfo).forEach(([key, value]) => {
      flattenedData[`paymentInfo.${key}`] = value;
    });
  }

  // Documents (special handling)
  if (data.documents) {
    flattenedData['documents'] = data.documents;
  }

  // Validate each field
  fields.forEach(field => {
    const value = flattenedData[field.name];
    const error = validateField(field, value, data);
    if (error) {
      errors.push(error);
    }
  });

  return errors;
};

/**
 * Registration form field definitions with validation rules
 */
export const registrationFormFields: FormField[] = [
  // Personal Information
  {
    name: 'personalInfo.firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    validation: {
      minLength: 2,
      maxLength: 50
    },
    placeholder: 'Enter your first name'
  },
  {
    name: 'personalInfo.lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    validation: {
      minLength: 2,
      maxLength: 50
    },
    placeholder: 'Enter your last name'
  },
  {
    name: 'personalInfo.email',
    label: 'Email',
    type: 'email',
    required: true,
    validation: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    placeholder: 'Enter your email address'
  },
  {
    name: 'personalInfo.phone',
    label: 'Phone Number',
    type: 'tel',
    required: true,
    validation: {
      pattern: /^[0-9+\-\s()]{7,15}$/
    },
    placeholder: 'Enter your phone number'
  },
  {
    name: 'personalInfo.dateOfBirth',
    label: 'Date of Birth',
    type: 'date',
    required: true,
    validation: {
      customValidator: (value) => {
        const dob = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        return age >= 18 && age <= 26; // Age requirement: 18-26 years
      }
    },
    errorMessage: 'You must be between 18 and 26 years old'
  },
  {
    name: 'personalInfo.gender',
    label: 'Gender',
    type: 'select',
    required: true,
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ]
  },

  // Address Information
  {
    name: 'address.street',
    label: 'Street Address',
    type: 'text',
    required: true,
    placeholder: 'Enter your street address'
  },
  {
    name: 'address.city',
    label: 'City',
    type: 'text',
    required: true,
    placeholder: 'Enter your city'
  },
  {
    name: 'address.postalCode',
    label: 'Postal Code',
    type: 'text',
    required: true,
    placeholder: 'Enter your postal code'
  },
  {
    name: 'address.country',
    label: 'Country',
    type: 'text',
    required: true,
    placeholder: 'Enter your country'
  },

  // Qualifications
  {
    name: 'qualifications.education',
    label: 'Highest Education',
    type: 'select',
    required: true,
    options: [
      { label: 'GCE O/L', value: 'GCE O/L' },
      { label: 'GCE A/L', value: 'GCE A/L' },
      { label: 'Diploma', value: 'Diploma' },
      { label: 'Bachelor\'s Degree', value: 'Bachelor\'s Degree' },
      { label: 'Master\'s Degree', value: 'Master\'s Degree' }
    ]
  },
  {
    name: 'qualifications.gceResults',
    label: 'GCE O/L Results',
    type: 'text',
    required: true,
    validation: {
      customValidator: (value) => {
        // Simple validation - should be enhanced with actual logic
        return value.includes('English') && value.length > 10;
      }
    },
    placeholder: 'List your GCE O/L results (6 passes with English credit required)',
    errorMessage: 'GCE O/L with 6 passes including English credit is required'
  },
  {
    name: 'qualifications.englishProficiency',
    label: 'English Proficiency',
    type: 'select',
    required: true,
    options: [
      { label: 'Basic', value: 'Basic' },
      { label: 'Intermediate', value: 'Intermediate' },
      { label: 'Advanced', value: 'Advanced' },
      { label: 'Native/Bilingual', value: 'Native/Bilingual' }
    ]
  },

  // Physical Information
  {
    name: 'physicalInfo.height',
    label: 'Height (cm)',
    type: 'number',
    required: true,
    validation: {
      min: 140,
      max: 200,
      customValidator: (value, formData?: any) => {
        // Height requirements based on gender
        const height = Number(value);
        if (!formData?.personalInfo?.gender) {
          return height >= 140; // Basic validation if gender not available
        }
        const gender = formData.personalInfo.gender;
        if (gender === 'female') {
          return height >= 157.5;
        } else if (gender === 'male') {
          return height >= 170.2;
        }
        return false;
      }
    },
    placeholder: 'Enter your height in centimeters',
    errorMessage: 'Height must meet minimum requirements (Female: 157.5cm, Male: 170.2cm)'
  },
  {
    name: 'physicalInfo.weight',
    label: 'Weight (kg)',
    type: 'number',
    required: true,
    placeholder: 'Enter your weight in kilograms'
  },
  {
    name: 'physicalInfo.colorVision',
    label: 'Normal Color Vision',
    type: 'checkbox',
    required: true,
    errorMessage: 'Normal color vision is required'
  },

  // Documents
  {
    name: 'documents',
    label: 'Required Documents',
    type: 'file',
    required: true,
    errorMessage: 'Please upload all required documents'
  },

  // Payment Information
  {
    name: 'paymentInfo.registrationFeePaid',
    label: 'Registration Fee Paid',
    type: 'checkbox',
    required: true,
    errorMessage: 'Registration fee payment is required'
  },
  {
    name: 'paymentInfo.paymentMethod',
    label: 'Payment Method',
    type: 'select',
    required: true,
    options: [
      { label: 'Credit Card', value: 'Credit Card' },
      { label: 'Bank Transfer', value: 'Bank Transfer' },
      { label: 'Cash', value: 'Cash' }
    ]
  },
  {
    name: 'paymentInfo.transactionId',
    label: 'Transaction ID',
    type: 'text',
    required: false,
    placeholder: 'Enter transaction ID if applicable'
  }
];

/**
 * Validates BMI requirements for aviation cabin crew
 * @param weight Weight in kg
 * @param height Height in cm
 * @returns Object with BMI value and validation status
 */
export const validateBMI = (weight: number, height: number): {
  bmi: number;
  valid: boolean;
  message: string
} => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const valid = bmi >= 18.5 && bmi <= 24.9;

  return {
    bmi: Math.round(bmi * 10) / 10,
    valid,
    message: valid
      ? `BMI ${bmi.toFixed(1)} is within normal range`
      : `BMI ${bmi.toFixed(1)} is outside normal range (18.5-24.9)`
  };
};

/**
 * Validates age requirements for aviation cabin crew training
 * @param dateOfBirth Date of birth
 * @returns Object with age and validation status
 */
export const validateAge = (dateOfBirth: string | Date): {
  age: number;
  valid: boolean;
  message: string;
} => {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  const valid = age >= 18 && age <= 26;

  return {
    age,
    valid,
    message: valid
      ? `Age ${age} meets requirements`
      : `Age ${age} is outside required range (18-26 years)`
  };
};

/**
 * Validates height requirements based on gender
 * @param height Height in cm
 * @param gender Gender (male/female)
 * @returns Object with validation status and message
 */
export const validateHeight = (height: number, gender: 'male' | 'female'): {
  valid: boolean;
  message: string;
  requirement: number;
} => {
  const requirement = gender === 'female' ? 157.5 : 170.2;
  const valid = height >= requirement;

  return {
    valid,
    requirement,
    message: valid
      ? `Height ${height}cm meets ${gender} requirements`
      : `Height ${height}cm is below minimum requirement of ${requirement}cm for ${gender}s`
  };
};

/**
 * Validates GCE O/L results for academic requirements
 * @param results GCE O/L results string
 * @param englishCredit Whether English credit is achieved
 * @returns Object with validation status and details
 */
export const validateAcademicRequirements = (
  results: string,
  englishCredit: boolean
): {
  valid: boolean;
  passCount: number;
  hasEnglishCredit: boolean;
  message: string;
} => {
  // Simple parsing - in real implementation, this would be more sophisticated
  const subjects = results.split(',').map(s => s.trim()).filter(s => s.length > 0);
  const passCount = subjects.length;
  const hasMinimumPasses = passCount >= 6;
  const valid = hasMinimumPasses && englishCredit;

  let message = '';
  if (!hasMinimumPasses) {
    message = `Only ${passCount} passes found, minimum 6 required`;
  } else if (!englishCredit) {
    message = 'English credit pass is required';
  } else {
    message = `Academic requirements met (${passCount} passes with English credit)`;
  }

  return {
    valid,
    passCount,
    hasEnglishCredit: englishCredit,
    message
  };
};

/**
 * Comprehensive eligibility assessment
 * @param assessmentData Assessment form data
 * @returns Detailed eligibility report
 */
export const performEligibilityAssessment = (assessmentData: {
  age?: string;
  gender?: 'male' | 'female';
  height?: string;
  weight?: string;
  olPasses?: string;
  olCredits?: string;
  englishCredit?: boolean;
  colorVision?: boolean;
}): {
  overall: 'pass' | 'fail' | 'incomplete';
  requirements: {
    age?: { status: 'pass' | 'fail'; message: string; value?: number };
    height?: { status: 'pass' | 'fail'; message: string; value?: number };
    bmi?: { status: 'pass' | 'fail'; message: string; value?: number };
    academic?: { status: 'pass' | 'fail'; message: string; passCount?: number };
    colorVision?: { status: 'pass' | 'fail'; message: string };
  };
  summary: string;
} => {
  const requirements: any = {};
  let passCount = 0;
  let totalChecks = 0;

  // Age validation
  if (assessmentData.age) {
    totalChecks++;
    const age = parseInt(assessmentData.age);
    const valid = age >= 18 && age <= 26;
    requirements.age = {
      status: valid ? 'pass' : 'fail',
      message: valid ? `Age ${age} meets requirements` : `Age ${age} is outside required range (18-26 years)`,
      value: age
    };
    if (valid) passCount++;
  }

  // Height validation
  if (assessmentData.height && assessmentData.gender) {
    totalChecks++;
    const heightResult = validateHeight(parseFloat(assessmentData.height), assessmentData.gender);
    requirements.height = {
      status: heightResult.valid ? 'pass' : 'fail',
      message: heightResult.message,
      value: parseFloat(assessmentData.height)
    };
    if (heightResult.valid) passCount++;
  }

  // BMI validation
  if (assessmentData.height && assessmentData.weight) {
    totalChecks++;
    const bmiResult = validateBMI(parseFloat(assessmentData.weight), parseFloat(assessmentData.height));
    requirements.bmi = {
      status: bmiResult.valid ? 'pass' : 'fail',
      message: bmiResult.message,
      value: bmiResult.bmi
    };
    if (bmiResult.valid) passCount++;
  }

  // O/L Passes validation
  if (assessmentData.olPasses) {
    totalChecks++;
    const passes = parseInt(assessmentData.olPasses);
    const valid = passes >= 6;
    requirements.olPasses = {
      status: valid ? 'pass' : 'fail',
      message: valid ? `${passes} O/L passes meets requirement` : `${passes} O/L passes - minimum 6 required`,
      value: passes
    };
    if (valid) passCount++;
  }

  // O/L Credits validation
  if (assessmentData.olCredits) {
    totalChecks++;
    const credits = parseInt(assessmentData.olCredits);
    const valid = credits >= 3;
    requirements.olCredits = {
      status: valid ? 'pass' : 'fail',
      message: valid ? `${credits} O/L credits meets requirement` : `${credits} O/L credits - minimum 3 required`,
      value: credits
    };
    if (valid) passCount++;
  }

  // English Credit validation (optional - gives bonus points)
  if (assessmentData.englishCredit !== undefined) {
    const hasEnglishCredit = assessmentData.englishCredit === true;
    requirements.englishCredit = {
      status: hasEnglishCredit ? 'pass' : 'pending',
      message: hasEnglishCredit ? 'English credit - excellent advantage!' : 'English credit would be advantageous'
    };
    // English credit is optional, so we don't increment totalChecks or affect pass/fail
  }

  // Color vision validation
  if (assessmentData.colorVision !== undefined) {
    totalChecks++;
    requirements.colorVision = {
      status: assessmentData.colorVision ? 'pass' : 'fail',
      message: assessmentData.colorVision ? 'Normal color vision confirmed' : 'Normal color vision is required'
    };
    if (assessmentData.colorVision) passCount++;
  }

  // Determine overall status
  let overall: 'pass' | 'fail' | 'incomplete';
  let summary: string;

  if (totalChecks === 0) {
    overall = 'incomplete';
    summary = 'Please complete the assessment form to check your eligibility';
  } else if (passCount === totalChecks) {
    overall = 'pass';
    summary = `Congratulations! You meet all ${totalChecks} requirements for the aviation cabin crew training program`;
  } else {
    overall = 'fail';
    const failedCount = totalChecks - passCount;
    summary = `You meet ${passCount} out of ${totalChecks} requirements. ${failedCount} requirement${failedCount > 1 ? 's' : ''} need${failedCount === 1 ? 's' : ''} attention`;
  }

  return {
    overall,
    requirements,
    summary
  };
};

/**
 * Checks if a user meets the basic eligibility requirements
 * @param age User's age
 * @param height User's height in cm
 * @param gender User's gender
 * @param gceResults User's GCE O/L results
 * @returns Object with eligibility status and reasons
 */
export const checkEligibility = (
  age: number,
  height: number,
  gender: 'male' | 'female',
  gceResults: string
): { eligible: boolean; reasons: string[] } => {
  const reasons: string[] = [];

  // Check age requirement (18-26 years)
  if (age < 18 || age > 26) {
    reasons.push('Age must be between 18 and 26 years');
  }

  // Check height requirement
  if (gender === 'female' && height < 157.5) {
    reasons.push('Female candidates must be at least 157.5cm tall');
  } else if (gender === 'male' && height < 170.2) {
    reasons.push('Male candidates must be at least 170.2cm tall');
  }

  // Check GCE O/L requirement (simplified check)
  if (!gceResults.includes('English') || gceResults.split(',').length < 6) {
    reasons.push('GCE O/L with 6 passes including English credit is required');
  }

  return {
    eligible: reasons.length === 0,
    reasons
  };
};