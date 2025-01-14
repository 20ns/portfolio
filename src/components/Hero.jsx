import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi I'm, Navpreet";
  const typingSpeed = 100;
  const h1Ref = useRef(null);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (h1Ref.current) {
      const textWidth = h1Ref.current.scrollWidth;
      h1Ref.current.style.width = `${textWidth + 10}px`;
    }
  }, []);

  return (
    <div id="hero" className="hero flex flex-col items-end justify-center min-h-[70vh] py-16 px-8">
      <div className="text-right max-w-2xl">
        <div className="mb-8">
          <h1 
            ref={h1Ref} 
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            {text}
            <span className="animate-pulse ml-1 text-electric-cyan">|</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wide">
            Full Stack Developer
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