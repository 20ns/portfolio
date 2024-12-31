import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I am Navpreet";
  const typingSpeed = 100;

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
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-white">{text}</h1>
      <div className="h-1 bg-cyan-500 w-1/4 mx-auto my-4"></div>
      <p className="mt-4 text-lg text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default Hero;
