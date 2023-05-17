import { Cart, CartStore } from "../models/cart";
import { Request, Response } from "express";

export class CartHandler {
  async create(req: Request, res: Response) {
    const cart = new CartStore();
    //@ts-ignore
    const userId = req.user.id as number;
    const productId = req.body.productId as number;
    const quantity = req.body.quantity as number;

    const carts: Cart = {
      user_id: userId,
      product_id: productId,
      quantity: quantity,
    };
    try {
      const result = await cart.create(carts);
      res.send(result);
    } catch (err) {
      res.send(`cannot create/add to cart: ${err}`);
    }
  }

  async show(req: Request, res: Response) {
    const cart = new CartStore();
    //@ts-ignore
    const userId = req.user.id as number;
    const productId = req.params.productId as unknown as number;

    try {
      const result = await cart.show(userId, productId);
      res.send(result);
    } catch (err) {
      res.send(`cannot show item in cart: ${err}`);
    }
  }

  async showCart(req: Request, res: Response) {
    const cart = new CartStore();
    //@ts-ignore
    const userId = req.user.id as number;

    try {
      const result = await cart.showCart(userId);
      res.send(result);
    } catch (err) {
      res.send(`cannot show Items in cart: ${err}`);
    }
  }

  async updateCart(req: Request, res: Response) {
    const cart = new CartStore();
    const productId = req.params.productId as unknown as number;
    const quantity = req.body.quantity as number;

    const carts = {
      product_id: productId,
      quantity: quantity,
    };
    try {
      const result = await cart.update(carts, productId);
      res.send(result);
    } catch (err) {
      res.send(`cannot update cart: ${err}`);
    }
  }

  async delete(req: Request, res: Response) {
    const cart = new CartStore();
    //@ts-ignore
    const userId = req.user.id as number;
    const productId = req.params.productId as unknown as number;

    try {
      const result = await cart.delete(userId, productId);
      res.send(result);
    } catch (err) {
      res.send(`cannot delete item from cart: ${err}`);
    }
  }

  async clearCart(req: Request, res: Response) {
    const cart = new CartStore();
    //@ts-ignore
    const userId = req.user.id as number;

    try {
      const result = await cart.clearCart(userId);
      res.send(result);
    } catch (err) {
      res.send(`cannot delete item from cart: ${err}`);
    }
  }
}
