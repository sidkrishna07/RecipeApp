import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: recipes.length + 1 }]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Recipe Sharing App</h1>} />
        <Route path="/add-recipe" element={<RecipeForm addRecipe={addRecipe} />} />
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;