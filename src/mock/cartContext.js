// src/mock/cartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (part) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === part.id);
      if (existingItem) {
        // Si el producto ya existe, incrementa la cantidad
        return prevItems.map(item =>
          item.id === part.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        // Si no existe, agrega el producto con cantidad 1
        return [...prevItems, { ...part, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

