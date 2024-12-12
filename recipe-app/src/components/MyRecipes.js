import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './MyRecipes.css';

const MyRecipes = ({ onSignOut }) => {
  const navigate = useNavigate();

  const sampleRecipes = [
    { id: 1, title: 'Waffles', category: 'Breakfast', description: 'A great breakfast treat.', image: 'waffles.jpg' },
    { id: 2, title: 'Pancakes', category: 'Breakfast', description: 'Fluffy and delicious.', image: 'pancakes.jpg' },
    { id: 3, title: 'Hot Chocolate', category: 'Snack', description: 'Warm and cozy.', image: 'hot_chocolate.jpg' },
  ];

  const handleEdit = (recipe) => {
    navigate('/add-recipe', { state: { recipe } });
  };

  return (
    <>
      <Navbar onSignOut={onSignOut} />
      <div className="my-recipes-container">
        <h1 className="my-recipes-title">My Recipes</h1>
        <div className="recipe-grid">
          {sampleRecipes.map((recipe) => (
            <div className={`recipe-card ${recipe.category}`} key={recipe.id}>
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                <span className="category-badge">{recipe.category}</span>
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button className="edit-btn" onClick={() => handleEdit(recipe)}>Edit Recipe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyRecipes; 