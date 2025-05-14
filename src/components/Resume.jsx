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
      school: "University",
      degree: "Bachelor of Science in Computer Science",
      period: "2023 - Present",
      description: "Focusing on software engineering, algorithms, and database systems. Maintaining a strong academic record with various practical projects."
    },
    {
      school: "Sixth Form",
      degree: "A-Levels: Biology, Chemistry, Computer Science",
      period: "2021 - 2023",
      description: "Achieved A-Level qualifications, developing a strong foundation in scientific principles and computational thinking."
    }
  ];

  const experience = [
    {
      role: "Movie Recommendation",
      company: "GitHub Repo",
      period: "Personal Project",
      description: [
        "Developed a production-ready movie recommendation platform with 100+ monthly active users.",
        "Designed advanced React architecture with 30+ reusable components and 15+ custom hooks.",
        "Implemented hybrid recommendation algorithms combining collaborative filtering and content-based approaches.",
        "Created serverless backend using AWS services (Cognito, API Gateway, Lambda, DynamoDB).",
        "Achieved 300ms average load time and 95/100 Lighthouse performance score through optimization."
      ],
      githubLink: "https://github.com/20ns/movierec" // Assuming this is the link
    },
    {
      role: "Peri Palace",
      company: "GitHub Repo",
      period: "Team Project",
      description: [
        "Led backend development in a team of nine for a comprehensive restaurant management system.",
        "Architected a relational MySQL database schema with 12+ interconnected tables.",
        "Engineered secure dual-authentication system for customers and administrators with BCRYPT password hashing.",
        "Developed fault-tolerant order processing system capable of handling 200+ simultaneous transactions.",
        "Created comprehensive admin dashboard with real-time insights into inventory, users, and orders."
      ],
      githubLink: "https://github.com/20ns/Team-48" // Assuming this is the link
    },
    {
      role: "ML in Stocks",
      company: "Github Repo",
      period: "Personal Project",
      description: [
        "Built an SVM classification model achieving 78% accuracy in predicting stock market outperformance.",
        "Created robust data preprocessing pipeline for financial data that improved model accuracy by 23%.",
        "Implemented hyperparameter optimization across 48+ model configurations using GridSearchCV.",
        "Developed comprehensive evaluation framework with precision/recall analysis and ROC curve assessment.",
        "Demonstrated 22% theoretical return improvement over passive investing in back-testing."
      ],
      githubLink: "https://github.com/20ns/stockmlproject" // Assuming this is the link
    },
    {
      role: "Portfolio Website",
      company: "GitHub Repo",
      period: "Personal Project",
      description: [
        "Designed and developed personal portfolio showcasing projects and skills.",
        "Achieved 95+ Lighthouse performance score through code-splitting, lazy loading, and component memoization.",
        "Implemented custom animation framework using CSS keyframes and intersection observers.",
        "Created fully responsive design adapting seamlessly from mobile to desktop viewports."
      ],
      githubLink: "https://github.com/20ns/portfolio" // Assuming this is the link
    }
  ];

  const professionalAttributes = [
    {
      title: "Collaborative & Agile",
      description: "Experienced in working within cross-functional Scrum teams, contributing to process improvements and agile methodologies."
    },
    {
      title: "Innovative Thinker",
      description: "Passionate about exploring and prototyping generative AI and machine learning solutions that drive operational excellence and enhanced customer experiences."
    },
    {
      title: "Proactive & Adaptable",
      description: "Committed to staying current with technology trends and challenging the status quo to deliver meaningful, scalable improvements."
    }
  ];

  const ResumeItem = ({ title, subtitle, period, description, githubLink }) => (
    <div className={`mb-8 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex flex-wrap justify-between items-baseline mb-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {period && <span className="text-sm text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full">{period}</span>}
      </div>
      {subtitle && (
        <div className="flex items-center mb-2">
          <h4 className="text-lg font-medium text-gray-300">{subtitle}</h4>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Repo
            </a>
          )}
        </div>
      )}
      {Array.isArray(description) ? (
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {description.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      ) : (
        <p className="text-gray-400">{description}</p>
      )}
    </div>
  );

  return (
    <section id="resume" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <GradientHeading visibleSection={isVisible}>Resume</GradientHeading>
        
        {/* Download button removed */}
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 mt-10"> {/* Changed to single column for experience */}
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
        </div>
        
        {/* Experience Section - now takes full width */}
        <div className={`relative mt-16 transition-all duration-700 ease-out delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                githubLink={item.githubLink}
              />
            ))}
          </div>
        </div>

        {/* Professional Attributes Section */}
        <div className={`relative mt-16 transition-all duration-700 ease-out delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-60"></div>
          <div className="pl-8">
            <h2 className="text-2xl font-bold text-white mb-6">Professional Attributes</h2>
            {professionalAttributes.map((item, index) => (
              <ResumeItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
