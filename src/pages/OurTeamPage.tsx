import { Users, Award, Star, Trophy, Target, Heart } from 'lucide-react';

const OurTeamPage = () => {
  // DAMI Aviation Team Members
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Damith Isuru",
      position: "Founder & Lead Instructor – Dami Aviation",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1757439358/DSC07936_lrsqge.jpg",
      experience: "3+ years",
      specialization: "Cabin Crew Training, Interview Preparation, Career Development",
      certifications: [
        "Diploma in Hotel Management",
        "Diploma in English",
        "Aviation Interview Training Specialist",
        "Hospitality & Communication Expert"
      ],
      achievements:
        "Founder of Dami Aviation Lanka (Pvt) Ltd, training over 150 students, with 25+ placed in global airlines and aviation companies. Delivers career support from training to placement with a focus on professionalism and international standards.",
      trainingHighlight:
        "One-to-one mentoring, practical exposure in fire & rescue, water survival, grooming, first aid, fitness, and more — with a 95% success rate.",
      successMetric: "“Shaping Dreams into Aviation Careers” ✈️",
      icon: Trophy
    },
    {
      id: 2,
      name: "Mr. Chaminda Nuragodage",
      position: "Fire Safety Training Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1757439383/DSC07724_bwaan6.jpg",
      experience: "20+ years",
      specialization: "Fire Safety, Emergency Response, Rescue Operations",
      certifications: [
        "Certified Fire Safety Instructor",
        "Emergency Response Specialist",
        "Rescue Operations Expert"
      ],
      achievements:
        "Specialized in hands-on fire safety training including live extinguisher sessions and emergency simulations.",
      trainingHighlight:
        "Real-world fire emergency simulations and rescue operation techniques.",
      successMetric: "Zero Incidents Record",
      icon: Target
    },

    {
      id: 4,
      name: "Mrs. Anoma Herath",
      position: "First Aid & Medical Emergency Co-Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1756842067/WhatsApp_Image_2025-09-01_at_12.21.39_hxviep.jpg",
      experience: "16+ years",
      specialization: "Medical Emergency Procedures, First Aid Coaching, Student Wellness",
      certifications: [
        "BSc Hons in Nursing",
        "Certified First Aid Coach",
        "Emergency Response Instructor"
      ],
      achievements:
        "Healthcare expert committed to equipping students with life-saving skills and calm response techniques.",
      trainingHighlight:
        "Hands-on emergency simulations and medical care roleplays.",
      successMetric: "First Aid Coach",
      icon: Heart
    },
    {
      id: 5,
      name: "Miss Sithara Dilrukshi",
      position: "Professional Grooming & Appearance Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1757439367/DSC07931_ftwove.jpg",
      experience: "15+ years",
      specialization: "Bridal Styling, Grooming, Beauty Technology, Professional Make-up",
      certifications: [
        "NVQ Level 4 – Hairdresser",
        "NVQ Level 4 – Beautician",
        "NVQ Level 4 – Bridal Dresser",
        "Associate Degree in Cosmetology & Management",
        "Advanced Facial & Beauty Technology (SPMU)"
      ],
      achievements:
        "Award-winning bridal and beauty expert. Recognized for professionalism and creativity in grooming and styling.",
      trainingHighlight:
        "Transformational grooming program based on international standards and beauty technology.",
      successMetric: "Best Bridal Makeup Artist (Iconic Award 2023)",
      icon: Star
    },
    {
      id: 6,
      name: "Mr. Mahesh Gunawardhana",
      position: "Water Survival Skills & Physical Fitness Instructor",
      image: "https://res.cloudinary.com/dzz0qlqve/image/upload/v1756842067/WhatsApp_Image_2025-09-01_at_00.57.19_dj1w2z.jpg",
      experience: "35+ years",
      specialization: "Water Survival, Physical Training, Firefighting, Lifesaving",
      certifications: [
        "Retired Navy Officer",
        "Bachelor in Labour Education (University of Colombo)",
        "Diploma in Sports (NISS Sri Lanka)",
        "PT Courses – Sri Lanka, India, Pakistan",
        "Nuclear Biological Chemical Defence & Firefighting (Pakistan)",
        "Lifesaving – Sri Lanka, India, Pakistan, New Zealand"
      ],
      achievements:
        "Extensive military and rescue training background. Delivers critical physical, rescue, and water survival training to aviation students.",
      trainingHighlight:
        "Advanced water safety, swimming, emergency drills, and physical conditioning based on military protocols.",
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
                    <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-r from-[#D4175C] to-[#B5054A] p-1">
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