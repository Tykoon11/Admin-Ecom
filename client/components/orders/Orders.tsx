import React, { useState, useEffect } from "react";
import OrdersList from "./OrdersList";
import { store } from "../../redux/authStore";
import Order from "@/types/orders";
import axios from "axios";


const Orders = () => {
  const [orders, setOrders] = useState([] as Order[]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.getState().token}`,
        };
        const response = await axios.get(
          "http://localhost:3000/admin/orders/allOrders",
          { headers }
        );
        setOrders(response.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchOrders();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-20 p-3 rounded-t-lg text-sm bg-[#F09D7A] font-semibold text-[#232323]">
        <h1>S/N</h1>
        <h1>UserId</h1>
        <h1>Status</h1>
      </div>
      <OrdersList orders={orders} />
    </div>
  );
};

export default Orders;
