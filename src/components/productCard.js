// src/componentes/productCard.js
import React, { useContext, useState } from 'react';
import CartContext from '../mock/cartContext'; 

const AutoPartsCard = ({ part }) => {
  const { addToCart } = useContext(CartContext); 
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true); 
  };
  const handleMouseLeave = () => {
    setIsHovered(false); 
  };
  const handleAddToCart = () => {
    addToCart(part); 
  };

  const getTypeStyles = () => {
    switch (part.type) {
      case 'motor':
        return {
          backgroundColor: '#FEE2E2', 
          color: '#B91C1C',
        };
      case 'frenos':
        return {
          backgroundColor: '#FEF3C7', 
          color: '#B45309', 
        };
      case 'electrico':
        return {
          backgroundColor: '#DBEAFE',
          color: '#1D4ED8', 
        };
      default:
        return {
          backgroundColor: '#E5E7EB',
          color: '#374151', 
        };
    }
  };

  const typeStyles = getTypeStyles();

  const formatText = (text) => {
    if (!text) return '';
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
  };

  const styles = {
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: isHovered ? '0px 8px 8px 9px rgba(0, 0, 0, 0.15)':'0px 8px 8px 9px rgba(0, 0, 0, 0.08) ' ,
      overflow: 'hidden',
      transition: 'box-shadow 0.3s',
    },
    content: {
      padding: '1rem',
    },
    title: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.5rem',
    },
    typeBadge: {
      fontSize: '0.75rem',
      fontWeight: '500',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      backgroundColor: typeStyles.backgroundColor,
      color: typeStyles.color,
    },
    info: {
      marginTop: '0.5rem',
      fontSize: '0.875rem',
      color: '#4b5563',
    },
    price: {
      marginTop: '0.3rem',
      fontSize: '1.25rem',
      fontWeight: '700',
      color: 'green',
    },
    button: {
      padding: '0.4rem 0.8rem',
      backgroundColor: '#C42B2B',
      color: 'white',
      fontSize: '0.875rem',
      borderRadius: '3px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    buttonHover: {
      backgroundColor: '#C40B0B',
    },
  };

  return (
    <div style={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.content}>
        <div>
          <h3 style={styles.title}>{formatText(part.nombre)}</h3>
          <span style={{ ...styles.typeBadge }}>
            {formatText(part.type)}
          </span>
        </div>
        
        <div style={styles.info}>
          <p>
            <span style={{ fontWeight: '500', color: 'black' }}>Marca:</span> {formatText(part.marca)}
          </p>
          <p>
            <span style={{ fontWeight: '500', color: 'black' }}>Modelo:</span> {formatText(part.modelo)}
          </p>
        </div>
        
        <div style={{ margin: '1rem 1.25rem 0px 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={styles.price}>${part.precio.toFixed(2)}</span>
          <button 
            style={styles.button} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            onClick={handleAddToCart} 
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoPartsCard;