import { UserStore } from "../models/users";
import express, { NextFunction } from "express";

const adminAuth = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const user = new UserStore();
    const role = "admin" as string;
    //@ts-ignore
    const result = await user.role(req.user.role);
    //@ts-ignore
    if (role === result.role) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log(`Unauthorized user`);
    res.send(`Unauthorized user: ${err}`);
  }
};

export default adminAuth;
