import React, { createContext, useReducer, useEffect } from "react";


export const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
  totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
};

// Reducer function to manage cart actions
const CartReducer = (state, action) => {
  // Reducer code
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Save cart data to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
  }, [state.cartItems, state.totalAmount, state.totalQuantity]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
