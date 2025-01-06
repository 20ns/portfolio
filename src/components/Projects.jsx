import React from 'react';
import ml from '../assets/img/ml.png';

const projectsData = [
  {
    title: 'Portfolio Website',
    imageUrl: 'https://placehold.co/400x300',
    description: 'This portfolio is a testament to my proficiency in building modern web applications. It leverages the power of React for a component-based architecture, resulting in a maintainable and scalable codebase. Vite is employed as the build tool, providing a rapid development environment. The user interface is styled with Tailwind CSS, demonstrating my ability to create responsive and visually appealing designs. ESLint enforces coding standards, while react-tsparticles and its engine, tsparticles, are used to create subtle yet captivating background animations. The project is a demonstration of my skills in JavaScript, responsive design, and my ability to manage complex projects using Git and npm.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'ESLint', 'Git', 'npm'],
  },
  {
    title: 'Movie Recommendation',
    imageUrl: 'https://placehold.co/400x300',
    description: 'This project is a full-stack web application designed to provide personalized movie and TV show recommendations using the TMDb API. The backend is built with Flask, which handles user requests and communicates with the TMDb API to fetch relevant data based on user input. The application allows users to search for a movie or TV show, and the system responds with a list of recommendations.',
    technologies: ['Python', 'API', 'Flask', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Machine Learning Stocks Algorithm',
    imageUrl: ml,
    description: 'In this project, I developed a machine learning algorithm to analyze and predict stock prices using historical data. The project focused on gathering and preprocessing data, applying various machine learning techniques, and evaluating the model’s performance. I utilized scikit-learn for implementing machine learning algorithms such as regression and classification, as well as to evaluate model accuracy.',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Team - Full Stack Development',
    imageUrl: 'https://placehold.co/400x300',
    description: 'This ongoing university project involves collaborating with a team of seven members to build a dynamic, fully functional website. The project focuses on delivering an interactive, intuitive, and professional user interface while ensuring strong back-end functionality. My role in the team was both as a team leader and a full-stack developer, contributing to both front-end and back-end development.',
    technologies: ['Java', 'mySQL', 'JavaFX', 'PHP', 'HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = () => {
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
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
            <div className="mt-auto">
              <h4 className="text-gray-300 font-bold mb-2">Technologies Used:</h4>
              <ul className="flex flex-wrap">
                {project.technologies.map((tech) => (
                  <li key={tech} className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;