import React, { useState, useEffect } from 'react';
import AutoPartsList from '../components/autoPartsList';
import autoParts from '../mock/autoParts';
import SearchFilter from '../components/SearchFilter';
import backgroundImage from '../assets/background.png'; 
import titleImg from '../assets/logo.png'; 
import AboutSection from '../components/aboutSection';

const Home = () => {
  const [filteredParts, setFilteredParts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Función para obtener 50 resultados aleatorios
  const getRandomParts = () => {
    return autoParts.sort(() => 0.5 - Math.random()).slice(0, 50);
  };

  // Cargar 50 resultados aleatorios al inicio
  useEffect(() => {
    setFilteredParts(getRandomParts());
  }, []);

  const handleSearch = (searchTerm) => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (!searchTerm.trim()) {
        setFilteredParts(getRandomParts());
      } else {
        const term = searchTerm.toLowerCase();
        const results = autoParts.filter(part => 
          part.marca.toLowerCase().includes(term) ||
          part.modelo.toLowerCase().includes(term) ||
          part.nombre.toLowerCase().includes(term)
        );
        setFilteredParts(results);
      }
      setIsLoading(false);
    }, 800);
  };
  
  const containerStyle = {
    minHeight: '430px',
    height: '50vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: 'white', 
    textAlign: 'center',
  };

  const titleImageStyle = {
    width: '100%', 
    maxWidth: '500px', 
  };

  const titleContainerStyle = {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const mainContainerStyle = {
    minHeight: '100vh',
    backgroundColor: '#F9FAFB',
    padding: '1rem .8rem',
  };

  const headingStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: '2rem',
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '16rem',
  };

  const noPartsStyle = {
    textAlign: 'center',
    padding: '3rem 0',
  };

  return (
    <div>
      <div style={containerStyle} id='home'>
        <div style={titleContainerStyle}>
          <img src={titleImg} alt="Título" style={titleImageStyle} />
        </div>
        <h2 style={{width: '90vw', fontSize: '1.2rem'}}>Bienvenido a Alejandro's Auto Supplies: Tu Destino de Confianza para Todo lo que necesite tu Auto</h2>
          <SearchFilter onSearch={handleSearch} />
      </div>
      <div style={mainContainerStyle} id='products'>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={headingStyle}>Alejandro's - Auto Supplies</h1>
          
          {isLoading ? (
            <div style={loadingStyle}>
              <div style={{
                borderRadius: '50%',
                height: '4rem',
                width: '4rem',
                borderTop: '3px solid #C45B5B',
                borderBottom: '3px solid #C45B5B',
                animation: 'spin 1s linear infinite'
              }}></div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>
                  Mostrando <span style={{ fontWeight: '500' }}>{filteredParts.length}</span> repuestos
                </p>
              </div>
              <AutoPartsList parts={filteredParts} />
            </>
          )}
          
          {!isLoading && filteredParts.length === 0 && (
            <div style={noPartsStyle}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#1F2937' }}>No se encontraron repuestos</h3>
              <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6B7280' }}>Intenta con otros criterios de búsqueda</p>
            </div>
          )}
        </div>
      </div>
      <AboutSection/>
    </div>
  );
};

export default Home;

