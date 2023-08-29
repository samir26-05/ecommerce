/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(savedCart);
    } catch (error) {
      console.error("Error al analizar los datos del carrito desde el almacenamiento local:", error);
    }
  }, []);

  const saveCartToLocalStorage = (cartData) => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartData));
    } catch (error) {
      console.error("Error al guardar los datos del carrito en el almacenamiento local:", error);
    }
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  
  return useContext(CartContext);

};