import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setHoveredItem(null); // Reset hovered item on mouse leave
  };

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Helper function to render animated text
  const renderAnimatedText = (item, text, shortText) => {
    return (
      <span className="inline-block overflow-hidden">
        {isOpen ? (
          <span className="flex">
            {text.split('').map((letter, index) => (
              <span
                key={index}
                className={`letter ${
                  hoveredItem === item ? 'animate-letter' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        ) : (
          shortText
        )}
      </span>
    );
  };

  return (
    <nav
      className={`fixed top-1/2 right-5 sm:right-5 w-16 sm:w-32 h-[300px] bg-gray-800 bg-opacity-70 text-white transition-all duration-300 transform -translate-y-1/2 ${
        isOpen ? 'sm:w-32 w-24 bg-opacity-90 backdrop-blur-sm' : 'sm:w-16 w-8 bg-opacity-70 backdrop-blur-sm'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        className={`flex flex-col items-center justify-center h-full ${
          isOpen ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <li className="mb-4">
          <a
            href="#hero"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('hero');
            }}
            onMouseEnter={() => handleItemHover('home')}
            onMouseLeave={handleItemLeave}
          >
            {renderAnimatedText('home', 'Home', 'H')}
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#portfolio"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('portfolio');
            }}
            onMouseEnter={() => handleItemHover('projects')}
            onMouseLeave={handleItemLeave}
          >
            {renderAnimatedText('projects', 'Projects', 'P')}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('contact');
            }}
            onMouseEnter={() => handleItemHover('contact')}
            onMouseLeave={handleItemLeave}
          >
            {renderAnimatedText('contact', 'Contact', 'C')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;