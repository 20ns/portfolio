import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Github, Code, ExternalLink, Globe, Clock, CheckCircle2, FileCode2, BarChart3, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import GradientHeading from '../components/extra/GradientHeading';
import ml from '../assets/img/ml.png';
import team from '../assets/img/team.png';
import portfolio from '../assets/img/portfolio.png';
import working from '../assets/img/working.png';
import movierec from '../assets/img/movierec.png';

// Project categories and status constants
const CATEGORIES = {
  ALL: 'All Projects',
  ML: 'Machine Learning',
  WEB: 'Web Development',
  FULLSTACK: 'Full Stack',
};

const PROJECT_STATUS = {
  COMPLETED: { label: 'Completed', color: 'green' },
  ONGOING: { label: 'In Progress', color: 'blue' },
  PLANNING: { label: 'Planning Phase', color: 'amber' },
};

const ProjectCard = React.memo(({ project, index, openModal }) => {
  const cardRef = useRef(null);
  const observerRef = useRef(null);

  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          index % 2 === 0 ? 'animate-slide-in-card-left' : 'animate-slide-in-card-right'
        );
        observerRef.current?.unobserve(entry.target);
      }
    });
  }, [index]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    const currentCard = cardRef.current;

    if (currentCard) observerRef.current.observe(currentCard);
    return () => currentCard && observerRef.current?.unobserve(currentCard);
  }, [handleIntersection]);

  const techItems = useMemo(() =>
    project.technologies.map((tech, i) => (
      <span
        key={tech}
        className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-500/10
                text-blue-400 border border-blue-500/30 hover:bg-blue-500/20
                transition-all duration-300 transform hover:scale-105 animate-tech-tag-pop"
        style={{ transitionDelay: `${i * 50}ms`, animationDelay: `${i * 50}ms` }}
      >
        {tech}
      </span>
    ))
  , [project.technologies]);
  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90
        backdrop-blur-lg rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl
        hover:shadow-blue-500/20 border border-gray-700/50 hover:border-blue-500/50
        transform hover:-translate-y-1 opacity-0 flex flex-col h-full"
    >
      {/* Enhanced background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0
        group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Category badge */}
      {project.category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 text-xs font-medium rounded-full
            bg-gray-800/80 text-gray-300 backdrop-blur-sm border border-gray-700/50 animate-scale-in">
            {project.category}
          </span>
        </div>
      )}

      <div className="relative h-64 overflow-hidden rounded-t-xl">
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
        
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700
            group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Enhanced status badge */}
        {project.status && (
          <span className={`absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold rounded-full
            flex items-center gap-1.5 backdrop-blur-sm animate-scale-in
            ${project.status === PROJECT_STATUS.COMPLETED.label 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : project.status === PROJECT_STATUS.ONGOING.label
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
            {project.status === PROJECT_STATUS.COMPLETED.label ? (
              <CheckCircle2 size={14} />
            ) : project.status === PROJECT_STATUS.ONGOING.label ? (
              <Clock size={14} />
            ) : (
              <FileCode2 size={14} />
            )}
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-col flex-1 space-y-6">
          {/* Improved title area */}
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400
              transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700
                    transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label="GitHub repository"
                >
                  <Github size={20} className="text-gray-300 hover:text-white" />
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700
                    transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                  aria-label="Live demo"
                >
                  <Globe size={20} className="text-gray-300 hover:text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Project description preview */}
          <div className="prose prose-invert prose-sm max-w-none text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.description.split('\n')[0]}
            </ReactMarkdown>
          </div>

          {/* Project stats if available */}
          {project.stats && (
            <div className="flex flex-wrap gap-3 items-center">
              {project.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-1.5 text-xs text-gray-400">
                  {stat.icon}
                  <span>{stat.label}: <span className="text-blue-400 font-medium">{stat.value}</span></span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {techItems}
            </div>
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="pt-6">
          <button
            onClick={() => openModal(project)}
            className="w-full px-4 py-3 flex items-center justify-center gap-2
              bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 
              text-white rounded-lg transition-all duration-300
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
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const modalRef = useRef(null);
  const scrollbarWidth = useRef(0); // Ref to store scrollbar width

  // Observer for header animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === CATEGORIES.ALL) {
      return projectsData;
    }
    return projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  // Calculate project statistics
  const projectStats = useMemo(() => ({
    total: projectsData.length,
    completed: projectsData.filter(p => p.status === PROJECT_STATUS.COMPLETED.label).length,
    inProgress: projectsData.filter(p => p.status === PROJECT_STATUS.ONGOING.label).length,
    technologies: [...new Set(projectsData.flatMap(p => p.technologies))].length
  }), []);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = '';
      document.body.style.paddingRight = ''; // Remove padding when modal closes
    }, 200);
  }, []);

  useEffect(() => {
    let bodyStyle = document.body.style;
    let originalOverflow = bodyStyle.overflow;
    let originalPaddingRight = bodyStyle.paddingRight;

    if (modalOpen) {
      // Calculate scrollbar width if not already calculated
      if (scrollbarWidth.current === 0) {
        scrollbarWidth.current = window.innerWidth - document.documentElement.clientWidth;
      }

      bodyStyle.overflow = 'hidden';
      bodyStyle.paddingRight = `${scrollbarWidth.current}px`; // Add padding to compensate
    } else {
      bodyStyle.overflow = originalOverflow;
      bodyStyle.paddingRight = originalPaddingRight; // Restore original padding (or remove if none)
    }

    return () => {
      bodyStyle.overflow = originalOverflow; // Cleanup on unmount
      bodyStyle.paddingRight = originalPaddingRight;
    };
  }, [modalOpen]);


  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'Tab' && modalOpen) {
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
  }, [modalOpen, closeModal]);

  useEffect(() => {
    if (!modalOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, handleKeyDown]);
  const projectCards = useMemo(() =>
    filteredProjects.map((project, index) => (
      <ProjectCard
        key={project.title}
        project={project}
        index={index}
        openModal={openModal}
      />
    ))
  , [filteredProjects, openModal]);

  return (
    <section
      ref={sectionRef}
      className="projects-section px-4 py-20 bg-transparent relative"
      id="projects"
    >
      <div ref={headerRef}>
        <GradientHeading visibleSection={isHeaderVisible}>
          Featured Projects
        </GradientHeading>
      </div>

      {/* Projects introduction with statistics */}
      <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
        isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <p className="text-lg text-gray-300 mb-8">
          Explore my portfolio of work spanning machine learning, web development, and full-stack applications.
          Each project demonstrates different technical skills and problem-solving approaches.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-1">{projectStats.total}</div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-1">{projectStats.completed}</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-1">{projectStats.inProgress}</div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-1">{projectStats.technologies}</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${
        isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {Object.values(CATEGORIES).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === category
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* No projects message if filtered to empty */}
      {projectCards.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <FileCode2 size={48} className="mx-auto mb-4 opacity-40" />
          <p>No projects found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projectCards}
        </div>
      )}      {selectedProject && ReactDOM.createPortal(
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
      modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
    onClick={closeModal}
    ref={modalRef}
    tabIndex="-1"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }}
  >
    <div
      className={`relative w-full max-w-5xl bg-gray-900 rounded-xl shadow-2xl transform transition-all duration-300 ${
        modalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      onClick={(e) => e.stopPropagation()}
      style={{
        maxHeight: 'calc(100vh - 2rem)',
        overflowY: 'auto'
      }}
    >
      {/* Modal Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold text-white" id="modal-title">
            {selectedProject.title}
          </h3>
          
          {/* Status badge in header */}
          {selectedProject.status && (
            <span className={`px-3 py-1 text-xs font-semibold rounded-full
              flex items-center gap-1.5
              ${selectedProject.status === PROJECT_STATUS.COMPLETED.label 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : selectedProject.status === PROJECT_STATUS.ONGOING.label
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
              {selectedProject.status === PROJECT_STATUS.COMPLETED.label ? (
                <CheckCircle2 size={14} />
              ) : selectedProject.status === PROJECT_STATUS.ONGOING.label ? (
                <Clock size={14} />
              ) : (
                <FileCode2 size={14} />
              )}
              {selectedProject.status}
            </span>
          )}
          
          {/* Category badge in header */}
          {selectedProject.category && (
            <span className="px-3 py-1 text-xs font-medium rounded-full
              bg-gray-800/80 text-gray-300 border border-gray-700/50">
              {selectedProject.category}
            </span>
          )}
        </div>
        
        <button
          className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Modal Body */}
      <div className="p-6 space-y-8">
        {/* Project Image Gallery */}
        <div className="relative h-80 rounded-lg overflow-hidden">
          <img
            src={selectedProject.imageUrl}
            alt={selectedProject.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
          
          {/* Image navigation dots would go here for multiple images */}
          {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          )}
          
          {/* Project quick stats overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
            <div className="flex flex-wrap gap-4 text-sm">
              {selectedProject.projectDate && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} className="text-blue-400" />
                  <span>Date: <span className="text-white">{selectedProject.projectDate}</span></span>
                </div>
              )}
              
              {selectedProject.role && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Layers size={16} className="text-purple-400" />
                  <span>Role: <span className="text-white">{selectedProject.role}</span></span>
                </div>
              )}
              
              {selectedProject.duration && (
                <div className="flex items-center gap-2 text-gray-300">
                  <BarChart3 size={16} className="text-green-400" />
                  <span>Duration: <span className="text-white">{selectedProject.duration}</span></span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Project Overview */}
            <div className="bg-gray-800/40 rounded-lg border border-gray-700/50 overflow-hidden mb-6">
              <div className="p-4 bg-gray-800/60 border-b border-gray-700/50">
                <h4 className="text-xl font-semibold text-white">Project Overview</h4>
              </div>
              <div className="p-6">
                <div className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedProject.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
            
            {/* Key Features - if available */}
            {selectedProject.keyFeatures && (
              <div className="bg-gray-800/40 rounded-lg border border-gray-700/50 overflow-hidden mb-6">
                <div className="p-4 bg-gray-800/60 border-b border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white">Key Features</h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 text-blue-400">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-gray-300">{feature}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Challenges & Solutions - if available */}
            {selectedProject.challenges && (
              <div className="bg-gray-800/40 rounded-lg border border-gray-700/50 overflow-hidden mb-6">
                <div className="p-4 bg-gray-800/60 border-b border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white">Challenges & Solutions</h4>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {selectedProject.challenges.map((item, index) => (
                      <div key={index} className="mb-6">
                        <h5 className="text-lg font-medium text-blue-400 mb-2">Challenge {index + 1}</h5>
                        <p className="text-gray-300 mb-3">{item.challenge}</p>
                        <h5 className="text-lg font-medium text-green-400 mb-2">Solution</h5>
                        <p className="text-gray-300">{item.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {/* Technologies Used */}
            <div className="bg-gray-800/40 rounded-lg border border-gray-700/50 overflow-hidden">
              <div className="p-4 bg-gray-800/60 border-b border-gray-700/50">
                <h4 className="text-xl font-semibold text-white">Technologies</h4>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => {
                    const style = technologyStyles[tech] || technologyStyles['Unknown'];
                    return (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${style.base} ${style.hover}`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* My Role - if available */}
            {selectedProject.myRole && (
              <div className="bg-gray-800/40 rounded-lg border border-gray-700/50 overflow-hidden">
                <div className="p-4 bg-gray-800/60 border-b border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white">My Role</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">{selectedProject.myRole}</p>
                </div>
              </div>
            )}
            
            {/* Project Links */}
            <div className="bg-gray-800/40 rounded-lg border border-gray-700/50 overflow-hidden">
              <div className="p-4 bg-gray-800/60 border-b border-gray-700/50">
                <h4 className="text-xl font-semibold text-white">Links</h4>
              </div>
              <div className="p-6 space-y-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-700/50 hover:bg-gray-700/80 text-white font-medium transition-colors w-full"
                  >
                    <Github size={20} className="text-gray-300" />
                    <span>GitHub Repository</span>
                  </a>
                )}
                
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600/50 hover:bg-blue-600/80 text-white font-medium transition-colors w-full"
                  >
                    <Globe size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="sticky bottom-0 p-6 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50">
        <div className="flex justify-between items-center">
          <button
            onClick={closeModal}
            className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 text-gray-300 font-medium transition-colors"
          >
            Close
          </button>
          
          <div className="flex gap-3">
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Github size={20} />
                View on GitHub
              </a>
            )}
            
            {selectedProject.liveDemo && (
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Globe size={20} />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>,
  document.body
)};
    </section>
  );
};


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

