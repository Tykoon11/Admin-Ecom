import { Request, Response } from "express";
import { OrderStore } from "../../models/orders";

export class OrderHandler {
  async index(_req: Request, res: Response) {
    const order = new OrderStore();
    try {
      const result = await order.index();
      res.send(result);
    } catch (err) {
      res.send(`unable to get order: ${err}`);
    }
  }
}
