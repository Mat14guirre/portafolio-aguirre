import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

const AboutPage = () => {
  return (
    <section id="about" className="about-page">
      <div className="about-content">
        <img src="/matiaguirreperfil.jpg" alt="Matias" className="fotoperfil" />
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p className="text-sobre-mi">
            Soy Matías, un Desarrollador Full Stack apasionado por la creación
            de aplicaciones web dinámicas, eficientes y bien estructuradas. Mi
            camino en el desarrollo comenzó con el diseño y la maquetación web,
            y a lo largo del tiempo, fui incorporando tecnologías avanzadas
            tanto en el front-end como en el back-end, lo que me permite
            desarrollar soluciones completas y funcionales. Mi recorrido en el
            desarrollo: <br /> <br />✅ Desarrollo Web: Aprendí los fundamentos
            de HTML y CSS, incorporando preprocesadores como Sass para mejorar
            la modularidad y el mantenimiento del código. También me familiaricé
            con Bootstrap para agilizar el diseño responsivo y mejorar la
            experiencia del usuario. Además, trabajé con Figma para estructurar
            y diseñar interfaces atractivas y funcionales. <br /> <br /> ✅
            JavaScript y Programación orientada a objetos: Para fortalecer mi
            lógica de programación, profundicé en JavaScript y su enfoque
            orientado a objetos. Esto me permitió comprender conceptos clave
            como clases, herencia, asincronía y manipulación del DOM, esenciales
            para el desarrollo de aplicaciones interactivas. <br /> <br />✅
            React + Vite | Aplicaciones Web Modernas: Di el siguiente paso
            aprendiendo React.js junto con Vite, optimizando el rendimiento y la
            organización del código. Desarrollé un e-commerce completo, donde
            apliqué componentización, hooks, context API y rutas dinámicas con
            React Router. También trabajé con Firebase para la gestión de datos
            en tiempo real. <br /> <br />✅ Backend con Node.js y Express: Para
            completar mi perfil como Full Stack, me adentré en el mundo del
            backend utilizando Node.js y Express.js. Aprendí a estructurar
            servidores, manejar peticiones HTTP, crear APIs RESTful y gestionar
            bases de datos con MongoDB y Mongoose. Además, trabajé con
            autenticación JWT, middleware y despliegue de servidores en
            plataformas como Render y Railway. <br /> <br />
            Tecnologías que manejo:<br />
            💻 Front-End: HTML5, CSS3, Sass, Bootstrap, JavaScript (ES6+),
            React.js, Vite, Figma <br />
            ⚙️ Back-End: Node.js, Express.js, APIs RESTful, Autenticación JWT{" "}
            <br /> 🗄 Bases de Datos: MongoDB, Mongoose, Firebase <br />
            🚀 Herramientas y Metodologías: Git, GitHub, Postman, Deploy en
            Vercel/Render/Railway <br /><br />Mi enfoque se basa en la escalabilidad, buenas
            prácticas y rendimiento para ofrecer soluciones eficientes y
            adaptables a cada necesidad. Siempre busco aprender nuevas
            tecnologías y mejorar mis habilidades para seguir creciendo en el
            mundo del desarrollo. Si quieres conocer más sobre mi trabajo, ¡te
            invito a explorar mis proyectos!
          </p>
          <div className="tech-icons">
            <FaHtml5 className="icon html" title="HTML5" />
            <FaCss3Alt className="icon css" title="CSS3" />
            <SiJavascript className="icon js" title="JavaScript" />
            <FaReact className="icon react" title="React" />
            <FaNodeJs className="icon node" title="Node.js" />
            <SiMongodb className="icon mongo" title="MongoDB" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
