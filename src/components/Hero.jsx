import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const correctText = "Hi I'm, Navpreet";
  const typingSpeed = 100;
  const h1Ref = useRef(null);
  const hiddenRef = useRef(null);
  const [width, setWidth] = useState('auto');

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
    if (text === correctText && hiddenRef.current) {
      const calculateWidth = () => {
        setWidth(`${hiddenRef.current.scrollWidth + 10}px`);
      };
     
      const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => func(...args), delay);
        };
      };

      const debouncedCalculateWidth = debounce(calculateWidth, 50);
      const resizeObserver = new ResizeObserver(debouncedCalculateWidth);
      resizeObserver.observe(hiddenRef.current);
      
      return () => resizeObserver.disconnect();
    }
  }, [text]);

  return (
    <div id="hero" className="hero flex flex-col items-end justify-center min-h-[70vh] py-16 px-8">
      <div className="text-right max-w-2xl">
        <div className="mb-8 flex flex-col items-end">
          <div className="relative w-full flex justify-end">
            <div 
              ref={hiddenRef} 
              style={{ 
                visibility: 'hidden', 
                position: 'absolute', 
                whiteSpace: 'nowrap',
                right: 0 
              }}
            >
              {correctText}
            </div>
            <h1
              ref={h1Ref}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight whitespace-nowrap"
              style={{ 
                minWidth: text ? 'auto' : '0',
                display: 'inline-block'
              }}
            >
              {text}
              <span className="animate-pulse ml-1 text-electric-cyan">|</span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wide">
            Software Engineer
          </h2>
        </div>
        <div className="separator w-2/3 ml-auto my-10 opacity-80 transform transition-all duration-300 hover:opacity-100"></div>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl ml-auto">
          Passionate developer with a knack for creating
          <span className="text-electric-cyan"> efficient</span> and
          <span className="text-lime-green"> scalable</span> web applications.
        </p>
      </div>
    </div>
  );
};

export default Hero;