import React, { useRef, useState, useCallback, useEffect } from 'react';
import GradientHeading from './extra/GradientHeading';

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
      <h3 className="text-xl font-semibold text-electric-cyan mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 
                     transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/30"
            style={{ animationDelay: `${i * 100 + 200}ms` }}
          >
            {skill.icon && <skill.icon className="text-electric-cyan" size={18} />}
            <span className="text-white">{skill.name}</span>
            {skill.proficiency && (
              <div className="w-16 h-1.5 bg-white/20 rounded-full ml-2">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-electric-cyan to-lime-green" 
                  style={{ 
                    width: `${skill.proficiency}%`,
                    transitionDelay: `${i * 100 + 400}ms`,
                    transition: 'width 1s ease-in-out',
                    width: isVisible ? `${skill.proficiency}%` : '0%'
                  }} 
                />
              </div>
            )}
          </div>
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

  const programmingSkills = [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'Python', proficiency: 85 },
    { name: 'Java', proficiency: 80 },
    { name: 'HTML/CSS', proficiency: 95 },
    { name: 'SQL', proficiency: 85 },
    { name: 'TypeScript', proficiency: 75 },
  ];

  const frontendSkills = [
    { name: 'React', proficiency: 90 },
    { name: 'Tailwind CSS', proficiency: 95 },
    { name: 'Responsive Design', proficiency: 90 },
    { name: 'UI/UX Principles', proficiency: 85 },
    { name: 'Redux', proficiency: 80 },
  ];

  const backendSkills = [
    { name: 'Node.js', proficiency: 80 },
    { name: 'Flask', proficiency: 85 },
    { name: 'REST APIs', proficiency: 90 },
    { name: 'Database Design', proficiency: 85 },
    { name: 'MySQL', proficiency: 80 },
  ];

  const otherSkills = [
    { name: 'Git & Version Control', proficiency: 90 },
    { name: 'Machine Learning', proficiency: 75 },
    { name: 'Data Analysis', proficiency: 80 },
    { name: 'Agile Methodology', proficiency: 85 },
    { name: 'Problem Solving', proficiency: 95 },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef}>
          <GradientHeading visibleSection={isHeadingVisible}>Technical Skills</GradientHeading>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory title="Programming Languages" skills={programmingSkills} delay={100} />
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={300} />
          <SkillCategory title="Backend Development" skills={backendSkills} delay={500} />
          <SkillCategory title="Other Skills" skills={otherSkills} delay={700} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