const projectsData = [
  {
    title: 'Machine Learning Stocks Algorithm',
    imageUrl: ml,
    description: `In this project, I developed a machine learning algorithm to analyze and predict stock prices using a decade's worth of historical data. My primary objective was to leverage machine learning models to forecast future stock trends and identify potential investment opportunities.

**Key Aspects and Methodologies:**

*   **Data Collection and Preprocessing:** I gathered ten years of historical stock data, encompassing features like opening/closing prices, trading volumes, and other relevant technical indicators. Data cleaning and preprocessing were performed to handle missing values, outliers, and inconsistencies. A crucial step involved implementing **data normalization** to standardize the dataset, ensuring all features contribute equally to the model training and improving prediction accuracy.

*   **Machine Learning Model Implementation:** Utilizing the **scikit-learn** library in Python, I implemented various machine learning algorithms. This included **regression models**, such as linear regression, to predict continuous stock price values and **classification models**, like decision trees or random forests, to forecast categorical outcomes (e.g., upward or downward trends). I tuned model hyperparameters to optimize performance and minimize prediction errors.

*   **Model Evaluation and Validation:** To assess model performance, I employed metrics like **Mean Squared Error (MSE)** for regression and **accuracy**, **precision**, **recall**, and **F1-score** for classification. Techniques like cross-validation were used to ensure the robustness and generalizability of the models.

*   **Visualization and Interpretation:** I used **Matplotlib** to create visualizations that aid in understanding stock market trends and model performance. These included graphs of predicted vs. actual stock prices, feature importance plots, and distributions of stock price movements over time.

*   **Mathematical Foundations:** The project involved applying core mathematical concepts, including **linear algebra**, **statistics**, and **calculus**, which are fundamental to understanding and implementing machine learning algorithms. These principles were crucial for interpreting model outputs and making informed decisions about stock market behavior.

**Technologies Used:**

*   **Python:** The primary programming language for data analysis, model development, and visualization.
*   **scikit-learn:** A powerful machine learning library used for implementing regression and classification algorithms.
*   **Pandas:** Used for efficient data manipulation and preprocessing.
*   **NumPy:** Utilized for numerical operations, especially with arrays and matrices.
*   **Matplotlib:** The main library used for creating static data visualizations.

This project demonstrates my proficiency in applying machine learning techniques to analyze complex financial data and make informed predictions. It highlights my ability to work with large datasets, implement various algorithms, evaluate model performance, and interpret results using visualizations.`,
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/20ns/stockmlproject',
    initialAnimation: true,
  },
  {
    title: 'Team - Full Stack Development',
    imageUrl: team,
    description: `This ongoing university project, initiated in 2023, involves collaborating with a team of nine members to develop a dynamic, fully functional website. We are leveraging a technology stack that includes **HTML5** for structuring the user interface, **Python** for implementing robust back-end functionality, and **MySQL** for efficient database management.

**Key Focus Areas:**

*   **Team Structure:** As a team of nine, we work closely to achieve specific milestones and meet project deadlines. Effective collaboration and communication are central to ensuring that all team members are aligned on project objectives and timelines.
*   **Front-End Development:** My contributions include utilizing **HTML5** to create a user-friendly and responsive website design, ensuring an optimal user experience across various devices.
*   **Back-End Development:** I am involved in developing the server-side logic using **Python**, focusing on data processing, dynamic feature implementation, and interaction with the **MySQL** database.
*   **Database Management:** Our team works with **MySQL** to handle all aspects of database management, from schema design to data storage, retrieval, and manipulation, supporting features like user accounts and other dynamic content.
*   **Performance Optimization:** A significant part of my role involves optimizing website performance. This includes refining code, optimizing database queries, and reducing asset sizes to enhance load times and improve the overall user experience.
*   **Team Efficiency:** I actively contribute to improving team collaboration and communication, boosting productivity, and ensuring that we meet our project deadlines efficiently.

This project showcases my ability to work effectively in a team-based environment, contributing to the development of a high-performing, dynamic website using **HTML5**, **Python**, and **MySQL**. My efforts are focused on not only making the website functional but also ensuring its efficiency and responsiveness.`,
    technologies: ['Java', 'MySQL', 'JavaFX', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    github: null,
    className: 'team',
    initialAnimation: true,
  },
  {
    title: 'Portfolio Website',
    imageUrl: portfolio,
    description: `This portfolio is a testament to my proficiency in building modern web applications. It's a fully responsive and dynamic personal portfolio website designed to showcase my skills, projects, and experience. Built using React as the core framework and styled with Tailwind CSS, the website provides an engaging and interactive user experience across all devices.

**Key Features:**

*   **Dynamic Project Showcase:** Implemented a dedicated project section featuring interactive modals. Each modal provides detailed information about individual projects, including comprehensive descriptions, technology stack breakdowns, and direct links to the corresponding GitHub repositories for code review.
*   **Engaging User Interface:** Utilized React hooks, specifically \`useState\` and \`useEffect\`, to manage component state, handle side effects, and create subtle yet effective animations. These include a captivating typing effect in the hero section that draws visitors in and smooth slide-in animations for project cards, enhancing visual appeal and user engagement.
*   **Visually Appealing Background:** Integrated the \`react-tsparticles\` library to create a dynamic and visually stunning particle background. This adds a layer of sophistication and modernity to the website's aesthetic.
*   **Custom Navigation with Smooth Scrolling:** Designed a custom navigation bar that allows for seamless navigation between different sections of the website. Implemented smooth scrolling functionality to enhance user experience and incorporated an animated text effect on hover for interactive feedback.
*   **Responsive Design:** Prioritized responsiveness throughout the development process, ensuring that the website adapts flawlessly to various screen sizes and devices, from desktops to tablets and smartphones. This provides an optimal viewing experience for all users.
*   **Hybrid Styling Approach:** Employed a strategic combination of Tailwind CSS and custom CSS. Tailwind CSS was used for its utility-first approach to rapidly build the layout and core styles, while custom CSS was implemented for more specific design requirements and unique animations. Extended the default Tailwind CSS theme with custom animations and keyframes for a personalized touch.
*   **Modular and Reusable Code:** Structured the project using reusable React components, such as \`Navbar\`, \`Hero\`, \`Intro\`, \`Projects\`, and \`Contact\`. This modular approach promotes code maintainability, reusability, and scalability.
*   **Two-Column Layout:** Organized the main content area using a two-column layout, improving readability and providing a visually balanced presentation of information.
*   **Easy Contact:** Included a dedicated contact section with direct links to my LinkedIn profile, GitHub repository, and email address, making it easy for visitors to connect and learn more.
*   **Accessibility and SEO Optimized:** Built the website with accessibility in mind, utilizing semantic HTML elements and ensuring clear navigation. Implemented best practices for Search Engine Optimization (SEO) to improve the website's visibility and ranking on search engine results pages.`,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'ESLint', 'Git', 'npm', 'react-tsparticles', 'CSS', 'HTML'],
    github: 'https://github.com/20ns/portfolio',
    className: 'team',
    initialAnimation: true,
  },
  {
    title: 'Movie Recommendation',
    imageUrl: movierec,
    description: `This project is a full-stack web application, currently in development, designed to provide personalized movie and TV show recommendations. It leverages a combination of **Flask** for the backend, **React** for the frontend, and the **Movie Database API** for comprehensive movie and TV show data. The goal is to create an engaging and intelligent system that suggests movies and TV shows tailored to individual user preferences.

**Current Progress and Features:**

*   **Frontend Development (React):** I have developed a dynamic and responsive user interface using **React**. The current implementation allows users to browse movies and TV shows, view recommendations, and potentially filter or search based on genre, rating, or other criteria. The frontend code is structured within a dedicated 'frontend' directory, including all necessary components and styling for a user-friendly experience.
*   **Backend Development (Flask):** The backend, built with **Flask**, handles requests from the frontend, processes user inputs, and interacts with the **Movie Database API**. It manages application routes, handles API requests, and serves data in a format that the frontend can display (such as JSON).
*   **API Integration (Movie Database API):** The system is integrated with the **Movie Database API** to fetch data about movies and TV shows, including titles, descriptions, ratings, and genres. This data is used to generate personalized recommendations for users.
*   **Styling and Design:** **CSS** is used to create a clean, visually appealing, and user-friendly design, optimized for displaying movie and TV show information and recommendations.

**Future Development Plans:**

*   **Machine Learning Integration:** I plan to incorporate machine learning algorithms to enhance the recommendation engine. This may involve implementing collaborative filtering (recommending based on user behavior), content-based filtering (recommending based on item attributes), or hybrid methods to provide more accurate and personalized suggestions.
*   **Enhanced User Profiles:** I am working on developing more sophisticated user profiles that will store user preferences, viewing history, and ratings to further refine the recommendation process.
*   **Advanced Filtering and Search:** Future development will include more advanced filtering and search capabilities, allowing users to more easily find movies and TV shows that match their specific interests.
*   **Performance Optimization:** I will continue to optimize the application's performance, focusing on areas like API request efficiency, frontend rendering, and overall responsiveness.

**Technologies Used:**

*   **Flask (Python):** Backend framework for handling API requests and server-side logic.
*   **React:** Frontend library for building a dynamic and interactive user interface.
*   **Movie Database API:** External API for fetching real-time movie and TV show data.
*   **CSS:** Styling language for designing the website's look and feel.

This project demonstrates my ability to develop full-stack web applications and integrate external APIs. While still in development, it showcases my skills in both frontend and backend technologies, as well as my commitment to creating user-focused and intelligent systems. I am excited to continue developing this project and implementing advanced features to further enhance its functionality and user experience.`,
    technologies: ['Python', 'API', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/20ns/movierec',
    className: 'movie-recommendation',
    initialAnimation: false,
  },
];

export default React.memo(Projects);