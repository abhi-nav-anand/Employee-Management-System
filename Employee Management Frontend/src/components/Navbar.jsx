import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    backgroundColor: "blue",
    padding: "10px 20px",
    color: "white",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        Employee Management
      </Link>
      <div style={navLinksStyle}>
        {
          token && (
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          )
        }
        {
          token && (
            <Link to="/add" style={linkStyle}>
              Add Employee
            </Link>
          )
        }
        {
          token && (
            <Link to="/login" style={linkStyle} onClick={removeToken}>
              Logout
            </Link>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
