import React from 'react';
import { Briefcase, TrendingUp, Users, Globe, Star, Plane } from 'lucide-react';
import { jobCategories, careerProgression, successMetrics } from '../../data/jobOpportunities';

const JobOpportunitiesSection: React.FC = () => {

  return (
    <section id="job-opportunities" className="py-20 bg-gradient-to-b from-[#0a1929] to-[#0f2942] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full bg-[#B5054A]/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-[#D4175C]/10 blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
            <Briefcase className="text-[#D4175C] mr-2" size={16} />
            <span className="text-white text-sm font-medium">Career Opportunities</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Aviation <span className="text-[#D4175C]">Career Awaits</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover diverse career paths in the aviation industry. Our comprehensive training opens doors
            to exciting opportunities with leading airlines and aviation companies worldwide.
          </p>
        </div>

        {/* Job Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {jobCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-[#0f2942]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-[#D4175C]/30 transition-all duration-300 hover:transform hover:scale-[1.02] animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D4175C]/20 rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="text-[#D4175C]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <div className="text-[#D4175C] text-sm font-medium">{category.salaryRange}</div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Career Positions:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {category.opportunities.map((opportunity, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#D4175C] mr-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Top Employers:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.employers.map((employer, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#B5054A]/20 text-[#D4175C] text-xs font-medium rounded-full border border-[#B5054A]/30"
                    >
                      {employer}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Progression Visualization */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Career <span className="text-[#D4175C]">Progression Path</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Chart your professional growth in the aviation industry with clear advancement opportunities
              and structured career development.
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4175C] to-[#B5054A] rounded-full hidden md:block"></div>

            <div className="space-y-8 md:space-y-12">
              {careerProgression.map((stage, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-[#0f2942]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#D4175C]/30 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="text-[#D4175C] mr-3" size={20} />
                        <span className="text-[#D4175C] text-sm font-medium">{stage.level}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{stage.position}</h4>
                      <div className="text-gray-400 text-sm mb-3">{stage.duration}</div>
                      <p className="text-gray-300">{stage.description}</p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:flex w-12 h-12 bg-[#D4175C] rounded-full items-center justify-center relative z-10 mx-4">
                    <Star className="text-white" size={20} />
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="bg-[#0f2942]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our <span className="text-[#D4175C]">Success Story</span>
            </h3>
            <p className="text-gray-300">
              Join hundreds of successful graduates who have launched their aviation careers with our training program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {successMetrics.slice(0, 4).map((metric, index) => (
              <div key={metric.id} className="text-center">
                <div className="w-16 h-16 bg-[#D4175C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="text-[#D4175C]" size={24} />
                </div>
                <div className="text-[#D4175C] text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-white font-semibold mb-1">{metric.title}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </div>
            ))}
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

export default JobOpportunitiesSection;