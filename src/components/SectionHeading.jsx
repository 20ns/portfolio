import React from 'react';

const SectionHeading = ({ children, className = "" }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
        {children}
      </h2>
      <div className="w-20 h-1 bg-professional-blue mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
