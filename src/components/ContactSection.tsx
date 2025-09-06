import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
const ContactSection = () => {
  const mapAnimation = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const handleInputChange = e => {
    const {
      id,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = 'service_dami_aviation'; // Replace with your EmailJS service ID
      const templateId = 'template_3a5mqob'; // Replace with your EmailJS template ID  
      const publicKey = 'SFGtoYZdT_759424b'; // Replace with your EmailJS public key

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        program: formData.program,
        message: formData.message,
        to_email: 'damiaviationlanka@gmail.com',
        subject: `Aviation Course Inquiry - ${formData.name}`
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Show success message
      setFormSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    }
  };
  useEffect(() => {
    if (mapAnimation.current) {
      const anim = lottie.loadAnimation({
        container: mapAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets3.lottiefiles.com/packages/lf20_UgZWvP.json' // Map/route animation
      });
      return () => anim.destroy();
    }
  }, []);
  return <section id="contact" className="py-20 bg-[#0f2942] relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
    <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
    <div className="absolute right-0 bottom-1/3 w-80 h-80 rounded-full bg-[#D4175C]/10 blur-3xl"></div>
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ready to start your aviation journey? Get in touch with our team to
          learn more about our programs and enrollment process.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl hover:shadow-[#B5054A]/20 transition-all duration-500 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>
            {formSubmitted ? <div className="flex flex-col items-center justify-center py-12 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-[#B5054A]/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-[#D4175C]" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Thank You!
              </h4>
              <p className="text-gray-300">
                Your message has been sent successfully. We'll get back to
                you shortly.
              </p>
            </div> : <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-gray-300 mb-2 group-hover:text-[#D4175C] transition-colors duration-300">
                    Full Name
                  </label>
                  <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="w-full bg-[#0a1929]/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4175C] transition-colors" placeholder="Your Name" required />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-gray-300 mb-2 group-hover:text-[#D4175C] transition-colors duration-300">
                    Email Address
                  </label>
                  <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full bg-[#0a1929]/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4175C] transition-colors" placeholder="yourname@example.com" required />
                </div>
              </div>
              <div className="group">
                <label htmlFor="phone" className="block text-gray-300 mb-2 group-hover:text-[#D4175C] transition-colors duration-300">
                  Phone Number
                </label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-[#0a1929]/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4175C] transition-colors" placeholder="077 567-8900" />
              </div>
              <div className="group">
                <label htmlFor="program" className="block text-gray-300 mb-2 group-hover:text-[#D4175C] transition-colors duration-300">
                  Interested Program
                </label>
                <select id="program" value={formData.program} onChange={handleInputChange} className="w-full bg-[#0a1929]/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4175C] transition-colors" required>
                  <option value="">Select a program</option>

                  <option value="theory">Aviation Theory Courses</option>


                </select>
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-gray-300 mb-2 group-hover:text-[#D4175C] transition-colors duration-300">
                  Your Message
                </label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full bg-[#0a1929]/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4175C] transition-colors" placeholder="Tell us about your aviation goals..." required></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium flex items-center justify-center group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4175C] to-[#B5054A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </form>}
          </div>
        </div>
        <div>
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl hover:shadow-[#B5054A]/20 transition-all duration-500 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Location
            </h3>
            <div className="mb-8 h-64 relative rounded-xl overflow-hidden group">
              <div ref={mapAnimation} className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B5054A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="space-y-6">
              <ContactInfo icon={<MapPin className="text-[#D4175C]" />} title="Address">
                DAMI Aviation Training Center
                <br />
                Nawalapitiya
                <br />
                Sri Lanka
              </ContactInfo>
              <ContactInfo icon={<Phone className="text-[#D4175C]" />} title="Phone">
                +(94) 77 342 8832 | +(94) 78 328 8025
                <br />

              </ContactInfo>
              <ContactInfo icon={<Mail className="text-[#D4175C]" />} title="Email">
                damiaviationlanka@gmail.com
                <br />
                damiaviation.lk
              </ContactInfo>
              <ContactInfo icon={<Clock className="text-[#D4175C]" />} title="Office Hours">
                Monday - Friday: 8:00 AM - 8:00 PM
                <br />
                Saturday: 9:00 AM - 3:00 PM
                <br />

              </ContactInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
  </section>;
};
interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  children
}) => <div className="flex group hover:transform hover:translate-x-2 transition-transform duration-300">
    <div className="mt-1 mr-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1 group-hover:text-[#D4175C] transition-colors duration-300">
        {title}
      </h4>
      <p className="text-gray-300">{children}</p>
    </div>
  </div>;
export default ContactSection;