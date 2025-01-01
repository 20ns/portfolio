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
        setIsOpen(false); // Close the navbar on resize if it's larger than 600px
        onToggle(false)
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 h-screen w-16 sm:w-32 bg-gray-800 bg-opacity-70 text-white transition-all duration-300 ${
        isOpen ? 'sm:w-32 w-24 bg-opacity-90' : 'sm:w-16 w-8 bg-opacity-70'
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
          <a href="#" className="hover:text-blue-400 whitespace-nowrap">
            {isOpen ? 'Home' : 'H'}
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#projects"
            className="hover:text-blue-400 whitespace-nowrap"
          >
            {isOpen ? 'Projects' : 'P'}
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 whitespace-nowrap">
            {isOpen ? 'Contact' : 'C'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;