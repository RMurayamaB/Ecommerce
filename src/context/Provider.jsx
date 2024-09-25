import { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";
function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.protoTypes = {
  children: propTypes.any,
}.isRequired;
