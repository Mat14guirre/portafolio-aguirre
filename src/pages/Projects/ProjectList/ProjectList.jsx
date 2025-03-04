import React from 'react';

const projects = [
  {
    image: '/images/ecommerce.jpg',
    repoLink: 'https://github.com/usuario/ecommerce-app',
  },
  {
    image: '/images/blog.jpg',
    repoLink: 'https://github.com/usuario/blog-app',
  },
  {
    image: '/images/social.jpg',
    repoLink: 'https://github.com/usuario/social-media-platform',
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
