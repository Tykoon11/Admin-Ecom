import { Request, Response, NextFunction } from "express";
import { ProductStore } from "../models/products";

const checkDuplicateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = new ProductStore();
    const name = req.body.name as string;
    const result = await product.showName(name);

    if (result === undefined) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.send(`Product already exists: ${err}`);
  }
};

export default checkDuplicateProduct;
