import React, { useState, useEffect } from 'react';

const Navbar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
    onToggle(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    onToggle(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setIsOpen(false);
        onToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <nav
      className={`fixed top-1/2 right-0 w-16 sm:w-32 h-[300px] bg-gray-800 bg-opacity-70 text-white transition-all duration-300 transform -translate-y-1/2 ${
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
            href="#"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg"
            onClick={(e) => {
              e.preventDefault(); 
              smoothScroll('hero');
            }}
          >
            {isOpen ? 'Home' : 'H'}
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#projects"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('portfolio'); 
            }}
          >
            {isOpen ? 'Projects' : 'P'}
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
          >
            {isOpen ? 'Contact' : 'C'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;