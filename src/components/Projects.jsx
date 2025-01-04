import React from 'react';

const projectsData = [
  {
    title: 'Portfolio Website',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Developed a responsive portfolio to showcase my projects and skills.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Movie Recommendation',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Built a movie recommendation system using collaborative filtering.',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Machine Learning Stocks Algorithm',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Engineered a stock price prediction algorithm using time series analysis.',
    technologies: ['Python', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Java Mini Projects',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Completed a collection of mini-projects to solidify core Java concepts.',
    technologies: ['Java', 'Swing', 'JavaFX'],
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