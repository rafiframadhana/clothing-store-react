import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice.js";
import { Link } from "react-router-dom";
import products from "./../../data/products.js";
import "./../../styles/ProductDetails.css";

function getRandomProducts(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const relatedProducts = getRandomProducts(products, 4);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();

  function handleAddToCart() {
    if (selectedSize) {
      dispatch(addToCart({ ...product, quantity, size: selectedSize }));
    } else {
      alert("Please select a size.");
    }
  }

  function handleQuantityChange(e) {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 1 : value);
  }

  function handleSizeChange(e) {
    setSelectedSize(e.target.value);
  }

  return (
    <>
      <div className="product-container single-product-page">
        <div className="product-details">
          <div className="product-image">
            <img src={product.imgSrc} alt={product.name} />
          </div>
          <div className="product-info">
            <p className="product-category">Products</p>
            <h1 className="product-title">{product.name}</h1>
            <h4 className="product-price">${product.price.toFixed(2)}</h4>
            <div className="size-quantity">
              <select
                className="product-size-selector"
                onChange={handleSizeChange}
                value={selectedSize}
              >
                <option value="" disabled>
                  Select Size
                </option>
                <option value="XXL">XXL</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
              </select>
              <input
                type="number"
                min="1"
                className="product-quantity-input"
                onChange={handleQuantityChange}
                value={quantity}
              />
            </div>

            <button onClick={handleAddToCart} className="product-add-btn">
              Add To Cart
            </button>
            <h3 className="product-details-title">Product Details:</h3>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="related-products-container">
        <div className="related-products-header">
          <h2>Related Products</h2>
          <p>
            <Link to="/products" className="view-more-link">
              View More
            </Link>
          </p>
        </div>
        <div className="related-products-list">
          {relatedProducts.map((product) => (
            <div className="related-product-card" key={product.id}>
              <Link to={`/product-details/${product.id}`}>
                <img src={product.imgSrc} alt={product.name} />
              </Link>
              <h4 className="related-product-title">{product.name}</h4>
              <div className="rating">
                {[...Array(5)].map((star, i) => (
                  <i
                    key={i}
                    className={`fa ${
                      i < Math.floor(product.rating)
                        ? "fa-star"
                        : i < product.rating
                        ? "fa-star-half-o"
                        : "fa-star-o"
                    }`}
                  ></i>
                ))}
              </div>
              <p className="related-product-price">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
