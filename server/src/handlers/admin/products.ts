import { Request, Response } from "express";
import { Product, ProductStore } from "../../models/products";

export class ProductHandler {
  async create(req: Request, res: Response) {
    const product = new ProductStore();

    const name = req.body.name as string;
    const price = req.body.price as number;
    const category = req.body.category as string;
    const create: Product = {
      name: name,
      price: price,
      category: category,
    };

    try {
      const result = await product.create(create);
      res.send(result);
    } catch (err) {
      res.send(`unable to create product ${err}`);
    }
  }

  async index(_req: Request, res: Response) {
    const product = new ProductStore();
    try {
      const result = await product.index();
      res.send(result);
    } catch (err) {
      res.send(`unable to create product ${err}`);
    }
  }

  async delete(req: Request, res: Response) {
    const product = new ProductStore();
    const id = req.params.id as unknown as number

    try {
      const result = await product.delete(id);
      res.send(result);
    } catch (err) {
      res.send(`unable to delete product ${err}`);
    }
  }
}
