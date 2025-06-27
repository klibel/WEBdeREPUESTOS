import React from 'react';
import { useMediaQuery } from 'react-responsive';
import tiendaImg from '../assets/tienda.jpg'

const AboutSection = () => {
  // Hooks para definir breakpoints
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const stats = [
    { value: '10+', label: 'Años en el mercado' },
    { value: '2K+', label: 'Clientes satisfechos' },
    { value: '100%', label: 'Repuestos garantizados' },
    { value: '24/7', label: 'Atención al cliente' }
  ];

  const styles = {
    section: {
      borderTop: 'solid 3px rgb(226, 224, 224)',
      padding: isMobile ? '20px 10px' : '80px 0',
      backgroundColor: 'rgba(196, 191, 191, 0.52)',
    },
    container: {
      margin: '0 auto',
      padding: isMobile ? '0 10px' : '0 20px',
      maxWidth: isDesktop ? '1200px' : '100%'
    },
    title: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      textAlign: 'center',
      marginBottom: '50px',
      color: '#888',
      paddingBottom: '10px'
    },
    hero: {
      display: isMobile ? 'block' : 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '60px',
      flexDirection: isMobile ? 'column' : 'row',
      width: '100%'
    },
    heroContent: {
      flex: 1,
      background: 'white',
      borderRadius: '15px',
      boxShadow: '5px 3px 20px 25px rgba(0,0,0,0.1)',
      marginBottom: isMobile ? '20px' : '0',
      width: isMobile ? '100%' : '45%',
      height: isMobile ? '200px' : '220px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    heroText: {
      fontSize: '0.9rem',
      lineHeight: '2',
      color: '#555',
      padding: '20px',
    },
    heroImage: {
      flex: 1,
      height: isMobile ? '200px' : '220px',
      width: isMobile ? '100%' : '45%',
      borderRadius: '15px',
      boxShadow: '5px 3px 20px 25px rgba(0,0,0,0.1)',
      overflow: 'hidden', 
    },
    tiendaImg: {
      width: '100%', 
      height: '100%', 
      objectFit: 'cover', 
    },
    statsContainer: {
      display: isMobile ? 'block' : 'grid',
      gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
      gap: '20px',
      marginBottom: '60px'
    },
    statCard: {
      background: 'white',
      padding: '30px 20px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 3px 5px rgba(0,0,0,0.4)',
      marginBottom: isMobile ? '15px' : '0'
    },
    statValue: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#C40B0B',
      marginBottom: '10px'
    },
    statLabel: {
      fontSize: '1rem',
      color: '#888'
    },
  };

  return (
    <section style={styles.section} id='about'>
      <div style={styles.container}>
        <h2 style={styles.title}>Nuestra Historia</h2>
        
        <div style={styles.hero}>
          <div style={styles.heroContent}>
            <p style={styles.heroText}>
              En <strong>Alejandro's Auto Supplies</strong> no solo vendemos repuestos, construimos relaciones. Desde 2015 nos hemos dedicado a proveer <strong> soluciones automotrices</strong> con pasión y profesionalismo.
            </p>
          </div>
          <div style={styles.heroImage}>
            <img src={tiendaImg} alt='imagen de la tienda' style={styles.tiendaImg}/>
            </div>
        </div>

        <div style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
