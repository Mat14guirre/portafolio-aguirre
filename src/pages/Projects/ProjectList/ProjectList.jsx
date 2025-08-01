import React from 'react';

const projects = [
  {
    image: '/verde-oliva.png',
    repoLink: 'https://github.com/Mat14guirre/control-verdeoliva',
    deployLink: 'https://control-verdeoliva.vercel.app/',
  },
  {
    image: '/MarianoReparaciones.png',
    repoLink: 'https://github.com/Mat14guirre/MarianoReparaciones',
    deployLink: 'https://mariano-reparaciones.vercel.app',
  },
  {
    image: '/gestordegastos.jpg',
    repoLink: 'https://github.com/Mat14guirre/gestor-gastos',
    deployLink: 'https://tablero-de-gasto.netlify.app/',
  },
  {
    image: '/fusion-cap.png',
    repoLink: 'https://github.com/Mat14guirre/Fusion-instalaciones',
    deployLink: 'https://fusion-instalaciones.vercel.app',
  },
  {
    image: '/mi-iphone-cap.png',
    repoLink: 'https://github.com/Mat14guirre/mi-Iphone',
    deployLink: 'https://mi-iphone.vercel.app',
  },
  {
    image: '/catalina-cap.png',
    repoLink: 'https://github.com/Mat14guirre/Catalinda-ind',
    deployLink: 'https://catalina-indumentaria.vercel.app',
  },
  
];

const ProjectList = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.image}
            alt={`Proyecto ${index + 1}`}
            className="project-image"
          />
          <div className="project-buttons">
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              GitHub
            </a>
            <a
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project"
            >
              Ver sitio
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
