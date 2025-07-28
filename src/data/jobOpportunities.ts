import {
  Plane,
  Building,
  Users,
  MapPin,
  Globe,
  TrendingUp,
  Star,
  Briefcase,
  Shield,
  Coffee,
  UserCheck,
  Heart,
  GraduationCap
} from 'lucide-react';
import { JobOpportunity } from '../types/course';

/**
 * Comprehensive Job Opportunities Data
 * Based on current aviation industry trends and career paths
 */

export interface JobCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  employers: string[];
  salaryRange: string;
  opportunities: string[];
  growthRate: string;
  requirements: string[];
  benefits: string[];
}

export interface CareerProgression {
  level: string;
  position: string;
  duration: string;
  description: string;
  salaryRange: string;
  responsibilities: string[];
}

export interface SuccessMetric {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<any>;
}

/**
 * Main Job Categories in Aviation Industry
 */
export const jobCategories: JobCategory[] = [
  {
    id: 'international-airlines',
    title: 'International Airlines',
    description: 'Join prestigious international airlines as cabin crew, serving passengers on global routes with competitive salaries and travel benefits.',
    icon: Plane,
    employers: [
      'Emirates',
      'Qatar Airways',
      'Singapore Airlines',
      'Etihad Airways',
      'Turkish Airlines',
      'Cathay Pacific',
      'British Airways',
      'Lufthansa',
      'Air France',
      'KLM Royal Dutch Airlines',
      'Swiss International Air Lines',
      'Austrian Airlines'
    ],
    salaryRange: 'LKR 80,000 - 150,000',
    growthRate: '15% annually',
    opportunities: [
      'Flight Attendant',
      'Senior Cabin Crew',
      'Purser',
      'Cabin Service Director',
      'Training Instructor',
      'Crew Scheduler',
      'In-flight Service Manager',
      'Customer Experience Specialist'
    ],
    requirements: [
      'International Cabin Crew Certification',
      'Minimum height requirements',
      'English proficiency (IELTS 6.0+)',
      'Swimming ability (50m)',
      'Clean criminal background check',
      'Valid passport with 10+ years validity'
    ],
    benefits: [
      'Free worldwide travel opportunities',
      'Comprehensive health insurance',
      'Accommodation allowances',
      'Per diem for meals and expenses',
      'Career progression opportunities',
      'Retirement benefits and provident fund',
      'Staff travel discounts for family',
      'International exposure and networking'
    ]
  },
  {
    id: 'regulatory-affairs',
    title: 'Aviation Regulatory Affairs',
    description: 'Work with aviation authorities and regulatory bodies ensuring compliance with international aviation standards and safety protocols.',
    icon: Building,
    employers: [
      'Civil Aviation Authority of Sri Lanka',
      'IATA (International Air Transport Association)',
      'ICAO (International Civil Aviation Organization)',
      'Airport & Aviation Services (Sri Lanka) Ltd',
      'Sri Lankan Airlines',
      'Mihin Lanka',
      'FitsAir',
      'Cinnamon Air',
      'Helitours',
      'Aviation Consulting Firms'
    ],
    salaryRange: 'LKR 60,000 - 120,000',
    growthRate: '8% annually',
    opportunities: [
      'Safety Inspector',
      'Compliance Officer',
      'Training Coordinator',
      'Aviation Consultant',
      'Quality Assurance Manager',
      'Regulatory Affairs Specialist',
      'Audit Manager',
      'Documentation Specialist',
      'Policy Analyst',
      'Risk Assessment Officer'
    ],
    requirements: [
      'Aviation industry knowledge',
      'Understanding of ICAO/IATA regulations',
      'Analytical and reporting skills',
      'Attention to detail',
      'Professional communication skills',
      'Computer proficiency'
    ],
    benefits: [
      'Stable government/corporate positions',
      'Professional development opportunities',
      'Industry recognition and networking',
      'Comprehensive benefits package',
      'Work-life balance',
      'Pension schemes',
      'Training and certification support',
      'Career advancement pathways'
    ]
  },
  {
    id: 'customer-service',
    title: 'Airline Customer Services',
    description: 'Provide exceptional customer service at airports and airline offices, handling passenger inquiries, bookings, and support services.',
    icon: Users,
    employers: [
      'Sri Lankan Airlines',
      'Emirates (Colombo Office)',
      'Qatar Airways (Colombo Office)',
      'Singapore Airlines (Colombo Office)',
      'Airport Ground Services',
      'AASL Ground Handling',
      'Celebi Ground Handling',
      'Travel Agencies',
      'Airline GSA Companies',
      'Airport Retail Services'
    ],
    salaryRange: 'LKR 45,000 - 80,000',
    growthRate: '10% annually',
    opportunities: [
      'Customer Service Agent',
      'Check-in Agent',
      'Lounge Attendant',
      'Passenger Service Coordinator',
      'Reservations Agent',
      'Ground Service Supervisor',
      'VIP Services Coordinator',
      'Baggage Service Agent',
      'Special Assistance Coordinator',
      'Customer Relations Officer'
    ],
    requirements: [
      'Customer service experience',
      'Multi-language skills (advantage)',
      'Computer literacy',
      'Professional appearance',
      'Stress management abilities',
      'Shift work flexibility'
    ],
    benefits: [
      'Airport environment exposure',
      'Skill development opportunities',
      'Staff travel benefits',
      'Flexible working hours',
      'Team-based work environment',
      'Performance incentives',
      'Health insurance coverage',
      'Career progression within airline industry'
    ]
  },
  {
    id: 'resort-travel',
    title: 'Resort & Travel Industry',
    description: 'Apply your hospitality and service skills in luxury resorts, cruise lines, and travel companies worldwide.',
    icon: MapPin,
    employers: [
      'Shangri-La Hotels',
      'Cinnamon Hotels & Resorts',
      'Aitken Spence Hotels',
      'John Keells Hotels',
      'Jetwing Hotels',
      'Royal Caribbean Cruises',
      'Celebrity Cruises',
      'Princess Cruises',
      'Carnival Cruise Line',
      'MSC Cruises',
      'International Travel Companies',
      'Luxury Resort Chains'
    ],
    salaryRange: 'LKR 50,000 - 100,000',
    growthRate: '12% annually',
    opportunities: [
      'Resort Representative',
      'Cruise Staff',
      'Travel Coordinator',
      'Guest Relations Officer',
      'Concierge Services',
      'Event Coordinator',
      'Tour Guide',
      'Hospitality Supervisor',
      'Customer Experience Manager',
      'Travel Consultant'
    ],
    requirements: [
      'Hospitality service experience',
      'Cultural sensitivity',
      'Language skills',
      'Physical fitness',
      'Adaptability to different environments',
      'Professional presentation'
    ],
    benefits: [
      'International work opportunities',
      'Cultural exposure and travel',
      'Accommodation and meals provided',
      'Seasonal work flexibility',
      'Networking opportunities',
      'Skills transferability',
      'Performance bonuses',
      'Career advancement in hospitality'
    ]
  },
  {
    id: 'ground-operations',
    title: 'Airport Ground Operations',
    description: 'Essential ground support services including ramp operations, cargo handling, and aircraft servicing.',
    icon: Shield,
    employers: [
      'Airport & Aviation Services (AASL)',
      'Celebi Ground Handling',
      'SATS Ground Handling',
      'Dnata Ground Handling',
      'Menzies Aviation',
      'Swissport International',
      'Ground Force One',
      'Cargo Handling Companies',
      'Aircraft Maintenance Organizations',
      'Fuel Service Providers'
    ],
    salaryRange: 'LKR 40,000 - 75,000',
    growthRate: '7% annually',
    opportunities: [
      'Ramp Agent',
      'Baggage Handler',
      'Aircraft Marshaller',
      'Load Controller',
      'Ground Equipment Operator',
      'Cargo Handler',
      'Aircraft Cleaner',
      'Fueling Technician',
      'Ground Operations Supervisor',
      'Safety Coordinator'
    ],
    requirements: [
      'Physical fitness',
      'Safety consciousness',
      'Team work abilities',
      'Basic technical skills',
      'Shift work flexibility',
      'Security clearance eligibility'
    ],
    benefits: [
      'Entry-level opportunities',
      'On-the-job training',
      'Overtime earning potential',
      'Job security in essential services',
      'Career progression opportunities',
      'Health and safety training',
      'Union representation',
      'Retirement benefits'
    ]
  },
  {
    id: 'aviation-training',
    title: 'Aviation Training & Education',
    description: 'Share your expertise by training the next generation of aviation professionals in training institutes and airlines.',
    icon: GraduationCap,
    employers: [
      'Aviation Training Institutes',
      'Airline Training Centers',
      'International Training Partners',
      'University Aviation Programs',
      'Private Aviation Schools',
      'Corporate Training Companies',
      'Government Training Institutions',
      'International Training Organizations',
      'E-learning Platform Companies',
      'Consulting and Training Firms'
    ],
    salaryRange: 'LKR 70,000 - 130,000',
    growthRate: '11% annually',
    opportunities: [
      'Cabin Crew Instructor',
      'Safety Training Specialist',
      'Curriculum Developer',
      'Training Manager',
      'Assessment Coordinator',
      'E-learning Developer',
      'Training Consultant',
      'Academic Coordinator',
      'Quality Assurance Officer',
      'Training Program Director'
    ],
    requirements: [
      'Extensive aviation experience',
      'Teaching and presentation skills',
      'Curriculum development abilities',
      'Industry certifications',
      'Communication excellence',
      'Continuous learning mindset'
    ],
    benefits: [
      'Knowledge sharing satisfaction',
      'Flexible working arrangements',
      'Continuous professional development',
      'Industry networking opportunities',
      'Competitive compensation',
      'Job satisfaction and impact',
      'Research and development opportunities',
      'International training assignments'
    ]
  }
];

