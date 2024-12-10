import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Recipe Sharing App</span>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;