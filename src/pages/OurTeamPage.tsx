import { Users, Award, Star, Trophy, Target, Heart } from 'lucide-react';

const OurTeamPage = () => {
  // DAMI Aviation Team Members
  const teamMembers = [
    {
      id: 1,
      name: "Damith Isuru",
      position: "Founder & CEO / Cabin Crew Interview Training Specialist",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/damith-isuru.jpg",
      experience: "15+ years",
      specialization: "Cabin Crew Interview Training, Aviation Industry Leadership",
      certifications: ["Industry Specialist", "Interview Training Expert", "Aviation Professional"],
      achievements: "Founded DAMI Aviation to bridge the gap between aspiring cabin crew and airline requirements",
      trainingHighlight: "Exclusive interview preparation program with 95% success rate",
      successMetric: "500+ Students Trained",
      icon: Trophy
    },
    {
      id: 2,
      name: "Mr. Chaminda Nuragodage",
      position: "Fire Safety Training Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/chaminda-nuragodage.jpg",
      experience: "20+ years",
      specialization: "Fire Safety, Emergency Response, Rescue Operations",
      certifications: ["Certified Fire Safety Instructor", "Emergency Response Specialist", "Rescue Operations"],
      achievements: "Specialized in comprehensive fire safety training with hands-on extinguisher experience",
      trainingHighlight: "Real-world fire emergency simulations and rescue operation techniques",
      successMetric: "Zero Incidents Record",
      icon: Target
    },
    {
      id: 3,
      name: "Dr. Sandaruwan Liyanage",
      position: "First Aid & Medical Emergency Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/dr-sandaruwan.jpg",
      experience: "18+ years",
      specialization: "Emergency Medical Response, First Aid Training, Life-Saving Techniques",
      certifications: ["Medical Doctor", "Emergency Medicine Specialist", "First Aid Instructor"],
      achievements: "Experienced medical professional with extensive hospital and emergency room background",
      trainingHighlight: "Life-saving techniques and comprehensive medical emergency procedures for students",
      successMetric: "Medical Professional",
      icon: Heart
    },
    {
      id: 4,
      name: "Mrs. Anoma Herath",
      position: "First Aid & Medical Emergency Co-Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/anoma-herath.jpg",
      experience: "15+ years",
      specialization: "Medical Emergency Procedures, First Aid Training, Healthcare",
      certifications: ["First Aid Certified", "Medical Emergency Response", "Healthcare Professional"],
      achievements: "Dedicated healthcare professional specializing in emergency response training",
      trainingHighlight: "Practical first aid scenarios and emergency medical response protocols",
      successMetric: "Healthcare Expert",
      icon: Heart
    },
    {
      id: 5,
      name: "Miss Sithara Dilrukshi",
      position: "Professional Grooming & Appearance Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/sithara-dilrukshi.jpg",
      experience: "12+ years",
      specialization: "Professional Grooming, Personal Presentation, Image Consulting",
      certifications: ["Professional Grooming Specialist", "Image Consultant", "Beauty & Styling Expert"],
      achievements: "Expert in professional grooming and image development with focus on international standards",
      trainingHighlight: "Complete makeover training focusing on professional appearance and presentation skills",
      successMetric: "Image Transformation",
      icon: Star
    },
    {
      id: 6,
      name: "Mr. Lahiru Dilshan",
      position: "Physical Fitness Training Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/lahiru-dilshan.jpg",
      experience: "10+ years",
      specialization: "Physical Fitness, Health & Endurance Training, Wellness Coaching",
      certifications: ["Certified Fitness Trainer", "Health & Wellness Coach", "Physical Training Specialist"],
      achievements: "Professional fitness trainer specializing in health, endurance and physical conditioning",
      trainingHighlight: "Comprehensive fitness training focusing on health, endurance and physical preparation",
      successMetric: "Fitness Excellence",
      icon: Trophy
    },
    {
      id: 7,
      name: "Mr. Mahesh Gunarathna",
      position: "Water Survival Skills Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/mahesh-gunarathna.jpg",
      experience: "16+ years",
      specialization: "Water Safety, Survival Techniques, Emergency Water Procedures",
      certifications: ["Water Survival Instructor", "Safety Training Specialist", "Emergency Procedures Expert"],
      achievements: "Expert in comprehensive water survival training and emergency water safety procedures",
      trainingHighlight: "Essential water safety skills and survival techniques for emergency situations",
      successMetric: "Safety Excellence",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1929] to-[#0f2942] pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4175C]/10 border border-[#D4175C]/30 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-[#D4175C]" />
            <span className="text-[#D4175C] font-medium">Meet Our Expert Team</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Aviation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4175C] to-[#B5054A]"> Team</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet our team of specialized instructors and industry experts who provide comprehensive training
            to prepare students for successful aviation careers. Each brings extensive experience from their respective fields.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-[#D4175C]/20 rounded-xl p-6">
              <Award className="w-8 h-8 text-[#D4175C] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Industry Veterans</h3>
              <p className="text-gray-400 text-sm">20+ years average experience</p>
            </div>
            <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-[#D4175C]/20 rounded-xl p-6">
              <Star className="w-8 h-8 text-[#D4175C] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Certified Professionals</h3>
              <p className="text-gray-400 text-sm">International certifications</p>
            </div>
            <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-[#D4175C]/20 rounded-xl p-6">
              <Users className="w-8 h-8 text-[#D4175C] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Dedicated Instructors</h3>
              <p className="text-gray-400 text-sm">Committed to your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-[#0f2942]/50 backdrop-blur-sm border border-[#D4175C]/20 rounded-2xl p-8 hover:border-[#D4175C]/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-r from-[#D4175C] to-[#B5054A] p-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl bg-[#0f2942]"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#D4175C] font-semibold text-lg mb-3">{member.position}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#D4175C]" />
                        <span className="text-gray-300 text-sm">{member.experience} Experience</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#D4175C] mt-0.5" />
                        <span className="text-gray-300 text-sm">{member.specialization}</span>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold text-sm mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, index) => (
                          <span key={index} className="bg-[#D4175C]/20 text-[#D4175C] px-3 py-1 rounded-full text-xs font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements & Highlights */}
                    <div className="space-y-3">
                      <div className="bg-[#D4175C]/10 border border-[#D4175C]/20 rounded-lg p-3">
                        <div className="flex items-start gap-2 mb-2">
                          <member.icon className="w-4 h-4 text-[#D4175C] mt-0.5 flex-shrink-0" />
                          <span className="text-[#D4175C] font-semibold text-sm">{member.successMetric}</span>
                        </div>
                        <p className="text-gray-300 text-xs leading-relaxed">{member.achievements}</p>
                      </div>

                      <div className="bg-gradient-to-r from-[#B5054A]/10 to-[#D4175C]/10 border border-[#D4175C]/20 rounded-lg p-3">
                        <h5 className="text-white font-semibold text-xs mb-1">Training Highlight:</h5>
                        <p className="text-gray-300 text-xs leading-relaxed">{member.trainingHighlight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;