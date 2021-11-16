import React, { createContext, useState } from 'react'

export const MiContext = createContext()

export const CartProvider = ({children}) => {


    const initialState = JSON.parse(localStorage.getItem('cart')) || [];

    const [carrito, setCarrito] = useState(initialState);
  
    const addToCart = (item) => {
      setCarrito([...carrito, item]);
      console.log(carrito);
      localStorage.setItem('cart', JSON.stringify(carrito));
    }
  
    const isInCart = (itemId) => {
        return carrito.find(i => i.id === itemId);
    }

    const removeFromCart = (item) => {
      setCarrito(carrito.filter(i => i.id !== item));
      localStorage.setItem('cart', JSON.stringify(carrito));
    }
  
    const removeAllFromCart = () => {
      setCarrito([]);
      localStorage.setItem('cart', JSON.stringify([]));
    }
  
    const amountOfItems = () => {
      return carrito.reduce((acc, item) => acc + item.amount, 0);
    }
  

    return(
        <MiContext.Provider value={{carrito, addToCart, removeFromCart, removeAllFromCart, amountOfItems, isInCart}}>
            {children}
        </MiContext.Provider>
    )
}