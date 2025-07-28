import React from 'react';
import { Check, Star } from 'lucide-react';
import { handleRegister } from '../../utils/whatsapp';

interface PricingCardProps {
  title: string;
  registrationFee: number;
  totalFee?: number;
  currency?: string;
  features: string[];
  highlighted?: boolean;
  onRegister?: () => void;
  className?: string;
  badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  registrationFee,
  totalFee,
  currency = 'Rs',
  features,
  highlighted = false,
  onRegister,
  className = '',
  badge
}) => {
  return (
    <div className={`relative bg-[#0f2942]/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#B5054A]/10 ${highlighted
      ? 'border-[#D4175C] shadow-lg shadow-[#D4175C]/20 scale-105'
      : 'border-gray-700/30 hover:border-[#D4175C]/30'
      } ${className}`}>
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#B5054A] to-[#D4175C] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-1" />
            {badge}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        {/* Registration Fee - Prominent Display */}
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-1">Registration Fee</div>
          <div className="text-3xl font-bold text-[#D4175C] flex items-center justify-center">
            {currency} {registrationFee.toLocaleString()}
            <span className="text-sm text-gray-400 ml-1">only</span>
          </div>
        </div>

        {/* Total Fee */}
        {totalFee && (
          <div className="text-gray-300">
            <span className="text-sm">Total Course Fee: </span>
            <span className="font-semibold">{currency} {totalFee.toLocaleString()}</span>
          </div>
        )}
      </div>

      {/* Features List */}
      <div className="mb-8">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-[#D4175C] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <button
        onClick={onRegister || handleRegister}
        className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group ${highlighted
          ? 'bg-[#D4175C] hover:bg-[#B5054A] text-white hover:shadow-[#D4175C]/30'
          : 'bg-[#B5054A] hover:bg-[#D4175C] text-white hover:shadow-[#B5054A]/30'
          }`}
      >
        <span className="relative z-10">Register Now</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#D4175C] to-[#B5054A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </button>

      {/* Payment Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400">
          Secure payment • Easy installments available
        </p>
      </div>
    </div>
  );
};

export default PricingCard;