import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, category, ingredients, steps });
    setTitle('');
    setCategory('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add a Recipe</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe title"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category (e.g., Breakfast)"
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients"
            rows="3"
          ></textarea>
        </div>
        <div className="col-md-12">
          <label className="form-label">Steps</label>
          <textarea
            className="form-control"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Step-by-step instructions"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Recipe</button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;