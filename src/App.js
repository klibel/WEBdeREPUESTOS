import './styles/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/cart';
import Home from './pages/home';
import { CartProvider } from './mock/cartContext';
import Payment from './pages/payment'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = (open) => { 
    setIsMenuOpen(open); 
  };

  return ( 
    <Router>
      <Header 
        onToggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
      />
      <CartProvider> 
        <Routes> 
          <Route path="/" element={
            <>
              <Home />
              <Cart isMenuOpen={isMenuOpen} />
            </>
          } /> 
          <Route path="/pagar" element={<Payment />} /> 
        </Routes> 
      </CartProvider> 
      <Footer /> 
    </Router> 
  ); 
}

export default App;
