import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAuthStore from "../zustand/authStore";
import brandLogo from "./../assets/images/header/complogo.png";
import cartIcon from "./../assets/images/header/cart.svg";
import { Link } from "react-router-dom";
import profilePics from "./../assets/images/profile-pics.png";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const username = useAuthStore((state) => state.username);

  useEffect(() => {
    const savedQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
    if (savedQuantity) {
      setTotalQuantity(savedQuantity);
    }
  }, []);

  useEffect(() => {
    const quantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantity(quantity);
    localStorage.setItem("cartQuantity", JSON.stringify(quantity));
  }, [cartItems]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo left-section">
            <Link to="/">
              <img src={brandLogo} alt="comp" />
            </Link>
          </div>

          <div className="middle-section">
            <nav className={isMenuOpen ? "active" : ""}>
              <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li className="nav-item">
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#footer" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </a>
                </li>
                <li className="nav-item nav-item-account">
                  <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                    {isAuthenticated ? (
                      <img
                        src={profilePics}
                        alt="Profile"
                        className="profile-pic"
                        title={username}
                      />
                    ) : (
                      <p>Login/Sign Up</p>
                    )}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="right-section">
            <Link to="/account" onClick={() => setIsMenuOpen(false)} className="account-right-side">
              {isAuthenticated ? (
                <img
                  src={profilePics}
                  alt="Profile"
                  className="profile-pic"
                  title={username}
                />
              ) : (
                <p>Login/Sign Up</p>
              )}
            </Link>

            <Link to="/cart">
              <div className="cart-container-icon">
                <img className="cart" src={cartIcon} alt="cart" />
                {totalQuantity > 0 && <span>{totalQuantity}</span>}
              </div>
            </Link>
            <div className="toggle" onClick={toggleMenu}>
              <i className={`fa fa-bars ${isMenuOpen ? "fa-times" : ""}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
