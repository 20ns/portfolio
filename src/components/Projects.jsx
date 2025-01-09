import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ml from '../assets/img/ml.png';
import team from '../assets/img/team.png';
import portfolio from '../assets/img/portfolio.png';
import working from '../assets/img/working.png';

// Define styles for each technology
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
    base: 'bg-red-800 text-gray-900', // Text color set to dark gray
    hover: 'hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500', // Only hover background and shadow
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

// Projects data
const projectsData = [
  {
    title: 'Machine Learning Stocks Algorithm',
    imageUrl: ml,
    description:
      'In this project, I developed a machine learning algorithm to analyze and predict stock prices using historical data. The project focused on gathering and preprocessing data, applying various machine learning techniques, and evaluating the model’s performance. I utilized scikit-learn for implementing machine learning algorithms such as regression and classification, as well as to evaluate model accuracy.',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'YOUR_GITHUB_LINK_HERE',
  },
  {
    title: 'Team - Full Stack Development',
    imageUrl: team,
    description:
      'This ongoing university project involves collaborating with a team of seven members to build a dynamic, fully functional website. The project focuses on delivering an interactive, intuitive, and professional user interface while ensuring strong back-end functionality. My role in the team was both as a team leader and a full-stack developer, contributing to both front-end and back-end development.',
    technologies: ['Java', 'MySQL', 'JavaFX', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    github: 'YOUR_GITHUB_LINK_HERE',
  },
  {
    title: 'Portfolio Website',
    imageUrl: portfolio,
    description:
      'This portfolio is a testament to my proficiency in building modern web applications. It leverages the power of React for a component-based architecture, resulting in a maintainable and scalable codebase. Vite is employed as the build tool, providing a rapid development environment. The user interface is styled with Tailwind CSS, demonstrating my ability to create responsive and visually appealing designs. ESLint enforces coding standards, while react-tsparticles and its engine, tsparticles, are used to create subtle yet captivating background animations. The project is a demonstration of my skills in JavaScript, responsive design, and my ability to manage complex projects using Git and npm.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'ESLint', 'Git', 'npm'],
    github: 'https://github.com/20ns/portfolio',
  },
  {
    title: 'Movie Recommendation',
    imageUrl: working,
    description:
      'This project is a full-stack web application designed to provide personalized movie and TV show recommendations using the TMDb API. The backend is built with Flask, which handles user requests and communicates with the TMDb API to fetch relevant data based on user input. The application allows users to search for a movie or TV show, and the system responds with a list of recommendations.',
    technologies: ['Python', 'API', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    github: 'YOUR_GITHUB_LINK_HERE',
    className: 'movie-recommendation',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const modalContent = modalRef.current?.querySelector('.modal-content');
    const readMoreButton = document.activeElement;

    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      modalContent?.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (!modalOpen && readMoreButton) {
        readMoreButton.focus();
      }
    };
  }, [modalOpen]);

  return (
    <section className="projects-section px-4 py-20 bg-transparent" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10 subtitle">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="overflow-hidden rounded-md mb-4 h-48">
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`w-full h-full ${project.className ? 'object-cover ' + project.className : 'object-contain'} transition-transform duration-300 ease-in-out transform hover:scale-110`}
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