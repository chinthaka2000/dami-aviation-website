import { useEffect, useState } from 'react';
import { Check, MessageCircle, Star, Filter } from 'lucide-react';
import { otherServices, serviceCategories, OtherService, paymentDetails } from '../data/otherServices';
import { handleServiceInquiry } from '../utils/whatsapp';

const OtherServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredServices, setFilteredServices] = useState<OtherService[]>(otherServices);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(otherServices);
    } else {
      setFilteredServices(otherServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleWhatsAppContact = (service: OtherService) => {
    handleServiceInquiry(service.title, service.whatsappMessage);
  };

  return (
    <div className="min-h-screen bg-[#0f2942] pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#D4175C]/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Other Services
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Beyond our comprehensive training programs, DAMI Aviation offers specialized services
            to support your aviation career journey at every step.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="text-[#D4175C] mr-2" size={20} />
            <h2 className="text-xl font-semibold text-white">Filter by Category</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${selectedCategory === 'all'
                ? 'bg-[#B5054A] text-white shadow-lg shadow-[#B5054A]/30'
                : 'bg-[#0a1929]/50 text-gray-300 hover:bg-[#0a1929]/70 border border-white/10'
                }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center gap-2 ${selectedCategory === category.id
                  ? 'bg-[#B5054A] text-white shadow-lg shadow-[#B5054A]/30'
                  : 'bg-[#0a1929]/50 text-gray-300 hover:bg-[#0a1929]/70 border border-white/10'
                  }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="relative bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#D4175C]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B5054A]/20"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-[#D4175C] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Popular
                </div>
              )}

              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#D4175C] mb-1">
                  {service.currency} {service.price.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">One-time payment</div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                      <Check size={16} className="text-[#D4175C] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleWhatsAppContact(service)}
                className="w-full bg-[#B5054A] hover:bg-[#D4175C] text-white py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Contact Us
              </button>
            </div>
          ))}
        </div>

        {/* No Services Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try selecting a different category or view all services.</p>
          </div>
        )}

        {/* Payment Information */}
        <div className="mb-16">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              💳 Payment Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Bank Details</h4>
                <div className="bg-[#0f2942]/50 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-300 mb-1"><span className="text-[#D4175C] font-medium">Account Name:</span> {paymentDetails.accountName}</p>
                  <p className="text-gray-300 mb-1"><span className="text-[#D4175C] font-medium">Account Number:</span> {paymentDetails.accountNumber}</p>
                  <p className="text-gray-300"><span className="text-[#D4175C] font-medium">Bank:</span> {paymentDetails.bank}</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Important Note</h4>
                <div className="bg-[#0f2942]/50 rounded-lg p-4 border border-white/10">
                  <p className="text-[#D4175C] font-medium text-sm">{paymentDetails.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? Contact us to discuss your specific needs.
              We offer customized solutions for aviation professionals and students.
            </p>
            <button
              onClick={() => handleServiceInquiry('Custom Service', 'Hi! I\'m interested in discussing a custom service for my aviation career needs. Please contact me.')}
              className="px-8 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium text-lg flex items-center gap-2 mx-auto"
            >
              <MessageCircle size={20} />
              Contact for Custom Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServicesPage;