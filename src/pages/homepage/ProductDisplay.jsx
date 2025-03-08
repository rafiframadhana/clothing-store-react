import React from "react";
import { Link } from "react-router-dom";
import products from "./../../data/products.js";
import exclusiveProds2 from "./../../assets/images/promos/exclusive2.png";
import { useNavigate } from "react-router-dom";

function getRandomProducts(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function ProductDisplay() {
  const hotReleases = getRandomProducts(products, 3);
  const latestReleases = products.slice(0, 3);
  const navigate = useNavigate();

  return (
    <>
      <div className="small-container  product-display">
        <h2>Hot Releases</h2>
        <div className="line1"></div>
        <div className="child">
          {hotReleases.map((product) => (
            <div className="childprods" key={product.id}>
              <Link to={`/product-details/${product.id}`}>
                <img src={product.imgSrc} alt={product.name} />
              </Link>
              <h4>{product.name}</h4>
              <div className="rating-price-home">
                <div className="rating">
                  {[...Array(5)].map((star, i) => (
                    <i
                      key={i}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fas fa-star"
                          : i < product.rating
                          ? "fas fa-star-half-alt"
                          : "far fa-star"
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="price-tag">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Latest Releases</h2>
        <div className="line1"></div>
        <div className="child">
          {latestReleases.map((product) => (
            <div className="childprods" key={product.id}>
              <Link to={`/product-details/${product.id}`}>
                <img src={product.imgSrc} alt={product.name} />
              </Link>
              <h4>{product.name}</h4>
              <div className="rating-price-home">
                <div className="rating">
                  {[...Array(5)].map((star, i) => (
                    <i
                      key={i}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fas fa-star"
                          : i < product.rating
                          ? "fas fa-star-half-alt"
                          : "far fa-star"
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="price-tag">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          
        </div>
        <button onClick={()=> navigate("/products")} className="more-button">
            See More
          </button>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="child">
            <div className="halfchild">
              <img
                src={exclusiveProds2}
                className="offer-img"
                alt="exclusive2"
              />

              <div className="halfchild-text">
                <p>Exclusively available here</p>
                <h1>Chore Jacket Vulka Navy</h1>
                <small>
                  Introducing our Chore Jacket Vulka Navy, a perfect blend of
                  style and comfort. Crafted from high-quality, breathable
                  fabric, this jacket is designed for both fashion and function.
                  The versatile navy color makes it easy to pair with any
                  outfit, while the durable construction ensures long-lasting
                  wear. Whether you're out for a stroll in the city or exploring
                  the great outdoors, the Chore Jacket Vulka Navy is sure to
                  keep you looking stylish and feeling comfortable. Upgrade your
                  wardrobe with this timeless piece. Shop now and add a touch of
                  sophistication to your look!
                  <br />
                </small>
                <button onClick={()=> navigate("/products")} className="btn">
                  Buy Now &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
