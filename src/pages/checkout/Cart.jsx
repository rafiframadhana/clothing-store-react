import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  clearCart,
  setCartItems,
} from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import "./../../styles/Cart.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      dispatch(setCartItems(savedCartItems));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
    } else {
      alert("Redirected to payment section");
      dispatch(clearCart());
      navigate("/payment");
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-left">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id + item.size} className="cart-item">
                  <Link to={`/product-details/${item.id}`}>
                    <img src={item.imgSrc} alt={item.name} />
                  </Link>
                  <div>
                    <h4>{item.name}</h4>
                    <p>Size: {item.size}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button className="btn" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
            </div>
          )}
        </div>
        <div className="cart-right">
          <form onSubmit={handlePlaceOrder}>
            <h3>Checkout</h3>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <div className="shipping-method">
              <h4>Shipping Method</h4>
              <select required>
                <option value="" disabled selected>
                  Select shipping method...
                </option>
                <option value="standard">Standard (5-7 days)</option>
                <option value="express">Express (2-3 days)</option>
                <option value="overnight">Overnight (1 day)</option>
              </select>
            </div>

            <div className="payment-method">
              <h4>Payment Method</h4>
              <select required>
                <option value="" disabled selected>
                  Select payment method...
                </option>
                <option value="visa">Visa</option>
                <option value="master-card">MasterCard</option>
                <option value="american-express">American Express</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>
            <button className="btn">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}
