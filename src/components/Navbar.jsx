import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setHoveredItem(null);
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

  const renderAnimatedText = (item, text, shortText) => {
    return (
      <span className="inline-block overflow-hidden">
        <span className="flex transition-all duration-500 ease-in-out">
          {isOpen ? (
            text.split('').map((letter, index) => (
              <span
                key={index}
                className={`letter ${
                  hoveredItem === item ? 'animate-letter' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  opacity: isOpen ? 1 : 0,
                  transition: `opacity 0.3s ease ${index * 0.05}s`,
                }}
              >
                {letter}
              </span>
            ))
          ) : (
            <span
              style={{
                opacity: isOpen ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              {shortText}
            </span>
          )}
        </span>
      </span>
    );
  };

  return (
    <nav
      className={`fixed top-1/2 right-5 sm:right-3.5 w-16 sm:w-32 h-[300px] bg-gray-800 bg-opacity-70 text-white transition-all duration-300 transform -translate-y-1/2 opacity-0 ${
        isVisible ? 'animate-nav-appear' : ''
      } ${
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