/**
 * Career Progression Pathway
 */
export const careerProgression: CareerProgression[] = [
  {
    level: 'Entry Level',
    position: 'Junior Cabin Crew',
    duration: '0-2 years',
    description: 'Start your aviation career with comprehensive training and mentorship from experienced crew members.',
    salaryRange: 'LKR 60,000 - 80,000',
    responsibilities: [
      'Passenger safety and service delivery',
      'Emergency procedure implementation',
      'Food and beverage service',
      'Cabin preparation and cleaning',
      'Basic first aid assistance',
      'Following senior crew instructions',
      'Learning company procedures',
      'Building customer service skills'
    ]
  },
  {
    level: 'Experienced',
    position: 'Senior Cabin Crew',
    duration: '2-5 years',
    description: 'Take on leadership roles and specialized responsibilities while mentoring new crew members.',
    salaryRange: 'LKR 80,000 - 110,000',
    responsibilities: [
      'Leading cabin crew teams',
      'Training and mentoring junior staff',
      'Handling complex passenger situations',
      'Coordinating with flight deck crew',
      'Managing cabin service operations',
      'Conducting safety briefings',
      'Quality assurance and compliance',
      'Special assignment handling'
    ]
  },
  {
    level: 'Leadership',
    position: 'Purser / Cabin Supervisor',
    duration: '5-8 years',
    description: 'Lead cabin crew teams and manage in-flight operations with full responsibility for passenger experience.',
    salaryRange: 'LKR 110,000 - 140,000',
    responsibilities: [
      'Overall cabin management',
      'Crew scheduling and coordination',
      'Passenger complaint resolution',
      'Emergency situation leadership',
      'Service quality management',
      'Regulatory compliance oversight',
      'Performance evaluation of crew',
      'Liaison with ground operations'
    ]
  },
  {
    level: 'Management',
    position: 'Cabin Service Director',
    duration: '8+ years',
    description: 'Senior management roles in airline operations, training, and strategic planning for cabin services.',
    salaryRange: 'LKR 140,000 - 200,000+',
    responsibilities: [
      'Strategic planning for cabin services',
      'Training program development',
      'Policy formulation and implementation',
      'Budget management and cost control',
      'Stakeholder relationship management',
      'Quality assurance and auditing',
      'Regulatory compliance management',
      'Team leadership and development'
    ]
  }
];

