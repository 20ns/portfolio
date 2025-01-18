import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Github, Code, ExternalLink } from 'lucide-react';
import GradientHeading from '../components/extra/GradientHeading';
import ml from '../assets/img/ml.png';
import team from '../assets/img/team.png';
import portfolio from '../assets/img/portfolio.png';
import working from '../assets/img/working.png';

// Technology styles
const technologyStyles = {
  Python: { base: 'bg-blue-500 text-white', hover: 'hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500' },
  Pandas: { base: 'bg-blue-600 text-white', hover: 'hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600' },
  'Scikit-learn': { base: 'bg-blue-700 text-white', hover: 'hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700' },
  Java: { base: 'bg-red-500 text-white', hover: 'hover:bg-red-600 hover:shadow-lg hover:shadow-red-500' },
  MySQL: { base: 'bg-red-600 text-white', hover: 'hover:bg-red-700 hover:shadow-lg hover:shadow-red-600' },
  JavaFX: { base: 'bg-red-700 text-white', hover: 'hover:bg-red-800 hover:shadow-lg hover:shadow-red-700' },
  PHP: { base: 'bg-purple-500 text-white', hover: 'hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500' },
  HTML: { base: 'bg-purple-600 text-white', hover: 'hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600' },
  CSS: { base: 'bg-purple-700 text-white', hover: 'hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-700' },
  JavaScript: { base: 'bg-yellow-500 text-gray-900', hover: 'hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500' },
  React: { base: 'bg-teal-500 text-white', hover: 'hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500' },
  'Tailwind CSS': { base: 'bg-teal-600 text-white', hover: 'hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600' },
  Vite: { base: 'bg-teal-700 text-white', hover: 'hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700' },
  ESLint: { base: 'bg-indigo-500 text-white', hover: 'hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500' },
  Git: { base: 'bg-indigo-600 text-white', hover: 'hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600' },
  npm: { base: 'bg-indigo-700 text-white', hover: 'hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-700' },
  'react-tsparticles': { base: 'bg-green-500 text-white', hover: 'hover:bg-green-600 hover:shadow-lg hover:shadow-green-500' },
  API: { base: 'bg-pink-500 text-white', hover: 'hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500' },
  Flask: { base: 'bg-pink-600 text-white', hover: 'hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600' },
  Unknown: { base: 'bg-gray-500 text-white', hover: 'hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-500' },
};

// Projects data
const projectsData = [
  {
    title: 'Machine Learning Stocks Algorithm',
    imageUrl: ml,
    description: `In this project, I developed a machine learning algorithm to analyze and predict stock prices...`,
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'YOUR_GITHUB_LINK_HERE',
    initialAnimation: true,
  },
  {
    title: 'Team - Full Stack Development',
    imageUrl: team,
    description: `This ongoing university project, initiated in 2023, involves collaborating with a team of nine members...`,
    technologies: ['Java', 'MySQL', 'JavaFX', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    github: 'YOUR_GITHUB_LINK_HERE',
    className: 'team',
    initialAnimation: true,
  },
  {
    title: 'Portfolio Website',
    imageUrl: portfolio,
    description: `This portfolio is a testament to my proficiency in building modern web applications...`,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'ESLint', 'Git', 'npm', 'react-tsparticles'],
    github: 'https://github.com/20ns/portfolio',
    className: 'portfolio',
    initialAnimation: false,
  },
  {
    title: 'Movie Recommendation',
    imageUrl: working,
    description: `This project is a full-stack web application, currently in development, designed to provide personalized movie and TV show recommendations...`,
    technologies: ['Python', 'API', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/20ns/movierec',
    className: 'movie-recommendation',
    initialAnimation: false,
  },
];

// ProjectCard component
const ProjectCard = ({ project, index, openModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              index % 2 === 0 ? 'animate-slide-in-card-left' : 'animate-slide-in-card-right'
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 
        backdrop-blur-lg rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl 
        hover:shadow-blue-500/20 border border-gray-700/50 hover:border-blue-500/50
        transform hover:-translate-y-1 opacity-0 flex flex-col h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image section */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 
            group-hover:scale-110"
        />

        {/* Project status badge */}
        {project.status && (
          <span className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold rounded-full
            bg-green-500/20 text-green-400 backdrop-blur-sm border border-green-500/30 animate-scale-in">
            {project.status}
          </span>
        )}
      </div>

      {/* Content wrapper - Added to create consistent spacing */}
      <div className="flex flex-col flex-1 p-6">
        {/* Main content section */}
        <div className="flex flex-col flex-1 space-y-6">
          {/* Title and buttons */}
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 
              transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600 transition-all 
                  duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Github size={20} className="text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="line-clamp-3">
              {project.description.split('\n')[0]}
            </ReactMarkdown>
          </div>

          {/* Tech stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-500/10 
                    text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 
                    transition-all duration-300 transform hover:scale-105 animate-tech-tag-pop"
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Button section - Now in a separate div outside the flex-1 content */}
        <div className="pt-6">
          <button
            onClick={() => openModal(project)}
            className="w-full px-4 py-3 flex items-center justify-center gap-2 
              bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 
              hover:to-blue-400 text-white rounded-lg transition-all duration-300 
              transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <Code size={18} />
            View Project Details
            <ExternalLink size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Projects component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [animatedProjects, setAnimatedProjects] = useState([]);
  const [visibleSection, setVisibleSection] = useState(false);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);

  // Add scroll lock effect
  useEffect(() => {
    const body = document.body;
    if (modalOpen) {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.top = `-${scrollY}px`;
      body.classList.add('modal-open');
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      body.classList.remove('modal-open');
    }
  }, [modalOpen]);

  // Handle keyboard interactions
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'Tab' && modalOpen) {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements?.length) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  // Section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSection(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      ref={sectionRef}
      className="projects-section px-4 py-20 bg-transparent relative"
      id="projects"
    >
      <GradientHeading visibleSection={visibleSection}>
        Featured Projects
      </GradientHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            openModal={openModal}
          />
        ))}
      </div>

      {selectedProject &&
        ReactDOM.createPortal(
          <div
            className={`modal-backdrop ${modalOpen ? 'open' : ''}`}
            onClick={closeModal}
            ref={modalRef}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className={`modal-content ${modalOpen ? 'open' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3 className="modal-title" id="modal-title">{selectedProject.title}</h3>
                <button 
                  className="modal-close" 
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-image-container">
                  <img src={selectedProject.imageUrl} alt={selectedProject.title} className="modal-image" />
                </div>
                <div className="modal-section">
                  <h4 className="modal-section-title">Project Overview</h4>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} className="modal-description">
                    {selectedProject.description}
                  </ReactMarkdown>
                </div>
                <div className="modal-section">
                  <h4 className="modal-section-title">Technologies Used</h4>
                  <ul className="modal-tech-list">
                    {selectedProject.technologies.map((tech) => {
                      const style = technologyStyles[tech] || technologyStyles['Unknown'];
                      return (
                        <li key={tech} className={`modal-tech-item ${style.base} ${style.hover}`}>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-button primary"
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