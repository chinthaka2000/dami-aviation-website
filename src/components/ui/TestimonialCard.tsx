import React from 'react';
import { Star, Quote, Award, MapPin, Calendar } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  photo: string;
  role?: string;
  company?: string;
  rating: number;
  review: string;
  courseCompleted: string;
  graduationYear: number;
  location?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  rating,
  review,
  courseCompleted,
  graduationYear,
  location,
  className = ''
}) => {
  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 transition-all duration-300 hover:scale-110 ${index < rating
          ? 'text-yellow-400 fill-current animate-pulse'
          : 'text-gray-600'
          }`}
        style={{
          animationDelay: `${index * 0.1}s`
        }}
      />
    ));
  };

  return (
    <div className={`relative group bg-gradient-to-br from-[#0f2942]/60 to-[#0a1929]/80 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4175C]/20 hover:border-[#D4175C]/50 hover:transform hover:scale-[1.02] animate-fade-in-up ${className}`}>

      {/* Google-style card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4175C]/5 to-[#B5054A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4175C] via-[#B5054A] to-[#D4175C] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>

      {/* Header with student info and photo */}
      <div className="flex items-start space-x-4 mb-6 relative z-10">
        <div className="relative">
          {/* Enhanced initials with gradient border */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4175C] to-[#B5054A] p-0.5 group-hover:animate-pulse">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#B5054A] to-[#D4175C] flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {getInitials(name)}
              </span>
            </div>
          </div>

          {/* Verified badge with animation */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full flex items-center justify-center border-2 border-[#0a1929] group-hover:scale-110 transition-transform duration-300">
            <Award className="w-3 h-3 text-white" />
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#D4175C] transition-colors duration-300">{name}</h4>
          {role && company && (
            <p className="text-[#D4175C] text-sm font-semibold mb-1">
              {role}
            </p>
          )}
          {company && (
            <p className="text-gray-400 text-sm font-medium">{company}</p>
          )}
        </div>

        {/* Quote icon in top right */}
        <div className="opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <Quote className="w-8 h-8 text-[#D4175C]" />
        </div>
      </div>

      {/* Google-style rating with enhanced design */}
      <div className="flex items-center space-x-3 mb-6 relative z-10">
        <div className="flex space-x-1">
          {renderStars()}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 font-bold text-sm">{rating}.0</span>
          <div className="flex items-center space-x-1">
            <span className="text-gray-400 text-xs">•</span>
            <FaGoogle className="w-3 h-3 text-blue-500" />
            <span className="text-gray-400 text-xs">Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Review with enhanced typography */}
      <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
        <span className="text-[#D4175C] text-lg font-bold mr-1">"</span>
        {review}
        <span className="text-[#D4175C] text-lg font-bold ml-1">"</span>
      </blockquote>

      {/* Enhanced footer with better visual hierarchy */}
      <div className="border-t border-gray-700/30 pt-4 space-y-3 relative z-10">
        <div className="flex items-center text-gray-400 text-xs bg-[#D4175C]/10 rounded-lg px-3 py-2">
          <Award className="w-4 h-4 mr-2 text-[#D4175C]" />
          <span className="font-medium">{courseCompleted}</span>
        </div>

        <div className="flex items-center justify-between text-gray-400 text-xs">
          <div className="flex items-center space-x-1 bg-[#0f2942]/50 rounded-lg px-2 py-1">
            <Calendar className="w-3 h-3 text-green-400" />
            <span>Graduated {graduationYear}</span>
          </div>

          {location && (
            <div className="flex items-center space-x-1 bg-[#0f2942]/50 rounded-lg px-2 py-1">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;