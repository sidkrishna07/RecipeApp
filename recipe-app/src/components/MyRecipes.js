import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './MyRecipes.css';

const MyRecipes = () => {
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
      <Navbar />
      <div className="my-recipes-container">
        <h2>My Recipes</h2>
        <div className="recipe-cards">
          {sampleRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <span className="category-badge">{recipe.category}</span>
              <button className="edit-btn" onClick={() => handleEdit(recipe)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyRecipes; 