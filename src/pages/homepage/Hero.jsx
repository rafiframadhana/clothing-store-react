import React from "react";
import exclusiveProds from "./../../assets/images/promos/exclusive.png";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <div className="headerimg">
        <h1>Get ready to step up your style !</h1>
        <h3>
          Experience the latest in men's fashion with our new collection,
          starting at just $9.99!*
        </h3>
        <button onClick={()=> navigate("/products")} className="btn">
          Explore Now &#8594;
        </button>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="child">
            <div className="halfchild">
              <img src={exclusiveProds} className="offer-img" alt="exclusive" />
              <div className="halfchild-text">
                <p>Exclusively available here</p>
                <h1>Hoodie Kagoshima Dark Oak</h1>
                <small>
                  Introducing the Hoodie Kagoshima Dark Oak, a perfect blend of
                  style and comfort. Crafted with premium quality fabric, this
                  hoodie offers a luxurious feel and a snug fit. The Dark Oak
                  color adds a touch of sophistication, making it a versatile
                  addition to your wardrobe. Whether you're lounging at home or
                  heading out for a casual outing, the Hoodie Kagoshima Dark Oak
                  is sure to keep you looking and feeling great. Order yours
                  today and elevate your everyday style!
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
