import Order from "@/types/orders";
import React from "react";
import OrdersCard from "./OrdersCard";

const OrdersList = (props: { orders: Order[] }) => {
  return (
    <div>
      {props.orders.map((order, key) => (
        <OrdersCard order={order} key={key} />
      ))}
    </div>
  );
};

export default OrdersList;
