import { useState } from 'react';

const GradientHeading = ({ children, visibleSection = true, size = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const textSizeClasses = {
    default: 'text-4xl',
    large: 'text-5xl sm:text-6xl',
  };

  return (
    <div 
      className="relative group text-center my-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2
        className={`${textSizeClasses[size]} font-bold mb-2 transition-all duration-700 transform
          ${visibleSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          ${isHovered ? 'scale-105' : 'scale-100'}`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500">
          {children}
        </span>
      </h2>
      <div 
        className={`h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-300 to-purple-500
          transition-all duration-300 ease-out
          ${isHovered ? 'w-48 sm:w-56' : 'w-0'}`}
      />
      <div 
        className={`absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-cyan-300/10 to-purple-500/10 
          rounded-lg blur-xl transition-opacity duration-500
          ${isHovered ? 'opacity-75' : 'opacity-0'}`}
      />
    </div>
  );
};

export default GradientHeading;