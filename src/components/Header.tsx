import { useEffect, useState, ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { handleRegister } from '../utils/whatsapp';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('');
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Only hide navbar on scroll if menu is not open
      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up or at top
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);

      // Set active link based on scroll position
      const sections = ['about', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    // Handle clicks outside menu to close it
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const header = document.querySelector('header');

      if (isMenuOpen && header && !header.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    // Handle escape key to close menu
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [lastScrollY, isMenuOpen]);
  const handleNavigation = (sectionId: string) => {
    // Add a small delay to prevent accidental closures
    setTimeout(() => {
      if (isMenuOpen) setIsMenuOpen(false);
    }, 150);

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
          });
          setActiveLink(sectionId);
        }
      }, 100);
    } else {
      // We're already on home page, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 100,
          behavior: 'smooth'
        });
        setActiveLink(sectionId);
      }
    }
  };

  const handleHomeNavigation = () => {
    // Add a small delay to prevent accidental closures
    setTimeout(() => {
      if (isMenuOpen) setIsMenuOpen(false);
    }, 150);

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      // We're already on home page, just scroll to top (hero section)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileMenuClose = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 100);
  };


  return <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a1929]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#D4175C]/20' : 'bg-[#0a1929]/85 backdrop-blur-sm py-4 border-b border-[#D4175C]/15'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="container mx-auto px-4 md:px-6 h-full">
      <div className="flex items-center justify-between h-full">
        <Link to="/" className="flex items-center">
          <div className="h-12 md:h-16 flex items-center">
            <img
              src="https://res.cloudinary.com/dzz0qlqve/image/upload/v1754673138/Logo_n456gd.ico"
              alt="Dami Aviation Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink active={activeLink === 'hero'} onClick={handleHomeNavigation}>
            Home
          </NavLink>
          <Link to="/course" className="text-gray-200 hover:text-[#D4175C] transition-all duration-300 font-medium relative group">
            Training
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4175C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <NavLink active={activeLink === 'testimonials'} onClick={() => handleNavigation('testimonials')}>
            Testimonials
          </NavLink>
          <Link to="/gallery" className="text-gray-200 hover:text-[#D4175C] transition-all duration-300 font-medium relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4175C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/other-services" className="text-gray-200 hover:text-[#D4175C] transition-all duration-300 font-medium relative group">
            Other Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4175C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button onClick={handleRegister} className="px-5 py-2 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium relative overflow-hidden group">
            <span className="relative z-10">Enroll Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4175C] to-[#B5054A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </nav>


        {/* Mobile Menu Button - Enhanced */}
        <button
          className="md:hidden relative bg-[#B5054A]/20 backdrop-blur-sm border border-[#B5054A]/30 rounded-lg p-2 text-white hover:bg-[#B5054A]/30 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative flex items-center gap-2">
            {isMenuOpen ? (
              <>
                <X size={20} className="animate-rotateIn" />
                <span className="text-xs font-medium">Close</span>
              </>
            ) : (
              <>
                <Menu size={20} />
                <span className="text-xs font-medium">Menu</span>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
    {/* Mobile Navigation - Enhanced */}
    <div className={`md:hidden bg-[#0a1929]/98 backdrop-blur-md border-t border-[#B5054A]/20 shadow-2xl transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Mobile Menu Header */}
        <div className="text-center mb-6 pb-4 border-b border-gray-700/30">
          <h3 className="text-white font-semibold text-lg">Navigation Menu</h3>
          <p className="text-gray-400 text-sm mt-1">Choose your destination</p>
        </div>

        <nav className="flex flex-col space-y-2">
          {/* Enhanced Mobile Nav Items */}
          <EnhancedMobileNavLink
            active={activeLink === 'hero'}
            onClick={handleHomeNavigation}
            icon="🏠"
            description="Back to homepage"
          >
            Home
          </EnhancedMobileNavLink>

          <Link
            to="/course"
            className="flex items-center justify-between bg-[#0f2942]/30 hover:bg-[#0f2942]/50 rounded-xl p-4 text-gray-200 font-medium transition-all duration-300 hover:text-[#D4175C] border border-transparent hover:border-[#D4175C]/30"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">📚</span>
              <div>
                <div className="font-medium">Training</div>
                <div className="text-xs text-gray-400">Course details & modules</div>
              </div>
            </div>
            <span className="text-[#D4175C]">→</span>
          </Link>

          <EnhancedMobileNavLink
            active={activeLink === 'testimonials'}
            onClick={() => handleNavigation('testimonials')}
            icon="⭐"
            description="Student reviews & feedback"
          >
            Testimonials
          </EnhancedMobileNavLink>

          <Link
            to="/gallery"
            className="flex items-center justify-between bg-[#0f2942]/30 hover:bg-[#0f2942]/50 rounded-xl p-4 text-gray-200 font-medium transition-all duration-300 hover:text-[#D4175C] border border-transparent hover:border-[#D4175C]/30"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">📸</span>
              <div>
                <div className="font-medium">Gallery</div>
                <div className="text-xs text-gray-400">Photos & training videos</div>
              </div>
            </div>
            <span className="text-[#D4175C]">→</span>
          </Link>

          <Link
            to="/other-services"
            className="flex items-center justify-between bg-[#0f2942]/30 hover:bg-[#0f2942]/50 rounded-xl p-4 text-gray-200 font-medium transition-all duration-300 hover:text-[#D4175C] border border-transparent hover:border-[#D4175C]/30"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">✈️</span>
              <div>
                <div className="font-medium">Other Services</div>
                <div className="text-xs text-gray-400">Additional aviation services</div>
              </div>
            </div>
            <span className="text-[#D4175C]">→</span>
          </Link>

          {/* Enhanced CTA Button */}
          <div className="pt-4 mt-4 border-t border-gray-700/30">
            <button
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-[#B5054A] to-[#D4175C] hover:from-[#D4175C] hover:to-[#B5054A] text-white rounded-xl p-4 font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>🚀</span>
                <span>Enroll Now</span>
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-center text-gray-400 text-xs mt-2">Start your aviation career today!</p>
          </div>
        </nav>
      </div>
    </div>
    <style>{`
        @keyframes rotateIn {
          from {
            transform: rotate(-90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        .animate-rotateIn {
          animation: rotateIn 0.3s ease-out forwards;
        }
      `}</style>
  </header>;
};
interface NavLinkProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const NavLink = ({
  active,
  onClick,
  children
}: NavLinkProps) => <button onClick={onClick} className={`text-gray-200 transition-all duration-300 font-medium relative group ${active ? 'text-[#D4175C]' : 'hover:text-[#D4175C]'}`}>
    {children}
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4175C] transition-all duration-300 ${active ? 'w-full' : 'group-hover:w-full'}`}></span>
  </button>;
const MobileNavLink = ({
  active,
  onClick,
  children
}: NavLinkProps) => <button onClick={onClick} className={`text-left text-gray-200 py-2 font-medium transition-all duration-300 relative ${active ? 'text-[#D4175C] pl-3' : 'hover:text-[#D4175C] hover:pl-3'}`}>
    {active && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#D4175C] rounded-full"></span>}
    {children}
  </button>;

interface EnhancedMobileNavLinkProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  icon: string;
  description: string;
}

const EnhancedMobileNavLink = ({
  active,
  onClick,
  children,
  icon,
  description
}: EnhancedMobileNavLinkProps) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-between bg-[#0f2942]/30 hover:bg-[#0f2942]/50 rounded-xl p-4 font-medium transition-all duration-300 border ${active
      ? 'text-[#D4175C] border-[#D4175C]/50 bg-[#D4175C]/10'
      : 'text-gray-200 hover:text-[#D4175C] border-transparent hover:border-[#D4175C]/30'
      }`}
  >
    <div className="flex items-center gap-3">
      <span className="text-lg">{icon}</span>
      <div className="text-left">
        <div className="font-medium">{children}</div>
        <div className="text-xs text-gray-400">{description}</div>
      </div>
    </div>
    {active && <span className="text-[#D4175C] font-bold">●</span>}
  </button>
);
export default Header;