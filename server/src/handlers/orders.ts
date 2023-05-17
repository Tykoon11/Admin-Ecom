import { Request, Response } from "express";
import { OrderStore, Order } from "../models/orders";

export class OrderHandler {
  async create(req: Request, res: Response) {
    const order = new OrderStore();
    //@ts-ignore
    const userId = req.user.id as number;

    const orders: Order = {
      user_id: userId,
      status: "pending",
    };
    try {
      const result = await order.create(orders);
      console.log(result);
      res.send(result);
    } catch (err) {
      res.send(`unable to create this order`);
    }
  }

  async show(req: Request, res: Response) {
    const order = new OrderStore();
    //@ts-ignore
    const userId = req.user.id as number;
    const orderId = req.params.orderId as unknown as number;
    try {
      const result = await order.show(userId, orderId);
      res.send(result);
    } catch (err) {
      res.send(`unable to get order: ${err}`);
    }
  }

  async showOrder(req: Request, res: Response) {
    const order = new OrderStore();
    try {
      // @ts-ignore
      const userId = req.user.id as number;
      const result = await order.showOrder(userId);
      res.send(result);
    } catch (err) {
      res.send(`unable to getAll User orders: ${err}`);
    }
  }

  async delete(req: Request, res: Response) {
    const order = new OrderStore();
    //@ts-ignore
    const userId = req.user.id as number;
    const orderId = req.params.orderId as unknown as number;
    try {
      const result = await order.delete(userId, orderId);
      res.send(result);
    } catch (err) {
      res.send(`unable to delete order: ${err}`);
    }
  }
}
