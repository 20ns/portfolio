import React from 'react';

const Intro = () => {
  return (
    <div className="intro mt-16 px-6 max-w-2xl mx-auto">
      <div className="bg-opacity-10 bg-white backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl">
        <p className="text-lg text-gray-300 leading-relaxed">
          A <span className="text-electric-cyan font-semibold">Computer Science student</span> with a passion for 
          <span className="text-lime-green font-semibold"> software engineering</span>, 
          <span className="text-electric-cyan font-semibold"> technology</span>, and 
          <span className="text-lime-green font-semibold"> problem-solving</span>.
        </p>
        
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Dedicated to creating <span className="text-electric-cyan font-semibold">user-friendly</span>, 
          <span className="text-lime-green font-semibold"> efficient solutions</span> that make a real impact.
        </p>
        
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Always excited about exploring new challenges, whether through coding projects 
          or collaborations. Take a look at the work showcased here to see what drives 
          and motivates me to keep learning and innovating in the world of tech.
        </p>
      </div>
    </div>
  );
};

export default Intro;