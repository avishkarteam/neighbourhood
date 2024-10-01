// navItems.jsx
import React from "react";
import NavItemWithDropdown from "./NavItemWithDropdown";
import { Link } from "react-router-dom";

const NavItem = ({ navItemConfig, pathname, onLinkClick }) => {
  const hasDropdown = navItemConfig.options.length > 0;

  return hasDropdown ? (
    <NavItemWithDropdown 
      navItemConfig={navItemConfig} 
      pathname={pathname} 
      onLinkClick={onLinkClick}
    />
  ) : (
    <li>
      <Link 
        to={navItemConfig.pathname} 
        className={`nav-link ${pathname === navItemConfig.pathname ? 'active' : ''}`} 
        onClick={onLinkClick}
      >
        {navItemConfig.name}
      </Link>
    </li>
  );
};

export default NavItem;
