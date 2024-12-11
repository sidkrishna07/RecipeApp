import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSignOut }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Recipe Sharing App</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-recipes">My Recipes</Link></li>
        <li><Link to="/add-recipe">Add Recipe</Link></li>
      </ul>
      <button className="logout-btn" onClick={onSignOut}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;