import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";

const Shop = () => {
  return (
    <div>
      <Hero />
      <NewCollection />
      <Offers />
      <Popular />
    </div>
  );
};

export default Shop;
