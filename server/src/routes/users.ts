import { Router } from "express";
import verifyToken from "../middleware/verifyToken";
import checkDuplicateInfo from "../middleware/checkDuplicateInfo";

import { UserHandler } from "../handlers/users";

const users = Router();
const userHandler = new UserHandler();

users.post("/signup", checkDuplicateInfo, userHandler.create);
users.post("/login", userHandler.login);
users.get("/showUser", verifyToken, userHandler.show);
users.put("/updateUser", verifyToken, userHandler.update);
users.put("/:userId/updateUser", verifyToken, userHandler.updateUser);

export default users;
