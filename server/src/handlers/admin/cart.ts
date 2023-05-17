import { Request, Response } from "express";
import { CartStore } from "../../models/cart";

export class CartHandler {
  async index(req: Request, res: Response) {
    const cart = new CartStore();
    try {
      const result = await cart.index()
      res.send(result);
    } catch (err) {
         res.send(`unable to get cart: ${err}`);
    }
  }
}
