import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom global styles
import App from './App'; // Main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS for styling

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);