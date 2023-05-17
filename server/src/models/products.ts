import client from "../database";

export type Product = {
  id?: number;
  name: string;
  price: number;
  category: string;
};

export class ProductStore {
  async create(p: Product): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [p.name, p.price, p.category]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot create this product`);
    }
  }

  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show all products `);
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products WHERE id = ($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot show this product`);
    }
  }

  async showName(name: string): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products WHERE name = ($1)";
      const result = await conn.query(sql, [name]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot show this product`);
    }
  }

  async update(p: Product, id: number): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql =
        "UPDATE products SET name =($1), price=($2), category=($3) WHERE id = ($4) RETURNING *";
      const result = await conn.query(sql, [p.name, p.price, p.category, id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot update this product`);
    }
  }

  async delete(id: number): Promise<Product> {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM products WHERE id = ($1) RETURNING *";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot delete this product`);
    }
  }
}
