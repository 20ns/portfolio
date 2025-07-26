import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tech Company Inc.",
      period: "Jun 2024 - Aug 2024",
      description: "Developed web applications using React and Node.js. Collaborated with senior developers on feature implementation and code reviews."
    },
    {
      title: "Frontend Developer",
      company: "Startup XYZ",
      period: "Jan 2024 - May 2024",
      description: "Built responsive user interfaces and improved application performance. Worked with design team to implement UI/UX improvements."
    }
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "University Name",
      period: "2020 - 2024",
      description: "Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web Development."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-center mb-8">Experience & Education</h2>
        
        <div className="grid grid-2">
          <div>
            <h3 className="mb-4">Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <h3>{exp.title}</h3>
                  <div className="text-secondary">{exp.company} • {exp.period}</div>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-4">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <h3>{edu.title}</h3>
                  <div className="text-secondary">{edu.company} • {edu.period}</div>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
