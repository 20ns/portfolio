import React, { useState, useEffect, useRef, useCallback } from 'react';

const Hero = React.memo(() => {
  const [text, setText] = useState('');
  const correctText = "Hi I'm, Navpreet";
  const h1Ref = useRef(null);
  const hiddenRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const typingSpeed = 100;

  // Memoized debounce function
  const debounce = useCallback((func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }, []);

  // Optimized width calculation
  const calculateWidth = useCallback(() => {
    if (hiddenRef.current && h1Ref.current) {
      h1Ref.current.style.minWidth = `${hiddenRef.current.scrollWidth + 10}px`;
    }
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const targetText = correctText.split('');
    
    const typingInterval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setText(correctText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (text === correctText) {
      calculateWidth();
      const debouncedCalculate = debounce(calculateWidth, 50);
      
      resizeObserverRef.current = new ResizeObserver(debouncedCalculate);
      resizeObserverRef.current.observe(hiddenRef.current);

      return () => {
        resizeObserverRef.current?.disconnect();
      };
    }
  }, [text, calculateWidth, debounce]);
  return (
    <div id="hero" className="hero flex flex-col items-end justify-center min-h-[70vh] py-16 px-8">
      <div className="text-right max-w-2xl">
        <div className="mb-8 flex flex-col items-end">
          <div className="relative w-full flex justify-end">
            <div 
              ref={hiddenRef}
              className="invisible absolute whitespace-nowrap right-0"
              aria-hidden="true"
            >
              {correctText}
            </div>
            <h1
              ref={h1Ref}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight whitespace-nowrap inline-block"
              style={{ willChange: 'min-width' }}
            >
              {text}
              <span className="animate-pulse ml-1 text-electric-cyan">|</span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wide">
            Software Engineer
          </h2>
          <div className="flex gap-3 mt-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/30 text-blue-400 border border-blue-500/50 text-sm font-medium">React</span>
            <span className="px-3 py-1 rounded-full bg-green-500/30 text-green-400 border border-green-500/50 text-sm font-medium">Python</span>
            <span className="px-3 py-1 rounded-full bg-yellow-500/30 text-yellow-400 border border-yellow-500/50 text-sm font-medium">JavaScript</span>
          </div>
        </div>
        <div className="separator w-2/3 ml-auto my-10 opacity-80 transition-opacity duration-300 hover:opacity-100" />
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl ml-auto">
          Passionate developer with a focus on <span className="text-electric-cyan">innovation</span>, <span className="text-lime-green">efficiency</span>, and <span className="text-electric-cyan">problem-solving</span>. Creating impactful digital experiences through clean code and thoughtful design.
        </p>
        <div className="mt-8 flex justify-end gap-5">
          <a 
            href="#portfolio" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/50 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
});

export default Hero;