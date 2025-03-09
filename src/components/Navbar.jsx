import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado de isOpen al hacer clic
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <h1 className='name-navbar'>Matias Ezequiel Aguirre</h1>
        {/* Ícono del menú hamburguesa */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;