/**
 * Success Metrics and Statistics
 */
export const successMetrics: SuccessMetric[] = [
  {
    id: 'placement-rate',
    title: 'Job Placement Rate',
    value: '95%',
    description: 'Within 6 months of graduation',
    icon: Globe
  },
  {
    id: 'graduates-placed',
    title: 'Graduates Placed',
    value: '500+',
    description: 'Since 2008',
    icon: Users
  },
  {
    id: 'partner-airlines',
    title: 'Partner Airlines',
    value: '25+',
    description: 'Worldwide recruitment partners',
    icon: Plane
  },
  {
    id: 'career-advancement',
    title: 'Career Advancement',
    value: '85%',
    description: 'Promoted within 2 years',
    icon: TrendingUp
  },
  {
    id: 'salary-increase',
    title: 'Average Salary Increase',
    value: '40%',
    description: 'After course completion',
    icon: Star
  },
  {
    id: 'international-placement',
    title: 'International Placements',
    value: '70%',
    description: 'Work abroad opportunities',
    icon: MapPin
  }
];

/**
 * Industry Growth Trends
 */
export const industryTrends = {
  globalGrowth: '4.5% annually',
  asianMarketGrowth: '6.2% annually',
  jobCreationForecast: '2.4 million new jobs by 2030',
  femaleParticipation: '65% of cabin crew positions',
  averageCareerSpan: '15-20 years',
  retirementAge: '55-60 years'
};

/**
 * Salary Benchmarks by Experience Level
 */
