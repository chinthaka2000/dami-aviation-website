import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import AboutSection from '../components/AboutSection';

import WhyChooseUsSection from '../components/WhyChooseUsSection';
import StudentReviewsSection from '../components/course/TestimonialsSection';
import ContactSection from '../components/ContactSection';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
    <HeroSection />
    <VideoSection />
    <AboutSection />

    <WhyChooseUsSection />
    <StudentReviewsSection />
    <ContactSection />
  </>;
};
export default Home;