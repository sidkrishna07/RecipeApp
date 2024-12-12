import React from 'react';
import Navbar from './Navbar';
import './RecipeCategory.css';
import { useNavigate } from 'react-router-dom';

const RecipeCategory = ({ category, onSignOut }) => {
  const navigate = useNavigate();

  const handleViewRecipe = (recipe) => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };

  // Sample recipes based on category
  const getCategoryRecipes = () => {
    switch (category) {
      case 'Breakfast':
        return [
          { id: 1, title: 'Waffles', description: 'Crispy and delicious waffles', image: 'waffles.jpg' },
          { id: 2, title: 'Pancakes', description: 'Fluffy homemade pancakes', image: 'pancakes.jpg' },
          { id: 3, title: 'French Toast', description: 'Classic french toast with maple syrup', image: 'french_toast.jpg' },
        ];
      case 'Lunch':
        return [
          { id: 4, title: 'Chicken Sandwich', description: 'Grilled chicken with fresh vegetables', image: 'chicken_sandwich.jpg' },
          { id: 5, title: 'Caesar Salad', description: 'Fresh romaine lettuce with creamy dressing', image: 'caesar_salad.jpg' },
          { id: 6, title: 'Tomato Soup', description: 'Creamy tomato soup with grilled cheese', image: 'tomato_soup.jpg' },
        ];
      case 'Dinner':
        return [
          { id: 7, title: 'Spaghetti Bolognese', description: 'Classic pasta with meat sauce', image: 'spaghetti.jpg' },
          { id: 8, title: 'Grilled Salmon', description: 'Fresh salmon with lemon and herbs', image: 'salmon.jpg' },
          { id: 9, title: 'Chicken Stir Fry', description: 'Vegetables and chicken in savory sauce', image: 'stir_fry.jpg' },
        ];
      case 'Snack':
        return [
          { id: 10, title: 'Trail Mix', description: 'Nuts, dried fruits, and dark chocolate', image: 'trail_mix.jpg' },
          { id: 11, title: 'Hummus & Veggies', description: 'Creamy hummus with fresh vegetables', image: 'hummus.jpg' },
          { id: 12, title: 'Fruit Smoothie', description: 'Blend of fresh fruits and yogurt', image: 'smoothie.jpg' },
        ];
      default:
        return [];
    }
  };

  const recipes = getCategoryRecipes();

  return (
    <>
      <Navbar onSignOut={onSignOut} />
      <div className={`category-container ${category}`}>
        <h1 className="category-title">{category} Recipes</h1>
        <div className="category-recipes">
          {recipes.map((recipe) => (
            <div className="category-recipe-card" key={recipe.id}>
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button 
                  className="view-recipe-btn" 
                  onClick={() => handleViewRecipe(recipe)}
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeCategory;
