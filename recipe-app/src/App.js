import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import RecipeCategory from "./components/RecipeCategory";
import MyRecipes from "./components/MyRecipes";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <HomePage onSignOut={handleSignOut} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!token ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/" />}
        />
        <Route path="/breakfast" element={<RecipeCategory category="Breakfast" />} />
        <Route path="/lunch" element={<RecipeCategory category="Lunch" />} />
        <Route path="/dinner" element={<RecipeCategory category="Dinner" />} />
        <Route path="/snack" element={<RecipeCategory category="Snack" />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
=======
      {!token ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage onSignOut={handleLogout} />} />
          <Route 
            path="/breakfast" 
            element={<RecipeCategory category="Breakfast" onSignOut={handleLogout} />} 
          />
          <Route 
            path="/lunch" 
            element={<RecipeCategory category="Lunch" onSignOut={handleLogout} />} 
          />
          <Route 
            path="/dinner" 
            element={<RecipeCategory category="Dinner" onSignOut={handleLogout} />} 
          />
          <Route 
            path="/snack" 
            element={<RecipeCategory category="Snack" onSignOut={handleLogout} />} 
          />
          <Route 
            path="/my-recipes" 
            element={<MyRecipes onSignOut={handleLogout} />} 
          />
          <Route 
            path="/recipe/:id" 
            element={<RecipeDetails onSignOut={handleLogout} />} 
          />
          <Route 
            path="/add-recipe" 
            element={<AddRecipe onSignOut={handleLogout} />} 
          />
        </Routes>
      )}
 4e222a62d79d5a8ad9e0b23cdd33dcfc08c72f58
    </Router>
  );
}

export default App;