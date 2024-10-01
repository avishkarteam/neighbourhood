// NavItemWithDropdown.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

const NavItemWithDropdown = ({ navItemConfig, pathname, onLinkClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <li className={`dropdown ${showDropdown ? "dropdown-active" : ""}`}>
      <button onClick={toggleDropdown} className={`nav-link ${pathname === navItemConfig.pathname ? 'active' : ''}`}>
        <span>{navItemConfig.name}</span> <BiChevronDown />
      </button>
      {showDropdown && (
        <ul className="dropdown-menu">
          {navItemConfig.options.map((option) => (
            <li key={option.pathname}>
              <Link 
                to={option.pathname} 
                className={`dropdown-item ${pathname === option.pathname ? 'active' : ''}`} 
                onClick={onLinkClick}
              >
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItemWithDropdown;
