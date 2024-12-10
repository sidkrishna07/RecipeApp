import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", password: "", email: "", confirmPassword: "" });
    setError("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? "http://localhost:5001/login"
      : "http://localhost:5001/register";

    const payload = isLogin
      ? { username: formData.username, password: formData.password }
      : {
          username: formData.username,
          password: formData.password,
        };

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        onLoginSuccess(data.token); // Update App state
        navigate("/");
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="header">
          <h2>{isLogin ? "Login" : "Register"}</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <div className="toggle">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={handleToggle} className="toggle-btn">
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;