import React, { useState, useEffect, useRef } from 'react';
import GradientHeading from './extra/GradientHeading';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // These would be populated with your actual education/experience
  const education = [
    {
      school: "University of Computer Science",
      degree: "Bachelor of Science in Computer Science",
      period: "2020 - Present",
      description: "Focusing on software engineering, algorithms, and database systems. Maintaining a strong academic record with various practical projects."
    }
  ];

  const experience = [
    {
      company: "Software Development Intern",
      role: "Web Developer",
      period: "Summer 2023",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs. Participated in code reviews and agile development processes."
    },
    {
      company: "University Project Team",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description: "Working with a team of nine to develop a dynamic website using Java, MySQL, and PHP. Contributing to both frontend and backend development, focusing on responsive design and database management."
    }
  ];

  const ResumeItem = ({ title, subtitle, period, description }) => (
    <div className={`mb-8 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex flex-wrap justify-between items-baseline mb-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-sm text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full">{period}</span>
      </div>
      <h4 className="text-lg font-medium text-gray-300 mb-2">{subtitle}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );

  return (
    <section id="resume" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <GradientHeading visibleSection={isVisible}>Resume</GradientHeading>
        
        <div className={`flex justify-center mb-10 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="/path-to-your-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Full Resume
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`relative transition-all duration-700 ease-out delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-cyan to-transparent opacity-60"></div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
              {education.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.degree}
                  subtitle={item.school}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 ease-out delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime-green to-transparent opacity-60"></div>
            <div className="pl-8">
              <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
              {experience.map((item, index) => (
                <ResumeItem
                  key={index}
                  title={item.role}
                  subtitle={item.company}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
