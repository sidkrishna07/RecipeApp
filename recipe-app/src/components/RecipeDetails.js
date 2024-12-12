import React from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = ({ onSignOut }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <>
        <Navbar onSignOut={onSignOut} />
        <div className="recipe-details-wrapper">
          <div className="recipe-details-container">
            <h1>Recipe not found</h1>
            <button onClick={() => navigate(-1)} className="back-button">
              Go Back
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar onSignOut={onSignOut} />
      <div className="recipe-details-wrapper">
        <div className="recipe-details-container">
          <div className="recipe-header">
            <h1>{recipe.title}</h1>
            <span className="category-badge">{recipe.category}</span>
          </div>
          
          <div className="recipe-content-grid">
            <div className="recipe-info">
              <section className="ingredients-section">
                <h2>Ingredients</h2>
                <ul className="ingredients-list">
                  {recipe.ingredients ? (
                    recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))
                  ) : (
                    <li>No ingredients listed</li>
                  )}
                </ul>
              </section>

              <section className="steps-section">
                <h2>Steps</h2>
                <ol className="steps-list">
                  {recipe.steps ? (
                    recipe.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))
                  ) : (
                    <li>No steps listed</li>
                  )}
                </ol>
              </section>
            </div>

            <div className="recipe-image-section">
              <div className="image-placeholder">
                {recipe.image ? (
                  <img src={recipe.image} alt={recipe.title} />
                ) : (
                  <div className="placeholder-text">Image HERE</div>
                )}
              </div>
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
