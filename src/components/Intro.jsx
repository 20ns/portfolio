import React, { useRef, useState, useCallback, useEffect } from 'react';

const Intro = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-50px 0px',
      threshold: 0.05
    });

    const current = introRef.current;
    if (current) observer.observe(current);
    
    return () => current && observer.unobserve(current);
  }, [handleIntersection]);

  return (
    <div 
      className="intro mt-16 px-6 max-w-2xl mx-auto relative z-[1000]" 
      ref={introRef}
      style={{ willChange: 'transform, opacity' }}
    >
      <div
        className={`bg-opacity-10 bg-white backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-2xl font-bold text-white mb-4 intro-animate-fade-in opacity-0" 
          style={{ animationDelay: '300ms' }}>
          About Me
        </h3>
        
        <p className="text-lg text-gray-300 leading-relaxed intro-animate-fade-in opacity-0" 
           style={{ animationDelay: '500ms' }}>
          A <span className="text-electric-cyan font-semibold">Computer Science student</span> with expertise in 
          <span className="text-lime-green font-semibold"> full-stack development</span>,
          <span className="text-electric-cyan font-semibold"> data analytics</span>, and
          <span className="text-lime-green font-semibold"> software engineering</span>.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4 intro-animate-fade-in opacity-0" 
           style={{ animationDelay: '1000ms' }}>
          I blend <span className="text-electric-cyan font-semibold">technical proficiency</span> with
          <span className="text-lime-green font-semibold"> creative problem-solving</span> to develop solutions that are both innovative and user-centered.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4 intro-animate-fade-in opacity-0" 
          style={{ animationDelay: '1500ms' }}>
          My approach focuses on writing <span className="text-electric-cyan font-semibold">clean, maintainable code</span> and creating
          <span className="text-lime-green font-semibold"> intuitive user experiences</span>. I continuously expand my skillset through challenging
          projects and staying current with emerging technologies.
        </p>
        
        <div className="mt-6 intro-animate-fade-in opacity-0" style={{ animationDelay: '1800ms' }}>
          <h4 className="text-lg font-semibold text-white mb-2">Core Competencies:</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li className="flex items-center text-gray-300">
              <span className="mr-2 text-electric-cyan">▹</span> Front-end Development
            </li>
            <li className="flex items-center text-gray-300">
              <span className="mr-2 text-electric-cyan">▹</span> Back-end Systems
            </li>
            <li className="flex items-center text-gray-300">
              <span className="mr-2 text-electric-cyan">▹</span> Database Management
            </li>
            <li className="flex items-center text-gray-300">
              <span className="mr-2 text-electric-cyan">▹</span> UI/UX Design
            </li>
            <li className="flex items-center text-gray-300">
              <span className="mr-2 text-electric-cyan">▹</span> Machine Learning
            </li>
            <li className="flex items-center text-gray-300">
              <span className="mr-2 text-electric-cyan">▹</span> Responsive Design
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Intro;