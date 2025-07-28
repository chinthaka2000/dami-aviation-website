import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { CheckCircle } from 'lucide-react';
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
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5054A] to-[#D4175C]">DAMI</span> Aviation
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We pride ourselves on providing the highest quality aviation
          training with a focus on safety, technology, and student success.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-float">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
            <img
              src="/whych.jpg"
              alt="Why Choose DAMI Aviation"
              className="w-full h-[400px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
            />
          </div>
        </div>
        <div>
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/20 transition-all duration-500">
            <div className="space-y-6">
              <ComparisonItem title="Safety First Approach">
                Our rigorous safety protocols and modern aircraft fleet ensure
                the highest standards of safety throughout your training.
              </ComparisonItem>
              <ComparisonItem title="Internationally Certified Instructors">
                Learn from experienced pilots with thousands of flight hours
                and international certifications.
              </ComparisonItem>
              <ComparisonItem title="State-of-the-Art Simulators">
                Train on the latest full-motion simulators that replicate
                real-world flying conditions and scenarios.
              </ComparisonItem>
              <ComparisonItem title="Personalized Training Plans">
                We tailor our programs to match your learning pace and career
                goals, ensuring optimal progress.
              </ComparisonItem>
              <ComparisonItem title="Global Industry Connections">
                Our partnerships with airlines and aviation companies provide
                career opportunities for graduates.
              </ComparisonItem>
              <ComparisonItem title="Comprehensive Ground School">
                In-depth theoretical knowledge combined with practical
                application for a well-rounded education.
              </ComparisonItem>
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
  title: string;
  children: React.ReactNode;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({
  title,
  children
}) => <div className="group hover:transform hover:translate-x-2 transition-transform duration-300">
    <div className="flex items-start">
      <CheckCircle className="text-[#D4175C] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
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