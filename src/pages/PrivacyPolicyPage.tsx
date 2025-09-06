import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText, Clock } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
              <Shield className="w-6 h-6 text-[#D4175C] mr-2" />
              <span className="text-white font-semibold">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center mt-4 text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <PolicySection
              icon={<Eye className="w-6 h-6" />}
              title="Information We Collect"
              content={[
                "Personal Information: Name, email address, phone number, date of birth, and address when you register for our courses or contact us.",
                "Educational Information: Academic qualifications, certificates, and training records.",
                "Physical Information: Height, weight, and medical fitness information required for aviation training.",
                "Communication Records: Records of your communications with us, including emails, phone calls, and messages.",
                "Website Usage: Information about how you use our website, including IP address, browser type, and pages visited."
              ]}
            />

            <PolicySection
              icon={<UserCheck className="w-6 h-6" />}
              title="How We Use Your Information"
              content={[
                "Course Administration: To process your enrollment, manage your training progress, and issue certificates.",
                "Communication: To respond to your inquiries, send course updates, and provide customer support.",
                "Eligibility Assessment: To evaluate your suitability for aviation training programs.",
                "Legal Compliance: To comply with aviation industry regulations and legal requirements.",
                "Service Improvement: To improve our training programs and website functionality."
              ]}
            />

            <PolicySection
              icon={<Lock className="w-6 h-6" />}
              title="Information Protection"
              content={[
                "Data Security: We implement appropriate technical and organizational measures to protect your personal information.",
                "Access Control: Only authorized personnel have access to your personal information on a need-to-know basis.",
                "Encryption: Sensitive data is encrypted during transmission and storage.",
                "Regular Audits: We regularly review our security practices and update them as necessary.",
                "Third-Party Security: We ensure that any third-party service providers maintain appropriate security standards."
              ]}
            />

            <PolicySection
              icon={<FileText className="w-6 h-6" />}
              title="Information Sharing"
              content={[
                "Partner Airlines: We may share relevant training records with partner airlines for job placement purposes, with your consent.",
                "Regulatory Bodies: We may share information with aviation regulatory authorities as required by law.",
                "Service Providers: We may share information with trusted service providers who assist in delivering our services.",
                "Legal Requirements: We may disclose information when required by law or to protect our legal rights.",
                "No Sale of Data: We do not sell, rent, or trade your personal information to third parties for marketing purposes."
              ]}
            />

            <PolicySection
              icon={<UserCheck className="w-6 h-6" />}
              title="Your Rights"
              content={[
                "Access: You have the right to request access to the personal information we hold about you.",
                "Correction: You can request correction of any inaccurate or incomplete personal information.",
                "Deletion: You may request deletion of your personal information, subject to legal and regulatory requirements.",
                "Portability: You can request a copy of your personal information in a structured, machine-readable format.",
                "Objection: You can object to certain types of processing of your personal information."
              ]}
            />

            <PolicySection
              icon={<Shield className="w-6 h-6" />}
              title="Data Retention"
              content={[
                "Training Records: We retain training records for a minimum of 7 years as required by aviation regulations.",
                "Personal Information: We retain personal information for as long as necessary to provide our services.",
                "Communication Records: We retain communication records for 3 years for quality assurance purposes.",
                "Website Data: Website usage data is typically retained for 2 years for analytics purposes.",
                "Legal Requirements: Some information may be retained longer if required by law."
              ]}
            />
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-8 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us About Privacy</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="text-[#D4175C] font-medium mb-2">Email</h4>
                <p>damiaviationlanka@gmail.com</p>
              </div>
              <div>
                <h4 className="text-[#D4175C] font-medium mb-2">Phone</h4>
                <p>+94 77 342 8832 | +94 78 328 8025</p>
              </div>
              <div>
                <h4 className="text-[#D4175C] font-medium mb-2">Address</h4>
                <p>Pasbage Watta, Paththunupitiya, Nawalapitiya, Sri Lanka</p>
              </div>
              <div>
                <h4 className="text-[#D4175C] font-medium mb-2">Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 8:00 PM<br />Saturday: 9:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PolicySectionProps {
  icon: React.ReactNode;
  title: string;
  content: string[];
}
const PolicySection: React.FC<PolicySectionProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full flex items-center justify-center text-white mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <ul className="space-y-4">
        {content.map((item, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;