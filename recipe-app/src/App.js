import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Check token on app load
  useEffect(() => {
    if (!token) {
      localStorage.removeItem("token");
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      {token && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={token ? <HomePage /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/login"
          element={
            token ? (
              <Navigate replace to="/" />
            ) : (
              <LoginForm onLoginSuccess={(newToken) => setToken(newToken)} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;