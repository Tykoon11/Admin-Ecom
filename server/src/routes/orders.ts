import {Router} from "express";
import verifyToken from "../middleware/verifyToken";
import { OrderHandler } from "../handlers/orders";

const orders = Router();
const orderHandler = new OrderHandler();

orders.post("/create", verifyToken, orderHandler.create);
orders.get("/:orderId/showOrder", verifyToken, orderHandler.show);
orders.get("/showAllOrder", verifyToken, orderHandler.showOrder);
orders.delete("/:orderId/deleteOrder", verifyToken, orderHandler.delete);


export default orders;
