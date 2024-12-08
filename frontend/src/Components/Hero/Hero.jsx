import React from "react";
import "./Hero.css";
import hero from "../Asset/home-2.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="" />
    </div>
  );
};

export default Hero;
