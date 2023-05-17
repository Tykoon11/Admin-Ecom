import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
const pepper = BCRYPT_PASSWORD;
const saltRounds = SALT_ROUNDS;

export type User = {
  id?: number;
  firstname?: string;
  lastname?: string;
  username: string;
  password: string;
  role?: string;
};

export class UserStore {
  async create(u: User): Promise<User> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO users (firstname, lastname, username, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const hash = bcrypt.hashSync(
        u.password + pepper,
        parseInt(saltRounds as string)
      );
      const result = await conn.query(sql, [
        u.firstname,
        u.lastname,
        u.username,
        hash,
        u.role,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot create this user`);
    }
  }

  async Index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot show all users ${err}`);
    }
  }

  async show(username: string): Promise<User> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users WHERE username = $1";
      const result = await conn.query(sql, [username]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error("cannot show this user");
    }
  }

  async delete(id: number): Promise<User> {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM users WHERE id = ($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error("cannot delete this user");
    }
  }

  async update(u: User, id: number): Promise<User> {
    try {
      const conn = await client.connect();
      const sql =
        "UPDATE users SET username = ($1), password = ($2) WHERE id = ($3) RETURNING *";
      const result = await conn.query(sql, [u.username, u.password, id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error("cannot update this user");
    }
  }

  async role(role: string): Promise<User> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users WHERE role = $1";
      const result = await conn.query(sql, [role]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error("cannot determine role");
    }
  }
}
