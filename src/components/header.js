import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import menuIcon from '../assets/menu.png'; 
import logo from '../assets/logo.png';
  
const Header = ({ onToggleMenu, isMenuOpen}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const isPaymentPage = location.pathname === '/pagar';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        onToggleMenu(false); // Cerrar el menú si se cambia a vista de escritorio
      }
    };
  
    // Establecer el estado inicial
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onToggleMenu]);
  

  const hideMenu = () => {
    onToggleMenu(false);
  };

  const overlayStyle = {
    display: isMenuOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro con opacidad
    zIndex: 2, 
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0px',
    backgroundColor: '#888',
    color: 'white',
    width: '100vw',
    position: 'fixed',
    top: 0,
  };

  const boxLogoStyle = {
    maxWidth: '120px', 
    height: '26px', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    overflow: 'hidden', 
  };

  const logoStyle = {
    width: '100%', 
    height: 'auto',
    objectFit: 'cover'
  };

  // Ocultar el menú si estamos en la página de Payment
  const navStyle = {
    display: isMobile || isPaymentPage ? 'none' : 'flex',
    alignItems: 'center',
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: '0',
    padding: '0',
  };

  const navItemStyle = {
    margin: '0 25px',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const menuToggleStyle = {
    display:  isPaymentPage ? 'none' : (isMobile ? 'flex' : 'none'),
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '28px',
    zIndex: 4
  };

  const mobileNavStyle = {
    display: isPaymentPage ? 'none' : (isMenuOpen ? 'flex' : 'none'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: '#333',
    width: '100%',
    height: '100%',
    zIndex: 3, 
  };
  

  return (
    <header style={headerStyle}>
      <div style={boxLogoStyle}>
        <img src={logo} alt="Logo de Alejandro's Auto Supplies" style={logoStyle} />  
      </div>
      <button style={menuToggleStyle} onClick={() => onToggleMenu(!isMenuOpen)}>
        {isMenuOpen ? (
          <span style={{ fontSize: '28px', color: '#C41B1B', padding: '0px 1.5px' }}>✖</span> // Usar una "X" como símbolo
        ) : (
          <img src={menuIcon} alt="Menú" style={{ width: '24px', height: '24px' }} />
        )}
      </button>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}><a href="#home" style={navLinkStyle}>Inicio</a></li>
          <li style={navItemStyle}><a href="#products" style={navLinkStyle}>Productos</a></li>
          <li style={navItemStyle}><a href="#about" style={navLinkStyle}>Quienes somos</a></li>
          <li style={navItemStyle}><a href="#contact" style={navLinkStyle}>Contacto</a></li>
        </ul>
      </nav>
      <nav style={mobileNavStyle}>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
          <li style={{ margin: '10px 0', textAlign: 'center' }}><a href="#home" onClick={hideMenu} style={navLinkStyle}>Inicio</a></li>
          <li style={{ margin: '10px 0', textAlign: 'center' }}><a href="#products" onClick={hideMenu} style={navLinkStyle}>Productos</a></li>
          <li style={{ margin: '10px 0', textAlign: 'center' }}><a href="#about" onClick={hideMenu} style={navLinkStyle}>Quienes somos</a></li>
          <li style={{ margin: '10px 0', textAlign: 'center' }}><a href="#contact" onClick={hideMenu} style={navLinkStyle}>Contacto</a></li>
        </ul>
      </nav>
      <div style={overlayStyle}></div>
    </header>
  );
};

export default Header;
