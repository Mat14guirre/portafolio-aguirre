import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
import DownloadCV from "../components/DownloadCv.jsx";

const AboutPage = () => {
  return (
    <section id="about" className="about-page">
      <div className="about-content">
        <img
          src="/fotodeperfilprofesional.png"
          alt="Matias"
          className="fotoperfil"
        />

        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Hola, soy Matías, un Desarrollador Full Stack apasionado por la
            creación de aplicaciones web completas, dinámicas y eficientes.
          </p>

          <div className="about-section">
            <h3>💡 Inicio en el desarrollo web</h3>
            <p>
              Comencé con HTML, CSS y preprocesadores como Sass. Usé Bootstrap
              para diseño responsivo y Figma para estructurar interfaces
              atractivas.
            </p>
          </div>

          <div className="about-section">
            <h3>🧠 JavaScript y POO</h3>
            <p>
              Profundicé en JavaScript moderno y programación orientada a
              objetos. Esto me dio una base sólida en asincronía, clases y DOM.
            </p>
          </div>

          <div className="about-section">
            <h3>⚛️ React + Vite</h3>
            <p>
              Aprendí React junto a Vite para optimizar rendimiento. Creé un
              e-commerce con hooks, rutas, contexto global y Firebase.
            </p>
          </div>

          <div className="about-section">
            <h3>🔧 Backend con Node.js</h3>
            <p>
              Con Node.js y Express estructuré servidores, creé APIs REST y
              trabajé con MongoDB, autenticación JWT y despliegues en
              Render/Railway.
            </p>
          </div>

          <div className="about-section">
            <h3>🛠 Tecnologías que uso</h3>
            <p>
              <strong>Front-End:</strong> HTML5, CSS3, Sass, Bootstrap,
              JavaScript ES6+, React, Vite, Figma
              <br />
              <strong>Back-End:</strong> Node.js, Express, MongoDB, Firebase,
              JWT
              <br />
              <strong>Herramientas:</strong> Git, GitHub, Postman, Vercel,
              Railway
            </p>
          </div>

          <p className="final-text">
            Me enfoco en buenas prácticas, escalabilidad y seguir aprendiendo
            constantemente. ¡Mirá mis proyectos para ver más!
          </p>
          <DownloadCV />
          
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
