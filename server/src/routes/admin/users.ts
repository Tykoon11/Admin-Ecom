import { Router } from "express";
import verifyToken from "../../middleware/verifyToken";
import adminAuth from "../../middleware/admin";
import { UserHandler } from "../../handlers/admin/users";

const users = Router();
const userHandler = new UserHandler();

users.get("/:username/show", verifyToken, adminAuth, userHandler.show);

export default users;
