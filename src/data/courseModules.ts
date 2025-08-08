import {
  BookOpen,
  Users,
  Shield,
  Heart,
  AlertTriangle,
  Plane,
  Coffee,
  Star,
  Briefcase,
  Globe,
  UserCheck,
  MapPin,
  Utensils,
  MessageCircle,
  GraduationCap,
  Sparkles,
  Dumbbell,
  Waves
} from 'lucide-react';
import { CourseModule } from '../types/course';

/**
 * Theoretical Learning Modules
 * Based on the comprehensive 10-week syllabus by Instructor Damith Isuru Lakshan
 * Online Sessions: Every Saturday and Sunday, 8:00 PM to 10:30 PM
 * Duration: 3 Months (12 Weeks), Total: 60 hours
 */
export const theoreticalModules: CourseModule[] = [
  {
    id: 'theory-1',
    title: 'Aviation History',
    type: 'theoretical',
    description: 'Comprehensive introduction to aviation history, airline operations, and fundamental aviation concepts. This foundational module covers the evolution of aviation and essential industry knowledge.',
    duration: '1st Week',
    icon: Plane,
    topics: [
      'Information about aviation history',
      'Airline operations & organizations',
      'Aviation terminology & jargon',
      'IATA & ICAO',
      'Aviation alphabet',
      'Freedoms of air',
      'Aircraft & aeroplane',
      'Airplane parts & functions',
      'Theory of flight',
      'Airline manufacturing companies',
      'International time zones',
      'Flight hours calculations'
    ]
  },
  {
    id: 'theory-2',
    title: 'Cabin Crew Member',
    type: 'theoretical',
    description: 'Understanding the cabin crew profession, responsibilities, and the essential skills required for success in the aviation industry.',
    duration: '2nd Week',
    icon: Users,
    topics: [
      'Cabin crew profession',
      'Origin of the cabin crew',
      'Cabin crew life',
      'Pre-flight meetings & safety checks',
      'Cabin crew skills & qualities',
      'Cabin crew duties & responsibilities',
      'Customer service in the aviation industry'
    ]
  },
  {
    id: 'theory-3',
    title: 'Passenger Handling',
    type: 'theoretical',
    description: 'Comprehensive passenger service training covering all aspects of passenger interaction, special needs handling, and conflict resolution.',
    duration: ' 3rd Week',
    icon: UserCheck,
    topics: [
      'Passenger & passenger service',
      'Embarkation & disembarkation',
      'Excellent customer service',
      'Special passengers on board',
      'Passengers with special needs',
      'Dealing with passenger complaints',
      'Conflict resolutions',
      'Cultural awareness & sensitivity'
    ]
  },
  {
    id: 'theory-4',
    title: 'Enhancing Communication & Interpersonal Skills',
    type: 'theoretical',
    description: 'Essential communication skills, teamwork, and leadership development for effective cabin crew performance.',
    duration: '4th Week',
    icon: MessageCircle,
    topics: [
      'Communication',
      'Effective communication with crew and passengers',
      'Importance of effective communication',
      'Effective communication techniques',
      'Nonverbal communication and body language',
      'Teamwork & collaboration',
      'Leader & team member',
      'Crisis management & decision making'
    ]
  },
  {
    id: 'theory-5',
    title: 'Inflight Service and Hospitality',
    type: 'theoretical',
    description: 'Comprehensive training in inflight service delivery, food and beverage operations, and creating exceptional passenger experiences.',
    duration: '5th Week',
    icon: Coffee,
    topics: [
      'Introduction',
      'Food & beverage',
      'Food and beverage guidelines',
      'Special meals on board',
      'Dietary requirements',
      'Inflight duties',
      'Creating a welcoming and comfortable cabin environment',
      'Passenger comfort',
      'Creating a welcoming atmosphere',
      'Handling challenges and maintaining positivity'
    ]
  },
  {
    id: 'theory-6',
    title: 'Passenger Safety and Emergency',
    type: 'theoretical',
    description: 'Critical safety protocols, emergency procedures, and fire safety training essential for cabin crew operations.',
    duration: '6th Week',
    icon: Shield,
    topics: [
      'Passenger safety & aircraft safety',
      'Safety equipment and checking',
      'Pre flight safety check procedure',
      'Fire and fire triangle',
      'Classes of fire',
      'Fire safety and prevention',
      'Fire extinguishers and key components',
      'Types of fire extinguishers and usage',
      'Handling emergency situations on board',
      'Evacuation procedures and crew coordination'
    ]
  },
  {
    id: 'theory-7',
    title: 'Aviation Health and Medical Procedures',
    type: 'theoretical',
    description: 'Medical emergency response, first aid procedures, and health management protocols for cabin crew.',
    duration: '7th Week',
    icon: Heart,
    topics: [
      'Basic first aid and medical emergency',
      'First aider and the role of a first aider',
      'First aid kit & emergency kit',
      'Medical emergency and equipment onboard',
      'Common in-flight medical situations',
      'Handling common in-flight medical situations',
      'Airline policies related to passenger health and safety',
      'Communicating with medical professionals on the ground'
    ]
  },
  {
    id: 'theory-8',
    title: 'Aviation Security and Dangerous Goods',
    type: 'theoretical',
    description: 'Comprehensive security protocols, dangerous goods regulations, and threat management in aviation.',
    duration: '8th & 9th Week',
    icon: AlertTriangle,
    topics: [
      'Security & aviation security',
      'Importance of aviation security',
      'Historical context of aviation security',
      'Historical context of aviation security in Sri Lankan Airlines',
      'Current challenges in aviation security',
      'Key components of aviation security',
      'Future directions in aviation security',
      'Aviation security checking and importance',
      'Types of aviation security checks',
      'Technology and equipment',
      'Types of threats in civil aviation',
      'Hijacking',
      'Prohibited items on board',
      'Handling dangerous goods and prohibited items',
      'Dangerous goods regulation (DGR)',
      'Carriage of forbidden articles by air',
      'Classes of dangerous goods',
      'Hidden dangerous goods'
    ]
  },
  {
    id: 'theory-9',
    title: 'Career Development and Job Preparation',
    type: 'theoretical',
    description: 'Professional development, job application skills, and career advancement strategies in the aviation industry.',
    duration: '9th Week',
    icon: Briefcase,
    topics: [
      'Job application states and resume writing',
      'Interview preparation and techniques',
      'Uniform and personal grooming standards',
      'Career progression opportunities within the airline industry'
    ]
  },
  {
    id: 'theory-10',
    title: 'Final Assessment and Certification',
    type: 'theoretical',
    description: 'Comprehensive review and assessment of all course materials, leading to course completion certification.',
    duration: '11th & 12th Week',
    icon: GraduationCap,
    topics: [
      'Review of key concepts and knowledge learned throughout the course',
      'Final assessment to evaluate understanding and retention',
      'Course completion certificate provided to successful participants',

    ]
  }
];

