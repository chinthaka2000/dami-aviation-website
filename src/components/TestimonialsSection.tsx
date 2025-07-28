import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Star, Award } from 'lucide-react';
import { handleRegister } from '../utils/whatsapp';

// Cabin crew testimonials data - 10+ testimonials
const cabinCrewTestimonials = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150&h=150&fit=crop&crop=face',
    role: 'Senior Flight Attendant',
    company: 'Emirates Airlines',
    rating: 5,
    review: 'The internationally recognized cabin crew training at DAMI Aviation completely transformed my career. The comprehensive modules covering emergency procedures, customer service, and international grooming standards prepared me perfectly for working with Emirates. The practical training sessions were incredibly realistic and boosted my confidence during interviews.',
  },
  {
    id: 'testimonial-2',
    name: 'Rajesh Fernando',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'Flight Attendant',
    company: 'Qatar Airways',
    rating: 5,
    review: 'What impressed me most was the attention to detail in every aspect of the training. From dangerous goods handling to medical emergency procedures, every module was taught by experienced professionals. The mock interviews and career guidance helped me secure my position with Qatar Airways within 2 months of graduation.',
  },
  {
    id: 'testimonial-3',
    name: 'Amara Perera',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    role: 'Cabin Crew Supervisor',
    company: 'Singapore Airlines',
    rating: 5,
    review: 'The 3-month intensive program exceeded all my expectations. The theoretical knowledge combined with hands-on practical training gave me a solid foundation in aviation safety and customer service. The instructors were supportive throughout, and the international certification opened doors to premium airlines worldwide.',
  },
  {
    id: 'testimonial-4',
    name: 'Dinesh Wickramasinghe',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Flight Attendant',
    company: 'Etihad Airways',
    rating: 5,
    review: 'The course structure was well-organized and covered everything from basic airline operations to advanced emergency response. The airport familiarization sessions and SEP training were particularly valuable. I appreciated the focus on professional development and the ongoing career support even after graduation.',
  },
  {
    id: 'testimonial-5',
    name: 'Sanduni Jayawardena',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    role: 'Senior Flight Attendant',
    company: 'Turkish Airlines',
    rating: 5,
    review: 'DAMI Aviation provided the perfect blend of theoretical knowledge and practical skills. The international grooming standards module helped me present myself professionally, while the customer service training enhanced my communication skills. The course truly prepared me for the global aviation industry.',
  },
  {
    id: 'testimonial-6',
    name: 'Kasun Mendis',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    role: 'Flight Attendant',
    company: 'Cathay Pacific',
    rating: 5,
    review: 'The instructors at DAMI Aviation are industry experts who shared real-world experiences that you cannot find in textbooks. The emergency procedures training was comprehensive, and the medical emergency simulations were incredibly realistic. This training gave me the confidence to handle any situation onboard.',
  },
  {
    id: 'testimonial-7',
    name: 'Tharushi Silva',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    role: 'Flight Attendant',
    company: 'Malaysia Airlines',
    rating: 4,
    review: 'The course exceeded my expectations in terms of quality and depth. The aviation security module was particularly enlightening, and the dangerous goods training was thorough. The career guidance sessions helped me understand the industry better and prepared me for various interview formats.',
  },
  {
    id: 'testimonial-8',
    name: 'Chaminda Rathnayake',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    role: 'Cabin Crew Trainer',
    company: 'SriLankan Airlines',
    rating: 5,
    review: 'After completing the program, I not only secured a position as cabin crew but eventually became a trainer myself. The comprehensive curriculum and ICAO competency framework alignment made the transition smooth. The knowledge I gained here forms the foundation of my training sessions today.',
  },
  {
    id: 'testimonial-9',
    name: 'Nimesha Gunasekara',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    role: 'Flight Attendant',
    company: 'Thai Airways',
    rating: 5,
    review: 'The practical training sessions were the highlight of the course. From meal service procedures to handling difficult passengers, every scenario was covered. The mock interviews were incredibly helpful, and the feedback from instructors helped me improve my presentation skills significantly.',
  },
  {
    id: 'testimonial-10',
    name: 'Ruwan Dissanayake',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    role: 'Senior Flight Attendant',
    company: 'Air Arabia',
    rating: 4,
    review: 'The course provided excellent value for money. The 1000 Rs registration fee was very reasonable, and the quality of training justified the total investment. The air traffic control familiarization and flight operations modules gave me insights that many of my colleagues lack.',
  },
  {
    id: 'testimonial-11',
    name: 'Ishara Kumari',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    role: 'Flight Attendant',
    company: 'Flydubai',
    rating: 5,
    review: 'What sets DAMI Aviation apart is their commitment to student success. The instructors provided personalized attention, and the small class sizes ensured quality learning. The catering services module was particularly interesting, and the professional development sessions boosted my confidence immensely.',
  },
  {
    id: 'testimonial-12',
    name: 'Lahiru Bandara',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    role: 'Flight Attendant',
    company: 'Oman Air',
    rating: 5,
    review: 'The comprehensive nature of the program impressed me from day one. Every module was relevant and practical. The emergency situations training was intense but necessary, and the customer service excellence module helped me develop skills that are valuable beyond aviation. Highly recommend this program!',
  }
];

