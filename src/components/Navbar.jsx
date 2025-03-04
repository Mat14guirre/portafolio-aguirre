import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;