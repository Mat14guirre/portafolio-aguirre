import React from 'react';

const projects = [
  {
    image: '/fusion-cap.png',
    repoLink: 'https://github.com/Mat14guirre/Fusion-instalaciones',
  },
  {
    image: '/mi-iphone-cap.png',
    repoLink: 'https://github.com/Mat14guirre/mi-Iphone',
  },
  {
    image: '/catalina-cap.png',
    repoLink: 'https://github.com/Mat14guirre/Catalinda-ind',
  },
];

const ProjectList = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <a key={index} href={project.repoLink} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={`Proyecto ${index + 1}`} className="project-image" />
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
