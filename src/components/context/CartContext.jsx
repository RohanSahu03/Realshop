import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      
         setCartItems((prevCartItems) => [...prevCartItems, product]);
  
    }

    const removeFromCart = (product) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== product.id)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart,removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};