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

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const handleNavigation = (sectionId: string) => {
    if (isMenuOpen) setIsMenuOpen(false);

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
    if (isMenuOpen) setIsMenuOpen(false);

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


  return <header className={`fixed w-full z-50 transition-all duration-500 min-h-[70px] md:min-h-[80px] ${isScrolled ? 'bg-[#0a1929]/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-3'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="container mx-auto px-4 md:px-6 h-full">
      <div className="flex items-center justify-between h-full">
        <Link to="/" className="flex items-center">
          <div className="h-14 md:h-18 flex items-center">
            <img
              src="/Logo.png"
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


        {/* Mobile Menu Button */}
        <button className="md:hidden text-white relative" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          <div className="relative">
            {isMenuOpen ? <X size={24} className="animate-rotateIn" /> : <Menu size={24} className="animate-pulse" />}
          </div>
        </button>
      </div>
    </div>
    {/* Mobile Navigation */}
    <div className={`md:hidden bg-[#0a1929]/95 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          <MobileNavLink active={activeLink === 'hero'} onClick={handleHomeNavigation}>
            Home
          </MobileNavLink>
          <Link to="/course" className="text-left text-gray-200 py-2 font-medium transition-all duration-300 hover:text-[#D4175C] hover:pl-3" onClick={() => setIsMenuOpen(false)}>
            Training
          </Link>

          <MobileNavLink active={activeLink === 'testimonials'} onClick={() => handleNavigation('testimonials')}>
            Testimonials
          </MobileNavLink>
          <Link to="/gallery" className="text-left text-gray-200 py-2 font-medium transition-all duration-300 hover:text-[#D4175C] hover:pl-3" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/other-services" className="text-left text-gray-200 py-2 font-medium transition-all duration-300 hover:text-[#D4175C] hover:pl-3" onClick={() => setIsMenuOpen(false)}>
            Other Services
          </Link>
          <button onClick={handleRegister} className="px-5 py-2 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all font-medium relative overflow-hidden group">
            <span className="relative z-10">Enroll Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4175C] to-[#B5054A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
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
export default Header;