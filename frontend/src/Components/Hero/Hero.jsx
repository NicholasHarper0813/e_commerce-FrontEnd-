import React from "react";
import hero from "../Asset/home-2.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="" />
    </div>
  );
};

export default Hero;
