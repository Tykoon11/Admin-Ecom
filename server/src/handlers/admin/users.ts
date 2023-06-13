import { Response, Request } from "express";
import { UserStore } from "../../models/users";
import dotenv from "dotenv";

dotenv.config();

export class UserHandler {
  async show(req: Request, res: Response) {
    const user = new UserStore();
    const username = req.params.username as string;
    try {
      const result = await user.show(username);
      res.send(result);
    } catch (err) {
      res.send(`unable to show this user ${err}`);
    }
  }

  async index(req: Request, res: Response) {
    const user = new UserStore();
    try {
      const result = await user.Index();
      res.send(result);
    } catch (err) {
      res.send(`unable to get users ${err}`);
    }
  }
}
