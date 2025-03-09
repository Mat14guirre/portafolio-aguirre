import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section id="contact" className="contact-page">
      <h2>Contacto</h2>
      <p>
        Si desea ponerse en contacto, no dude en enviarme un mensaje por WhatsApp o un correo electrónico.
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
      </div>
    </section>
  );
};

export default ContactPage;
