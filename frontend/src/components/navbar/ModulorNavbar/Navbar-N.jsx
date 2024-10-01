// Navbar.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.png"; // Assuming you have a Logo component
import NavItem from "./NavItems-o";
import { NAV_CONFIG } from "./navConfig";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  
  const location = useLocation(); // Get current location for active link

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change the value based on when you want to change the navbar's style
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header id="header" className={`header fixed-top ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Logo />
        <nav id="navbar" className={`navbar ${isMobileMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            {NAV_CONFIG.map((navItemConfig) => (
              <NavItem 
                key={navItemConfig.pathname} 
                navItemConfig={navItemConfig} 
                pathname={location.pathname} 
                onLinkClick={handleLinkClick}
              />
            ))}
          </ul>

          <i
            className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
