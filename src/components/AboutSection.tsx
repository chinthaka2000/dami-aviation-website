import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Award, Shield, Gauge, Clock } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  children: React.ReactNode;
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
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
          Empowering aspiring professionals with world-class training for diverse roles in the global aviation industry — including cabin crew, airport service agents, cargo officers, duty-free personnel, and security assistants.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Journey to Excellence
            </h3>

            <div className="space-y-8">
              <TimelineItem year="2024" title="Founding a Vision for Aviation Careers">
                Dami Aviation Lanka was established with a clear and ambitious mission: to empower aspiring professionals with world-class training for diverse roles in the global aviation industry — including cabin crew, airport service agents, cargo officers, duty-free personnel, and security assistants. From day one, our commitment has been to transform passion into profession through comprehensive, practical, and industry-aligned education.
              </TimelineItem>
              <TimelineItem year="2024" title="Launch of Our Pioneer Training Program">
                We proudly conducted our first intensive practical training batch, offering hands-on, immersive modules in critical areas such as fire and rescue operations, water survival techniques, basic first aid, professional grooming, and physical fitness. Designed to meet rigorous international airline standards, these sessions equip our trainees with the real-world skills essential for aviation careers.
              </TimelineItem>
              <TimelineItem year="2024" title="Forging Strategic Industry Partnerships">
                Recognizing the importance of strong industry connections, we built valuable alliances with leading airlines, including SriLankan Airlines, Qatar Airways, and Emirates. These partnerships provide direct career pathways and recruitment opportunities for our graduates, connecting their training with global employment prospects.
              </TimelineItem>
              <TimelineItem year="2025" title="Advancing Training Excellence">
                In our continuous pursuit of excellence, we enriched our curriculum by integrating advanced modules on emergency response protocols, elite customer service etiquette, and comprehensive fitness regimens. This holistic approach ensures our trainees emerge fully prepared, confident, and competitive for the dynamic demands of airline operations.
              </TimelineItem>
              <TimelineItem year="2025" title="Expanding Our Training Facilities and Reach">
                To support our growing student base and training needs, we expanded our infrastructure across multiple locations, notably establishing a dedicated training center at Jayathilake Ground, Nawalapitiya. Equipped for survival drills, fitness conditioning, and safety simulations, our facilities reflect our commitment to delivering superior practical education in professionally controlled environments.
              </TimelineItem>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="space-y-6">
            <div className="animate-float">
              <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
                <img
                  src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1757154142/5_wmpm8r.jpg"
                  alt="DAMI Aviation Training"
                  className="w-full h-[280px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
                />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
                <img
                  src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1753771713/DSC09388_v8qvgi.jpg"
                  alt="DAMI Aviation Journey to Excellence"
                  className="w-full h-[280px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
                />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
                <img
                  src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1757154151/31_og2s8y.jpg"
                  alt="DAMI Aviation Training Excellence"
                  className="w-full h-[280px] object-cover rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Award className="text-[#D4175C]" size={32} />}
          title="Recognized Certification"
          description="Industry-recognized certification for aspiring cabin crew professionals"
        />
        <StatCard
          icon={<Shield className="text-[#D4175C]" size={32} />}
          title="Safety & Emergency Training"
          description="Comprehensive safety procedures and emergency handling skills"
        />
        <StatCard
          icon={<Gauge className="text-[#D4175C]" size={32} />}
          title="In-Flight Service Excellence"
          description="Hands-on training in hospitality, communication, and passenger care"
        />
        <StatCard
          icon={<Clock className="text-[#D4175C]" size={32} />}
          title="Flexible Course Schedules"
          description="Weekend and weekday batches to suit your lifestyle"
        />
      </div>

      {/* Official Registration & Certification Section */}
      <div className="mt-20 mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Official Registration & <span className="text-[#D4175C]">Certification</span>
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            DAMI Aviation Lanka (Pvt) Ltd is officially registered with the Government of Sri Lanka
            and operates under strict regulatory compliance to ensure the highest standards of aviation training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#D4175C]/20 rounded-full flex items-center justify-center mr-4">
                <Award className="text-[#D4175C]" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white">Government Registered</h4>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-[#D4175C] pl-4">
                <h5 className="text-white font-semibold mb-2">Certificate of Incorporation</h5>
                <p className="text-gray-300 text-sm">
                  Officially incorporated as a Private Company under the Companies Act No. 7 of 2007
                  by the Democratic Socialist Republic of Sri Lanka.
                </p>
              </div>

              <div className="border-l-4 border-[#B5054A] pl-4">
                <h5 className="text-white font-semibold mb-2">Registration Details</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li><strong>Company Name:</strong> DAMI AVIATION LANKA (PVT) LTD</li>
                  <li><strong>Registration Number:</strong> PV 00298020</li>
                  <li><strong>Incorporation Date:</strong> 2024</li>
                  <li><strong>Status:</strong> Active & Compliant</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#D4175C]/60 pl-4">
                <h5 className="text-white font-semibold mb-2">Regulatory Compliance</h5>
                <p className="text-gray-300 text-sm">
                  Operating under full legal compliance with Sri Lankan aviation training regulations
                  and international aviation standards for professional development programs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[#B5054A]/10 hover:border-[#D4175C]/20 transition-all duration-500">
            <div className="text-center mb-4">
              <h4 className="text-lg font-bold text-white mb-2">Official Certificate</h4>
              <p className="text-gray-400 text-sm">Certificate of Incorporation - Government of Sri Lanka</p>
            </div>

            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1754654328/damice_sduble.jpg"
                alt="DAMI Aviation Lanka Certificate of Incorporation"
                className="w-full h-[400px] object-contain rounded-xl border-2 border-[#D4175C]/30 shadow-2xl shadow-[#B5054A]/20 hover:border-[#D4175C]/60 hover:shadow-[#D4175C]/30 transition-all duration-500 bg-white/5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="mt-4 text-center">
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                <Shield className="mr-2" size={14} />
                Verified & Authentic
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-[#0a1929]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
            <div className="w-12 h-12 bg-[#D4175C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-[#D4175C]" size={24} />
            </div>
            <h5 className="text-white font-semibold mb-2">Legal Compliance</h5>
            <p className="text-gray-400 text-sm">Fully compliant with Sri Lankan corporate and aviation training regulations</p>
          </div>

          <div className="text-center bg-[#0a1929]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
            <div className="w-12 h-12 bg-[#B5054A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-[#B5054A]" size={24} />
            </div>
            <h5 className="text-white font-semibold mb-2">Government Registered</h5>
            <p className="text-gray-400 text-sm">Official registration with the Registrar of Companies, Sri Lanka</p>
          </div>

          <div className="text-center bg-[#0a1929]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
            <div className="w-12 h-12 bg-[#D4175C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gauge className="text-[#D4175C]" size={24} />
            </div>
            <h5 className="text-white font-semibold mb-2">Quality Assured</h5>
            <p className="text-gray-400 text-sm">Maintaining highest standards in aviation training and professional development</p>
          </div>
        </div>
      </div>


    </div>
    <style>{`
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
const TimelineItem: React.FC<TimelineItemProps> = ({
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
const StatCard: React.FC<StatCardProps> = ({
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