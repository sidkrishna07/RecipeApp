import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Recipe Viewer!</h1>
        <p>Discover colorful and delicious recipes to brighten your day.</p>
      </div>
      <div className="recipe-section">
        <div className="recipe-box breakfast">
          <h3>Breakfast</h3>
          <p>Start your day with energy!</p>
        </div>
        <div className="recipe-box lunch">
          <h3>Lunch</h3>
          <p>Fuel your afternoon with healthy meals!</p>
        </div>
        <div className="recipe-box dinner">
          <h3>Dinner</h3>
          <p>End your day with a satisfying feast.</p>
        </div>
        <div className="recipe-box snack">
          <h3>Snack</h3>
          <p>Treat yourself to something special!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
