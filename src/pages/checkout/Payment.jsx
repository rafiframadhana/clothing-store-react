import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-mask-plugin";
import paymentLogo from "./../../assets/images/logos/payment.png";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  useEffect(() => {
    $("input[name='card-number']").mask("0000 0000 0000 0000");
    $("input[name='expiry-date']").mask("00/00", { placeholder: "MM/YY" });
    $("input[name='cvv']").mask("000", { placeholder: "000" });
  }, []);

  return (
    <div className="wrapper">
      <div className="payment">
        <h3 className="payment-mode">Payment Mode Accepted:</h3>
        <div className="payment-logo">
          <p>
            <img src={paymentLogo} alt="comp" width="300px" />
          </p>
        </div>
        <form className="form payment-form" onSubmit={() => navigate("/not found")}>
          <div className="card space icon-relative">
            <label className="label">Card holder:</label>
            <input
              type="text"
              className="input"
              placeholder="Card holder's Name"
              required
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="card space icon-relative">
            <label className="label">Card number:</label>
            <input
              type="text"
              name="card-number"
              className="input"
              placeholder="Card Number"
              required
            />
            <i className="far fa-credit-card"></i>
          </div>
          <div className="card-grp space">
            <div className="card-item icon-relative">
              <label className="label">Expiry date:</label>
              <input
                type="text"
                name="expiry-date"
                className="input"
                placeholder="MM/YY"
                required
              />
              <i className="far fa-calendar-alt"></i>
            </div>
            <div className="card-item icon-relative">
              <label className="label">CVC/CVV:</label>
              <input
                type="text"
                name="cvv"
                className="input"
                placeholder="000"
                required
              />
              <i className="fas fa-lock"></i>
            </div>
          </div>
          <button type="submit" className="payment-btn btn">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
