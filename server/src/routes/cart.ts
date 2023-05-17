import { Router } from "express";
import verifyToken from "../middleware/verifyToken";
import { CartHandler } from "../handlers/cart";
import checkDuplicateCartProduct from "../middleware/checkDuplicateCartProduct";

const cart = Router();
const cartHandler = new CartHandler();

cart.post(
  "/create",
  verifyToken,
  checkDuplicateCartProduct,
  cartHandler.create
);
cart.get("/:productId/show", verifyToken, cartHandler.show);
cart.get("/showCart", verifyToken, cartHandler.showCart);
cart.put("/:productId/update", verifyToken, cartHandler.updateCart);
cart.delete("/:productId/delete", verifyToken, cartHandler.delete);
cart.delete("/clearCart", verifyToken, cartHandler.clearCart);

export default cart;