const TestimonialsSection = () => {
  return (
    <>
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0a1929] to-[#0f2942] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4175C' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D4175C]/10 backdrop-blur-sm border border-[#D4175C]/20 rounded-full px-6 py-2 mb-6">
              <Users className="w-5 h-5 text-[#D4175C]" />
              <span className="text-[#D4175C] font-medium">Student Success Stories</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5054A] to-[#D4175C]">Graduates</span> Say
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Hear from our successful graduates who are now flying with top airlines worldwide.
              Their journey from training to career success speaks volumes about our program quality.
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">4.8/5</span>
                <span className="text-gray-400 text-sm">Average Rating</span>
              </div>

              <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
                <Award className="w-5 h-5 text-[#D4175C]" />
                <span className="text-white font-semibold">12+</span>
                <span className="text-gray-400 text-sm">Success Stories</span>
              </div>

              <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">95%</span>
                <span className="text-gray-400 text-sm">Job Placement</span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Grid - Matching Your Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cabinCrewTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Testimonial Card - Matching Your Design */}
                <div className="relative group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden">

                  {/* Top Quote Mark */}
                  <div className="absolute top-4 left-4 text-6xl text-[#D4175C]/20 font-bold leading-none z-20">
                    "
                  </div>

                  {/* Bottom Quote Mark */}
                  <div className="absolute bottom-20 right-4 text-6xl text-[#D4175C]/20 font-bold leading-none rotate-180 z-20">
                    "
                  </div>

                  {/* Main Card Content */}
                  <div className="relative z-10">
                    {/* DAMI Aviation Gradient Header Section */}
                    <div className="bg-gradient-to-br from-[#D4175C] to-[#B5054A] p-8 pb-16 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                      </div>

                      {/* Testimonial Header */}
                      <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold mb-4 text-white/90">Testimonial</h3>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                          {testimonial.review.length > 120 ? testimonial.review.substring(0, 120) + '...' : testimonial.review}
                        </p>
                      </div>

                      {/* Student Photo - Positioned to overlap */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=D4175C&color=ffffff&size=64`;
                            }} />
                        </div>
                      </div>
                    </div>

                    {/* White Bottom Section */}
                    <div className="bg-white px-6 pt-12 pb-6 text-center">
                      {/* Star Rating */}
                      <div className="flex justify-center items-center space-x-1 mb-4">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <span
                            key={starIndex}
                            className={`text-2xl ${starIndex < testimonial.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300'}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>

                      {/* Student Name */}
                      <h4 className="text-gray-800 font-bold text-lg mb-1">{testimonial.name}</h4>

                      {/* Role and Company */}
                      <p className="text-[#D4175C] text-sm font-semibold mb-1">{testimonial.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{testimonial.company}</p>

                      {/* Additional Info */}
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>Cabin Crew Training Program</p>
                        <p>Graduated 2023</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D4175C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#B5054A]/10 to-[#D4175C]/10 backdrop-blur-sm border border-[#D4175C]/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Aviation Career?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our successful graduates and take the first step towards an exciting career in aviation.
              Our comprehensive training program will prepare you for success with top airlines worldwide.
            </p>
            <button onClick={handleRegister} className="bg-gradient-to-r from-[#B5054A] to-[#D4175C] hover:from-[#D4175C] hover:to-[#B5054A] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4175C]/25 hover:-translate-y-1">
              Register Now
            </button>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default TestimonialsSection;