import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="about-page">
      <div className="about-content">
        <img src="/matiaguirreperfil.jpg" alt="Matias" className="fotoperfil" />
        <div className="about-text">
          <h2>Sobre mi</h2>
          <p>
            Soy Matías, un apasionado Desarrollador Full Stack con experiencia
            en React, Node.js, Express y MongoDB. Disfruto creando soluciones
            tanto de front-end como de back-end.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
