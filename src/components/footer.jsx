import React from 'react';
import './footer.css';
import logo_img from '../../src/assets/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-left">
     
        <p className="footer-company-name">
        <img src={logo_img} alt="Protco Logo" className="footer-logo" />
        </p>
      </div>

      <div className="footer-section footer-center">
        <h3 className="footer-title">Company</h3>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#policy">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-section footer-right">
        <h3 className="footer-title">Connect</h3>
        <p className="footer-contact">Phone: +123 456 7890</p>
        <p className="footer-contact">Email: info@protco.in</p>
      </div>
    </footer>
  );
};

export default Footer;
