import React, { useState } from 'react';
import { ChevronRight, Plane, BookOpen, Laptop, Users } from 'lucide-react';
const ProgramsSection = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const programs = [{
    id: 0,
    title: 'Commercial Pilot License',
    icon: <Plane size={28} />,
    description: 'Complete training program to obtain your Commercial Pilot License (CPL) with multi-engine and instrument ratings.',
    features: ['250+ hours of flight time', 'Advanced navigation training', 'Multi-engine endorsement', 'Instrument rating included', 'Job placement assistance'],
    duration: '18-24 months',
    image: 'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: 1,
    title: 'Private Pilot License',
    icon: <Plane size={28} />,
    description: 'Learn to fly for personal enjoyment with our comprehensive Private Pilot License (PPL) program.',
    features: ['40+ hours of flight time', 'Basic navigation training', 'Solo flight experience', 'Ground school included', 'Flexible scheduling'],
    duration: '6-12 months',
    image: 'https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    id: 2,
    title: 'Aviation Theory Courses',
    icon: <BookOpen size={28} />,
    description: 'Comprehensive ground school and theory courses for aspiring pilots and aviation professionals.',
    features: ['Aerodynamics principles', 'Aircraft systems', 'Navigation techniques', 'Aviation regulations', 'Meteorology fundamentals'],
    duration: '3-6 months',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    id: 3,
    title: 'Simulator Training',
    icon: <Laptop size={28} />,
    description: 'Advanced simulator training for pilots looking to enhance their skills or prepare for type ratings.',
    features: ['Full-motion simulators', 'Emergency procedures', 'Instrument flying', 'Type-specific training', 'Performance evaluation'],
    duration: 'Flexible',
    image: 'https://images.unsplash.com/photo-1588412079929-791b9df29a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    id: 4,
    title: 'Instructor Certification',
    icon: <Users size={28} />,
    description: 'Become a certified flight instructor and share your passion for aviation with the next generation of pilots.',
    features: ['Teaching methodologies', 'Advanced flight maneuvers', 'Student assessment techniques', 'Classroom management', 'Safety procedures'],
    duration: '4-6 months',
    image: 'https://images.unsplash.com/photo-1521727857535-28d2047f7586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }];
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  return <section id="programs" className="py-20 bg-[#0a1929] relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0f2942] to-transparent"></div>
    <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full bg-[#B5054A]/10 blur-3xl animate-pulse-slow"></div>
    <div className="absolute right-0 bottom-1/3 w-80 h-80 rounded-full bg-[#D4175C]/10 blur-3xl animate-float"></div>
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Training Programs
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Comprehensive aviation training programs designed to meet
          international standards and prepare you for a successful career in
          aviation.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-[#0f2942]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            {programs.map(program => <ProgramTab key={program.id} program={program} isActive={activeProgram === program.id} onClick={() => setActiveProgram(program.id)} />)}
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-[#0f2942]/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 h-full hover:shadow-xl hover:shadow-[#B5054A]/10 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div>
                <div className="flex items-center text-[#D4175C] mb-4 animate-fadeIn">
                  {programs[activeProgram].icon}
                  <h3 className="text-2xl font-bold ml-3">
                    {programs[activeProgram].title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 animate-fadeIn">
                  {programs[activeProgram].description}
                </p>
                <div className="mb-6 animate-fadeIn">
                  <div className="text-white font-semibold mb-2">
                    Program Highlights:
                  </div>
                  <ul className="space-y-2">
                    {programs[activeProgram].features.map((feature, index) => <li key={index} className="flex items-start feature-item" style={{
                      animationDelay: `${index * 100}ms`
                    }}>
                      <ChevronRight size={18} className="text-[#D4175C] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>)}
                  </ul>
                </div>
                <div className="text-white mb-6 animate-fadeIn">
                  <span className="font-semibold">Duration:</span>{' '}
                  {programs[activeProgram].duration}
                </div>
                <button onClick={scrollToContact} className="px-6 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium relative overflow-hidden group animate-fadeIn">
                  <span className="relative z-10">Apply Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#D4175C] to-[#B5054A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </div>
              <div className="relative h-64 md:h-full rounded-xl overflow-hidden group animate-fadeIn">
                <img src={programs[activeProgram].image} alt={programs[activeProgram].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-transparent to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B5054A]/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .feature-item {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
  </section>;
};
const ProgramTab = ({
  program,
  isActive,
  onClick
}) => <div className={`p-4 cursor-pointer transition-all duration-300 border-l-4 ${isActive ? 'bg-[#B5054A]/20 border-[#B5054A]' : 'bg-transparent border-transparent hover:bg-white/5 hover:border-[#D4175C]/50'}`} onClick={onClick}>
    <div className="flex items-center">
      <div className={`mr-3 ${isActive ? 'text-[#D4175C]' : 'text-gray-400'}`}>
        {program.icon}
      </div>
      <div>
        <h4 className={`font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>
          {program.title}
        </h4>
        <p className="text-sm text-gray-400">{program.duration}</p>
      </div>
    </div>
  </div>;
export default ProgramsSection;