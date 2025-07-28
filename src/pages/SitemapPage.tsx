import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Map, Home, GraduationCap, Users, Image, Phone, FileText, Scale, Shield } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="w-5 h-5" />,
      links: [
        { name: "Home", path: "/", description: "Main landing page with overview of our services" },
        { name: "Training Programs", path: "/course", description: "Detailed information about our aviation training courses" },
        { name: "Gallery", path: "/gallery", description: "Photos and videos from our training facilities and events" },
      ]
    },
    {
      title: "Information Sections",
      icon: <FileText className="w-5 h-5" />,
      links: [
        { name: "About Us", path: "/#about", description: "Learn about Dami Aviation Lanka and our mission" },
        { name: "Why Choose Us", path: "/#why-choose-us", description: "Discover what makes us the best choice for aviation training" },
        { name: "Testimonials", path: "/#testimonials", description: "Read success stories from our graduates" },
        { name: "Contact Us", path: "/#contact", description: "Get in touch with our team" },
      ]
    },
    {
      title: "Training Programs",
      icon: <GraduationCap className="w-5 h-5" />,
      links: [
        { name: "Course Overview", path: "/course#overview", description: "Complete overview of our aviation cabin crew training" },
        { name: "Course Modules", path: "/course#modules", description: "Detailed breakdown of training modules and curriculum" },
        { name: "Entry Requirements", path: "/course#requirements", description: "Eligibility criteria and admission requirements" },
        { name: "Job Opportunities", path: "/course#opportunities", description: "Career prospects after course completion" },
        { name: "Pricing Information", path: "/course#pricing", description: "Course fees and payment options" },
      ]
    },
    {
      title: "Legal & Policies",
      icon: <Scale className="w-5 h-5" />,
      links: [
        { name: "Privacy Policy", path: "/privacy-policy", description: "How we collect, use, and protect your personal information" },
        { name: "Terms of Service", path: "/terms-of-service", description: "Terms and conditions for using our services" },
        { name: "Sitemap", path: "/sitemap", description: "Complete overview of all pages on our website" },
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (path: string) => {
    if (path.includes('#')) {
      const [route, sectionId] = path.split('#');
      if (route === '' || route === '/') {
        // Same page, just scroll
        scrollToSection(sectionId);
      } else {
        // Different page, navigate then scroll
        window.location.href = path;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1929] via-[#0f2942] to-[#0a1929]">
      {/* Header */}
      <div className="bg-[#0f2942]/50 backdrop-blur-sm border-b border-gray-700/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center text-gray-300 hover:text-[#D4175C] transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center">
              <Map className="w-6 h-6 text-[#D4175C] mr-2" />
              <span className="text-white font-semibold">Sitemap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full mb-6">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Navigate through all pages and sections of our website. Find exactly what you're looking for quickly and easily.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sitemapSections.map((section, index) => (
              <SitemapSection
                key={index}
                title={section.title}
                icon={section.icon}
                links={section.links}
                onLinkClick={handleLinkClick}
              />
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              icon={<Home className="w-8 h-8" />}
              number="3"
              label="Main Pages"
            />
            <StatCard
              icon={<FileText className="w-8 h-8" />}
              number="4"
              label="Information Sections"
            />
            <StatCard
              icon={<GraduationCap className="w-8 h-8" />}
              number="5"
              label="Training Sections"
            />
            <StatCard
              icon={<Scale className="w-8 h-8" />}
              number="3"
              label="Legal Pages"
            />
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-8 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-300 mb-6">
              If you can't find the information you need, please don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-[#D4175C] to-[#B5054A] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4175C]/25 transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="mailto:damiaviationlanka@gmail.com"
                className="px-6 py-3 border-2 border-[#D4175C] text-[#D4175C] font-semibold rounded-full hover:bg-[#D4175C] hover:text-white transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SitemapSectionProps {
  title: string;
  icon: React.ReactNode;
  links: Array<{
    name: string;
    path: string;
    description: string;
  }>;
  onLinkClick: (path: string) => void;
}

const SitemapSection: React.FC<SitemapSectionProps> = ({ title, icon, links, onLinkClick }) => {
  return (
    <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full flex items-center justify-center text-white mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="group">
            {link.path.includes('#') && !link.path.startsWith('/') ? (
              <button
                onClick={() => onLinkClick(link.path)}
                className="block w-full text-left hover:bg-[#0a1929]/50 p-4 rounded-lg transition-all duration-300 group-hover:transform group-hover:translate-x-2"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-[#D4175C] font-medium group-hover:text-white transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                      {link.description}
                    </p>
                  </div>
                </div>
              </button>
            ) : (
              <Link
                to={link.path}
                className="block hover:bg-[#0a1929]/50 p-4 rounded-lg transition-all duration-300 group-hover:transform group-hover:translate-x-2"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-[#D4175C] font-medium group-hover:text-white transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => {
  return (
    <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full flex items-center justify-center text-white mx-auto mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

export default SitemapPage;