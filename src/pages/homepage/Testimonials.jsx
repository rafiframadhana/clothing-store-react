import React from "react";
import testimonialsData from './../../data/testimonials.js';

export default function Testimonials() {
  return (
    <>
      <div className="testimonial">
        <div className="small-container">
          <h3>
            <i className="fa fa-quote-left"></i> &emsp;See what our clients say
            about us -
          </h3>
          <div className="child">
            {testimonialsData.map((testimonial, index) => (
              <div className="testchild" key={index}>
                <p>{testimonial.text}</p>
                <div className="rating">
                  {[...Array(5)].map((star, i) => (
                    <i
                      key={i}
                      className={`fa ${
                        i < Math.floor(testimonial.rating)
                          ? "fa-star"
                          : i < testimonial.rating
                          ? "fa-star-half-o"
                          : "fa-star-o"
                      }`}
                    ></i>
                  ))}
                </div>
                <img src={testimonial.imgSrc} alt={testimonial.name.toLowerCase()} />
                <h3>{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}