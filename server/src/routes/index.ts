import { Router } from "express";
import users from ".././routes/users";
import products from ".././routes/products";
import orders from ".././routes/orders";
import adminRoute from "./admin";
import cart from "./cart";

const route = Router();

route.use("/admin", adminRoute);

route.use("/carts", cart);
route.use("/users", users);
route.use("/products", products);
route.use("/orders", orders);

export default route;
