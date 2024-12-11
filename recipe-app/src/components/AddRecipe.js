import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddRecipe.css';

const AddRecipe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    category: 'Breakfast',
    ingredients: '',
    steps: '',
    image: null,
  });

  useEffect(() => {
    if (location.state && location.state.recipe) {
      setRecipe(location.state.recipe);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRecipe((prevRecipe) => ({ ...prevRecipe, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const formData = new FormData();
      formData.append('title', recipe.title);
      formData.append('category', recipe.category);
      formData.append('ingredients', recipe.ingredients);
      formData.append('steps', recipe.steps);
      if (recipe.image) {
        formData.append('image', recipe.image);
      }

      if (recipe.id) {
        await axios.put(`/recipes/${recipe.id}`, formData, config);
        alert('Recipe updated successfully!');
      } else {
        await axios.post('/recipes', formData, config);
        alert('Recipe added successfully!');
      }
      navigate('/my-recipes');
    } catch (error) {
      console.error('Error saving recipe:', error);
      alert('Failed to save recipe.');
    }
  };

  return (
    <div className="add-recipe-container">
      <h1>{recipe.title ? 'Edit Recipe' : 'Add Recipe'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipe Name</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Enter recipe name"
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={recipe.category} onChange={handleChange}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="List ingredients"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Steps</label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            placeholder="Step-by-step instructions"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Upload Image</label>
          <input type="file" name="image" onChange={handleImageChange} />
          {recipe.image instanceof File && (
            <img
              src={URL.createObjectURL(recipe.image)}
              alt="Preview"
              className="image-preview"
            />
          )}
        </div>
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe; 