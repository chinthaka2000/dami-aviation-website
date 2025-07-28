import React, { useState } from 'react';
import { CreditCard, Calculator, CheckCircle, Info, Star } from 'lucide-react';
import PricingCard from '../ui/PricingCard';
import { aviationCoursePricing, paymentPlans, feeBreakdown, formatCurrency, calculateInstallment } from '../../data/pricingData';
import { handleRegister as handleWhatsAppRegister } from '../../utils/whatsapp';

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const handleRegister = () => {
    // This will be implemented when registration functionality is added
    console.log('Registration clicked');
    // For now, scroll to contact or show modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coursePricing = aviationCoursePricing[0];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#0a1929] via-[#0f2942] to-[#0a1929] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23B5054A%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#B5054A]/10 border border-[#B5054A]/20 rounded-full px-6 py-2 mb-6">
            <CreditCard className="w-5 h-5 text-[#D4175C] mr-2" />
            <span className="text-[#D4175C] font-medium">Course Investment</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Affordable Excellence in
            <span className="block bg-gradient-to-r from-[#B5054A] to-[#D4175C] bg-clip-text text-transparent">
              Aviation Training
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start your aviation career with just <span className="text-[#D4175C] font-semibold">Rs 1,000</span> registration fee.
            Get DAMI certification and comprehensive training that opens doors to international opportunities.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-md mx-auto mb-12">
          <PricingCard
            title={coursePricing.name}
            registrationFee={coursePricing.registrationFee}
            totalFee={coursePricing.totalFee}
            currency={coursePricing.currency}
            features={coursePricing.features}
            highlighted={coursePricing.highlighted}
            onRegister={handleRegister}
            badge="Most Popular"
          />
        </div>

        {/* Payment Plans */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Flexible Payment Options</h3>
            <p className="text-gray-300">Choose a payment plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#0f2942]/50 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedPlan === index
                  ? 'border-[#D4175C] shadow-lg shadow-[#D4175C]/20'
                  : 'border-gray-700/30 hover:border-[#D4175C]/30'
                  }`}
                onClick={() => setSelectedPlan(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">{plan.name}</h4>
                  {selectedPlan === index && (
                    <CheckCircle className="w-5 h-5 text-[#D4175C]" />
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Installments:</span>
                    <span className="text-white">{plan.installments}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Amount per installment:</span>
                    <span className="text-[#D4175C] font-semibold">
                      {formatCurrency(calculateInstallment(coursePricing.totalFee, plan.installments, plan.discount))}
                    </span>
                  </div>

                  {plan.discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Discount:</span>
                      <span className="text-green-400">{plan.discount}% OFF</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowBreakdown(!showBreakdown)}
            >
              <div className="flex items-center">
                <Calculator className="w-5 h-5 text-[#D4175C] mr-3" />
                <h4 className="text-lg font-semibold text-white">Fee Breakdown</h4>
              </div>
              <Info className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showBreakdown ? 'rotate-180' : ''}`} />
            </div>

            {showBreakdown && (
              <div className="mt-6 space-y-3 border-t border-gray-700/30 pt-6">

                <div className="flex justify-between">
                  <span className="text-gray-300">Tuition Fee</span>
                  <span className="text-white">{formatCurrency(feeBreakdown.tuitionFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Training Materials</span>
                  <span className="text-white">{formatCurrency(feeBreakdown.materialsFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">DAMI Certification</span>
                  <span className="text-white">{formatCurrency(feeBreakdown.certificationFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Practical Training</span>
                  <span className="text-white">{formatCurrency(feeBreakdown.practicalTrainingFee)}</span>
                </div>
                <div className="border-t border-gray-700/30 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Total Course Fee</span>
                    <span className="text-[#D4175C]">{formatCurrency(feeBreakdown.total)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-[#D4175C] mr-2" />
            <span className="text-gray-300">
              <span className="text-[#D4175C] font-semibold">Limited Seats Available</span> - Secure your spot today!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;