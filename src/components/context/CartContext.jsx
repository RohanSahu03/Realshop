import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
   

    const addToCart = (product) => {
      
         setCartItems((prevCartItems) => [...prevCartItems, product]);
  
    }

    // const addToCart = (product)=>{
    //     cartItems.map((p)=>{
    //         if(p.id===product.id){
              
    //         }
    //         else{
    //             setCartItems((prevCartItems) => [...prevCartItems, product]);
    //         }
    //     })
    // }

    const removeFromCart = (product) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== product.id)
        );
    };

    const setDecrease = (itemId) => {
        cartItems.map((item) => {
            if (item.id === itemId) {
                if (item.quantity > 1) {
                    item.quantity = item.quantity - 1
                    item.subtotal = item.subtotal - item.price
                  
                }
                else {
                    item.quantity = 1
                }
            }
        })
    }

    const setIncrease = (itemId) => {

        cartItems.map((item) => {
            if (item.id === itemId) {
                if (item.quantity < item.stock) {
                    item.quantity = item.quantity + 1
                    item.subtotal = item.quantity * item.price 
                   
                }
                else {
                    item.quantity = item.stock
                }

            }
        })
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setDecrease, setIncrease }}>
            {children}
        </CartContext.Provider>
    );
};