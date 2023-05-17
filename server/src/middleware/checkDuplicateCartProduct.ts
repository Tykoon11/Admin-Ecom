import { CartStore } from "../models/cart";
import { Request, Response, NextFunction } from "express";

const checkDuplicateCartProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cart = new CartStore();
    //@ts-ignore
    const userId = req.user.id as number;
    const productId = req.body.productId as number;
    const result = await cart.show(userId, productId);

    if (result === undefined) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.send(`Product is already in your cart: ${err}`);
  }
};

export default checkDuplicateCartProduct;
