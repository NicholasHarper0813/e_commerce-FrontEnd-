import React from "react";
import "./RelatedProducted.css";
import data_product from "../Asset/new_collections";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="relateProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
