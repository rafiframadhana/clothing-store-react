import React, { useState } from "react";
import useAuthStore from "../../zustand/authStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../../styles/Account.css";

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const storedUsername = useAuthStore((state) => state.username);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const showLogin = () => {
    setIsLogin(true);
    setShowForm(true);
  };

  const showRegister = () => {
    setIsLogin(false);
    setShowForm(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    password === "123456" ? login(username) : alert("Invalid Password");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <div className="account-container">
      {isAuthenticated ? (
        <div className="profile-section">
          <h2>Welcome, {storedUsername}</h2>
          <div className="profile-buttons">
            <button onClick={() => navigate("/")} className="btn">
              🏠 Go Home
            </button>
            <button onClick={() => navigate("/products")} className="btn">
              🛍️ Browse Products
            </button>
            <button onClick={logout} className="btn">
              ⭕ Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="formPage">
          {!showForm && (
            <div className="form-options">
              <div className="btn" id="removeLog" onClick={showLogin}>
                Existing User? Login
              </div>
              <div className="btn" id="removeReg" onClick={showRegister}>
                New User? Register
              </div>
            </div>
          )}
          {showForm && isLogin && (
            <form className="showForm" id="loginForm" onSubmit={handleLogin}>
              <h3>Login</h3>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn">
                Login
              </button>
              <Link to="*">Forgot Password</Link>
            </form>
          )}
          {showForm && !isLogin && (
            <form
              className="showForm"
              id="registerForm"
              onSubmit={handleRegister}
            >
              <h3>Register</h3>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input type="email" placeholder="E-mail" required />
              <input type="password" placeholder="Password" required />
              <small>*I agree to the Terms and Conditions</small>
              <button type="submit" className="btn">
                Register
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
