// components/Footer.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import { SiTiktok } from 'react-icons/si';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from 'lucide-react';

const Footer = () => {
  const radarAnimation = useRef(null);

  useEffect(() => {
    if (radarAnimation.current) {
      const anim = lottie.loadAnimation({
        container: radarAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets3.lottiefiles.com/packages/lf20_ydo1amjm.json',
      });
      return () => anim.destroy();
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0a1929] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div ref={radarAnimation} className="w-full h-full"></div>
      </div>
      <div className="absolute left-1/4 bottom-1/2 w-64 h-64 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
      <div className="absolute right-1/4 top-1/2 w-72 h-72 rounded-full bg-[#D4175C]/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="mb-6">
                <Link to="/" className="flex flex-col group">
                  <span className="text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300 mb-2">
                    DAMI <span className="text-[#D4175C]">Aviation</span> Lanka (Pvt) Ltd
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    A legally registered aviation training provider dedicated to excellence in preparing aspiring cabin crew and ground staff for distinguished careers with leading international airlines. Through comprehensive, industry-aligned programs and continuous career support, we empower our students with the expertise, confidence, and professionalism essential for success in the global aviation sector.
                  </p>
                </Link>
              </div>

              <div className="flex space-x-4">
                <SocialIcon icon={<Facebook size={20} />} href="https://www.facebook.com/profile.php?id=100093489771446" />

                <SocialIcon icon={<Youtube size={20} />} href="https://youtube.com/@damiaviationlanka1?si=k0XQfj8RxcLHl79l" />
                <SocialIcon icon={<SiTiktok size={20} />} href="https://www.tiktok.com/@da_mi_ya_546?_t=ZS-8yFQPsAk3YS&_r=1" />
              </div>
            </div>

            {/* Airlines - Cabin Crew & Inflight Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="mr-2">✈️</span>
                Airlines – Cabin Crew & Inflight Services
              </h4>
              <ul className="space-y-3">
                <AirlineLink>Qatar Airways</AirlineLink>
                <AirlineLink>Emirates</AirlineLink>
                <AirlineLink>Etihad Airways</AirlineLink>
                <AirlineLink>FlyDubai</AirlineLink>
                <AirlineLink>Air Arabia

                </AirlineLink>
                <AirlineLink>SriLankan Airlines</AirlineLink>
                <AirlineLink>FitsAir</AirlineLink>

              </ul>
            </div>

            {/* Training Programs */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Steering You Toward Aviation Success</h4>
              <ul className="space-y-3">
                <FooterLink onClick={() => scrollToSection('programs')}>Airline Cabin Crew Training</FooterLink>
                <FooterLink onClick={() => scrollToSection('programs')}>Airport Service Agent</FooterLink>
                <FooterLink onClick={() => scrollToSection('programs')}>Airport Service Assistant</FooterLink>
                <FooterLink onClick={() => scrollToSection('programs')}>Cargo Agent Training</FooterLink>
                <FooterLink onClick={() => scrollToSection('programs')}>Duty-Free Sales Agent</FooterLink>
                <FooterLink onClick={() => scrollToSection('programs')}>Aviation Security Assistant</FooterLink>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors duration-300">
                  <strong className="text-[#D4175C]">Address:</strong> Nawalapitiya , Sri Lanka
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <strong className="text-[#D4175C]">Phone:</strong> 077 342 8832 | 078 328 8025
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <strong className="text-[#D4175C]">Email:</strong> damiaviationlanka@gmail.com
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Left: Copyright */}
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} DAMI Aviation Lanka (Pvt) Ltd. All rights reserved.
          </div>

          {/* Center: Looping Typing Animation */}
          <div className="flex items-center justify-center">
            <TypingAnimation />
          </div>

          {/* Right: Legal Links */}
          <div className="flex space-x-6 text-gray-400 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-[#D4175C] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#D4175C] transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-[#D4175C] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Looping Typing Animation: "developed by Chinthaka.works"
const TypingAnimation = () => {
  const fullText = "developed by Chinthaka.works";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && text === fullText) {
        // Pause before backspace
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        // Pause before retype
        setTimeout(() => setIsDeleting(false), 500);
      } else {
        const delta = isDeleting ? -1 : 1;
        setText(fullText.substring(0, text.length + delta));
      }
    };

    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);

  // Split the displayed text to handle the clickable .works part
  const baseText = "developed by Chinthaka.";

  // Check if we're at the point where we should show the link
  const shouldShowLink = text.length > baseText.length;
  const linkDisplayText = shouldShowLink ? text.slice(baseText.length) : "";
  const baseDisplayText = text.slice(0, Math.min(text.length, baseText.length));

  return (
    <a
      href="https://chinthaka.works"
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-lg text-orange-500 flex items-center hover:text-orange-400 transition-colors duration-200 cursor-pointer"
    >
      <span>{baseDisplayText}</span>
      {shouldShowLink && (
        <span className="font-semibold">
          {linkDisplayText}
        </span>
      )}
      <span className="inline-block w-0.5 h-6 bg-orange-500 ml-1 animate-pulse"></span>
    </a>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#B5054A] transition-colors duration-300 transform hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

// Footer Link Component
const FooterLink = ({ children, as, onClick, ...props }) => {
  const Component = as || 'button';
  return (
    <li>
      <Component
        onClick={onClick}
        className="text-gray-300 hover:text-[#D4175C] transition-colors flex items-center cursor-pointer group"
        {...props}
      >
        <ChevronRight
          size={16}
          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <span className="group-hover:translate-x-1 transition-transform">
          {children}
        </span>
      </Component>
    </li>
  );
};

// Airline Link Component
const AirlineLink = ({ children }) => {
  return (
    <li>
      <div className="text-gray-300 hover:text-[#D4175C] transition-colors flex items-center group cursor-default">
        <div className="w-2 h-2 bg-[#D4175C] rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
        <span className="group-hover:translate-x-1 transition-transform">
          {children}
        </span>
      </div>
    </li>
  );
};

export default Footer;