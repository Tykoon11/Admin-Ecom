import client from "../database";
import { CartStore } from "./cart";

export type Order = {
  id?: number;
  user_id: number;
  status: string;
};

export class OrderStore {
  async create(o: Order): Promise<Order> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *";
      const result = await conn.query(sql, [o.user_id, o.status]);
      conn.release();
      const order = result.rows[0];
      const cartStore = new CartStore();
      const carts = await cartStore.showCart(o.user_id);
      carts.forEach(async (item) => {
        await this.addProduct(item.quantity, order.id, item.product_id);
      });
      await cartStore.clearCart(o.user_id);
      return order;
    } catch (err) {
      throw new Error(`cannot create order`);
    }
  }

  async index(): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show all orders`);
    }
  }

  async show(user_id: number, id: number): Promise<Order> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM orders WHERE user_id = $1 AND id = $2";
      const result = await conn.query(sql, [user_id, id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot show your order ${err}`);
    }
  }

  async showOrder(user_id: number): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM orders WHERE user_id = $1";
      const result = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show your order ${err}`);
    }
  }

  async update(o: Order, user_id: number): Promise<Order> {
    try {
      const conn = await client.connect();
      const sql = "UPDATE orders SET status = ($1) WHERE id =($2) RETURNING *";
      const result = await conn.query(sql, [o.status, user_id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot update order`);
    }
  }

  async delete(user_id: number, id: number): Promise<Order> {
    try {
      const conn = await client.connect();
      const sql =
        "DELETE FROM orders WHERE user_id = $1 and id = $2 RETURNING *";
      const result = await conn.query(sql, [user_id, id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot delete order`);
    }
  }

  async addProduct(
    quantity: number,
    order_id: number,
    product_id: number
  ): Promise<{ quantity: number; order_id: number; product_id: number }> {
    // check if order is closed
    try {
      const conn = await client.connect();
      const orderSql = "SELECT * FROM orders WHERE id = $1";
      const result = await conn.query(orderSql, [order_id]);
      const order = result.rows[0];
      if (order.status !== "pending") {
        throw new Error(
          `Could not add product ${product_id} to order ${order_id} because order status is ${order.status}`
        );
      }
      conn.release();
    } catch (err) {
      throw new Error(`this order is closed ${err}`);
    }

    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO orders_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [quantity, order_id, product_id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot add this item to your order ${err}`);
    }
  }
}
