import { ProductHandler } from "../../handlers/admin/products";
import { Router } from "express";
import verifyToken from "../../middleware/verifyToken";
import adminAuth from "../../middleware/admin";
import checkDuplicateProduct from "../../middleware/checkDuplicateProduct";

const products = Router();

const productHandler = new ProductHandler();

products.post(
  "/create",
  verifyToken,
  adminAuth,
  checkDuplicateProduct,
  productHandler.create
);
products.get("/allProducts", verifyToken, adminAuth, productHandler.index);
products.get("/:id/delete", verifyToken, adminAuth, productHandler.delete);

export default products;
