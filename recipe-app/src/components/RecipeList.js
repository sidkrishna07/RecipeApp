import React from 'react';

function RecipeList({ recipes }) {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4" key={recipe.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{recipe.category}</h6>
                <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p className="card-text"><strong>Steps:</strong> {recipe.steps}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;