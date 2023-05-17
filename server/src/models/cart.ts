import client from "../database";

export type Cart = {
  id?: number;
  user_id?: number;
  product_id: number;
  quantity: number;
};

export class CartStore {
  async create(c: Cart): Promise<Cart> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [
        c.user_id,
        c.product_id,
        c.quantity,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot add to cart`);
    }
  }

  async index(): Promise<Cart[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM cart";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show all carts`);
    }
  }

  async show(user_id: number, product_id: number): Promise<Cart> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM cart WHERE user_id = $1 AND product_id = $2";
      const result = await conn.query(sql, [user_id, product_id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot show this cart`);
    }
  }

  async showCart(user_id: number): Promise<Cart[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM cart WHERE user_id = $1";
      const result = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show this cart`);
    }
  }

  async update(c: Cart, product_id: number): Promise<Cart> {
    try {
      const conn = await client.connect();
      const sql =
        "UPDATE cart SET quantity = $1 WHERE product_id = $2 RETURNING *";
      const result = await conn.query(sql, [c.quantity, product_id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot update cart`);
    }
  }

  async delete(user_id: number, product_id: number): Promise<Cart> {
    try {
      const conn = await client.connect();
      const sql =
        "DELETE from cart where user_id = $1 and product_id = $2 RETURNING *";
      const result = await conn.query(sql, [user_id, product_id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot delete product from cart`);
    }
  }

  async clearCart(user_id:number): Promise<Cart>{
     try {
       const conn = await client.connect();
       const sql =
         "DELETE from cart where user_id = $1 RETURNING *";
       const result = await conn.query(sql, [user_id]);
       conn.release();
       return result.rows[0];
     } catch (err) {
       throw new Error(`cannot clear cart`);
     }
  }
}
