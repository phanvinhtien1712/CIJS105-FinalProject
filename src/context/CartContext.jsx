// CartContext.js
import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const [cart, setCart] = useState(storedUser?.cart || []);

  useEffect(() => {
    if (storedUser) {
      const updatedUser = { ...storedUser, cart };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  }, [cart, storedUser]);

  const addToCart = (product) => {
    // Chỉ cho phép thêm nếu người dùng đã đăng nhập
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
      return;
    }
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
