import { Router } from "express";
import users from "./users";
import products from "./products";
import orders from "./orders";
import cart from "./cart";

const adminRoute = Router();

adminRoute.use("/cart", cart);
adminRoute.use("/users", users);
adminRoute.use("/products", products);
adminRoute.use("/orders", orders);

export default adminRoute;
