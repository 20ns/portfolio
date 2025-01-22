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
      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .intro-animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}
      </style>

      <div
        className={`bg-opacity-10 bg-white backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-lg text-gray-300 leading-relaxed intro-animate-fade-in opacity-0" 
           style={{ animationDelay: '500ms' }}>
          A <span className="text-electric-cyan font-semibold">Computer Science student</span> with a passion for
          <span className="text-lime-green font-semibold"> software engineering</span>,
          <span className="text-electric-cyan font-semibold"> technology</span>, and
          <span className="text-lime-green font-semibold"> problem-solving</span>.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4 intro-animate-fade-in opacity-0" 
           style={{ animationDelay: '1000ms' }}>
          Dedicated to creating <span className="text-electric-cyan font-semibold">user-friendly</span>,
          <span className="text-lime-green font-semibold"> efficient solutions</span> that make a real impact.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4 intro-animate-fade-in opacity-0" 
          style={{ animationDelay: '1500ms' }}>
          Always excited about exploring new challenges, whether through coding projects or collaborations.
          Take a look at the work showcased here to see what drives and motivates me to keep learning and
          innovating in the world of tech.
        </p>
      </div>
    </div>
  );
});

export default Intro;