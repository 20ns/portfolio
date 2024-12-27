import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I am Navpreet";
  const typingSpeed = 150; // Medium speed (in milliseconds per character)

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

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold animate-typing">{text}</h1>
      <p className="mt-4 animate-slide-in-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default Hero;