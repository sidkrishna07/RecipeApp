import React from 'react';
import './RecipeDetails.css';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details-container">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h2>{recipe.title}</h2>
      <span className="category-badge">{recipe.category}</span>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
