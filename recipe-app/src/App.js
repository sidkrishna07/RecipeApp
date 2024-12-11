import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
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
      </Routes>
    </Router>
  );
}

export default App;