import React from 'react';
import Navbar from './Navbar';
import './RecipeCategory.css';

const RecipeCategory = ({ category }) => {
  const sampleRecipes = [
    { id: 1, title: 'Waffles', description: 'Crispy and delicious waffles', image: 'waffles.jpg' },
    { id: 2, title: 'Pancakes', description: 'Fluffy homemade pancakes', image: 'pancakes.jpg' },
    { id: 3, title: 'French Toast', description: 'Classic french toast with maple syrup', image: 'french_toast.jpg' },
  ];

  return (
    <>
      <Navbar />
      <div className={`category-container ${category}`}>
        <h1 className="category-title">{category} Recipes</h1>
        <div className="category-recipes">
          {sampleRecipes.map((recipe) => (
            <div className="category-recipe-card" key={recipe.id}>
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button className="view-recipe-btn">View Recipe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeCategory;
