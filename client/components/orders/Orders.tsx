import React, { useState } from "react";
import OrdersList from "./OrdersList";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      user_id: 2,
      status: "pending",
    },
    {
      id: 2,
      user_id: 1,
      status: "pending",
    },
  ]);
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
