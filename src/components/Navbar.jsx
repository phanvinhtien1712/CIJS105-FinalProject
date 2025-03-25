import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  RiMenuLine,
  RiCloseLine,
  RiRoadsterLine,
  RiUserLine,
  RiMoonLine,
  RiSunLine,
  RiArrowDownSLine,
} from "react-icons/ri";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserDropdown = () => setUserDropdownOpen((prev) => !prev);
  const handleLinkClick = () => {
    if (menuOpen) toggleMenu();
  };

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY >= 50) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };
    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("selected-theme", newTheme);
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
        <div className="theme-button" id="theme-button" onClick={toggleTheme}>
          {theme === "light" ? (
            <RiMoonLine className="theme-icon" id="theme-icon" />
          ) : (
            <RiSunLine className="theme-icon" id="theme-icon" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;