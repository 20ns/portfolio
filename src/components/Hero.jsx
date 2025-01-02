import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi I'm, Navpreet"; // Corrected text
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
    <main className="pt-20"> {/* Add pt-16 to push content down */}
      <div id="hero" className="hero">
        <h1 className="text-4xl font-bold text-white">{text}</h1>
        <h2 className="text-2xl font-bold text-white">Full Stack Developer</h2>
        <div className="h-1 bg-cyan-500 w-1/4 my-4"></div>
        <p className="mt-4 text-lg text-gray-300">
          Passionate developer with a knack for creating efficient and
          scalable web applications.
        </p>
      </div>
      {/* Other sections like About, Portfolio, Skills, Contact would go here */}
    </main>
  );
};

export default Hero;