/**
 * Physical Training Modules
 * Intensive 2-day practical training programme at Jayathilake Ground, Nawalapitiya
 */
export const practicalModules: CourseModule[] = [
  {
    id: 'physical-1',
    title: 'Fire Safety & Rescue Training',
    type: 'practical',
    description: 'Comprehensive fire safety training covering theoretical knowledge and hands-on practical experience with fire extinguishers and rescue operations. Led by certified instructor Mr. Chaminda Nuragodage.',
    duration: '04hrs+ (Day 1)',
    icon: Shield,
    topics: [
      'Basics of fire safety and prevention strategies',
      'Fire triangle principles and understanding fire behavior',
      'Classification of different types of fires',
      'Safety equipment identification and proper checks',
      'Fire extinguisher operation and selection techniques',
      'Fire evacuation procedures and crowd control',
      'Hands-on rescue operations and emergency response',
      'Emergency communication during fire incidents',
      'Post-fire safety assessment and reporting',
      'Coordination with emergency services and ground crew'
    ]
  },
  {
    id: 'physical-2',
    title: 'Basic First Aid & CPR Training',
    type: 'practical',
    description: 'Essential first aid and emergency medical response training conducted by Dr. Sandaruwan Liyanage & Mrs Anoma Herath. Covers comprehensive medical emergency procedures and life-saving techniques.',
    duration: '2.5hrs+ (Day 1)',
    icon: Heart,
    topics: [
      'Fundamental principles of first aid and emergency response',
      'First aid kit components and proper usage',
      'Emergency response protocols and triage procedures',
      'Treatment of burns, wounds, and shock management',
      'Managing diabetes emergencies and allergic reactions',
      'Choking response procedures and airway management',
      'Epilepsy and seizure management techniques',
      'Stroke recognition and immediate response protocols',
      'Heart attack symptoms and emergency intervention',
      'CPR techniques for adults and children',
      'Handling unconscious persons safely',
      'Recovery position and patient stabilization'
    ]
  },
  {
    id: 'physical-3',
    title: 'Professional Grooming & Appearance Standards',
    type: 'practical',
    description: 'Professional grooming and appearance training led by Miss Sithara Dilrukshi. Focus on international aviation standards for personal presentation and professional image.',
    duration: '03hrs+ hours (Day 1)',
    icon: Sparkles,
    topics: [
      'Importance of professional appearance in aviation industry',
      'Makeup application techniques for aviation professionals',
      'Uniform standards and dress code compliance',
      'Hair grooming and styling for professional presentation',
      'Nail care and maintenance standards',
      'Personal hygiene protocols and best practices',
      'Cultural sensitivity in grooming across different regions',
      'Maintaining professional standards during long flights',
      'Emergency grooming and quick touch-up techniques',
      'Professional image and brand representation'
    ]
  },
  {
    id: 'physical-4',
    title: 'Physical Fitness Programme',
    type: 'practical',
    description: 'Comprehensive physical fitness training designed specifically for aviation professionals. Conducted by Mr. Lahiru Dilshan, focusing on health, endurance, and physical requirements for cabin crew.',
    duration: '1.5hrs+ (Day 2)',
    icon: Dumbbell,
    topics: [
      'Importance of physical fitness for cabin crew professionals',
      'Dietary requirements and BMI management for aviation',
      'Exercise routines specifically designed for aviation professionals',
      'Stretching techniques for long-haul flight preparation',
      'Endurance training and cardiovascular fitness',
      'Strength training for handling emergency equipment',
      'Flexibility exercises for confined aircraft spaces',
      'Stress management through physical activity',
      'Injury prevention and workplace ergonomics',
      'Practical fitness session with hands-on exercises'
    ]
  },
  {
    id: 'physical-5',
    title: 'Water Survival Training',
    type: 'practical',
    description: 'Essential water survival skills training conducted by Mr. Mahesh Gunarathna. Comprehensive training in water safety, survival techniques, and emergency procedures for aviation professionals.',
    duration: '03hrs+ (Day 2)',
    icon: Waves,
    topics: [
      'Introduction to water survival and safety principles',
      'Water safety procedures and risk assessment',
      'Survival swimming techniques and water confidence',
      'Proper use of flotation devices and life jackets',
      'Emergency signaling methods in water environments',
      'Group survival strategies and teamwork in water',
      'Individual survival techniques and self-rescue',
      'Hypothermia prevention and management',
      'Water entry techniques from aircraft',
      'Life raft deployment and boarding procedures',
      'Emergency equipment usage in water survival',
      'Rescue coordination and communication in water emergencies'
    ]
  },
  {
    id: 'physical-6',
    title: 'Cabin Crew Interview Training',
    type: 'practical',
    description: 'Unlock your potential and confidently step into the world of aviation with our exclusive Cabin Crew Interview Training, meticulously designed and delivered by industry specialist Damith Isuru. This comprehensive program prepares aspiring cabin crew members to meet and exceed the rigorous standards of leading global airlines.',
    duration: '03hrs+',
    icon: Briefcase,
    topics: [
      'Deep dive into airline recruitment processes and selection criteria specific to cabin crew roles',
      'Crafting impactful personal introductions and creating memorable first impressions',
      'Mastering competency-based and situational interview techniques aligned with international airline expectations',
      'Polishing communication skills — projecting confidence, warmth, and professionalism in every interaction',
      'Adhering to global grooming and presentation standards essential for cabin crew success',
      'Intensive, real-time mock interviews with detailed, personalized feedback for performance enhancement',
      'Navigating group exercises, role-playing scenarios, and customer service simulations with poise',
      'Proven strategies to manage interview stress and maintain composure under pressure',
      'Expert guidance on perfecting your CV, cover letter, and essential documentation',
      'Insider insights and best practices for excelling in both virtual and in-person interviews'
    ]
  }
];

