import express from "express";
import verifyToken from "../middleware/verifyToken";
import { ProductHandler } from "../handlers/products";

const products = express.Router();

const productHandler = new ProductHandler();

products.get("/allProducts", verifyToken, productHandler.index);
products.get("/:id", verifyToken, productHandler.show);

export default products;
