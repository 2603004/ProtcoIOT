import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo_img from '../../src/assets/logo.png';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle background change on scroll
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Update the active section based on scroll position
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <img src={logo_img} alt="Logo" className="logo" />
      
      <ul>
        <li>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="#service" className={activeSection === 'service' ? 'active' : ''}>
            Service
          </a>
        </li>
        <li>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
