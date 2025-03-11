import React from "react";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section id="contact" className="contact-page">
      <h2>Contacto</h2>
      <p>
        Si desea ponerse en contacto, no dude en enviarme un mensaje por
        WhatsApp, correo electrónico o a través de mis redes profesionales.
      </p>

      <div className="contact-icons">
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/5493412254035"
          target="_blank"
          rel="noopener noreferrer"
          className="icon whatsapp"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Botón de Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=matias.aguirre269@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon email"
          title="Enviar Email por Gmail"
        >
          <FaEnvelope />
        </a>

        {/* Botón de GitHub */}
        <a
          href="https://github.com/Mat14guirre"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* Botón de LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mati-aguirre"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default ContactPage