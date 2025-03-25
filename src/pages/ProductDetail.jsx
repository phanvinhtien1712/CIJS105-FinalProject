// ProductDetail.jsx
import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/product-detail.css"; // Import file CSS riêng cho trang này

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // product được truyền qua route state
  const product = location.state?.product;

  // Nếu không có thông tin sản phẩm, hiển thị thông báo
  if (!product) {
    return <p>Không có thông tin sản phẩm.</p>;
  }

  const gallery = product.gallery || [product.image];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  const handleContact = () => {
    //Chỉ khi đăng nhập mới điều hướng sang trang liên hệ
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để liên hệ!");
      return;
    }
    navigate("/contact", { state: { product } });
  };

  return (
    <div className="product-detail container">
      <div className="product-content">
        <div className="product-images">
          <img src={selectedImage} alt={product.name} className="main-image" />
          <div className="thumbnail-container">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Cột bên phải: Thông tin chi tiết */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-availability">Tình Trạng: Còn Hàng</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-button" onClick={handleContact}>
            Liên Hệ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
