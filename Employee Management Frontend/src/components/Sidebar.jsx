import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; 
import Logo from "../assets/logo.png"; 

const Sidebar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [activeLink, setActiveLink] = useState(""); 
  const location = useLocation(); 
  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  useEffect(() => {
    setActiveLink(location.pathname); 
  }, [location]);

  const sidebarStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    background: "#ffffff",
    position: "fixed",
    top: 0,
    left: 0,
    width: "250px",
    height: "100vh",
    padding: "30px 20px",
    color: "#4B0082", 
    boxSizing: "border-box",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#4B0082", 
    marginBottom: "40px",
    transition: "all 0.3s ease",
    marginTop: "-20px",
    display: "flex",
  };

  const navLinksStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#4B0082", 
    fontSize: "19px",
    padding: "10px 15px",
    borderRadius: "20px",
    transition: "background 0.3s ease, color 0.3s ease",
    width: "90%",
  };
  const activeLinkStyle = {
    background: "#4B0082", 
    color: "#E6E6FA", 
  };

  return (
    <div style={sidebarStyle}>
      <Link to="/" style={logoStyle}>
  <img
    src={Logo}
    alt="Logo"
    style={{ width: "50px", marginRight: "10px", verticalAlign: "middle" }}
  />
  <span style={{ verticalAlign: "middle" }}>Employee Management</span>
</Link>

      <div style={navLinksStyle}>
        {token && (
          <Link
            to="/"
            style={activeLink === "/" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            onClick={() => setActiveLink("/")}
          >
            Home
          </Link>
        )}
        {token && (
          <Link
            to="/add"
            style={activeLink === "/add" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            onClick={() => setActiveLink("/add")} 
          >
            Add Employee
          </Link>
        )}
        {token && (
          <Link
            to="/login"
            style={activeLink === "/login" ? { ...linkStyle, ...activeLinkStyle } : linkStyle}
            onClick={() => {
              removeToken();
              setActiveLink("/login"); 
            }}
          >
            <FaSignOutAlt style={{ marginRight: "8px" }} />
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
