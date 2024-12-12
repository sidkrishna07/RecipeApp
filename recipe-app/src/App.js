import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken(null);
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
    </Router>
  );
}

export default App;