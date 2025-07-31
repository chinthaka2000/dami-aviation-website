import React, { useState } from 'react';
import { BookOpen, Users } from 'lucide-react';
import AccordionCard from '../ui/AccordionCard';
import { CourseModule } from '../../types/course';
import { getModulesByType, calculateTotalDuration } from '../../data/courseModules';

const CourseModulesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'theoretical' | 'practical'>('theoretical');
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  // Get modules from the data file
  const activeModules = getModulesByType(activeTab);

  // Handle accordion toggle
  const handleAccordionToggle = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  // Reset expanded module when tab changes
  const handleTabChange = (tab: 'theoretical' | 'practical') => {
    setActiveTab(tab);
    setExpandedModule(null);
  };

  return (
    <section id="modules" className="py-20 bg-[#0a1929] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/aircraft-interior.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/80 via-[#0a1929]/60 to-[#0a1929]"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#B5054A]/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#D4175C]/10 blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
            <BookOpen className="text-[#D4175C] mr-2" size={16} />
            <span className="text-white text-sm font-medium">Course Curriculum</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Training <span className="text-[#D4175C]">Modules</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our internationally recognized curriculum combines theoretical knowledge with hands-on practical training
            to prepare you for a successful career in aviation cabin crew services.
          </p>
        </div>

        {/* Tab Navigation - Mobile Optimized */}
        <div className="flex justify-center mb-12 px-4">
          <div className="bg-[#0f2942]/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/30 w-full max-w-md">
            {/* Mobile: Stacked Layout */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <button
                onClick={() => handleTabChange('theoretical')}
                className={`flex-1 px-4 sm:px-6 py-3 rounded-xl sm:rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === 'theoretical'
                  ? 'bg-[#D4175C] text-white shadow-lg shadow-[#D4175C]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center justify-center">
                  <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Theoretical Learning</span>
                </div>
              </button>
              <button
                onClick={() => handleTabChange('practical')}
                className={`flex-1 px-4 sm:px-6 py-3 rounded-xl sm:rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === 'practical'
                  ? 'bg-[#D4175C] text-white shadow-lg shadow-[#D4175C]/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center justify-center">
                  <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Physical Training</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {activeModules.map((module, index) => (
            <div
              key={module.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionCard
                title={module.title}
                icon={React.createElement(module.icon, { className: "w-5 h-5" })}
                className="h-full hover:transform hover:scale-[1.02] transition-all duration-300"
                isOpen={expandedModule === module.id}
                onToggle={() => handleAccordionToggle(module.id)}
              >
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {module.description}
                  </p>

                  {module.duration && (
                    <div className="flex items-center text-[#D4175C] text-sm font-medium">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Duration: {module.duration}
                    </div>
                  )}

                  <div>
                    <h4 className="text-white font-semibold mb-3">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#D4175C] mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionCard>
            </div>
          ))}
        </div>

        {/* Module Summary */}
        <div className="mt-16 text-center">
          <div className="bg-[#0f2942]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {activeTab === 'theoretical' ? 'Theoretical Learning' : 'Practical Training'} Overview
            </h3>
            <p className="text-gray-300 mb-6">
              {activeTab === 'theoretical'
                ? 'Our comprehensive 10-week theoretical curriculum by Instructor Damith Isuru Lakshan covers all essential knowledge areas from aviation history to career development. Online sessions every Saturday and Sunday, 8:00 PM to 10:30 PM, totaling 60 hours of intensive training aligned with international aviation standards.'
                : 'Our intensive 2-day physical training programme at Jayathilake Ground, Nawalapitiya provides hands-on experience in fire safety, first aid, professional grooming, physical fitness, and water survival training conducted by certified instructors.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-[#D4175C] text-2xl font-bold mb-2">
                  {activeTab === 'theoretical' ? '10+' : '5+'}
                </div>
                <div className="text-white font-semibold">Modules</div>
                <div className="text-gray-400 text-sm">Comprehensive Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4175C] text-2xl font-bold mb-2">
                  {activeTab === 'theoretical' ? '100+' : '2'}
                </div>
                <div className="text-white font-semibold">
                  {activeTab === 'theoretical' ? 'Hours' : 'Days'}
                </div>
                <div className="text-gray-400 text-sm">Training Duration</div>
              </div>
              <div className="text-center">
                <div className="text-[#D4175C] text-2xl font-bold mb-2">DAMI</div>
                <div className="text-white font-semibold">Certified</div>
                <div className="text-gray-400 text-sm">International Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        @keyframes pulse-slow {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.3;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CourseModulesSection;