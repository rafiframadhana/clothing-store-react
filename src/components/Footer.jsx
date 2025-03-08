import React from "react";
import brandLogo from "./../assets/images/header/complogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="container">
          <div className="child">
            <div className="footerChild1">
              <img src={brandLogo} alt="complogo" />
              <h4>
                Mail us at:{" "}
                <a href="mailto:braysurfingstore@gmail.com">
                  braysurfingstore@gmail.com
                </a>
              </h4>
            </div>
            <div className="footerChild-text">
              <div className="footerChild2">
                <h3>Help</h3>
                <ul>
                  <li>
                    <Link to="*">Shipping</Link>
                  </li>
                  <li>
                    <Link to="*">Return Policy</Link>
                  </li>
                  <li>
                    <Link to="*">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="footerChild2">
                <h3>Our Socials</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/bray.surfing/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <Link to="*">Facebook</Link>
                  </li>
                  <li>
                    <Link to="*">Twitter</Link>
                  </li>
                  <li>
                    <Link to="*">WhatsApp</Link>
                  </li>
                </ul>
              </div>
              <div className="footerChild2">
                <h3>Store Address</h3>
                <ul>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/xQMKPfUGsuNvrKFN9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lamteh, Ulee Kareng,
                      <br />
                      Banda Aceh City,
                      <br />
                      Indonesia.
                      <br />
                      23117
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="belowfooter">
            &copy; Bray Surfing Associates, 2024 <br />
            Rafif Ramadhana, All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
