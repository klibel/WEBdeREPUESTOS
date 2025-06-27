import React, { useState } from 'react';
import iconBuscar from "../assets/buscar.png"

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '98%',
      maxWidth: '650px',
      boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.42)',
    },
    input: {
      width: '80%',
      padding: '0.75rem',
      border: 'none',
      borderTopLeftRadius: '3px',
      borderBottomLeftRadius: '3px',
      outline: 'none',
      transition: 'border-color 0.2s',
      backgroundColor: 'rgba(255, 255, 255, 0.13)',
      color: 'black',
      fontWeight: 'bold'
    },
    inputFocus: {
      borderColor: '#C41B1B',
      ring: '2',
      ringColor: '#C41B1B',
    },
    button: {
      padding: '0.76rem 0',
      width: '20%',
      backgroundColor: '#666',
      transition: 'background-color 0.2s',
      border: 'none',
      borderTopRightRadius: '3px',
      borderBottomRightRadius: '3px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: '#777',
    },
    ico: {
      width: '19px',
    }
  };

  return (
    <form onSubmit={handleSearch} style={styles.form}>
      <input
        type="text"
        placeholder="Buscar por pieza, modelo o marca..."
        style={styles.input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        <img title='Buscar' src={iconBuscar} alt='buscar' style={styles.ico}/>
      </button>
    </form>
  );
};

export default SearchFilter;