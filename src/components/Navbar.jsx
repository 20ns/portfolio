import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // Change navbar appearance on scroll
      setScrolled(window.scrollY > 50);
      
      // Track which section is currently visible
      const sections = ['hero', 'skills', 'portfolio', 'certificates', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    const isActive = activeSection === item;
    
    return (
      <span className="inline-block overflow-hidden">
        <span className="flex transition-all duration-500 ease-in-out">
          {isOpen ? (
            text.split('').map((letter, index) => (
              <span
                key={index}
                className={`letter ${
                  hoveredItem === item ? 'animate-letter' : ''
                } ${isActive ? 'text-electric-cyan' : ''}`}
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
              className={isActive ? 'text-electric-cyan' : ''}
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
      className={`fixed top-1/2 right-5 sm:right-3.5 w-16 sm:w-32 h-[360px] bg-gray-800 text-white transition-all duration-300 transform -translate-y-1/2 opacity-0 z-50
        ${isVisible ? 'animate-nav-appear' : ''}
        ${isOpen ? 'sm:w-40 w-32 bg-opacity-90 backdrop-blur-sm' : 'sm:w-16 w-8 bg-opacity-70 backdrop-blur-sm'}
        ${scrolled ? 'shadow-lg shadow-black/30 bg-opacity-85' : 'bg-opacity-70'}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1">
        <div className="h-40 w-1 bg-gradient-to-b from-transparent via-electric-cyan to-transparent opacity-50"></div>
      </div>
      
      <ul
        className={`flex flex-col items-center justify-center h-full gap-5 ${ // Adjusted gap for 5 items
          isOpen ? 'opacity-100' : 'opacity-70'
        }`}
      >
        <li className={`${activeSection === 'hero' ? 'transform scale-110' : ''}`}>
          <a
            href="#hero"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('hero');
            }}
            onMouseEnter={() => handleItemHover('hero')}
            onMouseLeave={handleItemLeave}
          >
            {renderAnimatedText('hero', 'Home', 'H')}
          </a>
        </li>
        <li className={`${activeSection === 'skills' ? 'transform scale-110' : ''}`}>
          <a
            href="#skills"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('skills');
            }}
            onMouseEnter={() => handleItemHover('skills')}
            onMouseLeave={handleItemLeave}
          >
            {renderAnimatedText('skills', 'Skills', 'S')}
          </a>
        </li>
        <li className={`${activeSection === 'portfolio' ? 'transform scale-110' : ''}`}>
          <a
            href="#portfolio"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('portfolio');
            }}
            onMouseEnter={() => handleItemHover('portfolio')}
            onMouseLeave={handleItemLeave}
          >
            {renderAnimatedText('portfolio', 'Projects', 'P')}
          </a>
        </li>
        <li className={`${activeSection === 'certificates' ? 'transform scale-110' : ''}`}>
          <a
            href="#certificates"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('certificates');
            }}
            onMouseEnter={() => handleItemHover('certificates')}
            onMouseLeave={handleItemLeave}
          >
            {renderAnimatedText('certificates', 'Certs', 'C')}
          </a>
        </li>
        <li className={`${activeSection === 'contact' ? 'transform scale-110' : ''}`}>
          <a
            href="#contact"
            className="hover:text-blue-400 whitespace-nowrap text-shadow-lg transition-all duration-300"
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