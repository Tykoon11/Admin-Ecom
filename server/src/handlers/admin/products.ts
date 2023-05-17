import { Request, Response } from "express";
import { Product, ProductStore } from "../../models/products";

export class ProductHandler {
  async create(req: Request, res: Response) {
    const product = new ProductStore();
    
    const name = req.body.name as string; 
    const price = req.body.price as number;
    const category = req.body.name as string;
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
}
