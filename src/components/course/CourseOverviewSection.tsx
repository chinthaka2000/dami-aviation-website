import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { Award, Clock, Users, ChevronDown, Plane, Star } from 'lucide-react';
import { handleRegister } from '../../utils/whatsapp';

const CourseOverviewSection = () => {
  const aviationAnimation = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (aviationAnimation.current) {
      const anim = lottie.loadAnimation({
        container: aviationAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/robo.json'
      });
      return () => anim.destroy();
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules');
    if (modulesSection) {
      window.scrollTo({
        top: modulesSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };



  return (
    <section id="overview" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background with Enhanced Gradients */}
      <div className="absolute inset-0 bg-[#0a1929]">
        <div className="absolute inset-0 opacity-100">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/aviation-hero.jpg')] bg-cover bg-center animate-ken-burns"></div>
        </div>
        {/* Multi-layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1929]/70 to-[#0a1929]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929]/30 via-transparent to-[#0a1929]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-transparent to-transparent"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Clouds Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Brand Logo Overlay */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <img
          src="/Logo.png"
          alt="DAMI Aviation Logo Watermark"
          className="absolute right-0 top-1/4 w-1/2 max-w-md object-contain"
        />
      </div>

      {/* International Certification Badge */}
      <div className="absolute top-24 right-4 md:right-8 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20 animate-glow">
        <div className="flex items-center space-x-2">
          <Award className="text-[#D4175C]" size={20} />
          <div className="hidden sm:block">
            <div className="text-white font-bold text-xs md:text-sm">International</div>
            <div className="text-gray-300 text-xs">Training Program</div>
          </div>
          <div className="sm:hidden">
            <div className="text-white font-bold text-xs">DAMI</div>
          </div>
        </div>
      </div>

      {/* Pink Glow Effects */}
      <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-[#B5054A]/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute right-1/4 bottom-1/3 w-72 h-72 rounded-full bg-[#D4175C]/20 blur-3xl animate-float"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left animate-fadeIn">
            <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
              <Award className="text-[#D4175C] mr-2" size={16} />
              <span className="text-white text-sm font-medium">Dami Certified Program</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slideUp">
              Aviation Cabin Crew <br />
              <span className="text-[#D4175C] animate-highlight">
                Training Course
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 animate-fadeIn delay-100">
              Launch your career in aviation with our comprehensive 3-month cabin crew training program.
              Gain Dami certification and academic transcript upon successful completion.
            </p>

            {/* Course Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-fadeIn delay-200">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Clock className="text-[#D4175C] mb-2" size={20} />
                <div className="text-white font-semibold text-sm">Duration</div>
                <div className="text-gray-300 text-xs">3 Months</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Award className="text-[#D4175C] mb-2" size={20} />
                <div className="text-white font-semibold text-sm">Certification</div>
                <div className="text-gray-300 text-xs">Dami Qualified</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Users className="text-[#D4175C] mb-2" size={20} />
                <div className="text-white font-semibold text-sm">Training</div>
                <div className="text-gray-300 text-xs">Theory & Practical</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeIn delay-300">
              <button
                onClick={handleRegister}
                className="px-8 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Register Now - 1000 Rs
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4175C] to-[#B5054A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>

              <button
                onClick={scrollToModules}
                className="px-8 py-3 bg-transparent border-2 border-[#D4175C]/50 hover:border-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-lg group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Course Details
                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="relative h-64 md:h-96 lg:h-[500px] animate-float">
            <div ref={aviationAnimation} className="w-full h-full"></div>
          </div>
        </div>

        {/* Course Description */}
        <div className="mt-16 text-center animate-fadeIn delay-400">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Professional Aviation Training Excellence
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our comprehensive cabin crew training program is designed to meet international aviation standards
              and prepare you for a successful career in the aviation industry. With international certification and
              hands-on practical training, you'll gain the skills and confidence needed to excel as a professional
              cabin crew member.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4175C]/30 transition-all duration-300">
                <div className="text-[#D4175C] text-2xl font-bold mb-2">100%</div>
                <div className="text-white font-semibold mb-1">Job Placement</div>
                <div className="text-gray-400 text-sm">Support & Guidance</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4175C]/30 transition-all duration-300">
                <div className="text-[#D4175C] text-2xl font-bold mb-2">2+</div>
                <div className="text-white font-semibold mb-1">Years Experience</div>
                <div className="text-gray-400 text-sm">In Aviation Training</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4175C]/30 transition-all duration-300">
                <div className="text-[#D4175C] text-2xl font-bold mb-2">100+</div>
                <div className="text-white font-semibold mb-1">Graduates</div>
                <div className="text-gray-400 text-sm">Successfully Placed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4175C]/30 transition-all duration-300">
                <div className="text-[#D4175C] text-2xl font-bold mb-2">DAMI</div>
                <div className="text-white font-semibold mb-1">Certified</div>
                <div className="text-gray-400 text-sm">International Standard</div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator - Enhanced positioning */}
      <div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer bg-gradient-to-b from-[#0a1929] to-[#0a1929]/95 backdrop-blur-md rounded-full p-4 border-2 border-[#D4175C] hover:border-[#D4175C]/80 transition-all duration-300 hover:bg-[#D4175C]/20 z-[10000] shadow-2xl hover:shadow-[#D4175C]/50 ring-2 ring-[#D4175C]/28"
        onClick={scrollToModules}
      >
        <ChevronDown size={20} className="text-[#D4175C] drop-shadow-lg" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes highlight {
          0% {
            color: white;
            text-shadow: none;
          }
          100% {
            color: #d4175c;
            text-shadow: 0 0 15px rgba(212, 23, 92, 0.5);
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
        @keyframes ken-burns {
          0% {
            transform: scale(1) translateX(0);
          }
          50% {
            transform: scale(1.1) translateX(-2%);
          }
          100% {
            transform: scale(1.05) translateX(1%);
          }
        }
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes cloud-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(calc(100vw + 100%));
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212, 23, 92, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(212, 23, 92, 0.6);
          }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite alternate;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-highlight {
          animation: highlight 2s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #D4175C, #B5054A);
          border-radius: 50%;
          animation: particle-float linear infinite;
        }
        .particle-1 {
          left: 10%;
          animation-duration: 15s;
          animation-delay: 0s;
        }
        .particle-2 {
          left: 30%;
          animation-duration: 18s;
          animation-delay: 3s;
        }
        .particle-3 {
          left: 50%;
          animation-duration: 12s;
          animation-delay: 6s;
        }
        .particle-4 {
          left: 70%;
          animation-duration: 20s;
          animation-delay: 9s;
        }
        .particle-5 {
          left: 90%;
          animation-duration: 16s;
          animation-delay: 12s;
        }

        .cloud {
          position: absolute;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40"><path d="M20 30c-5 0-10-5-10-10s5-10 10-10c2 0 4 1 6 2 2-3 5-5 9-5 6 0 11 5 11 11 0 1 0 2-1 3 4 1 7 5 7 9 0 5-4 9-9 9H20z" fill="rgba(255,255,255,0.1)"/></svg>') no-repeat;
          background-size: contain;
          opacity: 0.3;
        }
        .cloud-1 {
          width: 200px;
          height: 80px;
          top: 20%;
          left: -200px;
          animation: cloud-move 25s linear infinite;
          animation-delay: 0s;
        }
        .cloud-2 {
          width: 150px;
          height: 60px;
          top: 40%;
          left: -150px;
          animation: cloud-move 30s linear infinite;
          animation-delay: 8s;
        }
        .cloud-3 {
          width: 180px;
          height: 72px;
          top: 60%;
          left: -180px;
          animation: cloud-move 35s linear infinite;
          animation-delay: 15s;
        }

        .delay-100 {
          animation-delay: 0.3s;
        }
        .delay-200 {
          animation-delay: 0.6s;
        }
        .delay-300 {
          animation-delay: 0.9s;
        }
        .delay-400 {
          animation-delay: 1.2s;
        }

        /* Responsive enhancements */
        @media (max-width: 768px) {
          .particle {
            display: none;
          }
          .cloud {
            opacity: 0.2;
          }
          .animate-ken-burns {
            animation-duration: 15s;
          }
        }

        /* Enhanced hover effects */
        .group:hover .animate-float {
          animation-duration: 3s;
        }

        /* Shimmer effect for buttons */
        .group:hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: shimmer 0.6s ease-out;
        }

        /* Glow effect for International badge */
        .animate-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CourseOverviewSection;