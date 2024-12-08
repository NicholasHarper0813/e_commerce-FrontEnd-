import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Asset/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME
      <img src={arrow_icon} />
      SHOP
      <img src={arrow_icon} /> {product.category}
      <img src={arrow_icon} />
      {product.name}
    </div>
  );
};

export default Breadcrums;
