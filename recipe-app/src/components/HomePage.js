import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./HomePage.css";

const HomePage = ({ onSignOut }) => {
  return (
    <>
      <Navbar onSignOut={onSignOut} />
      <div className="homepage-container">
        <h1>Welcome to the Recipe Sharing App!</h1>
        <p>Explore, share, and create amazing recipes with ease.</p>
        <div className="recipe-cards">
          <Link to="/breakfast" className="recipe-card breakfast">
            <h3>Breakfast</h3>
            <p>Start your day with energy!</p>
          </Link>
          <Link to="/lunch" className="recipe-card lunch">
            <h3>Lunch</h3>
            <p>Midday meals made delicious.</p>
          </Link>
          <Link to="/dinner" className="recipe-card dinner">
            <h3>Dinner</h3>
            <p>Evening delights for the family.</p>
          </Link>
          <Link to="/snack" className="recipe-card snack">
            <h3>Snack</h3>
            <p>Perfect bites for any time.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;