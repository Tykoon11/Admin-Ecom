import { UserStore } from "../models/users";
import { Request, Response, NextFunction } from "express";

const checkDuplicateInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = new UserStore();
    const username = req.body.username as string;
    const result = await user.show(username);

    if (result === undefined) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.send(`Username already exists: ${err}`);
  }
};

export default checkDuplicateInfo;
