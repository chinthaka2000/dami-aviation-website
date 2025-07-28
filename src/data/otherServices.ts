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
  category: 'exam-prep' | 'career-services' | 'consultation' | 'documents';
  whatsappMessage: string;
  popular?: boolean;
}

export const otherServices: OtherService[] = [
  {
    id: 'airport-service-agent-exam',
    title: 'Airport Service Agent Exam - Special Assessment Pack',
    description: 'Comprehensive exam preparation package for Airport Service Agent certification with extensive question bank and detailed answers.',
    features: [
      '1500+ MCQ questions with detailed answers',
      '20 structural questions with comprehensive solutions',
      '20 essay writing samples with model answers',
      'Updated syllabus coverage',
      'Practice test simulations',
      'Performance tracking and analysis',
      'Expert tips and strategies',
      'Digital format for easy access'
    ],
    price: 3000,
    currency: 'Rs',
    icon: '📋',
    category: 'exam-prep',
    whatsappMessage: 'Hi! I\'m interested in the Airport Service Agent Exam Special Assessment Pack (Rs. 3000). Please provide more details.',
    popular: true
  },
  {
    id: 'cv-creation-service',
    title: 'Professional CV Creation Service',
    description: 'Get a professionally crafted CV tailored for aviation industry positions that highlights your skills and experience effectively.',
    features: [
      'Aviation industry-specific CV format',
      'Professional design and layout',
      'Keyword optimization for ATS systems',
      'Multiple format options (PDF, Word)',
      'Cover letter template included',
      '2 rounds of revisions',
      '48-hour delivery',
      'Industry expert review'
    ],
    price: 1500,
    currency: 'Rs',
    icon: '📄',
    category: 'career-services',
    whatsappMessage: 'Hi! I need help creating a professional CV for aviation industry positions. Please assist me with your CV creation service.'
  },
  {
    id: 'interview-preparation',
    title: 'Aviation Interview Preparation',
    description: 'Comprehensive interview coaching for aviation positions including mock interviews and personalized feedback.',
    features: [
      'One-on-one mock interview sessions',
      'Common aviation interview questions',
      'Behavioral interview techniques',
      'Technical knowledge assessment',
      'Confidence building exercises',
      'Body language and presentation tips',
      'Industry-specific scenarios',
      'Follow-up support'
    ],
    price: 2500,
    currency: 'Rs',
    icon: '🎤',
    category: 'career-services',
    whatsappMessage: 'Hi! I\'m interested in aviation interview preparation coaching. Please provide details about your interview preparation service.'
  },
  {
    id: 'career-consultation',
    title: 'Aviation Career Consultation',
    description: 'Personalized career guidance and planning session with aviation industry experts to help you choose the right career path.',
    features: [
      '1-hour one-on-one consultation',
      'Career path analysis and recommendations',
      'Industry trends and opportunities',
      'Skill gap analysis',
      'Training recommendations',
      'Job market insights',
      'Networking guidance',
      'Action plan development'
    ],
    price: 2000,
    currency: 'Rs',
    icon: '🎯',
    category: 'consultation',
    whatsappMessage: 'Hi! I would like to book an aviation career consultation session. Please provide available time slots and details.'
  },
  {
    id: 'document-verification',
    title: 'Document Verification & Guidance',
    description: 'Professional assistance with document preparation and verification for aviation job applications and certifications.',
    features: [
      'Document checklist and requirements',
      'Verification of certificates and credentials',
      'Application form assistance',
      'Document formatting and organization',
      'Submission guidance',
      'Follow-up support',
      'Digital document management',
      'Compliance checking'
    ],
    price: 1000,
    currency: 'Rs',
    icon: '📋',
    category: 'documents',
    whatsappMessage: 'Hi! I need assistance with document verification and preparation for aviation job applications. Please help me with this service.'
  },
  {
    id: 'english-proficiency-test',
    title: 'English Proficiency Test Preparation',
    description: 'Specialized coaching for aviation English proficiency tests required for various aviation positions.',
    features: [
      'ICAO English proficiency standards',
      'Speaking and listening practice',
      'Aviation-specific vocabulary',
      'Mock test sessions',
      'Pronunciation improvement',
      'Communication skills development',
      'Test-taking strategies',
      'Progress assessment'
    ],
    price: 3500,
    currency: 'Rs',
    icon: '🗣️',
    category: 'exam-prep',
    whatsappMessage: 'Hi! I\'m interested in English proficiency test preparation for aviation. Please provide details about your coaching program.'
  }
];

export const serviceCategories = [
  {
    id: 'exam-prep',
    name: 'Exam Preparation',
    description: 'Comprehensive preparation packages for aviation exams',
    icon: '📚'
  },
  {
    id: 'career-services',
    name: 'Career Services',
    description: 'Professional career development and job search assistance',
    icon: '💼'
  },
  {
    id: 'consultation',
    name: 'Consultation',
    description: 'Expert guidance and personalized advice',
    icon: '🎯'
  },
  {
    id: 'documents',
    name: 'Documentation',
    description: 'Document preparation and verification services',
    icon: '📋'
  }
];