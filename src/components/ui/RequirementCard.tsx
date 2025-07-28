import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface RequirementCardProps {
  title: string;
  description: string;
  criteria: string[];
  icon: React.ReactNode;
  status?: 'pass' | 'fail' | 'pending' | 'info';
  className?: string;
}

const RequirementCard: React.FC<RequirementCardProps> = ({
  title,
  description,
  criteria,
  icon,
  status = 'info',
  className = ''
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBorder = () => {
    switch (status) {
      case 'pass':
        return 'border-green-500/30 hover:border-green-500/50';
      case 'fail':
        return 'border-red-500/30 hover:border-red-500/50';
      case 'pending':
        return 'border-yellow-500/30 hover:border-yellow-500/50';
      default:
        return 'border-gray-700/30 hover:border-[#D4175C]/30';
    }
  };

  const getStatusBackground = () => {
    switch (status) {
      case 'pass':
        return 'hover:shadow-green-500/10';
      case 'fail':
        return 'hover:shadow-red-500/10';
      case 'pending':
        return 'hover:shadow-yellow-500/10';
      default:
        return 'hover:shadow-[#D4175C]/10';
    }
  };

  return (
    <div className={`bg-[#0f2942]/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${getStatusBorder()} ${getStatusBackground()} ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-[#D4175C] flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </div>
        {getStatusIcon()}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Criteria List */}
      <div className="space-y-2">
        <h4 className="text-white font-medium text-sm mb-3">Requirements:</h4>
        <ul className="space-y-2">
          {criteria.map((criterion, index) => (
            <li key={index} className="flex items-start text-sm">
              <div className="w-2 h-2 bg-[#D4175C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 leading-relaxed">{criterion}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Status Message */}
      {status !== 'info' && (
        <div className="mt-4 pt-4 border-t border-gray-700/30">
          <div className={`text-sm font-medium ${status === 'pass' ? 'text-green-400' :
              status === 'fail' ? 'text-red-400' :
                'text-yellow-400'
            }`}>
            {status === 'pass' && '✓ Requirements met'}
            {status === 'fail' && '✗ Requirements not met'}
            {status === 'pending' && '⚠ Verification pending'}
          </div>
        </div>
      )}
    </div>
  );
};

export default RequirementCard;