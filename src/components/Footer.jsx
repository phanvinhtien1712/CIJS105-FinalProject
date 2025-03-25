import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      
      <section className="footer section">
    
      <div className="footer_container container grid">
        <div className="footer_content">
          <Link to="/" className="footer_logo">
            <i className="ri-roadster-line"></i> AutoHunt
          </Link>
          <p className="footer_description">
            AutoHunt cung cấp những chiếc xe điện hiệu suất cao được sản xuất
            bởi các thương hiệu nổi tiếng.
          </p>
        </div>
        <div className="footer_content">
          <h3 className="footer_title">Company</h3>
          <ul className="footer_links">
            <li>
              <Link to="/about" className="footer_link">
                About
              </Link>
            </li>
            <li>
              <Link to="/popular" className="footer_link">
                Cars
              </Link>
            </li>
            <li>
              <Link to="/" className="footer_link">
                History
              </Link>
            </li>
            <li>
              <Link to="/" className="footer_link">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_content">
          <h3 className="footer_title">Information</h3>
          <ul className="footer_links">
            <li>
              <Link to="/" className="footer_link">
                Request a quote
              </Link>
            </li>
            <li>
              <Link to="/" className="footer_link">
                Find a dealer
              </Link>
            </li>
            <li>
              <Link to="/" className="footer_link">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/" className="footer_link">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_content">
          <h3 className="footer_title">Follow us</h3>
          <ul className="footer_social">
            <li>
              <a
                href="https://www.facebook.com/AutoHuntofficial"
                target="_blank"
                rel="noreferrer"
                className="footer_social-link"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/autohunt_/"
                target="_blank"
                rel="noreferrer"
                className="footer_social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/autohuntsg"
                target="_blank"
                rel="noreferrer"
                className="footer_social-link"
              >
                <i className="ri-twitter-line"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer_copy">
        © AutoHunt Việt Nam 2024. All right reserved
      </span>
    </section>
    );
};

export default Footer;