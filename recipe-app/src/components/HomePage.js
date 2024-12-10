import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Recipe Viewer!</h1>
        <p>Discover vibrant and delicious recipes to brighten your day.</p>
      </div>
      <div className="recipe-section">
        <div className="recipe-box breakfast">
          <h3>Breakfast</h3>
          <p>Fuel your morning with energy and flavor!</p>
        </div>
        <div className="recipe-box lunch">
          <h3>Lunch</h3>
          <p>Perfect meals to power through your day.</p>
        </div>
        <div className="recipe-box dinner">
          <h3>Dinner</h3>
          <p>Relax and enjoy hearty, delicious recipes.</p>
        </div>
        <div className="recipe-box snack">
          <h3>Snack</h3>
          <p>Treat yourself with something delightful!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
