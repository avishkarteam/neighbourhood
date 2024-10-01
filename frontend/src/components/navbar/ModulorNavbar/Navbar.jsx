import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setDeepDropdownOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false); // State to track scroll position

  const location = useLocation(); // Get current location for active link

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown menu
  const toggleDropdownMenu = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Toggle deep dropdown menu
  const toggleDeepDropdownMenu = () => {
    setDeepDropdownOpen(!isDeepDropdownOpen);
  };

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

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

  return (
    <header id="header" className={`header fixed-top ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="#" className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" />
          <span>NeighborHood</span>
        </Link>

        <nav id="navbar" className={`navbar ${isMobileMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className={`dropdown ${isDropdownOpen ? "dropdown-active" : ""}`}>
              <Link to="#" onClick={toggleDropdownMenu}>
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul className={`${isDropdownOpen ? "dropdown-active" : ""}`}>
                <li>
                  <Link 
                    to="#" 
                    className={`dropdown-item ${location.pathname === '/dropdown1' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    Drop Down 1
                  </Link>
                </li>
                <li className={`dropdown ${isDeepDropdownOpen ? "dropdown-active" : ""}`}>
                  <Link to="#" onClick={toggleDeepDropdownMenu}>
                    <span>Deep Drop Down</span>
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                  <ul className={`${isDeepDropdownOpen ? "dropdown-active" : ""}`}>
                    <li>
                      <Link 
                        to="#" 
                        className={`dropdown-item ${location.pathname === '/deep1' ? 'active' : ''}`} 
                        onClick={handleLinkClick}
                      >
                        Deep Drop Down 1
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="#" 
                        className={`dropdown-item ${location.pathname === '/deep2' ? 'active' : ''}`} 
                        onClick={handleLinkClick}
                      >
                        Deep Drop Down 2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className={`dropdown-item ${location.pathname === '/dropdown2' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    Drop Down 2
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className={`dropdown-item ${location.pathname === '/dropdown3' ? 'active' : ''}`} 
                    onClick={handleLinkClick}
                  >
                    Drop Down 3
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link 
                to="#contact" 
                className={`nav-link scrollto ${location.pathname === '#contact' ? 'active' : ''}`} 
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="#about" 
                className={`getstarted scrollto ${location.pathname === '#about' ? 'active' : ''}`} 
                onClick={handleLinkClick}
              >
                Get Started
              </Link>
            </li>
          </ul>

          <i
            className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={toggleMobileMenu}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
