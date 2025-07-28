import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import { ChevronDown } from 'lucide-react';
import { handleRegister } from '../utils/whatsapp';

const HeroSection = () => {
  const planeAnimation = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (planeAnimation.current) {
      const anim = lottie.loadAnimation({
        container: planeAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets10.lottiefiles.com/packages/lf20_jhu1lqdz.json' // Airplane flying animation
      });
      return () => anim.destroy();
    }
  }, []);
  const navigateToCurriculum = () => {
    navigate('/course#modules');
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-[#0a1929]">
      <div className="absolute inset-0 opacity-100">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1929]/70 to-[#0a1929]"></div>
    </div>



    {/* Clouds Parallax Effect */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
    </div>
    {/* Pink Glow Effects */}
    <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-[#B5054A]/20 blur-3xl animate-pulse-slow"></div>
    <div className="absolute right-1/4 bottom-1/3 w-72 h-72 rounded-full bg-[#D4175C]/20 blur-3xl animate-float"></div>
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        <div className="text-center lg:text-left animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slideUp">
            Build Your Future <br />
            <span className="text-[#D4175C] animate-highlight">
              in the Skies
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 animate-fadeIn delay-100">
            Professional flight training and aviation education for aspiring
            pilots. Take your career to new heights with DAMI Aviation Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeIn delay-200">
            <button onClick={handleRegister} className="px-8 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Enroll Now
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4175C] to-[#B5054A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
            <button onClick={navigateToCurriculum} className="px-8 py-3 bg-transparent border-2 border-[#D4175C]/50 hover:border-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-lg group">
              <span className="relative z-10 flex items-center justify-center">
                Explore Programs
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="relative h-64 md:h-96 lg:h-[500px] animate-float">
          {/* Plane Animation - Base Layer */}
          <div ref={planeAnimation} className="absolute inset-0 w-full h-full z-10"></div>

          {/* Logo Animation - Top Layer */}
          <div className="absolute inset-0 flex justify-center items-start pt-8 md:pt-12 lg:pt-16 z-20">
          </div>
        </div>
      </div>
    </div>
    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer" onClick={navigateToCurriculum}>
      <ChevronDown size={32} className="text-[#D4175C]" />
    </div>
    <style>{`
        .cloud {
          position: absolute;
          background: url('https://assets.codepen.io/721952/cloud.png');
          background-size: cover;
          opacity: 0.4;
        }
        .cloud-1 {
          width: 300px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation: cloud-move 30s linear infinite;
        }
        .cloud-2 {
          width: 200px;
          height: 70px;
          top: 40%;
          right: 15%;
          animation: cloud-move 25s linear infinite;
        }
        .cloud-3 {
          width: 250px;
          height: 85px;
          bottom: 30%;
          left: 30%;
          animation: cloud-move 35s linear infinite;
        }
        @keyframes cloud-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(1000px);
          }
        }
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
        .delay-100 {
          animation-delay: 0.3s;
        }
        .delay-200 {
          animation-delay: 0.6s;
        }
      `}</style>
  </section>;
};
export default HeroSection;