/**
 * ICAO Competency Framework Alignment
 * Mapping course modules to ICAO competencies for cabin crew
 */
export const icaoCompetencyMapping = {
  'Communication': ['theory-2', 'theory-7', 'practical-6'],
  'Leadership and Teamwork': ['theory-2', 'theory-9', 'practical-6'],
  'Problem Solving and Decision Making': ['theory-3', 'theory-4', 'practical-3'],
  'Situational Awareness': ['theory-3', 'theory-6', 'practical-2', 'practical-4'],
  'Workload Management': ['theory-2', 'theory-8', 'practical-5'],
  'Safety Management': ['theory-3', 'theory-5', 'practical-3'],
  'Emergency Response': ['theory-3', 'theory-4', 'practical-3'],
  'Customer Service': ['theory-7', 'practical-5'],
  'Professional Standards': ['theory-9', 'practical-1', 'practical-7']
};

/**
 * Module Prerequisites and Dependencies
 */
export const modulePrerequisites = {
  'practical-3': ['theory-3', 'theory-4'], // SEP training requires emergency theory
  'practical-5': ['theory-8'], // Meal service requires catering theory
  'practical-6': ['theory-7', 'theory-9'], // Interview skills require service and professional development
  'practical-7': ['practical-6'] // Career guidance follows interview preparation
};

/**
 * Assessment Criteria for Each Module
 */
export const assessmentCriteria = {
  theoretical: {
    writtenExam: 70, // 70% minimum pass mark
    practicalAssessment: 30,
    continuousAssessment: true
  },
  practical: {
    practicalDemonstration: 80, // 80% minimum pass mark
    oralAssessment: 20,
    competencyBased: true
  }
};

/**
 * Get modules by type
 */
export const getModulesByType = (type: 'theoretical' | 'practical'): CourseModule[] => {
  return type === 'theoretical' ? theoreticalModules : practicalModules;
};

/**
 * Get all modules
 */
export const getAllModules = (): CourseModule[] => {
  return [...theoreticalModules, ...practicalModules];
};

/**
 * Get module by ID
 */
export const getModuleById = (id: string): CourseModule | undefined => {
  return getAllModules().find(module => module.id === id);
};

/**
 * Calculate total duration for module type
 */
export const calculateTotalDuration = (type: 'theoretical' | 'practical'): string => {
  const modules = getModulesByType(type);
  // This is a simplified calculation - in reality, you'd parse duration strings
  const theoreticalWeeks = 12;
  const practicalDays = 2; // Physical training is 2 days intensive

  return type === 'theoretical' ? `${theoreticalWeeks} weeks` : `${practicalDays} days`;
};