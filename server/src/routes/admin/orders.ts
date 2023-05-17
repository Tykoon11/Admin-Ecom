import { Router } from "express";
import verifyToken from "../../middleware/verifyToken";
import adminAuth from "../../middleware/admin";
import { OrderHandler } from "../../handlers/admin/orders";

const orders = Router();
const orderHandler = new OrderHandler();

orders.get("/allOrders", verifyToken, adminAuth, orderHandler.index);

export default orders;
