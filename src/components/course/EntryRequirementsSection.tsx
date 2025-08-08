import React, { useState } from 'react';
import { Calendar, GraduationCap, Activity, UserCheck, Calculator, CheckCircle2 } from 'lucide-react';
import RequirementCard from '../ui/RequirementCard';
import {
  entryRequirements,
  requirementIcons,
  validateAge,
  validateHeight,
  validateBMI,
  calculateBMI,
  getRequirementStatusMessage
} from '../../data/entryRequirements';
import { performEligibilityAssessment } from '../../utils/validation';
import { handleRegister } from '../../utils/whatsapp';

/**
 * EntryRequirementsSection Component
 * Displays the entry requirements for the aviation cabin crew training course
 * with clear visual hierarchy and mobile-responsive grid layout
 */
const EntryRequirementsSection: React.FC = () => {
  // State for interactive requirement assessment
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentData, setAssessmentData] = useState({
    age: '',
    gender: '' as 'male' | 'female' | '',
    height: '',
    weight: '',
    olPasses: '',
    olCredits: '',
    englishCredit: false,
    colorVision: false
  });
  const [assessmentResults, setAssessmentResults] = useState<{
    [key: string]: { status: 'pass' | 'fail' | 'pending'; message: string }
  }>({});
  const [overallAssessment, setOverallAssessment] = useState<any>(null);

  /**
   * Get the appropriate icon component for a requirement
   */
  const getRequirementIcon = (iconName: string) => {
    const IconComponent = requirementIcons[iconName as keyof typeof requirementIcons];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <UserCheck className="w-6 h-6" />;
  };

  /**
   * Handle assessment form input changes
   */
  const handleAssessmentChange = (field: string, value: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * Validate all requirements and update results using comprehensive assessment
   */
  const validateRequirements = () => {
    const assessment = performEligibilityAssessment({
      ...assessmentData,
      gender: assessmentData.gender === '' ? undefined : assessmentData.gender
    });

    // Convert assessment results to the expected format
    const results: { [key: string]: { status: 'pass' | 'fail' | 'pending'; message: string } } = {};

    Object.entries(assessment.requirements).forEach(([key, requirement]) => {
      if (requirement) {
        results[key] = {
          status: requirement.status,
          message: requirement.message
        };
      }
    });

    setAssessmentResults(results);

    // Store the overall assessment for better status checking
    setOverallAssessment(assessment);
  };

  /**
   * Check if user meets all requirements
   */
  const getOverallStatus = () => {
    if (overallAssessment) {
      return overallAssessment.overall;
    }

    const results = Object.values(assessmentResults);
    if (results.length === 0) return 'pending';

    const hasFailures = results.some(result => result.status === 'fail');
    const hasPending = results.some(result => result.status === 'pending');

    if (hasFailures) return 'fail';
    if (hasPending) return 'pending';
    return 'pass';
  };

  /**
   * Handle PDF download
   */
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Entry Qualifiations.pdf';
    link.download = 'Entry_Requirements_Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="requirements" className="py-20 bg-gradient-to-br from-[#0a1929] via-[#0f2942] to-[#0a1929] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4175C%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#D4175C]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-[#B5054A]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full mb-6">
            <UserCheck className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entry Requirements
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ensure you meet all the eligibility criteria for our comprehensive aviation cabin crew training program.
            These requirements are based on international aviation standards and industry best practices.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {entryRequirements.map((requirement, index) => (
            <RequirementCard
              key={requirement.category}
              title={requirement.title}
              description={requirement.description}
              criteria={requirement.criteria}
              icon={getRequirementIcon(requirement.icon)}
              status="info"
              className={`transform transition-all duration-500 hover:scale-105 ${index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-8'
                }`}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Important Notes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-[#D4175C] mb-2">Documentation Required</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Valid government-issued identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Academic certificates and transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Medical fitness certificate</span>
                  </li>

                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Clear criminal background check</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium text-[#D4175C] mb-2">Assessment Process</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Initial application review</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Document verification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Physical assessment and interview</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Final enrollment confirmation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#D4175C]/10 border border-[#D4175C]/20 rounded-lg">
              <p className="text-[#D4175C] font-medium text-center">
                💡 All requirements must be met before course commencement.
                Our admissions team will guide you through the verification process.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Eligibility Assessment */}
        <div className="mt-16">
          <div className="bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#D4175C] to-[#B5054A] rounded-full mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Eligibility Assessment
              </h3>
              <p className="text-gray-300">
                Check if you meet our entry requirements with our interactive assessment tool
              </p>
            </div>

            {!showAssessment ? (
              <div className="text-center">
                <button
                  onClick={() => setShowAssessment(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#D4175C] to-[#B5054A] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4175C]/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Eligibility Check
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Assessment Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Age Input */}
                  <div>
                    <label className="block text-white font-medium mb-2">Age (years)</label>
                    <input
                      type="number"
                      value={assessmentData.age}
                      onChange={(e) => handleAssessmentChange('age', e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a1929] border border-gray-600 rounded-lg text-white focus:border-[#D4175C] focus:outline-none transition-colors"
                      placeholder="Enter your age"
                      min="18"
                      max="26"
                    />
                    {assessmentResults.age && (
                      <div className={`mt-2 text-sm font-medium ${assessmentResults.age.status === 'pass' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {assessmentResults.age.message}
                      </div>
                    )}
                  </div>

                  {/* Gender Selection */}
                  <div>
                    <label className="block text-white font-medium mb-2">Gender</label>
                    <select
                      value={assessmentData.gender}
                      onChange={(e) => handleAssessmentChange('gender', e.target.value as 'male' | 'female')}
                      className="w-full px-4 py-3 bg-[#0a1929] border border-gray-600 rounded-lg text-white focus:border-[#D4175C] focus:outline-none transition-colors"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* Height Input */}
                  <div>
                    <label className="block text-white font-medium mb-2">Height (cm)</label>
                    <input
                      type="number"
                      value={assessmentData.height}
                      onChange={(e) => handleAssessmentChange('height', e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a1929] border border-gray-600 rounded-lg text-white focus:border-[#D4175C] focus:outline-none transition-colors"
                      placeholder="Enter height in cm"
                      min="140"
                      max="200"
                      step="0.1"
                    />
                    {assessmentResults.height && (
                      <div className={`mt-2 text-sm font-medium ${assessmentResults.height.status === 'pass' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {assessmentResults.height.message}
                      </div>
                    )}
                  </div>

                  {/* Weight Input */}
                  <div>
                    <label className="block text-white font-medium mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      value={assessmentData.weight}
                      onChange={(e) => handleAssessmentChange('weight', e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a1929] border border-gray-600 rounded-lg text-white focus:border-[#D4175C] focus:outline-none transition-colors"
                      placeholder="Enter weight in kg"
                      min="35"
                      max="120"
                      step="0.1"
                    />
                    {assessmentResults.bmi && (
                      <div className={`mt-2 text-sm font-medium ${assessmentResults.bmi.status === 'pass' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {assessmentResults.bmi.message}
                        {assessmentData.height && assessmentData.weight && (
                          <span className="block text-gray-400 text-xs mt-1">
                            BMI: {calculateBMI(parseFloat(assessmentData.weight), parseFloat(assessmentData.height)).toFixed(1)}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* O/L Passes */}
                  <div>
                    <label className="block text-white font-medium mb-2">GCE O/L Passes</label>
                    <input
                      type="number"
                      value={assessmentData.olPasses}
                      onChange={(e) => handleAssessmentChange('olPasses', e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a1929] border border-gray-600 rounded-lg text-white focus:border-[#D4175C] focus:outline-none transition-colors"
                      placeholder="Number of O/L passes"
                      min="0"
                      max="15"
                    />
                    {assessmentResults.olPasses && (
                      <div className={`mt-2 text-sm font-medium ${assessmentResults.olPasses.status === 'pass' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {assessmentResults.olPasses.message}
                      </div>
                    )}
                  </div>

                  {/* O/L Credits */}
                  <div>
                    <label className="block text-white font-medium mb-2">GCE O/L Credits</label>
                    <input
                      type="number"
                      value={assessmentData.olCredits}
                      onChange={(e) => handleAssessmentChange('olCredits', e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a1929] border border-gray-600 rounded-lg text-white focus:border-[#D4175C] focus:outline-none transition-colors"
                      placeholder="Number of O/L credits"
                      min="0"
                      max="15"
                    />
                    {assessmentResults.olCredits && (
                      <div className={`mt-2 text-sm font-medium ${assessmentResults.olCredits.status === 'pass' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {assessmentResults.olCredits.message}
                      </div>
                    )}
                  </div>

                  {/* English Credit */}
                  <div>
                    <label className="block text-white font-medium mb-2">English Credit Pass (Optional)</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="englishCredit"
                          checked={assessmentData.englishCredit === true}
                          onChange={() => handleAssessmentChange('englishCredit', true)}
                          className="mr-2 text-[#D4175C] focus:ring-[#D4175C]"
                        />
                        <span className="text-white">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="englishCredit"
                          checked={assessmentData.englishCredit === false}
                          onChange={() => handleAssessmentChange('englishCredit', false)}
                          className="mr-2 text-[#D4175C] focus:ring-[#D4175C]"
                        />
                        <span className="text-white">No</span>
                      </label>
                    </div>
                    {assessmentResults.englishCredit && (
                      <div className={`mt-2 text-sm font-medium ${assessmentResults.englishCredit.status === 'pass' ? 'text-green-400' : assessmentResults.englishCredit.status === 'pending' ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                        {assessmentResults.englishCredit.message}
                      </div>
                    )}
                  </div>

                  {/* Color Vision */}
                  <div>
                    <label className="block text-white font-medium mb-2">Normal Color Vision</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="colorVision"
                          checked={assessmentData.colorVision === true}
                          onChange={() => handleAssessmentChange('colorVision', true)}
                          className="mr-2 text-[#D4175C] focus:ring-[#D4175C]"
                        />
                        <span className="text-white">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="colorVision"
                          checked={assessmentData.colorVision === false}
                          onChange={() => handleAssessmentChange('colorVision', false)}
                          className="mr-2 text-[#D4175C] focus:ring-[#D4175C]"
                        />
                        <span className="text-white">No</span>
                      </label>
                    </div>
                    {assessmentResults.colorVision && (
                      <div className={`mt-2 text-sm font-medium ${assessmentResults.colorVision.status === 'pass' ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {assessmentResults.colorVision.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Assessment Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-700/30">
                  <button
                    onClick={validateRequirements}
                    className="px-8 py-3 bg-gradient-to-r from-[#D4175C] to-[#B5054A] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4175C]/25 transition-all duration-300"
                  >
                    Check Eligibility
                  </button>
                  <button
                    onClick={() => {
                      setShowAssessment(false);
                      setAssessmentData({
                        age: '',
                        gender: '' as 'male' | 'female' | '',
                        height: '',
                        weight: '',
                        olPasses: '',
                        olCredits: '',
                        englishCredit: false,
                        colorVision: false
                      });
                      setAssessmentResults({});
                    }}
                    className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300"
                  >
                    Reset Assessment
                  </button>
                </div>

                {/* Overall Assessment Result */}
                {Object.keys(assessmentResults).length > 0 && (
                  <div className="mt-6 p-6 rounded-xl border-2 border-dashed transition-all duration-300"
                    style={{
                      borderColor: getOverallStatus() === 'pass' ? '#10B981' :
                        getOverallStatus() === 'fail' ? '#EF4444' : '#F59E0B',
                      backgroundColor: getOverallStatus() === 'pass' ? 'rgba(16, 185, 129, 0.1)' :
                        getOverallStatus() === 'fail' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)'
                    }}>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                        style={{
                          backgroundColor: getOverallStatus() === 'pass' ? '#10B981' :
                            getOverallStatus() === 'fail' ? '#EF4444' : '#F59E0B'
                        }}>
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2"
                        style={{
                          color: getOverallStatus() === 'pass' ? '#10B981' :
                            getOverallStatus() === 'fail' ? '#EF4444' : '#F59E0B'
                        }}>
                        {getOverallStatus() === 'pass' && 'Congratulations! You Meet All Requirements'}
                        {getOverallStatus() === 'fail' && 'Some Requirements Not Met'}
                        {getOverallStatus() === 'pending' && 'Assessment In Progress'}
                      </h4>
                      <p className="mb-4"
                        style={{
                          color: getOverallStatus() === 'pass' ? '#10B981' :
                            getOverallStatus() === 'fail' ? '#EF4444' : '#F59E0B'
                        }}>
                        {overallAssessment?.summary || (
                          getOverallStatus() === 'pass' ? 'You are eligible to apply for our aviation cabin crew training program. Contact us to begin your enrollment process.' :
                            getOverallStatus() === 'fail' ? 'Please review the requirements above and ensure you meet all criteria before applying.' :
                              'Complete all fields above to get your full eligibility assessment.'
                        )}
                      </p>
                      {getOverallStatus() === 'pass' && (
                        <button
                          onClick={handleRegister}
                          className="px-6 py-3 bg-gradient-to-r from-[#D4175C] to-[#B5054A] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4175C]/25 transition-all duration-300"
                        >
                          Apply Now
                        </button>
                      )}
                      {getOverallStatus() === 'fail' && (
                        <div className="mt-4">
                          <p className="text-gray-300 mb-4 text-sm">
                            Don't meet some requirements? Our admissions team can help you understand your options and guide you through alternative pathways.
                          </p>
                          <button
                            onClick={handleRegister}
                            className="px-6 py-3 bg-transparent border-2 border-[#EF4444] text-[#EF4444] font-semibold rounded-full hover:bg-[#EF4444] hover:text-white transition-all duration-300"
                          >
                            Send Us a Message
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownloadPDF}
              className="px-8 py-4 border-2 border-[#D4175C] text-[#D4175C] font-semibold rounded-full hover:bg-[#D4175C] hover:text-white transition-all duration-300"
            >
              Download Requirements Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryRequirementsSection;