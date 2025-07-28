import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Star, Award } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
import { getTestimonials, getFeaturedTestimonials } from '../../data/testimonials';
import { Testimonial } from '../../types/course';
import { handleRegister } from '../../utils/whatsapp';

const TestimonialsSection: React.FC = () => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeatured, setShowFeatured] = useState(true);

  const testimonialsPerPage = 6;

  // Load initial testimonials
  useEffect(() => {
    try {
      const initialData = getTestimonials(1, testimonialsPerPage);
      console.log('Loaded testimonials:', initialData); // Debug log
      setDisplayedTestimonials(initialData.testimonials);
      setHasMore(initialData.hasMore);
    } catch (error) {
      console.error('Error loading testimonials:', error);
      // Fallback testimonials
      setDisplayedTestimonials([
        {
          id: 'test-1',
          name: 'Nipuni Silva',
          photo: '',
          role: 'Senior Flight Attendant',
          company: 'Emirates Airlines',
          rating: 5,
          review: 'The internationally recognized cabin crew training at Dami Aviation completely transformed my career. The comprehensive modules covering emergency procedures, customer service, and international grooming standards prepared me perfectly for working with Emirates.',
          courseCompleted: 'Cabin Crew Training Program',
          graduationYear: 2023,
          location: 'Colombo, Sri Lanka'
        },
        {
          id: 'test-2',
          name: 'Ayesh Chamalka',
          photo: '',
          role: 'Flight Attendant',
          company: 'Qatar Airways',
          rating: 5,
          review: 'What impressed me most was the attention to detail in every aspect of the training. From dangerous goods handling to medical emergency procedures, every module was taught by experienced professionals.',
          courseCompleted: 'Cabin Crew Training Program',
          graduationYear: 2023,
          location: 'Kandy, Sri Lanka'
        },
        {
          id: 'test-3',
          name: 'Tharushi Sathsarani',
          photo: '',
          role: 'Cabin Crew Supervisor',
          company: 'Singapore Airlines',
          rating: 5,
          review: 'The 3-month intensive program exceeded all my expectations. The theoretical knowledge combined with hands-on practical training gave me a solid foundation in aviation safety and customer service.',
          courseCompleted: 'Cabin Crew Training Program',
          graduationYear: 2022,
          location: 'Galle, Sri Lanka'
        }
      ]);
    }
  }, []);

  // Load more testimonials
  const loadMoreTestimonials = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate loading delay for smooth UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const nextPage = currentPage + 1;
    const newData = getTestimonials(nextPage, testimonialsPerPage);

    setDisplayedTestimonials(prev => [...prev, ...newData.testimonials]);
    setCurrentPage(nextPage);
    setHasMore(newData.hasMore);
    setIsLoading(false);
  };

  // Toggle between all testimonials and featured ones
  const toggleView = () => {
    if (showFeatured) {
      // Show all testimonials
      const allData = getTestimonials(1, testimonialsPerPage);
      setDisplayedTestimonials(allData.testimonials);
      setHasMore(allData.hasMore);
      setCurrentPage(1);
      setShowFeatured(false);
    } else {
      // Show featured testimonials
      const featuredData = getFeaturedTestimonials(6);
      setDisplayedTestimonials(featuredData);
      setHasMore(false);
      setShowFeatured(true);
    }
  };

  // Calculate statistics
  const totalTestimonials = 12;
  const averageRating = 4.8;

  return (
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
              <span className="text-white font-semibold">{averageRating}/5</span>
              <span className="text-gray-400 text-sm">Average Rating</span>
            </div>

            <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
              <Award className="w-5 h-5 text-[#D4175C]" />
              <span className="text-white font-semibold">{totalTestimonials}+</span>
              <span className="text-gray-400 text-sm">Success Stories</span>
            </div>

            <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">95%</span>
              <span className="text-gray-400 text-sm">Job Placement</span>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <button
              onClick={toggleView}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#B5054A] to-[#D4175C] hover:from-[#D4175C] hover:to-[#B5054A] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4175C]/25"
            >
              <Star className="w-4 h-4" />
              <span>{showFeatured ? 'View All Reviews' : 'View Featured Reviews'}</span>
            </button>
          </div>
        </div>

        {/* Debug info */}
        <div className="text-center mb-4">
          <p className="text-white text-sm">
            Showing {displayedTestimonials.length} testimonials
          </p>
        </div>

        {/* Enhanced Testimonials Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedTestimonials.length > 0 ? (
            displayedTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  photo={testimonial.photo}
                  role={testimonial.role}
                  company={testimonial.company}
                  rating={testimonial.rating}
                  review={testimonial.review}
                  courseCompleted={testimonial.courseCompleted}
                  graduationYear={testimonial.graduationYear}
                  location={testimonial.location}
                  className="h-full"
                />
              </div>
            ))
          ) : (
            // Fallback content if no testimonials load
            <div className="col-span-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Simple fallback testimonial cards */}
                <div className="bg-[#0f2942]/60 border border-gray-700/30 rounded-2xl p-6 hover:border-[#D4175C]/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#B5054A] to-[#D4175C] flex items-center justify-center text-white font-bold text-sm mr-4">
                      NS
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Nipuni Silva</h4>
                      <p className="text-[#D4175C] text-sm">Emirates Airlines</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="text-yellow-400">⭐</span>
                    ))}
                    <span className="text-gray-400 ml-2 text-sm">• Google Reviews</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "The internationally recognized cabin crew training at Dami Aviation completely transformed my career. Excellent training program!"
                  </p>
                </div>

                <div className="bg-[#0f2942]/60 border border-gray-700/30 rounded-2xl p-6 hover:border-[#D4175C]/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#B5054A] to-[#D4175C] flex items-center justify-center text-white font-bold text-sm mr-4">
                      AC
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Ayesh Chamalka</h4>
                      <p className="text-[#D4175C] text-sm">Qatar Airways</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="text-yellow-400">⭐</span>
                    ))}
                    <span className="text-gray-400 ml-2 text-sm">• Google Reviews</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "What impressed me most was the attention to detail. Every module was taught by experienced professionals."
                  </p>
                </div>

                <div className="bg-[#0f2942]/60 border border-gray-700/30 rounded-2xl p-6 hover:border-[#D4175C]/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#B5054A] to-[#D4175C] flex items-center justify-center text-white font-bold text-sm mr-4">
                      TS
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Tharushi Sathsarani</h4>
                      <p className="text-[#D4175C] text-sm">Singapore Airlines</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="text-yellow-400">⭐</span>
                    ))}
                    <span className="text-gray-400 ml-2 text-sm">• Google Reviews</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "The 3-month intensive program exceeded all my expectations. Solid foundation in aviation safety and customer service."
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && !showFeatured && (
          <div className="text-center">
            <button
              onClick={loadMoreTestimonials}
              disabled={isLoading}
              className="inline-flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 hover:border-[#D4175C]/50 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4175C]/10 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#D4175C] border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <span>Load More Reviews</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        )}

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
            Register Now - Only 1000 Rs
          </button>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsSection;