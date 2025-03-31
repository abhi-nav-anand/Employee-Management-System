import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaSignOutAlt} from "react-icons/fa"; // Importing the sign-out icon from react-icons

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null); 
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "20px 20px",
    color: "#E6E6FA",
    position: "fixed", 
    top: 0,  
    left: 0, 
    right: 0, 
    zIndex: 1000, 
    width: "100%", 
    boxSizing: "border-box", 
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
  };
  
  

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#4B0082",
    transition: "all 0.3s ease", 
  };

  const navLinksStyle = {
    display: "flex",
    gap: "19px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#4B0082",
    fontSize: "19px",
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        Employee Management
      </Link>
      <div style={navLinksStyle}>
        {
          token && (
            <Link to="/login" style={linkStyle} onClick={removeToken}>
             <FaSignOutAlt/>
            </Link>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
