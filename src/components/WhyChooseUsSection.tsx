import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

// TypeScript interface for cabin crew benefits
interface CabinCrewBenefit {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

// Cabin crew benefits data array
const cabinCrewBenefits: CabinCrewBenefit[] = [
  {
    id: 'international-course',
    emoji: '✈️',
    title: 'International Cabin Crew Course',
    description: 'Empowering the Next Generation of Aviation Professionals with comprehensive training designed to meet global industry standards.'
  },
  {
    id: 'safety-first-training',
    emoji: '🛡️',
    title: 'Safety-First Training Philosophy',
    description: 'Master essential safety procedures, emergency protocols, and life-saving techniques with our industry-leading safety training program.'
  },
  {
    id: 'experienced-instructors',
    emoji: '👩‍✈️',
    title: 'Internationally Experienced Instructors',
    description: 'Learn from certified professionals with extensive global aviation experience and deep industry knowledge.'
  },
  {
    id: 'online-theory-modules',
    emoji: '💻',
    title: 'Dynamic Online Theory Modules',
    description: 'Access interactive online learning platforms with comprehensive theoretical knowledge and flexible study schedules.'
  },
  {
    id: 'practical-training',
    emoji: '🧪',
    title: 'Intensive 2-Day Practical Training',
    description: 'Hands-on workshop experience including fire drills, first aid training, water survival techniques, and emergency procedures.'
  },
  {
    id: 'customized-learning',
    emoji: '📈',
    title: 'Customized Learning Experience',
    description: 'Personalized training approach tailored to your individual learning style, pace, and career aspirations.'
  },
  {
    id: 'global-certification',
    emoji: '🌍',
    title: 'Globally Recognized Certification',
    description: 'Earn internationally accepted certification that opens doors to career opportunities with airlines worldwide.'
  },
  {
    id: 'realistic-simulations',
    emoji: '🎯',
    title: 'Realistic Inflight Simulations',
    description: 'Practice real-world scenarios in authentic cabin environments with state-of-the-art simulation technology.'
  },
  {
    id: 'aviation-english',
    emoji: '🗣️',
    title: 'Aviation English & Communication Excellence',
    description: 'Develop professional communication skills and aviation-specific English proficiency for international operations.'
  },
  {
    id: 'grooming-etiquette',
    emoji: '💼',
    title: 'Grooming, Etiquette & Cultural Awareness',
    description: 'Master professional presentation, international etiquette, and cultural sensitivity for diverse passenger interactions.'
  },
  {
    id: 'airline-network',
    emoji: '🤝',
    title: 'Strong Airline Industry Network',
    description: 'Benefit from our extensive connections with airlines, providing career opportunities, interview referrals, and industry insights.'
  }
];
// Custom hook for counting animation
const useCountAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
};

const WhyChooseUsSection = () => {
  return <section id="why-choose-us" className="py-20 bg-[#0f2942] relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
    <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
    <div className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-[#D4175C]/10 blur-3xl"></div>
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5054A] to-[#D4175C]">DAMI</span> International Cabin Crew Course
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We provide comprehensive cabin crew training that combines safety excellence,
          international standards, and practical experience to prepare you for a successful
          career in the aviation industry.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="animate-float">
            <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
              <img
                src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1754048688/DSC05812_copy_cgwrsq.jpg"
                alt="DAMI Aviation Cabin Crew Training"
                className="w-full h-[280px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
              />
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
              <img
                src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1753771763/DSC09425_yteepw.jpg"
                alt="DAMI Aviation Professional Training Environment"
                className="w-full h-[280px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
              />
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
              <img
                src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1753771691/DSC06046_noijka.jpg"
                alt="DAMI Aviation Cabin Crew Training Facilities"
                className="w-full h-[280px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/20 transition-all duration-500">
            <div className="space-y-6">
              {cabinCrewBenefits.map((benefit) => (
                <ComparisonItem
                  key={benefit.id}
                  emoji={benefit.emoji}
                  title={benefit.title}
                >
                  {benefit.description}
                </ComparisonItem>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="bg-gradient-to-r from-[#B5054A] to-[#D4175C] rounded-2xl p-1">
          <div className="bg-[#0a1929] rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StatsCard number="2+" label="Years Experience" />
              <StatsCard number="100+" label="Graduates Flying Worldwide" />
              <StatsCard number="99%" label="Safety Record" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
  </section>;
};
interface ComparisonItemProps {
  emoji?: string;
  title: string;
  children: React.ReactNode;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({
  emoji,
  title,
  children
}) => <div className="group hover:transform hover:translate-x-2 transition-transform duration-300">
    <div className="flex items-start">
      <div className="flex items-center mt-1 mr-3 flex-shrink-0">
        {emoji && (
          <span className="text-xl mr-2 group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </span>
        )}
        <CheckCircle className="text-[#D4175C] group-hover:scale-110 transition-transform duration-300" size={20} />
      </div>
      <div>
        <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[#D4175C] transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-300">{children}</p>
      </div>
    </div>
  </div>;
interface StatsCardProps {
  number: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  number,
  label
}) => {
  // Extract numeric value from string (e.g., "100+" -> 100, "99%" -> 99)
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const suffix = number.replace(/[0-9]/g, '');

  const { count, ref } = useCountAnimation(numericValue, 2500);

  return (
    <div ref={ref} className="text-center transform hover:scale-105 transition-all duration-300 group">
      <div className="text-4xl md:text-5xl font-bold text-[#D4175C] mb-2 group-hover:text-[#B5054A] transition-colors duration-300">
        {count}{suffix}
      </div>
      <div className="text-white text-lg group-hover:text-gray-300 transition-colors duration-300">{label}</div>
    </div>
  );
};
export default WhyChooseUsSection;