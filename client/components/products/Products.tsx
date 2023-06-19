import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";
import { store } from "../../redux/authStore";
import Product from "@/types/products";

const Products = () => {
  const [products, setProducts] = useState([] as Product[]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.getState().token}`,
        };
        const response = await axios.get(
          "http://localhost:3000/admin/products/allProducts",
          { headers }
        );
        setProducts(response.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchProducts();
  }, []);

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
