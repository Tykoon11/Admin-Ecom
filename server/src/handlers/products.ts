import { Request, Response } from "express";
import { ProductStore } from "../models/products";

export class ProductHandler {
  async index(req: Request, res: Response) {
    const product = new ProductStore();
    try {
      const result = await product.index();
      res.send(result);
    } catch (err) {
      res.send(`unable to get index ${err}`);
    }
  }

  async show(req: Request, res: Response) {
    const product = new ProductStore();
    const id = req.params.id as unknown as number;
    try {
      const result = await product.show(id);
      res.send(result);
    } catch (err) {
      res.send(`unable to show this product ${err}`);
    }
  }
}
