import Order from '@/types/orders'
import React from 'react'

const OrdersCard = (props: {order: Order}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-20 p-3 rounded-b-lg text-sm text-[#696767]">
        <h1>{props.order.id}</h1>
        <h1>{props.order.user_id}</h1>
        <h1>{props.order.status}</h1>
      </div>
    </div>
  );
}

export default OrdersCard
