import React, { useEffect, useState } from 'react';
import { Target, Eye, Heart, Users, Award, Clock, MapPin, Phone, Mail, Shirt, BookOpen, Star, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('mission');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'vision', 'objectives', 'dresscode', 'facilities', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#1a2332] to-[#0a1929]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/aviation-hero.jpg')] bg-cover bg-center"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-[#D4175C]">DAMI Aviation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the way in professional aviation training with international standards and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="sticky top-20 z-40 bg-[#0a1929]/95 backdrop-blur-md border-b border-[#D4175C]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {[
              { id: 'mission', label: 'Mission', icon: Target },
              { id: 'vision', label: 'Vision', icon: Eye },
              { id: 'objectives', label: 'Objectives', icon: CheckCircle },
              { id: 'dresscode', label: 'Dress Code', icon: Shirt },
              { id: 'facilities', label: 'Facilities', icon: BookOpen },
              { id: 'contact', label: 'Contact', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === id
                  ? 'bg-[#D4175C] text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-[#D4175C]/20 hover:text-white'
                  }`}
              >
                <Icon size={16} className="mr-2" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mission Section */}
      <section id="mission" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B5054A]/5 to-[#D4175C]/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
                <Target className="text-[#D4175C] mr-2" size={16} />
                <span className="text-white text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Empowering Aviation <span className="text-[#D4175C]">Professionals</span>
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At DAMI Aviation Training Institute, our mission is to provide world-class aviation training
                that meets international standards while fostering excellence, safety, and professionalism
                in the aviation industry.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We are committed to developing skilled, confident, and safety-conscious aviation professionals
                who contribute to the growth and success of the global aviation sector through comprehensive
                theoretical knowledge and hands-on practical training.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section id="vision" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#B5054A]/5 to-[#D4175C]/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
                <Eye className="text-[#D4175C] mr-2" size={16} />
                <span className="text-white text-sm font-medium">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leading Aviation <span className="text-[#D4175C]">Training Excellence</span>
              </h2>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To be the premier aviation training institute recognized globally for producing
                highly skilled and professional cabin crew members who exemplify excellence,
                safety, and service in the aviation industry.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We envision a future where DAMI Aviation graduates are sought after by leading
                airlines worldwide, contributing to safer skies and exceptional passenger experiences
                through their expertise and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B5054A]/5 to-[#D4175C]/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
                <CheckCircle className="text-[#D4175C] mr-2" size={16} />
                <span className="text-white text-sm font-medium">Our Objectives</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Training <span className="text-[#D4175C]">Objectives</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Safety Excellence",
                  description: "Instill comprehensive safety protocols and emergency procedures to ensure passenger and crew safety at all times."
                },
                {
                  title: "Professional Development",
                  description: "Develop professional communication skills, cultural awareness, and service excellence for international aviation standards."
                },
                {
                  title: "Technical Competency",
                  description: "Provide thorough knowledge of aircraft systems, safety equipment, and operational procedures."
                },
                {
                  title: "Customer Service Excellence",
                  description: "Train students in exceptional customer service skills to enhance passenger experience and satisfaction."
                },
                {
                  title: "International Certification",
                  description: "Ensure all graduates meet international aviation standards and obtain recognized certifications."
                },
                {
                  title: "Career Placement Support",
                  description: "Provide comprehensive job placement assistance and career guidance for successful employment."
                }
              ].map((objective, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4175C]/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#D4175C] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{objective.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{objective.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section id="dresscode" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#B5054A]/5 to-[#D4175C]/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
                <Shirt className="text-[#D4175C] mr-2" size={16} />
                <span className="text-white text-sm font-medium">Professional Standards</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dress Code & <span className="text-[#D4175C]">Grooming Standards</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Professional appearance is essential in aviation. Our dress code ensures students develop
                the professional standards expected in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* General Guidelines */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Users className="text-[#D4175C] mr-3" size={24} />
                  General Guidelines
                </h3>
                <ul className="space-y-3">
                  {[
                    "Professional business attire required during training",
                    "Clean, well-fitted clothing in good condition",
                    "Conservative colors: navy, black, white, or gray",
                    "Closed-toe leather shoes, polished and professional",
                    "Minimal jewelry - wedding rings and small earrings only",
                    "Professional hairstyles, neat and well-groomed"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-[#D4175C] mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific Requirements */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Star className="text-[#D4175C] mr-3" size={24} />
                  Specific Requirements
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">For Women:</h4>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Blouse or professional top with sleeves",
                        "Knee-length skirt or tailored pants",
                        "Closed-toe heels (2-3 inches maximum)",
                        "Natural makeup, professional appearance",
                        "Hair tied back neatly if shoulder length or longer"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-[#D4175C] mt-1">•</span>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">For Men:</h4>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Collared dress shirt, long or short sleeves",
                        "Dress pants or chinos, well-fitted",
                        "Leather dress shoes, polished",
                        "Belt matching shoe color",
                        "Clean-shaven or well-groomed facial hair"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-[#D4175C] mt-1">•</span>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Prohibited Items */}
            <div className="mt-8 bg-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Prohibited Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {[
                    "Casual wear (jeans, t-shirts, sneakers)",
                    "Excessive jewelry or accessories",
                    "Strong perfumes or colognes",
                    "Visible tattoos or piercings"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-red-400">✗</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {[
                    "Open-toe shoes or sandals",
                    "Wrinkled or stained clothing",
                    "Extreme hairstyles or colors",
                    "Chewing gum during training"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-red-400">✗</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Facilities Section */}
      <section id="facilities" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B5054A]/5 to-[#D4175C]/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
                <BookOpen className="text-[#D4175C] mr-2" size={16} />
                <span className="text-white text-sm font-medium">Training Facilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                World-Class <span className="text-[#D4175C]">Training Facilities</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our state-of-the-art facilities provide the perfect environment for comprehensive
                aviation training with modern equipment and professional standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Aircraft Mock-up",
                  description: "Full-scale aircraft cabin replica for hands-on training in real-world scenarios",
                  icon: "✈️"
                },
                {
                  title: "Safety Training Center",
                  description: "Specialized facility for emergency procedures and safety equipment training",
                  icon: "🛡️"
                },
                {
                  title: "Modern Classrooms",
                  description: "Air-conditioned classrooms with multimedia equipment and comfortable seating",
                  icon: "🏫"
                },
                {
                  title: "Computer Lab",
                  description: "Fully equipped computer laboratory for digital learning and assessments",
                  icon: "💻"
                },
                {
                  title: "Library & Study Area",
                  description: "Comprehensive aviation library with quiet study spaces for students",
                  icon: "📚"
                },
                {
                  title: "Practical Training Area",
                  description: "Dedicated space for service training, grooming, and professional development",
                  icon: "🎯"
                },
                {
                  title: "Medical Training Room",
                  description: "First aid and medical emergency training with professional equipment",
                  icon: "🏥"
                },
                {
                  title: "Language Lab",
                  description: "Multi-language learning facility for international communication skills",
                  icon: "🗣️"
                },
                {
                  title: "Student Lounge",
                  description: "Comfortable recreation area for students to relax and network",
                  icon: "☕"
                }
              ].map((facility, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4175C]/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{facility.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{facility.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Additional Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "🚗", title: "Parking Facility", desc: "Secure parking for students and staff" },
                  { icon: "🍽️", title: "Cafeteria", desc: "On-site dining with healthy meal options" },
                  { icon: "📶", title: "Free WiFi", desc: "High-speed internet throughout the campus" },
                  { icon: "🔒", title: "Security", desc: "24/7 security and CCTV surveillance" }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#B5054A]/5 to-[#D4175C]/5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#B5054A]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#B5054A]/30">
                <Phone className="text-[#D4175C] mr-2" size={16} />
                <span className="text-white text-sm font-medium">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact <span className="text-[#D4175C]">Information</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Ready to start your aviation career? Get in touch with us for more information
                about our training programs and admission process.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[#D4175C] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Address</h4>
                      <p className="text-gray-300">
                        DAMI Aviation Training Institute<br />
                        123 Aviation Boulevard<br />
                        Training Complex, Aviation City<br />
                        PIN: 123456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-[#D4175C] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone Numbers</h4>
                      <p className="text-gray-300">
                        Main Office: +91 12345 67890<br />
                        Admissions: +91 12345 67891<br />
                        WhatsApp: +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-[#D4175C] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Email Addresses</h4>
                      <p className="text-gray-300">
                        General: info@damiaviation.com<br />
                        Admissions: admissions@damiaviation.com<br />
                        Support: support@damiaviation.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-[#D4175C] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Office Hours</h4>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4175C] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4175C] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4175C] transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4175C] transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 DAMI Aviation Training Institute. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;