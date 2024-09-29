import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="#" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span>NeighborHood</span>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link to="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="#">Drop Down 1</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Drop Down</span>
                    <i className="bi bi-chevron-right"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Deep Drop Down 1</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Drop Down 2</Link>
                </li>
                <li>
                  <Link to="#">Drop Down 3</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="#contact" className="nav-link scrollto">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#about" className="getstarted scrollto">
                Get Started
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
