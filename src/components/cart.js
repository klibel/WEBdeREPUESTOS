import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../mock/cartContext'; 
import cartImg from '../assets/cart.png';

const Cart = ({ isMenuOpen }) => {
  const { cartItems, removeFromCart } = useContext(CartContext); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); 
  };

  const handlePayment = () => {
    navigate('/pagar', { state: { cartItems } }); // Navega a la página de pago y pasa los items del carrito
    cartItems.length = 0; // limpia el carrito cuando se traslade a la parte de facturacion
  };

  const cartStyle = { 
    display: isCartOpen && !isMenuOpen ? 'flex' : 'none', 
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor: 'white',  
    borderRadius: '2px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    zIndex: 6, 
    width: '100vw', 
    height: '100vh', 
    overflowY: 'auto' 
  };

  const btnCart = {
    position: 'fixed',
    display: isMenuOpen ? 'none' : 'block',
    top: '80%',
    right: '4px',
    borderRadius: '50%',
    border: 'none',
    boxShadow: '5px 3px 20px 25px rgba(0,0,0,0.1)',
    height: '44px',
    width: '44px',
    backgroundColor: 'rgb(105, 105, 105)',
    cursor: 'pointer',
    zIndex: 1
  };

  const tableCart = {
    overflowY: 'auto', 
    border: '2px solid #ccc',
    width: '100%',
    maxHeight: '81.2vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center',
  };

  const cardCart = {
    width: '94%',
    maxWidth: '950px',
    height: '100px',
    borderBottom: '1px solid #9999',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px 0' 
  };

  const nameProduct = {
    color: '#222',
    fontSize: '13px',
  }

  const zoneRight = {
    width: '90px',
    display: 'flex',
    justifyContent: 'space-between'
  }

  const btnExitStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#ff4d4d', 
    color: 'white',
    borderRadius: '50%', 
    width: '20px', 
    height: '20px', 
    fontSize: '13px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    position: 'absolute',
    top: 7,
    right: 7
  };

  const btnPagar = {
    backgroundColor: '#999',
    color: 'white',
    borderRadius: '1px',
    border: 'none',
    width: '70%',
    maxWidth: '300px',
    height: '45px',
    margin: '5px 0',
    display: cartItems.length === 0 ? 'none' : 'block' // Solo mostrar si hay artículos
  };

  const circulerGreen = {
    width: '17px',
    height: '17px',
    borderRadius: '50%',
    backgroundColor: 'rgb(32, 247, 85)',
    color: '#C41B1B',
    position: 'absolute',
    top: "-2px",
    right: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold'
  }

  return (
    <div>
      <button style={btnCart} onClick={toggleCart}>
        {cartItems.length === 0 ? (
          ''
        ) : (
          <div style={circulerGreen}>{cartItems.length}</div>
        )}
        <img src={cartImg} style={{width: '65%', height: '65%', objectFit: 'cover'}} alt='carrito de compras' title='carrito de compras'/>
      </button>
      <div style={cartStyle}>
        <h2 style={{textAlign: 'center'}}>Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <p style={{textAlign: 'center'}}>Sin artículos en el carrito.</p>
        ) : (        
          <div style={tableCart}>
            {cartItems.map((item, index) => (
              <div style={cardCart} key={index}>
                <div style={{paddingLeft: '10px', width: '60%'}}>
                  <p style={nameProduct}>{item.nombre}</p>
                  <p style={{fontSize: '11px', color: '#333'}}> Unidades: {item.cantidad}</p>
                </div>
                <div style={zoneRight}>
                  <span style={{ color: 'green', fontSize: '15px'}}>$ {item.precio.toFixed(2)}</span>
                  <button style={{ cursor: 'pointer', color: 'red', background: 'none', border: 'none', paddingRight: '10px' }} onClick={() => removeFromCart(item.id)}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <button style={btnExitStyle} onClick={toggleCart}>X</button>
        <button style={btnPagar} onClick={handlePayment}>Proceder al Pago</button>
      </div>
    </div>
  );
};

export default Cart;
