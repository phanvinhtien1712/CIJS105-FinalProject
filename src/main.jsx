import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import CSS toàn cục
import "./styles/styles.css";
import "./styles/homepage.css";
import "./styles/about.css";
import "./styles/popular.css";
import "./styles/product.css";
import "./styles/offer.css";
import "./styles/cart.css";
import "./styles/footer.css";
import "./styles/login.css";
import "./styles/reponsive.css";
import "./styles/swiper-bundle.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
