import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

const HomePage = () => {
  return (
    <>
      <section id="home" className="home-page">
        <h1 className="welcome-text">BIENVENIDOS,</h1>
        <p className="title-home">SOY DESARROLLADOR FULL STACK!</p>
      </section>

      <div className="tech-icons">
        <div className="tech-track">
          <FaHtml5 className="icon html" title="HTML5" />
          <FaCss3Alt className="icon css" title="CSS3" />
          <SiJavascript className="icon js" title="JavaScript" />
          <FaReact className="icon react" title="React" />
          <FaNodeJs className="icon node" title="Node.js" />
          <SiMongodb className="icon mongo" title="MongoDB" />

          {/* repite exactamente lo mismo para el efecto infinito */}
          <FaHtml5 className="icon html" />
          <FaCss3Alt className="icon css" />
          <SiJavascript className="icon js" />
          <FaReact className="icon react" />
          <FaNodeJs className="icon node" />
          <SiMongodb className="icon mongo" />

      
        </div>
      </div>
    </>
  );
};

export default HomePage;
