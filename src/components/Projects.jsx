import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ml from '../assets/img/ml.png';
import team from '../assets/img/team.png';
import portfolio from '../assets/img/portfolio.png';
import working from '../assets/img/working.png';

const technologyStyles = {
  Python: {
    base: 'bg-blue-500 text-white',
    hover: 'hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500',
  },
  Pandas: {
    base: 'bg-blue-600 text-white',
    hover: 'hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600',
  },
  'Scikit-learn': {
    base: 'bg-blue-700 text-white',
    hover: 'hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700',
  },
  Java: {
    base: 'bg-red-500 text-white',
    hover: 'hover:bg-red-600 hover:shadow-lg hover:shadow-red-500',
  },
  MySQL: {
    base: 'bg-red-600 text-white',
    hover: 'hover:bg-red-700 hover:shadow-lg hover:shadow-red-600',
  },
  JavaFX: {
    base: 'bg-red-700 text-white',
    hover: 'hover:bg-red-800 hover:shadow-lg hover:shadow-red-700',
  },
  PHP: {
    base: 'bg-purple-500 text-white',
    hover: 'hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500',
  },
  HTML: {
    base: 'bg-purple-600 text-white',
    hover: 'hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600',
  },
  CSS: {
    base: 'bg-purple-700 text-white',
    hover: 'hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-700',
  },
  JavaScript: {
    base: 'bg-red-800 text-gray-900',
    hover: 'hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500',
  },
  React: {
    base: 'bg-teal-500 text-white',
    hover: 'hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500',
  },
  'Tailwind CSS': {
    base: 'bg-teal-600 text-white',
    hover: 'hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600',
  },
  Vite: {
    base: 'bg-teal-700 text-white',
    hover: 'hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700',
  },
  ESLint: {
    base: 'bg-indigo-500 text-white',
    hover: 'hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500',
  },
  Git: {
    base: 'bg-indigo-600 text-white',
    hover: 'hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600',
  },
  npm: {
    base: 'bg-indigo-700 text-white',
    hover: 'hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-700',
  },
  API: {
    base: 'bg-pink-500 text-white',
    hover: 'hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500',
  },
  Flask: {
    base: 'bg-pink-600 text-white',
    hover: 'hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600',
  },
  Unknown: {
    base: 'bg-gray-500 text-white',
    hover: 'hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-500',
  },
};

const projectsData = [
  {
    title: 'Machine Learning Stocks Algorithm',
    imageUrl: ml,
    description:
      'In this project, I developed a machine learning algorithm to analyze and predict stock prices using historical data...',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'YOUR_GITHUB_LINK_HERE',
    initialAnimation: true,
  },
  {
    title: 'Team - Full Stack Development',
    imageUrl: team,
    description:
      'This ongoing university project involves collaborating with a team of seven members to build a dynamic, fully functional website...',
    technologies: ['Java', 'MySQL', 'JavaFX', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    github: 'YOUR_GITHUB_LINK_HERE',
    initialAnimation: true,
  },
  {
    title: 'Portfolio Website',
    imageUrl: portfolio,
    description:
      'This portfolio is a testament to my proficiency in building modern web applications...',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'ESLint', 'Git', 'npm'],
    github: 'https://github.com/20ns/portfolio',
  },
  {
    title: 'Movie Recommendation',
    imageUrl: working,
    description:
      'This project is a full-stack web application designed to provide personalized movie and TV show recommendations...',
    technologies: ['Python', 'API', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    github: 'YOUR_GITHUB_LINK_HERE',
    className: 'movie-recommendation',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(projectCards).indexOf(entry.target);
            // Apply animation based on index (even or odd)
            if (index % 2 === 0) {
              entry.target.classList.add('animate-slide-in-card-left');
            } else {
              entry.target.classList.add('animate-slide-in-card-right');
            }
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    projectCards.forEach((card) => observer.observe(card));
    
    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="projects-section px-4 py-20 bg-transparent" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10 subtitle">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col opacity-0 ${
              index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }} // Reduced delay
          >
            <div className="overflow-hidden rounded-md mb-4 h-48">
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`w-full h-full ${
                  project.className ? 'object-cover ' + project.className : 'object-contain'
                } transition-transform duration-300 ease-in-out transform hover:scale-110`}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">
              {project.description.substring(0, 150)}...
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => openModal(project)}
            >
              Read More
            </button>
            <div className="mt-auto pt-6">
              <h4 className="text-gray-300 font-bold mb-2">Technologies Used:</h4>
              <ul className="flex flex-wrap">
                {project.technologies.map((tech) => {
                  const style = technologyStyles[tech] || technologyStyles['Unknown'];
                  return (
                    <li
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2 transition-all duration-300 ease-in-out ${style.base} ${style.hover}`}
                    >
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Logic */}
      {selectedProject &&
        ReactDOM.createPortal(
          <div
            className={`modal-backdrop ${modalOpen ? 'open' : ''}`}
            onClick={closeModal}
            ref={modalRef}
            tabIndex="-1"
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()} tabIndex="-1">
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <button className="modal-close-button" onClick={closeModal}>
                  ×
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="modal-image"
                />
                <p className="modal-description">{selectedProject.description}</p>
              </div>
              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Projects;