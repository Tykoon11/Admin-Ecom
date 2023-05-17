import { Router } from "express";
import adminAuth from "../../middleware/admin";
import verifyToken from "../../middleware/verifyToken";
import { CartHandler } from "../../handlers/admin/cart";

const cart = Router();
const cartHandler = new CartHandler();

cart.get("/allCarts", verifyToken, adminAuth, cartHandler.index);

export default cart;
