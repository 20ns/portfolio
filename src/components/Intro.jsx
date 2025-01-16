import React, { useState, useEffect, useRef } from 'react';

const Intro = () => {
  const [animateBox, setAnimateBox] = useState(false);
  const [animateText1, setAnimateText1] = useState(false);
  const [animateText2, setAnimateText2] = useState(false);
  const [animateText3, setAnimateText3] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the box animation
          setAnimateBox(true);

          // Delay the first text animation until the box animation is done
          setTimeout(() => setAnimateText1(true), 500); 
          setTimeout(() => setAnimateText2(true), 1000); 
          setTimeout(() => setAnimateText3(true), 1500); 

          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <div className="intro mt-16 px-6 max-w-2xl mx-auto" ref={introRef}>
      <div
        className={`bg-opacity-10 bg-white backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl ${
          animateBox ? 'animate-container' : 'opacity-0'
        }`}
      >
        <p className={`text-lg text-gray-300 leading-relaxed ${animateText1 ? 'animate-text-1' : 'opacity-0'}`}>
          A <span className="text-electric-cyan font-semibold">Computer Science student</span> with a passion
          for
          <span className="text-lime-green font-semibold"> software engineering</span>,
          <span className="text-electric-cyan font-semibold"> technology</span>, and
          <span className="text-lime-green font-semibold"> problem-solving</span>.
        </p>

        <p className={`text-lg text-gray-300 leading-relaxed mt-4 ${animateText2 ? 'animate-text-2' : 'opacity-0'}`}>
          Dedicated to creating <span className="text-electric-cyan font-semibold">user-friendly</span>,
          <span className="text-lime-green font-semibold"> efficient solutions</span> that make a real impact.
        </p>

        <p className={`text-lg text-gray-300 leading-relaxed mt-4 ${animateText3 ? 'animate-text-3' : 'opacity-0'}`}>
          Always excited about exploring new challenges, whether through coding projects or collaborations.
          Take a look at the work showcased here to see what drives and motivates me to keep learning and
          innovating in the world of tech.
        </p>
      </div>
    </div>
  );
};

export default Intro;