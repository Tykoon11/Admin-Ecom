import React, { useState } from "react";
import ProductsList from "./ProductsList";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Iphone",
      price: 400,
      category: "Electronics",
    },
    {
      id: 2,
      name: "AirPod",
      price: 150,
      category: "Electronics",
    },
  ]);
  return (
    <div>
      <div className="grid grid-cols-4 gap-20 p-3 rounded-t-lg text-sm bg-[#F09D7A] font-semibold text-[#232323]">
        <h1>S/N</h1>
        <h1>Name</h1>
        <h1>Price</h1>
        <h1>Category</h1>
      </div>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