export const salaryBenchmarks = {
  'entry-level': {
    local: 'LKR 45,000 - 70,000',
    regional: 'LKR 80,000 - 120,000',
    international: 'LKR 120,000 - 180,000'
  },
  'experienced': {
    local: 'LKR 70,000 - 100,000',
    regional: 'LKR 120,000 - 160,000',
    international: 'LKR 180,000 - 250,000'
  },
  'senior': {
    local: 'LKR 100,000 - 140,000',
    regional: 'LKR 160,000 - 220,000',
    international: 'LKR 250,000 - 350,000'
  },
  'management': {
    local: 'LKR 140,000 - 200,000',
    regional: 'LKR 220,000 - 300,000',
    international: 'LKR 350,000 - 500,000+'
  }
};

/**
 * Skills in High Demand
 */
export const inDemandSkills = [
  'Multi-language proficiency',
  'Cultural sensitivity and awareness',
  'Emergency response and first aid',
  'Customer service excellence',
  'Digital technology adaptation',
  'Conflict resolution and de-escalation',
  'Leadership and team management',
  'Stress management and resilience',
  'Professional grooming and presentation',
  'Regulatory compliance knowledge'
];

/**
 * Geographic Opportunities
 */
export const geographicOpportunities = {
  'Middle East': {
    countries: ['UAE', 'Qatar', 'Saudi Arabia', 'Oman', 'Kuwait'],
    averageSalary: 'USD 2,500 - 4,500',
    benefits: 'Tax-free income, accommodation, healthcare',
    culturalRequirements: 'Conservative dress code, cultural sensitivity'
  },
  'Asia Pacific': {
    countries: ['Singapore', 'Hong Kong', 'Malaysia', 'Thailand', 'Philippines'],
    averageSalary: 'USD 2,000 - 3,500',
    benefits: 'Regional travel, career progression, training opportunities',
    culturalRequirements: 'English proficiency, cultural adaptability'
  },
  'Europe': {
    countries: ['Germany', 'Switzerland', 'Austria', 'Netherlands', 'UK'],
    averageSalary: 'EUR 2,200 - 3,800',
    benefits: 'EU work rights, social security, career stability',
    culturalRequirements: 'European language skills, cultural integration'
  },
  'Americas': {
    countries: ['USA', 'Canada', 'Brazil', 'Mexico', 'Chile'],
    averageSalary: 'USD 2,800 - 4,200',
    benefits: 'Career advancement, diverse routes, competitive benefits',
    culturalRequirements: 'English/Spanish proficiency, visa requirements'
  }
};

/**
 * Utility Functions
 */

/**
 * Get job categories by industry sector
 */
export const getJobCategoriesBySector = (sector: string): JobCategory[] => {
  const sectorMapping: { [key: string]: string[] } = {
    'airline': ['international-airlines', 'customer-service'],
    'government': ['regulatory-affairs'],
    'hospitality': ['resort-travel'],
    'operations': ['ground-operations'],
    'education': ['aviation-training']
  };

  const categoryIds = sectorMapping[sector] || [];
  return jobCategories.filter(category => categoryIds.includes(category.id));
};

/**
 * Get career progression by level
 */
export const getCareerProgressionByLevel = (level: string): CareerProgression | undefined => {
  return careerProgression.find(stage => stage.level.toLowerCase() === level.toLowerCase());
};

/**
 * Calculate potential earnings over career span
 */
export const calculateCareerEarnings = (startingSalary: number, annualIncrease: number = 0.08, years: number = 20): number => {
  let totalEarnings = 0;
  let currentSalary = startingSalary;

  for (let year = 0; year < years; year++) {
    totalEarnings += currentSalary * 12; // Monthly to annual
    currentSalary *= (1 + annualIncrease);
  }

  return Math.round(totalEarnings);
};

/**
 * Get recommended skills for career level
 */
export const getRecommendedSkills = (careerLevel: string): string[] => {
  const skillMapping: { [key: string]: string[] } = {
    'entry': inDemandSkills.slice(0, 5),
    'experienced': inDemandSkills.slice(2, 8),
    'senior': inDemandSkills.slice(4, 10),
    'management': inDemandSkills
  };

  return skillMapping[careerLevel] || inDemandSkills;
};

/**
 * Get job opportunities by salary range
 */
export const getJobOpportunitiesBySalary = (minSalary: number): JobCategory[] => {
  return jobCategories.filter(category => {
    const salaryRange = category.salaryRange;
    const minSalaryFromRange = parseInt(salaryRange.split(' - ')[0].replace(/[^\d]/g, ''));
    return minSalaryFromRange >= minSalary;
  });
};

/**
 * Export all job opportunities as JobOpportunity interface format
 */
export const getAllJobOpportunities = (): JobOpportunity[] => {
  return jobCategories.map(category => ({
    title: category.title,
    description: category.description,
    employers: category.employers,
    salaryRange: category.salaryRange,
    icon: category.icon.name || 'briefcase'
  }));
};