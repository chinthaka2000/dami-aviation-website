import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const AccordionCard: React.FC<AccordionCardProps> = ({
  title,
  children,
  icon,
  defaultOpen = false,
  className = '',
  isOpen: controlledIsOpen,
  onToggle
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, isOpen]);

  const toggleAccordion = () => {
    if (onToggle) {
      // Controlled mode - call parent's toggle function
      onToggle();
    } else {
      // Uncontrolled mode - manage internal state
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className={`bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#D4175C]/30 hover:shadow-lg hover:shadow-[#D4175C]/10 ${className}`}>
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#D4175C]/50 focus:ring-inset transition-all duration-200 hover:bg-[#0f2942]/70"
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="text-[#D4175C] flex-shrink-0">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
            }`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? `${contentHeight}px` : '0px'
        }}
      >
        <div
          ref={contentRef}
          id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="px-6 pb-4"
          role="region"
          aria-labelledby={`accordion-header-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <div className="text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;