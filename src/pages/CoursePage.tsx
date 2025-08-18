import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import CourseOverviewSection from '../components/course/CourseOverviewSection';
import CourseModulesSection from '../components/course/CourseModulesSection';
import EntryRequirementsSection from '../components/course/EntryRequirementsSection';
import PricingSection from '../components/course/PricingSection';
import JobOpportunitiesSection from '../components/course/JobOpportunitiesSection';
import TestimonialsSection from '../components/course/TestimonialsSection';
import '../styles/course.css';
import PromoVideoSection from '../components/PromoVideoSection';

const PromoVideoCourseSection = () => (
  <div id="promo-video">
    <PromoVideoSection youtubeId="" />
  </div>
);

const CoursePage = () => {
  const [, setActiveSection] = useState('overview');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Course sections configuration
  const courseSections = [
    { id: 'overview', title: 'Overview', component: CourseOverviewSection },
    { id: 'promo-video', title: 'Promo Video', component: PromoVideoCourseSection },
    { id: 'modules', title: 'Course Modules', component: CourseModulesSection },
    { id: 'requirements', title: 'Entry Requirements', component: EntryRequirementsSection },
    { id: 'pricing', title: 'Pricing', component: PricingSection },
    { id: 'job-opportunities', title: 'Career Opportunities', component: JobOpportunitiesSection },
    { id: 'testimonials', title: 'Student Reviews', component: TestimonialsSection },
  ];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Handle scroll events for active section tracking and scroll-to-top button
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, (window.scrollY / scrollHeight) * 100);
      setScrollProgress(progress);

      // Find active section based on scroll position
      for (const section of courseSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Course Sections */}
      <main className="relative">
        {courseSections.map((section) => {
          const SectionComponent = section.component;
          return (
            <div key={section.id} className="relative">
              <SectionComponent />
            </div>
          );
        })}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#B5054A] to-[#D4175C] hover:from-[#D4175C] hover:to-[#B5054A] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#B5054A] to-[#D4175C] transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </div>


    </div>
  );
};

export default CoursePage;