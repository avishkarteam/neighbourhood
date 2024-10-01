// navConfig.js
export const USER_STATE = {
    ANY: "ANY",
    SIGNED_IN: "SIGNED_IN",
    ADMIN: "ADMIN",
  };
  
  // Generic structure for NAV_CONFIG
  export const NAV_CONFIG = [
    {
      name: "Home",
      pathname: "/",
      permissions: USER_STATE.ANY,
      options: [],
    },
    {
      name: "My Profile",
      permissions: USER_STATE.SIGNED_IN,
      pathname: "/my-profile",
      options: [],
    },
    {
      name: "Main Section",
      pathname: "/main-section", // Placeholder pathname
      permissions: USER_STATE.ANY,
      options: [
        { name: "Sub Item 1", pathname: "/sub-item-1" }, // Placeholder
        { name: "Sub Item 2", pathname: "/sub-item-2" }, // Placeholder
        { name: "Sub Item 3", pathname: "/sub-item-3" }, // Placeholder
      ],
    },
    {
      name: "Admin Panel",
      permissions: USER_STATE.ADMIN,
      options: [
        { name: "Admin Option 1", pathname: "/admin-option-1" }, // Placeholder
        { name: "Admin Option 2", pathname: "/admin-option-2" }, // Placeholder
      ],
    },
    {
      name: "Tools",
      permissions: USER_STATE.ANY,
      options: [
        { name: "Tool 1", pathname: "/tool-1", redirect: true }, // Placeholder
      ],
    },
    {
      name: "Resources",
      permissions: USER_STATE.ANY,
      options: [
        { name: "Resource 1", pathname: "/resource-1", redirect: true }, // Placeholder
      ],
    },
    {
      name: "Information",
      permissions: USER_STATE.ANY,
      options: [
        { name: "About Us", pathname: "/about" }, // Placeholder
        { name: "Contact Us", pathname: "/contact" }, // Placeholder
      ],
    },
  ];
  