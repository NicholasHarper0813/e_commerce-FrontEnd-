import React, { useContext } from "react";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductsDispaly/ProductDisplay";
import Descripition from "../Components/DescriptionBox/Descripition";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Descripition />
      <RelatedProduct />
    </div>
  );
};

export default Product;
