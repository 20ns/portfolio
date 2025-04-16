import React, { useRef, useState, useCallback, useEffect } from 'react';
import GradientHeading from './extra/GradientHeading';

const SkillBadge = ({ name, proficiency, isVisible }) => {
  // Define solid color based on proficiency for easy visual scanning
  const getColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="flex flex-col px-4 py-3 rounded-lg bg-white/10 transition-colors duration-300">
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{name}</span>
        {proficiency != null && (
          <span className="text-sm font-semibold text-white/80">{proficiency}%</span>
        )}
      </div>
      {proficiency != null && (
        <div className="w-full h-2 bg-white/20 rounded-full mt-2 overflow-hidden">
          <div
            className={`${getColor(proficiency)} h-full`}
            style={{
              width: isVisible ? `${proficiency}%` : '0%',
              transition: 'width 1s ease-in-out',
            }}
          />
        </div>
      )}
    </div>
  );
};

const SkillCategory = ({ title, skills, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={categoryRef}
      className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl 
                transition-all duration-700 transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gradient bg-gradient-to-r from-electric-cyan to-lime-green">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, i) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            proficiency={skill.proficiency}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Core skills - the most important ones to showcase
  const coreSkills = [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'React', proficiency: 90 },
    { name: 'Python', proficiency: 85 },
    { name: 'HTML/CSS', proficiency: 95 },
    { name: 'Node.js', proficiency: 80 },
    { name: 'Tailwind CSS', proficiency: 95 },
  ];

  // Technical skills grouped more efficiently
  const technicalSkills = [
    { name: 'TypeScript', proficiency: 75 },
    { name: 'Java', proficiency: 80 },
    { name: 'SQL', proficiency: 85 },
    { name: 'REST APIs', proficiency: 90 },
    { name: 'Database Design', proficiency: 85 },
    { name: 'Redux', proficiency: 80 },
  ];

  // Specialized skills that show depth of knowledge
  const specializedSkills = [
    { name: 'Machine Learning', proficiency: 75 },
    { name: 'Data Analysis', proficiency: 80 },
    { name: 'UI/UX Design', proficiency: 85 },
    { name: 'Flask', proficiency: 85 },
    { name: 'MySQL', proficiency: 80 },
    { name: 'Responsive Design', proficiency: 90 },
  ];

  // Professional skills that complement technical abilities
  const professionalSkills = [
    { name: 'Git & Version Control', proficiency: 90 },
    { name: 'Agile Methodology', proficiency: 85 },
    { name: 'Problem Solving', proficiency: 95 },
    { name: 'Team Collaboration', proficiency: 90 },
    { name: 'Technical Writing', proficiency: 85 },
    { name: 'Project Management', proficiency: 80 },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Add subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div ref={headingRef}>
          <GradientHeading visibleSection={isHeadingVisible}>Technical Skills</GradientHeading>
          <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto">
            A curated selection of my technical expertise, organized by proficiency level and relevance.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SkillCategory title="Core Expertise" skills={coreSkills} delay={100} />
          <SkillCategory title="Technical Proficiency" skills={technicalSkills} delay={300} />
          <SkillCategory title="Specialized Knowledge" skills={specializedSkills} delay={500} />
          <SkillCategory title="Professional Skills" skills={professionalSkills} delay={700} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
