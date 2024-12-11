import React from "react";
import "./Navbar.css";

const Navbar = ({ onSignOut }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Recipe Sharing App</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/my-recipes">My Recipes</a></li>
        <li><a href="/add-recipe">Add Recipe</a></li>
      </ul>
      <button className="logout-btn" onClick={onSignOut}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;