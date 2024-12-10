import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navbar">
        <button className="nav-item">Recipe Viewer</button>
        <button className="nav-item">My Recipes</button>
        <button className="nav-item">Home</button>
        <button className="nav-item">Add Recipe</button>
        <button className="nav-item">Sign Out</button>
      </div>

      {/* Home Page Content */}
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome to the Recipe Sharing App!</h1>
          <p>Explore, share, and create amazing recipes with ease.</p>
        </div>

        <div className="recipe-section">
          {/* Example Recipe Boxes */}
          <div className="recipe-box breakfast">
            <h3>Breakfast</h3>
            <p>Start your day with energy!</p>
          </div>
          <div className="recipe-box lunch">
            <h3>Lunch</h3>
            <p>Midday meals made delicious.</p>
          </div>
          <div className="recipe-box dinner">
            <h3>Dinner</h3>
            <p>Evening delights for the family.</p>
          </div>
          <div className="recipe-box snack">
            <h3>Snack</h3>
            <p>Perfect bites for any time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
