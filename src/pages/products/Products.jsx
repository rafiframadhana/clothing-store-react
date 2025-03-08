import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "./../../data/products.js";
import "./../../styles/Products.css";

export default function Products() {
  const [sortOption, setSortOption] = useState("Sort By");
  const [products, setProducts] = useState(productsData);
  const [searchInput, setSearchInput] = useState("");

  function handleSortChange(e) {
    const option = e.target.value;
    setSortOption(option);

    let sortedProducts = [...products];

    if (option === "Latest" || option === "Sort By") {
      sortedProducts.sort((a, b) => a.id - b.id);
    } else if (option === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setProducts(sortedProducts);
  }

  function handleSearchChange(e) {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(input)
    );
    setProducts(filteredProducts);
  }

  return (
    <>
      <div className="small-container product-page-container">
        <div className="child child-2">
          <div className="search">
            <label htmlFor="search-bar">Search: </label>
            <input
              id="search-bar"
              type="text"
              placeholder="Product Name..."
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
          <h2>Catalogue</h2>
          <div className="sort-by">
            <select value={sortOption} onChange={handleSortChange}>
              <option>Sort By</option>
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
        <div className="child">
          {products.map((product) => (
            <div className="childprods" key={product.id}>
              <Link to={`/product-details/${product.id}`}>
                <img src={product.imgSrc} alt={product.name} />
              </Link>
              <h4>{product.name}</h4>
              <div className="rating-price">
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
                <p className="price-tag">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="page-btn">
          <span>&#8592;</span>
          <span>
            <a>1</a>
          </span>
          <span>
            <a>2</a>
          </span>
          <span>&#8594;</span>
        </div>
      </div>
    </>
  );
}
