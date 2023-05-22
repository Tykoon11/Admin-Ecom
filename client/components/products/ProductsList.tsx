import Product from "@/types/products";
import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = (props: { products: Product[] }) => {
  return (
    <div>
      {props.products.map((product, key) => (
        <ProductsCard product={product} key={key} />
      ))}
    </div>
  );
};

export default ProductsList;
