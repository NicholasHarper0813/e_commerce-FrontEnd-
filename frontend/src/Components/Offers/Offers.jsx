import React from "react";
import "./Offers.css";
import exclucive_image from "../Asset/offer_2.png";
import offer_1 from "../Asset/offer_1.png";
import { Link } from "react-router-dom";
const Offers = () => {
  return (
    <div className="offers">
      <div
        style={{ backgroundImage: `url(${offer_1})` }}
        className="offers-left"
      >
        <div className="text">
          <p>Mens</p>
          <h2>30-50% OFF</h2>
          <Link to="/mens">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${exclucive_image})` }}
        className="offers-right"
      >
        <div className="text">
          <p>Womens</p>
          <h2>30-50% OFF</h2>
          <Link to="/womens">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
