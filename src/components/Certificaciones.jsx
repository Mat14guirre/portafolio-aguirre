import React from "react";
import { FaAward } from "react-icons/fa";

const certificaciones = [
  {
    titulo: "React",
    institucion: "Coderhouse",
    fecha: "2024",
    imagen: "/certficiadoREACT.png", // ruta local o url
  },
  {
    titulo: "JavaScript ",
    institucion: "Coderhouse",
    fecha: "2024",
    imagen: "/certificadoJS.png",
  },
  {
    titulo: "Desarrollo Web",
    institucion: "Coderhouse",
    fecha: "2023",
    imagen: "/certificadodesarrolloWEB.png",
  },
  {
    titulo: "Desarrollo con IA",
    institucion: "Big school",
    fecha: "2025",
    imagen: "/certificacionIA.png", // ruta local o url
  },
  {
    titulo: "WordPress",
    institucion: "LinkedIn",
    fecha: "2025",
    imagen: "/certificadoWP.png", // ruta local o url
  },
  {
    titulo: "Backend 1",
    institucion: "Coderhouse",
    fecha: "2025",
    imagen: "/certificadoback.png", // ruta local o url
  },
  {
    titulo: "Backend 2",
    institucion: "Coderhouse",
    fecha: "2025",
    imagen: "/certificadoback2.png", // ruta local o url
  }
];

const Certificaciones = () => {
  return (
    <section id="certificaciones" className="cert-section">
      <h2 className="cert-title">
        <FaAward className="cert-icon" /> Mis Certificaciones
      </h2>

      <div className="cert-grid">
        {certificaciones.map((cert, index) => (
          <div key={index} className="cert-card">
            <img
              src={cert.imagen}
              alt={`Certificado de ${cert.titulo}`}
              className="cert-img"
            />
            <h3>{cert.titulo}</h3>
            <p className="cert-info">
              {cert.institucion} • {cert.fecha}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificaciones;