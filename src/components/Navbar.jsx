import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú cuando se hace clic en un link
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className='name-navbar'>M.A</h1>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#about" onClick={handleLinkClick}>Sobre mí</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Proyectos</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;