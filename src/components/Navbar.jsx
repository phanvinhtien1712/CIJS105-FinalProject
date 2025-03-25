import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  RiMenuLine,
  RiCloseLine,
  RiRoadsterLine,
  RiUserLine,
  RiMoonLine,
  RiShoppingCartLine,
  RiArrowDownSLine, // thêm icon dropdown
} from "react-icons/ri";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserDropdown = () => setUserDropdownOpen((prev) => !prev);
  const handleLinkClick = () => {
    if (menuOpen) toggleMenu();
  };

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setUserDropdownOpen(false);
    navigate("/sign_in");
  };

  const handleCartClick = () => {
    navigate("/check-out");
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav_logo" onClick={handleLinkClick}>
          <RiRoadsterLine /> AutoHunt
        </Link>
        <div
          className={`nav_menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav_list">
            <li className="nav_item">
              <Link to="/" className="nav_link">
                Trang Chủ
              </Link>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link" onClick={handleLinkClick}>
                Giới Thiệu
              </a>
            </li>
            <li className="nav_item">
              <a href="#popular" className="nav_link" onClick={handleLinkClick}>
                Xe Phổ Biến
              </a>
            </li>
            <li className="nav_item">
              <a href="#brands" className="nav_link" onClick={handleLinkClick}>
                Thương Hiệu
              </a>
            </li>
            <li className="nav_item sign-in">
              <RiUserLine />
              {currentUser ? (
                <div className="user-dropdown-wrapper">
                  <span className="nav_link" onClick={toggleUserDropdown}>
                    Xin chào, {currentUser.username} <RiArrowDownSLine />
                  </span>
                  {userDropdownOpen && (
                    <ul className="user-dropdown">
                      <li>
                        <button
                          onClick={handleLogout}
                          className="dropdown-button "
                          style={{
                            background: "none",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            position: "relative",
                            padding: "0.5rem 1rem",
                            top: "0",
                          }}
                        >
                          Đăng Xuất
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link to="/sign_in" className="nav_link">
                  Đăng Nhập
                </Link>
              )}
            </li>
          </ul>
          <div className="nav_close" id="nav-close" onClick={toggleMenu}>
            <RiCloseLine />
          </div>
        </div>
        <div className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
          <RiMenuLine />
        </div>
        <div className="theme-button" id="theme-button">
          <RiMoonLine className="theme-icon" id="theme-icon" />
        </div>
        {/* <div
          className="nav_cart"
          onClick={handleCartClick}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <RiShoppingCartLine size={24} />
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "red",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                color: "#fff",
              }}
            >
              {cart.length}
            </span>
          )}
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
