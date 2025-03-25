import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import Footer from "../components/Footer";
const ContactScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    product ? `Tôi quan tâm đến sản phẩm ${product.name}` : ""
  );

  const handleSubmit = (e) => {
    // hàm này được gọi khi người dùng nhấn submit
    e.preventDefault();
    const templateParams = {
      // đây là các thông tin cần gửi qua email khi người dùng nhấn submit
      from_name: name,
      from_email: email,
      message: message,
      product: product ? product.name : "Không có sản phẩm cụ thể",
    };

    emailjs // hàm này được dùng để gửi email
      .send(
        "service_e594wta",
        "template_ahrhwue",
        templateParams,
        "lbLrINAKcqAOzR7TG"
      )
      .then(
        (response) => {
          alert("Đăng ký tư vấn thành công! Email đã được gửi.");
          navigate("/");
        },
        (err) => {
          console.error("Gửi email thất bại", err);
          alert("Gửi email thất bại, vui lòng thử lại.");
        }
      );
  };
  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                Sản phẩm: <strong>{product.name}</strong> {product.price}
              </div>
              <div className="app-contact">CONTACT INFO : +84 0905808416</div>
            </div>
            <div className="screen-body-item">
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  placeholder="Họ tên của bạn"
                  className="app-form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="app-form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Lời nhắn, yêu cầu tư vấn..."
                  className="app-form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="contact-submit app-form-button"
                >
                  Gửi Liên Hệ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ContactScreen;
