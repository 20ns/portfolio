import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hii I'm, Navpreet";
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
      h1Ref.current.style.width = `${textWidth + 10}px`; // Add some extra space
    }
  }, []); // Run only once on mount

  return (
    <div id="hero" className="hero">
      <h1 ref={h1Ref} className="text-4xl font-bold text-white">
        {text}
      </h1>
      <h2 className="text-2xl font-bold text-white mt-2">Full Stack Developer</h2>
      <div className="separator">
      </div>
      <p className="mt-4 text-lg text-gray-300">
        Passionate developer with a knack for creating efficient and scalable web applications.
      </p>
    </div>
  );
};

export default Hero;