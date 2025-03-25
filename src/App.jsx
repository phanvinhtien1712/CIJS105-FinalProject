import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import ContactScreen from "./screens/ContactScreen"; // mới

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_in" element={<SignInScreen />} />
          <Route path="/sign_up" element={<SignUpScreen />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactScreen />} />{" "}
          {/* route mới */}
          {/* Add other routes here */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
