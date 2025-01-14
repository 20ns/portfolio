import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ml from '../assets/img/ml.png';
import team from '../assets/img/team.png';
import portfolio from '../assets/img/portfolio.png';
import working from '../assets/img/working.png';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
  'react-tsparticles': {
    base: 'bg-green-500 text-white', // Example color - choose one that fits your scheme
    hover: 'hover:bg-green-600 hover:shadow-lg hover:shadow-green-500',
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
    github: 'YOUR_GITHUB_LINK_HERE',
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
    github: 'YOUR_GITHUB_LINK_HERE',
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
    technologies: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Vite',
      'ESLint',
      'Git',
      'npm',
      'react-tsparticles',
    ],
    github: 'https://github.com/20ns/portfolio',
    className: 'portfolio',
  },
  {
    title: 'Movie Recommendation',
    imageUrl: working,
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
    github: 'YOUR_GITHUB_LINK_HERE',
    className: 'movie-recommendation',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [animatedProjects, setAnimatedProjects] = useState([]);

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

  // Intersection Observer and initial animation logic
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectTitle = entry.target.querySelector('h3').textContent;
          const project = projectsData.find((p) => p.title === projectTitle);
          const index = Array.from(projectCards).indexOf(entry.target);

          if (entry.isIntersecting && !animatedProjects.includes(project.title)) {
            if (!project.initialAnimation) {
              if (index % 2 === 0) {
                entry.target.classList.add('animate-slide-in-card-left');
              } else {
                entry.target.classList.add('animate-slide-in-card-right');
              }
              setAnimatedProjects((prev) => [...prev, project.title]);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectCards.forEach((card) => {
      const projectTitle = card.querySelector('h3').textContent;
      const project = projectsData.find((p) => p.title === projectTitle);

      // Animate immediately if initialAnimation is true
      if (project.initialAnimation) {
        const index = Array.from(projectCards).indexOf(card);
        if (index % 2 === 0) {
          card.classList.add('animate-slide-in-card-left');
        } else {
          card.classList.add('animate-slide-in-card-right');
        }
        setAnimatedProjects((prev) => [...prev, project.title]);
      } else {
        observer.observe(card);
      }
    });

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
            className={`project-card bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col ${
              // No initial opacity and transform for initially animated projects
              !project.initialAnimation
                ? 'opacity-0' + (index % 2 === 0 ? ' -translate-x-1/2' : ' translate-x-1/2')
                : ''
            }`}
            style={{
              animationDelay: `${!project.initialAnimation ? index * 0.1 : 0}s`,
            }}
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
                <ReactMarkdown remarkPlugins={[remarkGfm]} className="modal-description">
                  {selectedProject.description}
                </ReactMarkdown>
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