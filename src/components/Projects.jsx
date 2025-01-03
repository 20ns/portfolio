import React from 'react';

const projectsData = [
  {
    title: 'Portfolio Website',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Short description of Project 1.',
  },
  {
    title: 'Movie Recommendation',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Short description of Project 2.',
  },
  {
    title: 'Machine Learning Stocks Algorithm',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Short description of Project 3.',
  },
  {
    title: 'Java Mini Projects',
    imageUrl: 'https://placehold.co/400x300',
    description: 'Short description of Project 4.',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-20" id="projects">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-6 shadow-md animate-slide-in-left"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;