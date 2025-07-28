import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center text-gray-400 hover:text-[#D4175C] transition-colors duration-200"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-500" />

          {item.href && !item.active ? (
            <Link
              to={item.href}
              className="text-gray-400 hover:text-[#D4175C] transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`font-medium ${item.active
                  ? 'text-[#D4175C]'
                  : 'text-gray-300'
                }`}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;