import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, GraduationCap, Clock } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
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
              <Scale className="w-6 h-6 text-[#D4175C] mr-2" />
              <span className="text-white font-semibold">Terms of Service</span>
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
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By enrolling in our programs, you agree to these terms and conditions.
            </p>
            <div className="flex items-center justify-center mt-4 text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <TermsSection
              icon={<FileText className="w-6 h-6" />}
              title="Acceptance of Terms"
              content={[
                "By accessing our website or enrolling in our training programs, you agree to be bound by these Terms of Service.",
                "These terms apply to all students, visitors, and users of our services.",
                "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.",
                "Continued use of our services after changes constitutes acceptance of the new terms.",
                "If you do not agree to these terms, please do not use our services."
              ]}
            />

            <TermsSection
              icon={<GraduationCap className="w-6 h-6" />}
              title="Training Programs and Services"
              content={[
                "Our aviation training programs are designed to meet international aviation standards.",
                "Course content, duration, and requirements may be subject to change based on industry standards.",
                "Students must meet all entry requirements and maintain satisfactory progress throughout the program.",
                "Completion of training does not guarantee employment with any airline or aviation company.",
                "Certificates are issued upon successful completion of all course requirements and assessments."
              ]}
            />

            <TermsSection
              icon={<CreditCard className="w-6 h-6" />}
              title="Payment Terms"
              content={[
                "Registration fee of Rs. 1,000 is required to secure your place in the program.",
                "Full course fee of Rs. 50,000 must be paid according to the agreed payment schedule.",
                "Payment plans are available: full payment (5% discount), two installments, or monthly payments.",
                "All fees are non-refundable once the course has commenced, except in exceptional circumstances.",
                "Late payment may result in suspension from classes until payment is brought current."
              ]}
            />

            <TermsSection
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Student Responsibilities"
              content={[
                "Students must attend all scheduled classes and practical sessions.",
                "Minimum 80% attendance is required for course completion and certification.",
                "Students must maintain professional conduct and appearance at all times.",
                "Any misconduct, including but not limited to disruptive behavior, may result in dismissal.",
                "Students are responsible for their personal belongings during training sessions."
              ]}
            />

            <TermsSection
              icon={<Scale className="w-6 h-6" />}
              title="Intellectual Property"
              content={[
                "All course materials, including manuals, presentations, and videos, are proprietary to Dami Aviation Lanka.",
                "Students may not reproduce, distribute, or share course materials without written permission.",
                "The Dami Aviation Lanka name, logo, and branding are protected trademarks.",
                "Students may not use our name or logo for commercial purposes without authorization.",
                "Violation of intellectual property rights may result in legal action."
              ]}
            />

            <TermsSection
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Limitation of Liability"
              content={[
                "Dami Aviation Lanka's liability is limited to the amount of fees paid by the student.",
                "We are not liable for any indirect, incidental, or consequential damages.",
                "We do not guarantee employment outcomes or specific salary levels after course completion.",
                "Students participate in practical training activities at their own risk.",
                "We maintain appropriate insurance coverage for training activities."
              ]}
            />

            <TermsSection
              icon={<FileText className="w-6 h-6" />}
              title="Cancellation and Refund Policy"
              content={[
                "Students may cancel enrollment up to 7 days before course commencement for a full refund minus processing fees.",
                "No refunds are available once the course has started, except in cases of serious illness or emergency.",
                "Course postponement may be available in exceptional circumstances, subject to availability.",
                "If we cancel a course due to insufficient enrollment, full refunds will be provided.",
                "Refund requests must be submitted in writing with supporting documentation."
              ]}
            />

            <TermsSection
              icon={<Scale className="w-6 h-6" />}
              title="Governing Law"
              content={[
                "These terms are governed by the laws of Sri Lanka.",
                "Any disputes will be resolved through the courts of Sri Lanka.",
                "Both parties agree to attempt mediation before pursuing legal action.",
                "If any provision of these terms is found invalid, the remaining provisions remain in effect.",
                "These terms constitute the entire agreement between the student and Dami Aviation Lanka."
              ]}
            />
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-8 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-4">Questions About Terms</h3>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
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

interface TermsSectionProps {
  icon: React.ReactNode;
  title: string;
  content: string[];
}

const TermsSection: React.FC<TermsSectionProps> = ({ icon, title, content }) => {
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

export default TermsOfServicePage;