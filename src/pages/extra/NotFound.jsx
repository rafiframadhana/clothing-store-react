import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/Extra.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <p>The link might be broken, or the page might have been removed.</p>

      <div className="navigation-links">
        <button onClick={() => navigate("/")} className="btn">
          🏠 Go Home
        </button>
        <button onClick={() => navigate("/products")} className="btn">
          🛍️ Browse Products
        </button>
      </div>
    </div>
  );
}
