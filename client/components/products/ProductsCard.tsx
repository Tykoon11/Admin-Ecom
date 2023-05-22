import Product from "@/types/products";
import React from "react";

const ProductsCard = (props: { product: Product }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-20 p-3 rounded-b-lg text-sm text-[#696767]">
        <h1>{props.product.id}</h1>
        <h1>{props.product.name}</h1>
        <h1>{props.product.price}</h1>
        <h1>{props.product.category}</h1>
      </div>
    </div>
  );
};

export default ProductsCard;
