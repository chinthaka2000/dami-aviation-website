import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Award, Shield, Gauge, Clock } from 'lucide-react';
const AboutSection = () => {
  const dashboardAnimation = useRef(null);
  useEffect(() => {
    if (dashboardAnimation.current) {
      const anim = lottie.loadAnimation({
        container: dashboardAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/packages/lf20_kl6s0fzh.json' // Cockpit dashboard animation
      });
      return () => anim.destroy();
    }
  }, []);
  return <section id="about" className="py-20 bg-[#0f2942] relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
    <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
    <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#D4175C]/10 blur-3xl"></div>
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About DAMI Aviation
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          With over 2 years of excellence in aviation training, we've been
          shaping the pilots of tomorrow with cutting-edge technology and
          expert instruction.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Journey to Excellence
            </h3>

            <div className="space-y-8">
              <TimelineItem year="2024" title="Foundation">
                Dami Aviation Lanka was established with a clear vision: to empower aspiring individuals with professional training for careers as cabin crew, airport service agents, cargo officers, duty-free agents, and security assistants in the global aviation industry.
              </TimelineItem>
              <TimelineItem year="2024" title="First Training Batch">
                Successfully launched our first practical training batch, featuring hands-on programs in fire safety, first aid, water survival, professional grooming, and physical fitness — all designed to meet international airline standards.
              </TimelineItem>
              <TimelineItem year="2024" title="Industry Partnerships">
                Built strong connections with leading airlines including SriLankan Airlines, Qatar Airways, and Emirates, creating career pathways for our graduates in the global aviation sector.
              </TimelineItem>
              <TimelineItem year="2025" title="Training Excellence">
                Enhanced our curriculum with advanced modules in emergency response, service etiquette, and fitness standards to ensure our trainees are fully prepared for real-world airline environments.
              </TimelineItem>
              <TimelineItem year="2025" title="Facility Expansion">
                Expanded training infrastructure across multiple locations, including dedicated facilities at Jayathilake Ground, Nawalapitiya, for survival drills, fitness training, and safety simulations.
              </TimelineItem>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
            <img
              src="/aboutus.jpg"
              alt="DAMI Aviation Training"
              className="w-full h-[500px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Award className="text-[#D4175C]" size={32} />} title="Certified Training" description="Internationally recognized certification and training programs" />
        <StatCard icon={<Shield className="text-[#D4175C]" size={32} />} title="Safety First" description="Rigorous safety protocols and modern equipment" />
        <StatCard icon={<Gauge className="text-[#D4175C]" size={32} />} title="Advanced Simulators" description="Full-motion simulators with realistic flight experiences" />
        <StatCard icon={<Clock className="text-[#D4175C]" size={32} />} title="Flexible Programs" description="Customized training schedules to fit your needs" />
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
const TimelineItem = ({
  year,
  title,
  children
}) => <div className="relative pl-10 border-l-2 border-[#B5054A]/30 group hover:border-[#D4175C] transition-colors duration-300">
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#B5054A] rounded-full group-hover:scale-125 group-hover:bg-[#D4175C] transition-all duration-300"></div>
    <div className="text-[#D4175C] font-bold mb-1">{year}</div>
    <h4 className="text-white font-semibold mb-2 group-hover:text-[#D4175C] transition-colors duration-300">
      {title}
    </h4>
    <p className="text-gray-300">{children}</p>
  </div>;
const StatCard = ({
  icon,
  title,
  description
}) => <div className="bg-[#0a1929]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-[#D4175C]/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#B5054A]/10 group">
    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4175C] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-300">{description}</p>
  </div>;
export default AboutSection;