// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import tikTok from '../assets/tik-tok.png';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const footerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    zIndex: 1,
  };

  const boxFooter = {
    margin: isMobile ? '10px 0' : '0 20px',
    flex: isMobile ? '1 1 100%' : '1 1 auto',
    textAlign: isMobile ? 'center' : 'left',
  };

  const titleStyle = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const listItemStyle = {
    margin: '5px 0',
  };

  return (
    <footer style={footerStyle} id='contact'>
      <div style={boxFooter}>
        <h3 style={titleStyle}>Redes Sociales</h3>
        <ul style={listStyle}>
          <li style={{display: 'flex', alignItems: 'center', margin: '5px 12px'}}>
            <img src={facebook} style={{ width: '16px', marginRight: '10px' }} alt="Facebook" />
            <a href="https://facebook.com" style={{ color: 'white', textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">Facebook</a>
          </li>
          <li style={{display: 'flex', alignItems: 'center', margin: '5px 12px'}}>
            <img src={instagram} style={{ width: '16px', marginRight: '10px' }} alt="Instagram" />
            <a href="https://instagram.com" style={{ color: 'white', textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">Instagram</a>
          </li>
          <li style={{display: 'flex', alignItems: 'center', margin: '5px 12px'}}>
            <img src={tikTok} style={{ width: '16px', marginRight: '10px' }} alt="TikTok" />
            <a href="https://tiktok.com" style={{ color: 'white', textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">TikTok</a>
          </li>
        </ul>
      </div>
      <div style={boxFooter}>
        <h3 style={titleStyle}>Información</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>Acerca de <span style={{color: '#C42B2B', fontWeight: 'bold'}}>Alejandro Auto Supplies</span> </a></li>
          <li style={listItemStyle}><a href="#terms" style={{ color: 'white', textDecoration: 'none' }}>Términos y Condiciones</a></li>
          <li style={listItemStyle}><a href="#privacy" style={{ color: 'white', textDecoration: 'none' }}>Política de Privacidad</a></li>
          <li style={listItemStyle}><a href="#faq" style={{ color: 'white', textDecoration: 'none' }}>Preguntas Frecuentes</a></li>
        </ul>
      </div>
      <div style={boxFooter}>
        <h3 style={titleStyle}>Contacto</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Email: <a href="mailto:klibel.a.romero@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>klibel.a.romero@gmail.com</a></li>
          <li style={listItemStyle}>Teléfono: <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'none' }}>+123 456 7890</a></li>
          <li style={listItemStyle}>Dirección: Calle Ejemplo 123, Ciudad, País</li>
          <li style={listItemStyle}>Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</li>
        </ul>
      </div>
    </footer>
  );
}  

export default Footer;